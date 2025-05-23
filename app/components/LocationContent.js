'use client'

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './Footer'
import { IMAGES } from '../utils/imageUrls'

const ServicePage = styled.div`
  background: var(--background-dark);
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 80vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${IMAGES.heroBackgrounds.slide1});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  @media (max-width: 767px) {
    height: 70vh;
    min-height: 500px;
    background-attachment: scroll;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 767px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 767px) {
      font-size: 1.1rem;
    }
  }
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 10px 10px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(34, 197, 94, 0.3);
  }
`;

const PhoneButton = styled.a`
  background: white;
  color: #22c55e;
  padding: 15px 30px;
  border: 2px solid #22c55e;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #22c55e;
    color: white;
    transform: translateY(-2px);
  }
`;

const ContentSection = styled.section`
  padding: 80px 0;
  background: var(--background-light);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-dark);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const InfoCard = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-dark);
  }

  p {
    color: var(--text-medium);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(Link)`
  display: block;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-dark);
  }

  p {
    color: var(--text-medium);
    line-height: 1.5;
  }
`;

const LocationContent = ({ locationData, services }) => {
  return (
    <ServicePage>
      <Navbar />
      
      <HeroSection>
        <HeroContent>
          <h1>Professional Flooring Services in {locationData.name}</h1>
          <p>
            Expert flooring installation across {locationData.county}. 
            From luxury vinyl tiles to hardwood flooring, we transform homes and businesses 
            throughout {locationData.name} and surrounding areas.
          </p>
          <div>
            <CTAButton href="#contact">Get Free Quote</CTAButton>
            <PhoneButton href="tel:07944425627">📞 Call: 07944 425627</PhoneButton>
          </div>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>
            Why Choose Us for Flooring in {locationData.name}?
          </SectionTitle>
          
          <InfoGrid>
            <InfoCard>
              <h3>About {locationData.name}</h3>
              <p>{locationData.localInfo.description}</p>
              <p><strong>Popular Areas:</strong> {locationData.localInfo.popularAreas.join(', ')}</p>
              <p><strong>Service Area:</strong> All of {locationData.county} and surrounding regions</p>
            </InfoCard>
            
            <InfoCard>
              <h3>Local Property Types & Flooring</h3>
              <p><strong>Housing Style:</strong> {locationData.localInfo.housing}</p>
              <p><strong>Flooring Demand:</strong> {locationData.localInfo.flooring}</p>
              <p><strong>Our Specialty:</strong> We understand the unique requirements of {locationData.name} properties and provide tailored flooring solutions.</p>
            </InfoCard>
          </InfoGrid>

          <SectionTitle>Our Flooring Services in {locationData.name}</SectionTitle>
          
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard 
                key={service.slug} 
                href={`/services/${service.slug}/${locationData.slug}`}
              >
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <p><strong>Duration:</strong> {service.duration}</p>
                <p><strong>Price Range:</strong> {service.priceRange}</p>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ContentSection>

      <Footer />
    </ServicePage>
  );
};

export default LocationContent; 