import React from 'react';
import HeroSlider from './components/HeroSlider';
import FeaturesMetrics from './components/FeaturesMetrics';
import AboutUs from './components/AboutUs';
import LogosSection from './components/LogosSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <FeaturesMetrics />
      <AboutUs />
      <LogosSection />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
} 