'use client'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IMAGES } from '../utils/imageUrls';

const TestimonialsSection = styled.section`
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
    background: radial-gradient(ellipse at 20% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 767px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

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
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 767px) {
    font-size: 1.1rem;
  }
`;

// Desktop Grid Layout
const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 767px) {
    display: none;
  }
`;

// Mobile Carousel
const MobileCarousel = styled.div`
  display: none;
  
  @media (max-width: 767px) {
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    margin: 0 -1rem; /* Extend to edges */
    padding: 0 1rem; /* Add back padding for cards */
  }
`;

const MobileTrack = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentIndex'].includes(prop),
})`
  display: flex;
  transition: transform 0.6s ease-in-out;
  transform: translateX(${props => -props.currentIndex * 100}%);
`;

const MobileCardWrapper = styled.div`
  min-width: 100%;
  flex-shrink: 0;
  padding: 0; /* Remove padding - handle in card */
`;

// Testimonial Card Styling
const TestimonialCard = styled.div`
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 767px) {
    height: 280px;
    padding: 1.5rem;
    margin: 0; /* Remove margin */
    width: calc(100vw - 4rem); /* Fixed width minus container padding */
    max-width: 400px; /* Maximum width for larger phones */
    margin: 0 auto; /* Center the card */
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 1.5rem;
`;

const Star = styled.div`
  width: 16px;
  height: 16px;
  background: white;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  
  @media (max-width: 767px) {
    width: 14px;
    height: 14px;
  }
`;

const TestimonialText = styled.p`
  color: white;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 auto 0;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 1.5rem;
`;

const CustomerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const CustomerDetails = styled.div`
  h4 {
    color: white;
    font-weight: 600;
    margin: 0 0 2px 0;
    font-size: 0.9rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    margin: 0;
  }
`;

// Mobile Navigation
const MobileNavigation = styled.div`
  display: none;
  
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 2rem;
  }
`;

const MobileDot = styled.button.withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
  }
`;

const Testimonials = () => {
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      text: "This flooring company exceeded all my expectations. The installation was flawless, and the team was incredibly professional throughout the entire process.",
      customerName: "Sarah Johnson",
      customerTitle: "Homeowner",
      customerImage: IMAGES.testimonials.customer1
    },
    {
      text: "Outstanding quality and attention to detail. They completed the project on time and within budget. I couldn't be happier with the final result.",
      customerName: "Michael Chen",
      customerTitle: "Property Developer", 
      customerImage: IMAGES.testimonials.customer2
    },
    {
      text: "Professional from start to finish. The flooring installation exceeded our expectations, and the team was incredibly respectful of our space.",
      customerName: "Emma Williams",
      customerTitle: "Interior Designer",
      customerImage: IMAGES.testimonials.customer3
    }
  ];

  // Mobile auto-scroll
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentMobileIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isPaused]);

  const goToMobileTestimonial = (index) => {
    setCurrentMobileIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const renderStars = () => (
    <StarRating>
      {[...Array(5)].map((_, index) => (
        <Star key={index} />
      ))}
    </StarRating>
  );

  const renderTestimonialCard = (testimonial, index) => (
    <TestimonialCard key={index}>
      {renderStars()}
      <TestimonialText>
        &quot;{testimonial.text}&quot;
      </TestimonialText>
      <CustomerInfo>
        <CustomerImage
          src={testimonial.customerImage}
          alt={testimonial.customerName}
          loading="lazy"
        />
        <CustomerDetails>
          <h4>{testimonial.customerName}</h4>
          <p>{testimonial.customerTitle}</p>
        </CustomerDetails>
      </CustomerInfo>
    </TestimonialCard>
  );

  return (
    <TestimonialsSection>
      <Container>
        <SectionHeader>
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionSubtitle>
            Hear from satisfied customers who have experienced our premium flooring services firsthand.
          </SectionSubtitle>
        </SectionHeader>

        {/* Desktop Grid */}
        <DesktopGrid>
          {testimonials.map((testimonial, index) => 
            renderTestimonialCard(testimonial, index)
          )}
        </DesktopGrid>

        {/* Mobile Carousel */}
        <MobileCarousel>
          <MobileTrack currentIndex={currentMobileIndex}>
            {testimonials.map((testimonial, index) => (
              <MobileCardWrapper key={index}>
                {renderTestimonialCard(testimonial, index)}
              </MobileCardWrapper>
            ))}
          </MobileTrack>
        </MobileCarousel>

        {/* Mobile Navigation */}
        <MobileNavigation>
          {testimonials.map((_, index) => (
            <MobileDot
              key={index}
              active={index === currentMobileIndex}
              onClick={() => goToMobileTestimonial(index)}
            />
          ))}
        </MobileNavigation>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 