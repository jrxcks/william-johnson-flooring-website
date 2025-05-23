'use client'

import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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
    background: radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 60%);
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

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const ContactContent = styled.div`
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
    margin-bottom: 2rem;

    @media (max-width: 767px) {
      font-size: 1.1rem;
    }
  }
`;

const ContactActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 991px) {
    align-items: center;
  }
`;

const ContactButton = styled.a`
  background: white;
  color: black;
  padding: 0 32px;
  height: 56px;
  border-radius: var(--border-radius);
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-width: 280px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
    background: #f0f0f0;
    
    &::before {
      left: 100%;
    }
  }

  @media (max-width: 767px) {
    min-width: 260px;
    height: 52px;
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  padding: 3rem;
  box-shadow: var(--shadow-premium);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: white;
  }

  @media (max-width: 767px) {
    padding: 2rem;
  }
`;

const InfoHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
    margin: 0;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: rgba(248, 250, 252, 0.03);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(248, 250, 252, 0.05);
    border-color: var(--accent-color);
    transform: translateY(-2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);

  svg {
    width: 24px;
    height: 24px;
    fill: black;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  min-width: 0;
  text-align: left;

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.25rem;
    text-align: left;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    line-height: 1.4;
    text-align: left;

    @media (max-width: 767px) {
      font-size: 0.9rem;
      line-height: 1.3;
    }
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    word-break: break-word;
    overflow-wrap: break-word;
    display: inline-block;
    max-width: 100%;
    text-align: left;

    &:hover {
      color: #f0f0f0;
    }

    @media (max-width: 767px) {
      font-size: 0.85rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="free-quote">
      <Container>
        <ContactWrapper>
          <ContactContent>
            <h2>Ready to Transform Your Space?</h2>
            <p>
              Get your free, no-obligation quote today. Our expert team will assess your needs 
              and provide personalized recommendations for your flooring project.
            </p>
            <ContactActions>
              <ContactButton href="tel:+447944425627">
                📞 Call: +44 7944 425627
              </ContactButton>
              <ContactButton href="mailto:contact@williamjohnsonflooring.co.uk">
                ✉️ Email: Get Quote
              </ContactButton>
            </ContactActions>
          </ContactContent>

          <ContactInfo>
            <InfoHeader>
              <h3>Get In Touch</h3>
              <p>Contact us through any of these convenient methods</p>
            </InfoHeader>

            <ContactItem href="mailto:contact@williamjohnsonflooring.co.uk">
              <ContactIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </ContactIcon>
              <ContactDetails>
                <h4>Email Address</h4>
                <p>contact@williamjohnsonflooring.co.uk</p>
              </ContactDetails>
            </ContactItem>

            <ContactItem href="tel:+447944425627">
              <ContactIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </ContactIcon>
              <ContactDetails>
                <h4>Phone Number</h4>
                <p>+44 7944 425627</p>
              </ContactDetails>
            </ContactItem>

            <ContactItem as="div">
              <ContactIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </ContactIcon>
              <ContactDetails>
                <h4>Service Area</h4>
                <p>Professional flooring services across the UK</p>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact; 