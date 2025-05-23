'use client'

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 8rem 0;
  background: var(--background-dark);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: start;
  position: relative;
  z-index: 1;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
`;

const ServicesLeft = styled.div`
  position: sticky;
  top: 150px;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;

    @media (max-width: 767px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.7;

    @media (max-width: 767px) {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 991px) {
    position: static;
  }
`;

const ServicesRight = styled.div`
  display: grid;
  gap: 3rem;
`;

const ServiceItem = styled(Link)`
  display: flex;
  gap: 2rem;
  padding: 2.5rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-premium);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: white;
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
    border-color: white;
    
    &::before {
      transform: scaleX(1);
    }

    .learn-more {
      color: white;
      transform: translateX(5px);
    }

    .learn-more-arrow {
      transform: translateX(5px);
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);

  img {
    width: 40px;
    height: 40px;
    filter: brightness(0);
  }

  @media (max-width: 767px) {
    width: 70px;
    height: 70px;
    
    img {
      width: 35px;
      height: 35px;
    }
  }
`;

const ServiceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.4rem;
    color: var(--text-dark);
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 767px) {
      font-size: 1.3rem;
    }
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    flex: 1;
  }
`;

const LearnMore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const LearnMoreArrow = styled.span`
  transition: all 0.3s ease;
  font-size: 0.8rem;
`;

const Services = () => {
  const services = [
    {
      icon: "https://cdn.prod.website-files.com/674bb7d56541130c2b3a3a27/674cc536714fc3b7bc6d7546_wood-flooring-icon.svg",
      title: "Real Wood Flooring",
      description: "Experience the timeless beauty and durability of real wood floors. We offer a variety of wood types and finishes to suit any style, enhancing the elegance of your space.",
      link: "/services/real-wood-flooring"
    },
    {
      icon: "https://cdn.prod.website-files.com/674bb7d56541130c2b3a3a27/674cc26b93c0b1a11f8adec7_tile-icon.svg",
      title: "Laminate Flooring",
      description: "Enjoy the look of natural wood with the affordability and low maintenance of laminate flooring. Ideal for busy households and commercial settings.",
      link: "/services/laminate-flooring"
    },
    {
      icon: "https://cdn.prod.website-files.com/674bb7d56541130c2b3a3a27/674cc4b4825ea3c77442ee25_lvt-icon.svg",
      title: "Luxury Vinyl Tile (LVT)",
      description: "Discover the versatility and water-resistant properties of LVT flooring. Perfect for kitchens, bathrooms, and high-traffic areas, offering a wide range of designs.",
      link: "/services/lvt-installation"
    },
    {
      icon: "https://cdn.prod.website-files.com/674bb7d56541130c2b3a3a27/674cc4b4a7127892e016744a_carpet-icon.svg",
      title: "Premium Carpets",
      description: "Experience the luxury and comfort of premium carpets. Soft, durable, and stylish, they add warmth and elegance to any room.",
      link: "/services/carpet-installation"
    },
    {
      icon: "https://cdn.prod.website-files.com/674bb7d56541130c2b3a3a27/674cc4b4a7127892e016744a_carpet-icon.svg",
      title: "Commercial Flooring",
      description: "Professional flooring solutions for businesses, offices, and commercial spaces. Durable, safe, and designed to withstand heavy traffic while maintaining a professional appearance.",
      link: "/services/commercial-flooring"
    }
  ];

  return (
    <ServicesSection id="services">
      <ServicesWrapper>
        <ServicesLeft>
          <h2>Our Services</h2>
          <p>Discover our range of professional flooring services, each crafted to deliver exceptional quality and style for your space.</p>
        </ServicesLeft>

        <ServicesRight>
          {services.map((service, index) => (
            <ServiceItem key={index} href={service.link}>
              <ServiceIcon>
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  loading="lazy"
                />
              </ServiceIcon>
              <ServiceContent>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <LearnMore className="learn-more">
                  Learn More <LearnMoreArrow className="learn-more-arrow">→</LearnMoreArrow>
                </LearnMore>
              </ServiceContent>
            </ServiceItem>
          ))}
        </ServicesRight>
      </ServicesWrapper>
    </ServicesSection>
  );
};

export default Services;