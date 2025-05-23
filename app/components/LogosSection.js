'use client'

import React from 'react';
import styled from 'styled-components';

const LogosSection = styled.section`
  padding: 3rem 0;
  background: var(--background-light);
`;

const LogosContainer = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    gap: 2rem;
  }

  @media (max-width: 479px) {
    gap: 1.5rem;
  }
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
  opacity: 0.7;
  transition: all 0.3s ease;
  filter: grayscale(100%);

  &:hover {
    opacity: 1;
    filter: grayscale(0%);
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    height: 50px;
  }

  @media (max-width: 479px) {
    height: 40px;
  }
`;

const LogosSectionComponent = () => {
  const logos = [
    {
      src: "https://cdn.prod.website-files.com/674bb7d56541130c2b3a3a27/6769232f930f9cc672e05b5a_Karndean%20Designflooring%20logo.svg",
      alt: "Karndean Designflooring logo",
      width: null
    },
    {
      src: "https://cdn.prod.website-files.com/674bb7d56541130c2b3a3a27/6769233c004e8bb39134d3da_svgexport-2.svg",
      alt: "OE logo",
      width: "110"
    },
    {
      src: "https://cdn.prod.website-files.com/674bb7d56541130c2b3a3a27/676923463eab5576c5866322_svgexport-7.svg",
      alt: "2020INC logo",
      width: "81"
    }
  ];

  return (
    <LogosSection>
      <LogosContainer>
        <LogosWrapper>
          {logos.map((logo, index) => (
            <LogoImage
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
            />
          ))}
        </LogosWrapper>
      </LogosContainer>
    </LogosSection>
  );
};

export default LogosSectionComponent; 