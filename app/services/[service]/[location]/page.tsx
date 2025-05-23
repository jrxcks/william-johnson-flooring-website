import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import locations from '../../../data/locations.json';
import services from '../../../data/services.json';
import ServiceLocationContent from '../../../components/ServiceLocationContent';

interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  benefits: string[];
  suitableFor: string[];
  duration: string;
  priceRange: string;
  heroImage: string;
  color: {
    primary: string;
    secondary: string;
  };
}

interface Location {
  slug: string;
  name: string;
  county: string;
  localInfo: {
    description: string;
    popularAreas: string[];
    housing: string;
    flooring: string;
    demographics: string;
  };
}

// Generate all combinations of service + location
export async function generateStaticParams() {
  const params: { service: string; location: string; }[] = [];
  
  for (const service of services.services) {
    for (const location of locations.locations) {
      params.push({
        service: service.slug,
        location: location.slug,
      });
    }
  }
  
  return params;
}

// Dynamic SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceData = services.services.find(s => s.slug === resolvedParams.service);
  const locationData = locations.locations.find(l => l.slug === resolvedParams.location);

  if (!serviceData || !locationData) {
    return { title: 'Page Not Found' };
  }

  const title = `${serviceData.name} in ${locationData.name} | William Johnson Flooring`;
  const description = `Professional ${serviceData.name.toLowerCase()} services in ${locationData.name}, ${locationData.county}. Expert installation with free quotes. Call 07944 425627`;

  return {
    title,
    description,
    keywords: [
      `${serviceData.slug.replace('-', ' ')} ${locationData.name}`,
      `flooring ${locationData.name}`,
      `${serviceData.shortName} installation ${locationData.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function ServiceLocationPage({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}) {
  const resolvedParams = await params;
  const serviceData = services.services.find(s => s.slug === resolvedParams.service) as Service | undefined;
  const locationData = locations.locations.find(l => l.slug === resolvedParams.location) as Location | undefined;

  if (!serviceData || !locationData) {
    notFound();
  }

  return (
    <ServiceLocationContent 
      service={serviceData}
      location={locationData}
    />
  );
} 