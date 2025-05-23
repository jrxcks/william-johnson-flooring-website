'use client'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { generateGalleryImages } from '../utils/imageUrls';

const GallerySection = styled.section`
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
    background: radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
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

const GalleryWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-premium);
`;

const GalleryTrack = styled.div.withConfig({
  shouldForwardProp: (prop) => !['translateX'].includes(prop),
})`
  display: flex;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${props => props.translateX}%);
`;

const GallerySlide = styled.div`
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 1rem;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
    border-color: white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`;

const Dot = styled.button.withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: white;
    transform: scale(1.2);
  }

  ${props => props.active && `
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border: 2px solid white;
      border-radius: 50%;
      opacity: 0.5;
    }
  `}
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: var(--text-secondary);
  font-style: italic;
  padding: 4rem 2rem;
`;

const InstructionBox = styled.div`
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  
  h3 {
    color: var(--text-dark);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
  
  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    color: white;
    font-family: 'Courier New', monospace;
  }
`;

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [validImages, setValidImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to check if an image exists
  const checkImageExists = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => resolve(null);
      img.src = url;
    });
  };

  // Load and validate all gallery images
  useEffect(() => {
    const loadGalleryImages = async () => {
      setLoading(true);
      const potentialImages = generateGalleryImages();
      
      // Check which images actually exist
      const imageChecks = await Promise.all(
        potentialImages.map(url => checkImageExists(url))
      );
      
      // Filter out null values (non-existing images)
      const existingImages = imageChecks.filter(url => url !== null);
      
      setValidImages(existingImages);
      setLoading(false);
    };

    loadGalleryImages();
  }, []);

  // Organize images into slides of 9 images each
  const organizeIntoSlides = (images) => {
    const slides = [];
    const imagesPerSlide = 9;
    
    for (let i = 0; i < images.length; i += imagesPerSlide) {
      slides.push(images.slice(i, i + imagesPerSlide));
    }
    
    return slides;
  };

  const gallerySlides = organizeIntoSlides(validImages);

  useEffect(() => {
    if (gallerySlides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [gallerySlides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  if (loading) {
    return (
      <GallerySection id="our-work">
        <Container>
          <SectionHeader>
            <SectionTitle>Our Recent Work</SectionTitle>
            <SectionSubtitle>Loading gallery images...</SectionSubtitle>
          </SectionHeader>
          <LoadingMessage>Checking for gallery images...</LoadingMessage>
        </Container>
      </GallerySection>
    );
  }

  if (validImages.length === 0) {
    return (
      <GallerySection id="our-work">
        <Container>
          <SectionHeader>
            <SectionTitle>Our Recent Work</SectionTitle>
            <SectionSubtitle>
              Explore our portfolio of stunning flooring installations that showcase 
              our craftsmanship and attention to detail.
            </SectionSubtitle>
          </SectionHeader>
          
          <InstructionBox>
            <h3>🖼️ Add Your Gallery Images</h3>
            <p>To display your project photos, simply:</p>
            <p>1. Drop your images into: <code>public/images/gallery/</code></p>
            <p>2. Name them: <code>project-1.jpg</code>, <code>project-2.jpg</code>, etc.</p>
            <p>3. Or use descriptive names: <code>kitchen-lvt-installation.jpg</code></p>
            <p>4. Supported formats: JPG, PNG, WebP</p>
            <p>5. Refresh the page to see them appear!</p>
          </InstructionBox>
        </Container>
      </GallerySection>
    );
  }

  return (
    <GallerySection id="our-work">
      <Container>
        <SectionHeader>
          <SectionTitle>Our Recent Work</SectionTitle>
          <SectionSubtitle>
            Explore our portfolio of stunning flooring installations that showcase 
            our craftsmanship and attention to detail.
          </SectionSubtitle>
        </SectionHeader>

        <GalleryWrapper>
          <GalleryTrack translateX={-currentSlide * 100}>
            {gallerySlides.map((slide, slideIndex) => (
              <GallerySlide key={slideIndex}>
                {slide.map((image, imageIndex) => (
                  <GalleryItem key={imageIndex}>
                    <img
                      src={image}
                      alt={`Gallery image ${slideIndex * 9 + imageIndex + 1}`}
                      loading="lazy"
                    />
                  </GalleryItem>
                ))}
              </GallerySlide>
            ))}
          </GalleryTrack>
        </GalleryWrapper>

        {gallerySlides.length > 1 && (
          <NavigationDots>
            {gallerySlides.map((_, index) => (
              <Dot
                key={index}
                active={index === currentSlide}
                onClick={() => goToSlide(index)}
              />
            ))}
          </NavigationDots>
        )}
      </Container>
    </GallerySection>
  );
};

export default Gallery; 