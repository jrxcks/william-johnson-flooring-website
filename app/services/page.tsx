import type { Metadata } from 'next'
import Services from '../components/Services'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'

export const metadata: Metadata = {
  title: 'Professional Flooring Services | William Johnson Flooring',
  description: 'Expert flooring installation services across the UK. Specializing in LVT, hardwood, laminate, carpet & commercial flooring. 25+ years experience. Free quotes.',
  keywords: ['flooring services', 'flooring installation', 'UK flooring company', 'professional flooring', 'commercial flooring', 'residential flooring'],
  openGraph: {
    title: 'Professional Flooring Services | William Johnson Flooring',
    description: 'Expert flooring installation services across the UK. Specializing in LVT, hardwood, laminate, carpet & commercial flooring.',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <FAQ />
      <Contact />
    </main>
  )
} 