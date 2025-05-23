'use client'

import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 6rem 0;
  background: var(--background-dark);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FeatureBlock = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-premium);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
    border-color: white;
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const FeatureTitle = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;

  @media (max-width: 767px) {
    font-size: 2.8rem;
  }
`;

const FeatureTitleSmall = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  vertical-align: super;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

const FeatureDescription = styled.div`
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const FeaturesMetrics = () => {
  const features = [
    {
      title: '2012',
      description: 'Trading Since'
    },
    {
      title: '100',
      titleSmall: '%',
      description: 'Customer Satisfaction'
    },
    {
      title: '300+',
      description: 'Happy Customers'
    },
    {
      title: 'Free',
      description: 'Quotes'
    }
  ];

  return (
    <FeaturesSection>
      <FeaturesWrapper>
        {features.map((feature, index) => (
          <FeatureBlock key={index}>
            <FeatureTitle>
              {feature.title}
              {feature.titleSmall && (
                <FeatureTitleSmall>{feature.titleSmall}</FeatureTitleSmall>
              )}
            </FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureBlock>
        ))}
      </FeaturesWrapper>
    </FeaturesSection>
  );
};

export default FeaturesMetrics; 