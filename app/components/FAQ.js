'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
  padding: 8rem 0;
  background: var(--background-darker);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 50% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1000px;
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

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 2rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-dark);
    margin: 0;
    line-height: 1.4;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  @media (max-width: 767px) {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.1rem;
    }
  }
`;

const FAQIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$isOpen'].includes(prop),
})`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-left: 1rem;
`;

const FAQAnswer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$isOpen'].includes(prop),
})`
  max-height: ${props => props.$isOpen ? 'none' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: ${props => props.$isOpen ? '1px solid var(--glass-border)' : 'none'};
  
  div {
    padding: ${props => props.$isOpen ? '2rem' : '0 2rem'};
    opacity: ${props => props.$isOpen ? '1' : '0'};
    transition: all 0.3s ease;
    
    p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0 0 1rem 0;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    ul {
      color: var(--text-secondary);
      margin: 1rem 0;
      padding-left: 1.5rem;
      
      li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
      }
    }
  }

  @media (max-width: 767px) {
    div {
      padding: ${props => props.$isOpen ? '1.5rem' : '0 1.5rem'};
    }
  }
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What types of flooring do you install?",
      answer: (
        <div>
          <p>We specialize in installing a wide range of premium flooring options:</p>
          <ul>
            <li><strong>Real Wood Flooring</strong> - Solid and engineered hardwood in various species and finishes</li>
            <li><strong>Laminate Flooring</strong> - High-quality laminate with realistic wood and stone effects</li>
            <li><strong>Luxury Vinyl Tile (LVT)</strong> - Waterproof and durable vinyl planks and tiles</li>
            <li><strong>Premium Carpets</strong> - High-quality carpets for comfort and warmth</li>
            <li><strong>Commercial Flooring</strong> - Durable solutions for business premises</li>
          </ul>
          <p>Each installation includes professional subfloor preparation and quality underlayment for optimal performance.</p>
        </div>
      )
    },
    {
      question: "How long does a typical flooring installation take?",
      answer: (
        <div>
          <p>Installation timeframes vary depending on the room size, flooring type, and complexity:</p>
          <ul>
            <li><strong>Small room (up to 20m²)</strong> - 1-2 days</li>
            <li><strong>Medium room (20-40m²)</strong> - 2-3 days</li>
            <li><strong>Large area (40m²+)</strong> - 3-5 days</li>
            <li><strong>Whole house projects</strong> - 1-2 weeks</li>
          </ul>
          <p>LVT and laminate typically install faster than real wood flooring. We&apos;ll provide an accurate timeline during your free consultation.</p>
        </div>
      )
    },
    {
      question: "Do you provide free quotes and consultations?",
      answer: (
        <div>
          <p>Yes! We offer completely free, no-obligation quotes and consultations. Our service includes:</p>
          <ul>
            <li>Free home visit and room measurements</li>
            <li>Expert advice on the best flooring options for your needs</li>
            <li>Detailed written quote with transparent pricing</li>
            <li>Subfloor assessment and preparation recommendations</li>
            <li>Timeline and project planning discussion</li>
          </ul>
          <p>Contact us on +44 7944 425627 or email contact@williamjohnsonflooring.co.uk to book your free consultation.</p>
        </div>
      )
    },
    {
      question: "What areas do you cover in the UK?",
      answer: (
        <div>
          <p>We provide professional flooring installation services across the UK, with particular expertise in:</p>
          <ul>
            <li>Midlands region (our primary service area)</li>
            <li>Birmingham and surrounding areas</li>
            <li>Coventry, Leicester, Nottingham</li>
            <li>Worcestershire, Warwickshire, Staffordshire</li>
            <li>Selected areas throughout England</li>
          </ul>
          <p>For areas outside our standard coverage, please contact us to discuss travel arrangements and potential additional costs.</p>
        </div>
      )
    },
    {
      question: "Do you offer warranties on your flooring installations?",
      answer: (
        <div>
          <p>Yes, we stand behind our work with comprehensive warranties:</p>
          <ul>
            <li><strong>Installation Workmanship</strong> - 2 year guarantee</li>
            <li><strong>Material Warranties</strong> - Varies by manufacturer (typically 10-25 years)</li>
            <li><strong>Subfloor Preparation</strong> - 1 year guarantee</li>
            <li><strong>Customer Satisfaction</strong> - We resolve any issues promptly</li>
          </ul>
          <p>All warranties are provided in writing with detailed terms. We use only premium materials from trusted manufacturers with established warranty programs.</p>
        </div>
      )
    },
    {
      question: "What preparation is needed before installation?",
      answer: (
        <div>
          <p>Proper preparation ensures the best results. We handle most preparation, but homeowners should:</p>
          <ul>
            <li><strong>Clear the room</strong> - Remove all furniture and belongings</li>
            <li><strong>Remove existing flooring</strong> - We can do this for an additional cost</li>
            <li><strong>Ensure access</strong> - Clear pathways for material delivery</li>
            <li><strong>Pets and children</strong> - Arrange alternative accommodation during installation</li>
          </ul>
          <p>We handle all technical preparation including subfloor leveling, moisture testing, and underlayment installation.</p>
        </div>
      )
    },
    {
      question: "How do I choose between LVT, laminate, and real wood?",
      answer: (
        <div>
          <p>Each flooring type has distinct advantages:</p>
          <ul>
            <li><strong>Real Wood</strong> - Premium appearance, adds property value, long-lasting with proper care</li>
            <li><strong>LVT</strong> - 100% waterproof, excellent for kitchens/bathrooms, warm underfoot</li>
            <li><strong>Laminate</strong> - Cost-effective, durable, quick installation, wide design range</li>
          </ul>
          <p>Consider your budget, room usage, moisture levels, and aesthetic preferences. Our experts will help you choose the perfect option during your free consultation.</p>
        </div>
      )
    },
    {
      question: "What happens if there are issues after installation?",
      answer: (
        <div>
          <p>Customer satisfaction is our priority. If any issues arise:</p>
          <ul>
            <li><strong>Immediate response</strong> - Contact us within 48 hours for urgent issues</li>
            <li><strong>Warranty coverage</strong> - Installation defects covered under our 2-year guarantee</li>
            <li><strong>Material issues</strong> - We liaise with manufacturers for warranty claims</li>
            <li><strong>Quick resolution</strong> - Most issues resolved within 5-7 working days</li>
          </ul>
          <p>We maintain detailed project records and use only certified installers to minimize issues. Contact us immediately if you notice any problems.</p>
        </div>
      )
    }
  ];

  return (
    <FAQSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle>
            Get answers to common questions about our flooring installation services, materials, and process.
          </SectionSubtitle>
        </SectionHeader>

        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleItem(index)}>
                <h3>{item.question}</h3>
                <FAQIcon $isOpen={openItems[index]}>+</FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openItems[index]}>
                <div>{item.answer}</div>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </FAQSection>
  );
};

export default FAQ; 