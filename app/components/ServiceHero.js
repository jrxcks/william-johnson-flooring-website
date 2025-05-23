'use client'

import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section.withConfig({
  shouldForwardProp: (prop) => !['$backgroundImage', '$primaryColor', '$secondaryColor', 'backgroundImage', 'primaryColor', 'secondaryColor'].includes(prop),
})`
  position: relative;
  padding: 12rem 0 8rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: ${props => {
    if (props.$backgroundImage) {
      return `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.$backgroundImage})`;
    }
    return `linear-gradient(135deg, ${props.$primaryColor || '#22c55e'}, ${props.$secondaryColor || '#16a34a'})`;
  }};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.$backgroundImage ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.4)'};
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, transparent, var(--background-dark));
    pointer-events: none;
    z-index: 1;
  }
`

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  line-height: 1.1;
  
  @media (max-width: 767px) {
    font-size: 3rem;
  }
  
  @media (max-width: 479px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 479px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 479px) {
    flex-direction: column;
    align-items: center;
  }
`

const HeroButton = styled.a`
  background: white;
  color: black;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    background: #f0f0f0;
  }
  
  @media (max-width: 479px) {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
`

const HeroButtonSecondary = styled(HeroButton)`
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
  
  &:hover {
    background: rgba(255,255,255,0.2);
    border-color: white;
  }
`

const ServiceHero = ({
  title,
  subtitle,
  backgroundImage,
  primaryColor,
  secondaryColor
}) => {
  const scrollToContact = () => {
    const element = document.getElementById('free-quote')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProcess = () => {
    const element = document.querySelector('[data-section="process"]')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroSection 
      $backgroundImage={backgroundImage}
      $primaryColor={primaryColor}
      $secondaryColor={secondaryColor}
    >
      <HeroContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        
        <HeroButtons>
          <HeroButton onClick={scrollToContact}>
            Get Free Quote
          </HeroButton>
          <HeroButtonSecondary onClick={scrollToProcess}>
            Learn More
          </HeroButtonSecondary>
        </HeroButtons>
      </HeroContainer>
    </HeroSection>
  )
}

export default ServiceHero 