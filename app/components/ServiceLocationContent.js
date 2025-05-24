'use client'

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Navbar from './Navbar'
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
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  @media (max-width: 767px) {
    height: 100vh;
    min-height: 700px;
    background-attachment: scroll;
    padding: 80px 0 40px 0;
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
      font-size: 2.2rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 767px) {
      font-size: 1.1rem;
      line-height: 1.5;
      margin-bottom: 2.5rem;
    }
  }

  div {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
    }
  }
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, ${props => props.$primaryColor}, ${props => props.$primaryColor}dd);
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
    box-shadow: 0 8px 20px ${props => props.$primaryColor}50;
  }

  @media (max-width: 767px) {
    width: 280px;
    max-width: 90vw;
    margin: 0 0 15px 0;
    text-align: center;
    padding: 18px 25px;
  }
`;

const PhoneButton = styled.a`
  background: white;
  color: #1a365d;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px 10px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 767px) {
    width: 280px;
    max-width: 90vw;
    margin: 0;
    text-align: center;
    padding: 18px 25px;
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-top: 4px solid ${props => props.$primaryColor};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const IconArea = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
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

  ul {
    list-style: none;
    padding: 0;
    
    li {
      color: var(--text-medium);
      margin-bottom: 0.5rem;
      
      strong {
        color: var(--text-dark);
      }
    }
  }
`;

const ServiceLocationContent = ({ service, location }) => {
  const backgroundImage = IMAGES.heroBackgrounds[service.heroImage] || IMAGES.heroBackgrounds.slide1;

  // Icon mapping for benefits
  const iconMap = {
    water: '💧',
    diamond: '💎', 
    heart: '❤️',
    clock: '⏰',
    shield: '🛡️',
    home: '🏠',
    leaf: '🌿',
    star: '⭐',
    tools: '🔧'
  };

  return (
    <ServicePage>
      <Navbar />
      
      <HeroSection $backgroundImage={backgroundImage}>
        <HeroContent>
          <h1>{service.name} in {location.name}</h1>
          <p>
            Professional {service.description.toLowerCase()} across {location.county}. 
            Expert installation with guaranteed quality and competitive pricing throughout {location.name} and surrounding areas.
          </p>
          <div>
            <CTAButton 
              $primaryColor={service.color.primary}
              href="#contact"
            >
              Get Free Quote
            </CTAButton>
            <PhoneButton 
              href="tel:07944425627"
            >
              Call: 07944 425627
            </PhoneButton>
          </div>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>
            Why Choose {service.name} in {location.name}?
          </SectionTitle>
          
          <BenefitsGrid>
            {service.benefits.map((benefit, index) => (
              <BenefitCard 
                key={index} 
                $primaryColor={service.color.primary}
              >
                <IconArea>{iconMap[benefit.icon] || '✨'}</IconArea>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </BenefitCard>
            ))}
          </BenefitsGrid>

          <InfoGrid>
            <InfoCard>
              <h3>{service.name} for {location.name} Properties</h3>
              <p>
                {location.localInfo.housing}. Our {service.name.toLowerCase()} 
                service is perfectly suited for the diverse property types found throughout {location.name}.
              </p>
              <p><strong>Suitable for:</strong> {service.suitableFor.join(', ')}</p>
              <p><strong>Popular areas we serve:</strong> {location.localInfo.popularAreas.join(', ')}</p>
            </InfoCard>
            
            <InfoCard>
              <h3>Service Details & Local Information</h3>
              <ul>
                <li><strong>Installation Time:</strong> {service.duration}</li>
                <li><strong>Price Range:</strong> {service.priceRange}</li>
                <li><strong>Service Area:</strong> {location.name}, {location.county} & surrounding areas</li>
                <li><strong>Local Expertise:</strong> {location.localInfo.flooring}</li>
              </ul>
              <p>
                <strong>Why {location.name} chooses us:</strong> {location.localInfo.demographics}
              </p>
            </InfoCard>
          </InfoGrid>
        </Container>
      </ContentSection>
    </ServicePage>
  );
};

export default ServiceLocationContent; 