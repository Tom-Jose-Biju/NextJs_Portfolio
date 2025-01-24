'use client';

import { useEffect, useState, useCallback } from 'react';

interface ScrollProgressProps {
  totalSections: number;
  sectionNames?: string[];
}

export const ScrollProgress = ({ 
  totalSections,
  sectionNames = ['Home', 'About', 'Education', 'Projects', 'Contact']
}: ScrollProgressProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (isScrolling) return;

    setIsScrolling(true);
    const container = document.querySelector('.horizontal-scroll-container');
    if (!container) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = Math.max(0, Math.min(totalSections - 1, activeSection + direction));
    
    const sectionWidth = container.scrollWidth / totalSections;
    container.scrollTo({
      left: sectionWidth * nextSection,
      behavior: 'smooth'
    });

    setActiveSection(nextSection);
    setTimeout(() => setIsScrolling(false), 1000);
  }, [activeSection, isScrolling, totalSections]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isScrolling) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setIsScrolling(true);
      
      const direction = e.key === 'ArrowRight' ? 1 : -1;
      const nextSection = Math.max(0, Math.min(totalSections - 1, activeSection + direction));
      
      const container = document.querySelector('.horizontal-scroll-container');
      if (container) {
        const sectionWidth = container.scrollWidth / totalSections;
        container.scrollTo({
          left: sectionWidth * nextSection,
          behavior: 'smooth'
        });
      }
      
      setActiveSection(nextSection);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, [activeSection, isScrolling, totalSections]);

  useEffect(() => {
    const container = document.querySelector('.horizontal-scroll-container');
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  const navigateToSection = (index: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    
    const container = document.querySelector('.horizontal-scroll-container');
    if (container) {
      const sectionWidth = container.scrollWidth / totalSections;
      container.scrollTo({
        left: sectionWidth * index,
        behavior: 'smooth'
      });
      setActiveSection(index);
    }
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex items-center gap-4">
      <div className="flex flex-col items-end gap-4">
        {sectionNames.map((name, index) => (
          <button
            key={index}
            onClick={() => navigateToSection(index)}
            className={`group flex items-center gap-2 transition-all duration-300 ${
              index === activeSection ? 'translate-x-0' : 'translate-x-8 opacity-50'
            }`}
          >
            <span className={`text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 ${
              index === activeSection ? 'text-primary' : 'text-gray-400'
            }`}>
              {name}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeSection
                ? 'bg-primary scale-150'
                : 'bg-gray-400 group-hover:bg-gray-300'
            }`} />
          </button>
        ))}
      </div>
      <div className="h-48 w-px bg-gray-700 relative">
        <div
          className="absolute top-0 left-0 w-full bg-primary transition-all duration-300"
          style={{
            height: `${(activeSection / (totalSections - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}; 