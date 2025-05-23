'use client'

import React, { useState } from 'react'
import styled from 'styled-components'

const GallerySection = styled.section`
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
    background: radial-gradient(ellipse at 50% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
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
  margin-bottom: 4rem;
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
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const GalleryItem = styled.div`
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  transition: all 0.4s ease;
  cursor: pointer;
  aspect-ratio: 4/3;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
    border-color: white;

    .gallery-overlay {
      opacity: 1;
    }

    .gallery-image {
      transform: scale(1.05);
    }
  }
`

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
`

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
`

const ViewMoreButton = styled.button`
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 auto;
  display: block;
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
  backdrop-filter: blur(10px);
`

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #ff4444;
  }
`

const ServiceGallery = ({ serviceName, serviceSlug }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showAll, setShowAll] = useState(false)

  // Generate service-specific gallery images
  const generateServiceGallery = () => {
    const baseImages = [
      {
        src: `/images/gallery/${serviceSlug}-installation-1.jpg`,
        alt: `${serviceName} installation project 1`,
        title: `Professional ${serviceName} Installation`
      },
      {
        src: `/images/gallery/${serviceSlug}-installation-2.jpg`,
        alt: `${serviceName} installation project 2`,
        title: `Quality ${serviceName} Fitting`
      },
      {
        src: `/images/gallery/${serviceSlug}-installation-3.jpg`,
        alt: `${serviceName} installation project 3`,
        title: `Expert ${serviceName} Work`
      },
      {
        src: `/images/gallery/${serviceSlug}-before-after-1.jpg`,
        alt: `${serviceName} before and after transformation`,
        title: `${serviceName} Transformation`
      },
      {
        src: `/images/gallery/${serviceSlug}-detail-1.jpg`,
        alt: `${serviceName} detail shot`,
        title: `${serviceName} Detail Work`
      },
      {
        src: `/images/gallery/${serviceSlug}-room-complete-1.jpg`,
        alt: `Completed ${serviceName} room`,
        title: `Completed ${serviceName} Project`
      }
    ]

    // Fallback to generic project images if service-specific ones don't exist
    const fallbackImages = [
      {
        src: '/images/gallery/project-1.jpg',
        alt: `${serviceName} installation example`,
        title: `${serviceName} Installation Example`
      },
      {
        src: '/images/gallery/project-2.jpg',
        alt: `${serviceName} fitting example`,
        title: `Professional ${serviceName} Work`
      },
      {
        src: '/images/gallery/project-3.jpg',
        alt: `${serviceName} completed project`,
        title: `${serviceName} Completed Project`
      },
      {
        src: '/images/gallery/project-4.jpg',
        alt: `${serviceName} installation detail`,
        title: `${serviceName} Installation Detail`
      },
      {
        src: '/images/gallery/project-5.jpg',
        alt: `${serviceName} room transformation`,
        title: `${serviceName} Room Transformation`
      },
      {
        src: '/images/gallery/project-6.jpg',
        alt: `${serviceName} expert fitting`,
        title: `Expert ${serviceName} Fitting`
      }
    ]

    return baseImages.concat(fallbackImages)
  }

  const galleryImages = generateServiceGallery()
  const displayImages = showAll ? galleryImages : galleryImages.slice(0, 6)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <>
      <GallerySection>
        <Container>
          <SectionHeader>
            <SectionTitle>Our {serviceName} Work</SectionTitle>
            <SectionSubtitle>
              See the quality and craftsmanship of our professional {serviceName.toLowerCase()} installations.
              Each project showcases our commitment to excellence and attention to detail.
            </SectionSubtitle>
          </SectionHeader>

          <GalleryGrid>
            {displayImages.map((image, index) => (
              <GalleryItem key={index} onClick={() => openModal(image)}>
                <GalleryImage
                  className="gallery-image"
                  src={image.src}
                  alt={image.alt}
                  loading={index < 3 ? "eager" : "lazy"}
                  onError={(e) => {
                    // Fallback to a placeholder or different image if the primary doesn't load
                    e.target.src = `/images/gallery/project-${(index % 6) + 1}.jpg`
                  }}
                />
                <GalleryOverlay className="gallery-overlay">
                  <div>
                    <div style={{ marginBottom: '0.5rem' }}>📸</div>
                    {image.title}
                  </div>
                </GalleryOverlay>
              </GalleryItem>
            ))}
          </GalleryGrid>

          {!showAll && galleryImages.length > 6 && (
            <ViewMoreButton onClick={() => setShowAll(true)}>
              View More Projects →
            </ViewMoreButton>
          )}
        </Container>
      </GallerySection>

      {selectedImage && (
        <Modal onClick={handleBackdropClick}>
          <ModalContent>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              title={selectedImage.title}
            />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default ServiceGallery 