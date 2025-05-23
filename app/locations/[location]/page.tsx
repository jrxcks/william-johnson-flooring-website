import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import locations from '../../data/locations.json';
import services from '../../data/services.json';
import LocationContent from '../../components/LocationContent';

// Generate static params for all locations
export async function generateStaticParams() {
  return locations.locations.map((location) => ({
    location: location.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locationData = locations.locations.find(
    (loc) => loc.slug === resolvedParams.location
  );

  if (!locationData) {
    return { title: 'Location Not Found' };
  }

  return {
    title: locationData.seo.title,
    description: locationData.seo.description,
    keywords: locationData.seo.keywords,
    openGraph: {
      title: locationData.seo.title,
      description: locationData.seo.description,
      type: 'website',
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const resolvedParams = await params;
  const locationData = locations.locations.find(
    (loc) => loc.slug === resolvedParams.location
  );

  if (!locationData) {
    notFound();
  }

  return (
    <LocationContent 
      locationData={locationData}
      services={services.services}
    />
  );
} 