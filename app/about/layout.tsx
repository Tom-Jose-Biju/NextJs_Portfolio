import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about my background, skills, and experience'
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 