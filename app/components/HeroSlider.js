'use client'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IMAGES } from '../utils/imageUrls';

const SliderContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
`;

const SliderMask = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentSlide'].includes(prop),
})`
  position: relative;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(-${props => props.currentSlide * 100}%);
`;

const Slide = styled.div.withConfig({
  shouldForwardProp: (prop) => !['backgroundImage'].includes(prop),
})`
  min-width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background: ${props => {
    if (props.backgroundImage) {
      return `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.backgroundImage})`;
    }
    return props.background || 'linear-gradient(135deg, #1a365d, #2d5a87)';
  }};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.backgroundImage ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.4)'};
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`;

const HeroSplit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 3;
  max-width: 800px;
  width: 100%;
  padding: 0 2rem;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    color: white;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    line-height: 1.1;

    @media (max-width: 991px) {
      font-size: 3rem;
    }

    @media (max-width: 767px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    opacity: 0.9;

    @media (max-width: 767px) {
      font-size: 1.2rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SliderNav = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
`;

const NavDot = styled.button.withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
  }
`;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      background: 'linear-gradient(135deg, #1a365d, #2d5a87)',
      backgroundImage: IMAGES.heroBackgrounds.slide1,
      title: 'High Quality Flooring Solutions',
      subtitle: 'Real Wood • Laminate • LVT Supply & Installation',
      buttons: [
        { text: 'CONTACT US', action: () => scrollToSection('free-quote'), primary: true },
        { text: 'OUR WORK', action: () => scrollToSection('our-work'), primary: false }
      ]
    },
    {
      id: 2,
      background: 'linear-gradient(135deg, #2d5a87, #38a169)',
      backgroundImage: IMAGES.heroBackgrounds.slide2,
      title: 'Versatility Meets Design with LVT Flooring',
      subtitle: 'The perfect solution for high-traffic and moisture-prone areas.',
      buttons: [
        { text: 'Get a Free Quote', action: () => scrollToSection('free-quote'), primary: true },
        { text: 'OUR WORK', action: () => scrollToSection('our-work'), primary: false }
      ]
    },
    {
      id: 3,
      background: 'linear-gradient(135deg, #38a169, #1a365d)',
      backgroundImage: IMAGES.heroBackgrounds.slide3,
      title: 'Perfect Foundations for Every Floor',
      subtitle: 'Expert flooring preparation to ensure durability and flawless finishes.',
      buttons: [
        { text: 'Get a Free Quote', action: () => scrollToSection('free-quote'), primary: true },
        { text: 'OUR WORK', action: () => scrollToSection('our-work'), primary: false }
      ]
    },
    {
      id: 4,
      background: 'linear-gradient(135deg, #8B4513, #A0522D)',
      backgroundImage: IMAGES.heroBackgrounds.slide4,
      title: 'Timeless Beauty with Hardwood Floors',
      subtitle: 'The perfect solution for high-traffic and moisture-prone areas.',
      buttons: [
        { text: 'Get a Free Quote', action: () => scrollToSection('free-quote'), primary: true },
        { text: 'OUR WORK', action: () => scrollToSection('our-work'), primary: false }
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000); // 12 seconds like the original

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <SliderContainer>
      <SliderMask currentSlide={currentSlide}>
        {slides.map((slide) => (
          <Slide 
            key={slide.id} 
            background={slide.background}
            backgroundImage={slide.backgroundImage}
          >
            <SlideContent>
              <HeroSplit>
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <HeroButtons>
                    {slide.buttons.map((button, btnIndex) => (
                      <a
                        key={btnIndex}
                        className={button.primary ? 'button-primary' : 'button-secondary'}
                        onClick={button.action}
                        style={{ cursor: 'pointer' }}
                      >
                        {button.text}
                      </a>
                    ))}
                  </HeroButtons>
                </HeroContent>
              </HeroSplit>
            </SlideContent>
          </Slide>
        ))}
      </SliderMask>

      <SliderNav>
        {slides.map((_, index) => (
          <NavDot
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </SliderNav>
    </SliderContainer>
  );
};

export default HeroSlider; 