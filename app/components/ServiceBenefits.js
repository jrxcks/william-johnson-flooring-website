'use client'

import React from 'react'
import styled from 'styled-components'

const BenefitsSection = styled.section`
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
    background: radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 60%);
    pointer-events: none;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 2.2rem;
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 767px) {
    font-size: 1.1rem;
  }
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const BenefitCard = styled.div`
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  padding: 3rem 2.5rem;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-premium);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #22c55e, #16a34a);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
    border-color: white;
    
    &::before {
      transform: scaleX(1);
    }
  }
`

const BenefitIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  font-size: 2rem;
  
  &.shield { &::after { content: '🛡️'; } }
  &.clock { &::after { content: '⚡'; } }
  &.diamond { &::after { content: '💎'; } }
  &.leaf { &::after { content: '🌿'; } }
  &.home { &::after { content: '🏠'; } }
  &.tools { &::after { content: '🔧'; } }
  &.star { &::after { content: '⭐'; } }
  &.water { &::after { content: '💧'; } }
  &.fire { &::after { content: '🔥'; } }
  &.heart { &::after { content: '❤️'; } }
`

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
`

const BenefitDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`

const BenefitFeatures = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  
  li {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #22c55e;
      font-weight: bold;
    }
  }
`

const ProcessSection = styled.section`
  padding: 8rem 0;
  background: var(--background-darker);
`

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`

const ProcessStep = styled.div`
  text-align: center;
  position: relative;
  
  &::after {
    content: '→';
    position: absolute;
    right: -1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-secondary);
    font-size: 2rem;
    
    @media (max-width: 767px) {
      display: none;
    }
  }
  
  &:last-child::after {
    display: none;
  }
`

const ProcessNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
`

const ProcessTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
`

const ProcessDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.95rem;
`

const ServiceBenefits = ({ service, benefits, process }) => {
  return (
    <>
      <BenefitsSection>
        <Container>
          <SectionHeader>
            <SectionTitle>
              Why Choose Our {service.shortName} Installation?
            </SectionTitle>
            <SectionSubtitle>
              Professional {service.name.toLowerCase()} installation with unmatched quality, 
              expert craftsmanship, and comprehensive warranties.
            </SectionSubtitle>
          </SectionHeader>

          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon className={benefit.icon} />
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
                {benefit.features && (
                  <BenefitFeatures>
                    {benefit.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </BenefitFeatures>
                )}
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
      </BenefitsSection>

      {process && (
        <ProcessSection data-section="process">
          <Container>
            <SectionHeader>
              <SectionTitle>Our Installation Process</SectionTitle>
              <SectionSubtitle>
                A proven, systematic approach ensuring perfect results every time.
              </SectionSubtitle>
            </SectionHeader>

            <ProcessGrid>
              {process.map((step, index) => (
                <ProcessStep key={index}>
                  <ProcessNumber>{index + 1}</ProcessNumber>
                  <ProcessTitle>{step.title}</ProcessTitle>
                  <ProcessDescription>{step.description}</ProcessDescription>
                </ProcessStep>
              ))}
            </ProcessGrid>
          </Container>
        </ProcessSection>
      )}
    </>
  )
}

export default ServiceBenefits 