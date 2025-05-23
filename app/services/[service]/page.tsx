import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import enhancedServicesData from '../../data/enhanced-services.json'
import ServiceHero from '../../components/ServiceHero'
import ServiceBenefits from '../../components/ServiceBenefits'
import ServiceGallery from '../../components/ServiceGallery'
import SuitableForSection from '../../components/SuitableForSection'
import Testimonials from '../../components/Testimonials'
import Contact from '../../components/Contact'
import FAQ from '../../components/FAQ'

interface Service {
  slug: string
  name: string
  shortName: string
  description: string
  fullDescription: string
  benefits: Array<{
    title: string
    description: string
    icon: string
    features: string[]
  }>
  process: Array<{
    title: string
    description: string
  }>
  priceRange: string
  duration: string
  suitableFor: string[]
  heroImage: string
  color: {
    primary: string
    secondary: string
  }
}

interface Props {
  params: Promise<{
    service: string
  }>
}

function getServiceBySlug(slug: string): Service | undefined {
  return enhancedServicesData.services.find(service => service.slug === slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.service)
  
  if (!service) {
    return {
      title: 'Service Not Found | William Johnson Flooring'
    }
  }

  const benefitsList = service.benefits.map(benefit => benefit.title).join(', ')
  
  return {
    title: `${service.name} Installation | Expert ${service.shortName} Fitting | William Johnson Flooring`,
    description: `Professional ${service.name.toLowerCase()} installation across the UK. ${service.description}. Benefits include: ${benefitsList}. Free quotes, 2-year warranty, expert installation.`,
    keywords: [
      service.name.toLowerCase(),
      `${service.name.toLowerCase()} installation`,
      `${service.name.toLowerCase()} fitting`,
      `${service.name.toLowerCase()} installers`,
      'UK flooring',
      'professional installation',
      'flooring experts',
      'free quotes',
      ...service.benefits.map(benefit => benefit.title.toLowerCase()),
      ...service.suitableFor.map(area => area.toLowerCase())
    ],
    openGraph: {
      title: `${service.name} Installation | Expert ${service.shortName} Fitting | William Johnson Flooring`,
      description: `Professional ${service.name.toLowerCase()} installation. ${service.description}. ${benefitsList}.`,
      type: 'website',
      locale: 'en_GB',
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: `${service.name} installation by William Johnson Flooring`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} Installation | William Johnson Flooring`,
      description: `Professional ${service.name.toLowerCase()} installation. ${service.description}.`,
      images: [service.heroImage]
    }
  }
}

export async function generateStaticParams() {
  return enhancedServicesData.services.map((service) => ({
    service: service.slug,
  }))
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.service)

  if (!service) {
    notFound()
  }

  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.fullDescription,
    "provider": {
      "@type": "Organization",
      "name": "William Johnson Flooring",
      "url": "https://williamjohnsonflooring.com",
      "telephone": "+44 7944 425627",
      "email": "contact@williamjohnsonflooring.co.uk",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressRegion": "Midlands"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "serviceType": service.name,
    "duration": service.duration,
    "category": "Flooring Installation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.name} Installation Services`,
      "itemListElement": service.benefits.map((benefit, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": benefit.title,
          "description": benefit.description
        },
        "position": index + 1
      }))
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "description": `${service.priceRange} pricing for professional ${service.name.toLowerCase()} installation`,
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "seller": {
        "@type": "Organization",
        "name": "William Johnson Flooring"
      }
    },
    "image": service.heroImage,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150+",
      "bestRating": "5"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <ServiceHero
          title={service.name}
          subtitle={service.fullDescription}
          backgroundImage={service.heroImage}
          primaryColor={service.color.primary}
          secondaryColor={service.color.secondary}
        />

        <ServiceBenefits
          service={service}
          benefits={service.benefits}
          process={service.process}
        />

        <SuitableForSection service={service} />

        <ServiceGallery 
          serviceName={service.name}
          serviceSlug={service.slug}
        />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  )
} 