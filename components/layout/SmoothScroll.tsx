'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'projects', label: 'Projects', icon: '💻' },
  { id: 'contact', label: 'Contact', icon: '✉️' }
];

export const SmoothScroll = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setIsExpanded(false);

    const sectionIndex = SECTIONS.findIndex(s => s.id === sectionId);
    const main = document.querySelector('main');
    if (main) {
      main.style.transform = `translateX(-${sectionIndex * 100}vw)`;
      setActiveSection(sectionId);
      
      // Add active class to current section
      SECTIONS.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) {
          if (section.id === sectionId) {
            el.classList.add('active');
          } else {
            el.classList.remove('active');
          }
        }
      });

      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
      const nextIndex = Math.max(0, Math.min(SECTIONS.length - 1, currentIndex + direction));
      
      if (nextIndex !== currentIndex) {
        scrollToSection(SECTIONS[nextIndex].id);
      }
    };

    const main = document.querySelector('main');
    if (main) {
      main.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (main) {
        main.removeEventListener('wheel', handleWheel);
      }
    };
  }, [activeSection, isScrolling]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const direction = e.key === 'ArrowRight' ? 1 : -1;
        const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
        const nextIndex = Math.max(0, Math.min(SECTIONS.length - 1, currentIndex + direction));
        
        if (nextIndex !== currentIndex) {
          scrollToSection(SECTIONS[nextIndex].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, isScrolling]);

  // Set initial section
  useEffect(() => {
    scrollToSection('hero');
  }, []);

  const activeSection_ = SECTIONS.find(s => s.id === activeSection);

  return (
    <>
      {/* Dynamic Island */}
      <div 
        className={`
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          transition-all duration-500 ease-out
          ${isExpanded ? 'w-72' : 'w-44'}
        `}
      >
        <div 
          className={`
            relative bg-black/80 shadow-lg
            transition-all duration-500 ease-out
            backdrop-blur-xl
            before:absolute before:inset-0 before:rounded-[inherit]
            before:bg-gradient-to-b before:from-white/15 before:to-transparent
            before:pointer-events-none
            after:absolute after:inset-[1px] after:rounded-[inherit]
            after:bg-black/90 after:pointer-events-none
            ${isExpanded 
              ? 'h-auto rounded-2xl shadow-[0_8px_32px_rgba(255,255,255,0.1)]' 
              : 'h-10 rounded-full shadow-[0_4px_16px_rgba(255,255,255,0.1)]'
            }
            ${isExpanded ? 'dynamic-island-expanded' : 'dynamic-island-collapsed'}
            cursor-pointer select-none
          `}
          onClick={() => !isScrolling && setIsExpanded(!isExpanded)}
        >
          <div className={`
            relative z-10 flex items-center justify-center w-full h-10 gap-2
            text-sm font-medium text-gray-100 px-4
            transition-all duration-300
          `}>
            <span className="text-lg filter drop-shadow-lg">{activeSection_?.icon}</span>
            <span className="font-semibold tracking-wide">{activeSection_?.label}</span>
          </div>

          <div className={`
            relative z-10 overflow-hidden transition-all duration-500
            ${isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
          `}>
            <div className="p-2 space-y-1">
              {SECTIONS.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection(id);
                  }}
                  className={`
                    w-full px-4 py-3 text-sm rounded-xl
                    transition-all duration-300 flex items-center gap-3
                    ${id === activeSection 
                      ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                    }
                  `}
                >
                  <span className="text-lg filter drop-shadow-lg">{icon}</span>
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-black/50 backdrop-blur-sm z-50">
        <div 
          className="h-full progress-gradient transition-all duration-500 ease-out"
          style={{ 
            width: `${((SECTIONS.findIndex(s => s.id === activeSection) + 1) / SECTIONS.length) * 100}%` 
          }}
        />
      </div>
    </>
  );
}; 