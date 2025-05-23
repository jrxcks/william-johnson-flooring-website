import type { Metadata } from 'next'
import StyledComponentsRegistry from './lib/registry'
import { GlobalStyles } from './styles/GlobalStyles'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'William Johnson Flooring | Professional Flooring Installation',
    template: '%s | William Johnson Flooring'
  },
  description: 'Expert flooring installation across the Midlands & UK. LVT, hardwood, carpet & commercial flooring specialists. 25+ years experience. Free quotes available.',
  keywords: ['flooring installation', 'LVT flooring', 'hardwood flooring', 'carpet installation', 'commercial flooring', 'Midlands flooring', 'UK flooring'],
  authors: [{ name: 'William Johnson Flooring' }],
  creator: 'William Johnson Flooring',
  publisher: 'William Johnson Flooring',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://williamjohnsonflooring.com',
    title: 'William Johnson Flooring | Professional Flooring Installation',
    description: 'Expert flooring installation across the Midlands & UK. LVT, hardwood, carpet & commercial flooring specialists. 25+ years experience.',
    siteName: 'William Johnson Flooring',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Johnson Flooring | Professional Flooring Installation',
    description: 'Expert flooring installation across the Midlands & UK. LVT, hardwood, carpet & commercial flooring specialists.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Organization structured data for SEO
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "William Johnson Flooring",
    "url": "https://williamjohnsonflooring.com",
    "logo": "https://williamjohnsonflooring.com/logo.png",
    "description": "Expert flooring installation across the Midlands & UK. LVT, hardwood, carpet & commercial flooring specialists.",
    "telephone": "+44 7944 425627",
    "email": "contact@williamjohnsonflooring.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "Midlands"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "52.4862",
        "longitude": "-1.8904"
      },
      "geoRadius": "100000"
    },
    "services": [
      "LVT Installation",
      "Real Wood Flooring",
      "Laminate Flooring", 
      "Carpet Installation",
      "Commercial Flooring"
    ],
    "foundingDate": "2012",
    "sameAs": []
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
} 