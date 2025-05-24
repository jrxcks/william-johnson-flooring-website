'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import { IMAGES } from '../utils/imageUrls';

const NavbarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$scrolled'].includes(prop),
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  transition: all 0.3s ease;
  
  /* Enhanced backgrounds for better visibility */
  background: ${props => props.$scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.3)'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px)' : 'blur(10px)'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'};
  
  /* Premium shadow when scrolled */
  box-shadow: ${props => props.$scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'};
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Logo = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['$scrolled'].includes(prop),
})`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  text-decoration: none;
  
  img {
    height: 50px;
    width: auto;
    filter: ${props => props.$scrolled ? 'brightness(1)' : 'brightness(1) drop-shadow(0 2px 4px rgba(0,0,0,0.3))'};
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    img {
      height: 40px;
    }
  }
`;

const NavMenu = styled.nav.withConfig({
  shouldForwardProp: (prop) => !['$isOpen'].includes(prop),
})`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 991px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
    height: 100dvh;
    width: 100%;
    max-width: 350px;
    background: #000000;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    flex-direction: column;
    padding: 2rem 2rem 2rem 2rem;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease;
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
    z-index: 10000;
    overflow-y: auto;

    ${props => props.$isOpen && `
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    `}
  }
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
`;

const NavLink = styled.a.withConfig({
  shouldForwardProp: (prop) => !['$scrolled'].includes(prop),
})`
  color: var(--text-dark);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  text-shadow: ${props => props.$scrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.5)'};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 991px) {
    font-size: 1.2rem;
    padding: 0.75rem 0;
    text-shadow: none;
    width: 100%;
    color: var(--text-dark);
    
    &:hover {
      color: white;
    }

    &::after {
      display: none;
    }
  }
`;

const DropdownContainer = styled.div`
  position: relative;

  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 991px) {
    width: 100%;
    
    &:hover .dropdown-menu {
      transform: none;
    }
  }
`;

const DropdownMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$mobileOpen'].includes(prop),
})`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  padding: 1rem 0;
  min-width: 250px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 2200;

  @media (max-width: 991px) {
    position: static;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: none;
    border: none;
    border-radius: var(--border-radius);
    box-shadow: none;
    min-width: auto;
    width: 100%;
    transform: none;
    opacity: ${props => props.$mobileOpen ? '1' : '0'};
    visibility: ${props => props.$mobileOpen ? 'visible' : 'hidden'};
    max-height: ${props => props.$mobileOpen ? '300px' : '0'};
    overflow: hidden;
    margin-top: 0.5rem;
    padding: ${props => props.$mobileOpen ? '1rem' : '0'};
    transition: all 0.3s ease;
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  color: var(--text-secondary);
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  outline: none;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    outline: none;
  }

  &:active {
    color: white;
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 991px) {
    padding: 0.75rem;
    font-size: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--text-secondary);
    background: transparent;
    
    &:hover {
      color: white;
      background: rgba(255, 255, 255, 0.1);
    }

    &:focus {
      color: white;
      background: rgba(255, 255, 255, 0.1);
      outline: none;
    }

    &:active {
      color: white;
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;

const DropdownArrow = styled.span.withConfig({
  shouldForwardProp: (prop) => !['$isOpen'].includes(prop),
})`
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

  @media (max-width: 991px) {
    margin-left: auto;
  }
`;

const CTAButton = styled.a`
  background: white;
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid white;

  &:hover {
    background: transparent;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 991px) {
    margin-top: 2rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    align-self: stretch;
  }
`;

const MenuButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['$isOpen'].includes(prop),
})`
  display: none;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.75rem;
  color: white;
  transition: all 0.3s ease;
  width: 44px;
  height: 44px;
  z-index: 10001;
  position: relative;
  font-family: inherit;
  opacity: 1;
  visibility: visible;
  
  &:hover {
    background: rgba(0, 0, 0, 0.95);
    border-color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    border-color: white;
  }

  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.$isOpen && `
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    `}
  }
`;

const CloseButton = styled.button`
  display: none;
  
  @media (max-width: 991px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 10002;
    
    &:hover {
      color: var(--text-secondary);
    }
  }
`;

const MobileLogo = styled.div`
  display: none;
  
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    width: 100%;
    
    img {
      height: 40px;
      width: auto;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const heroHeight = window.innerHeight * 0.7; // Roughly when we're past hero
      
      if (offset > heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
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
    closeMenus();
  };

  return (
    <>
      <NavbarContainer $scrolled={scrolled}>
        <NavbarWrapper>
          <Logo href="/" $scrolled={scrolled}>
            <Image 
              src={IMAGES.logo.main}
              alt="William Johnson Flooring Logo" 
              width={225}
              height={75}
              priority
            />
          </Logo>

          <NavMenu $isOpen={isOpen}>
            <CloseButton onClick={closeMenus}>×</CloseButton>
            
            <MobileLogo>
              <Image 
                src={IMAGES.logo.main}
                alt="William Johnson Flooring Logo" 
                width={180}
                height={60}
                priority
              />
            </MobileLogo>
            
            <NavItem>
              <DropdownContainer>
                <NavLink 
                  onClick={toggleMobileServices}
                  $scrolled={scrolled}
                >
                  Services <DropdownArrow $isOpen={mobileServicesOpen}>▼</DropdownArrow>
                </NavLink>
                <DropdownMenu className="dropdown-menu" $mobileOpen={mobileServicesOpen}>
                  <DropdownLink href="/services/real-wood-flooring" onClick={closeMenus}>
                    Real Wood Flooring
                  </DropdownLink>
                  <DropdownLink href="/services/lvt-installation" onClick={closeMenus}>
                    LVT Installation
                  </DropdownLink>
                  <DropdownLink href="/services/laminate-flooring" onClick={closeMenus}>
                    Laminate Flooring
                  </DropdownLink>
                  <DropdownLink href="/services/carpet-installation" onClick={closeMenus}>
                    Carpet Installation
                  </DropdownLink>
                  <DropdownLink href="/services/commercial-flooring" onClick={closeMenus}>
                    Commercial Flooring
                  </DropdownLink>
                </DropdownMenu>
              </DropdownContainer>
            </NavItem>
            
            <NavLink 
              onClick={() => scrollToSection('about-us')}
              $scrolled={scrolled}
            >
              About us
            </NavLink>
            <NavLink 
              onClick={() => scrollToSection('our-work')}
              $scrolled={scrolled}
            >
              Our Work
            </NavLink>
            <CTAButton 
              onClick={() => scrollToSection('free-quote')}
            >
              Get Free Quote
            </CTAButton>
          </NavMenu>

          <MenuButton onClick={toggleMenu} $isOpen={isOpen}>
            ☰
          </MenuButton>
        </NavbarWrapper>
      </NavbarContainer>
      
      {/* Removed MobileOverlay - no longer needed */}
    </>
  );
};

export default Navbar; 