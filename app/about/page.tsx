import dynamic from 'next/dynamic'

const AboutPageSection = dynamic(() => import('@/components/sections/AboutPage'), {
  ssr: true
})

export default function Page() {
  return <AboutPageSection />
}