'use client'

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '../utils/imageUrls';
import locations from '../data/locations.json';

const FooterSection = styled.footer`
  background: var(--background-darker);
  padding: 4rem 0 2rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 50px;
      height: 2px;
      background: white;
      border-radius: 1px;
      
      @media (max-width: 767px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  p, li {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: white;
      transform: translateX(3px);
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

const CompanyInfo = styled.div`
  img {
    height: 60px;
    width: auto;
    margin-bottom: 1.5rem;
    filter: brightness(1);

    @media (max-width: 767px) {
      display: block;
      margin: 0 auto 1.5rem;
    }
  }

  p {
    margin-bottom: 1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 767px) {
    justify-content: center;
  }

  svg {
    width: 18px;
    height: 18px;
    fill: white;
    flex-shrink: 0;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    
    &:hover {
      color: white;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--glass-border);
  padding-top: 2rem;
  text-align: center;
  
  p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin: 0;
  }
`;

// New styled components for location links
const LocationLinksSection = styled.div`
  border-top: 1px solid var(--glass-border);
  padding-top: 3rem;
  margin-top: 2rem;
`;

const LocationTitle = styled.h4`
  color: var(--text-dark);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: white;
    border-radius: 1px;
  }
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const LocationGroup = styled.div`
  h5 {
    color: var(--text-dark);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 0.5rem;
  }
`;

const LocationLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.6rem;
  }
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: block;
    padding: 0.3rem 0;
    
    &:hover {
      color: white;
      transform: translateX(3px);
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Organize locations by county for better UX
  const locationsByCounty = locations.locations.reduce((acc, location) => {
    const county = location.county;
    if (!acc[county]) {
      acc[county] = [];
    }
    acc[county].push(location);
    return acc;
  }, {});

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterColumn>
            <CompanyInfo>
              <Image 
                src={IMAGES.logo.main}
                alt="William Johnson Flooring Logo"
                width={180}
                height={60}
                priority
              />
              <p>
                Professional flooring solutions with over a decade of experience. 
                Transforming spaces with quality, style, and lasting durability.
              </p>
              <ContactItem>
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="tel:+447944425627">+44 7944 425627</a>
              </ContactItem>
              <ContactItem>
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:contact@williamjohnsonflooring.co.uk">
                  contact@williamjohnsonflooring.co.uk
                </a>
              </ContactItem>
            </CompanyInfo>
          </FooterColumn>

          <FooterColumn>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#our-work">Our Work</a></li>
              <li><a href="#free-quote">Get Quote</a></li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/real-wood-flooring">Real Wood Flooring</Link></li>
              <li><Link href="/services/laminate-flooring">Laminate Flooring</Link></li>
              <li><Link href="/services/lvt-installation">Luxury Vinyl Tile (LVT)</Link></li>
              <li><Link href="/services/carpet-installation">Premium Carpets</Link></li>
              <li><Link href="/services/commercial-flooring">Commercial Flooring</Link></li>
              <li><Link href="/services">All Services</Link></li>
            </ul>
          </FooterColumn>
        </FooterContent>

        {/* SEO Location Links Section */}
        <LocationLinksSection>
          <LocationTitle>Professional Flooring Services By Location</LocationTitle>
          <LocationGrid>
            {Object.entries(locationsByCounty).map(([county, countyLocations]) => (
              <LocationGroup key={county}>
                <h5>{county}</h5>
                <LocationLinks>
                  {countyLocations.map((location) => (
                    <React.Fragment key={location.slug}>
                      <li>
                        <Link href={`/locations/${location.slug}`}>
                          Flooring in {location.name}
                        </Link>
                      </li>
                      {/* Include top service combinations for major cities */}
                      {location.population && parseInt(location.population.replace(/,/g, '')) > 200000 && (
                        <li>
                          <Link href={`/services/lvt-installation/${location.slug}`}>
                            LVT Installation {location.name}
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </LocationLinks>
              </LocationGroup>
            ))}
          </LocationGrid>
        </LocationLinksSection>

        <FooterBottom>
          <p>&copy; {currentYear} William Johnson Flooring. All rights reserved. | Professional flooring services across the UK.</p>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;