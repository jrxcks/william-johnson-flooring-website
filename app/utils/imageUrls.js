// Centralized image URL management
// Update these paths after placing your images in public/images/

export const IMAGES = {
  // Logos
  logo: {
    main: '/images/logos/logo.svg',
    karndean: '/images/logos/karndean-logo.svg',
    oe: '/images/logos/oe-logo.svg',
    partner3: '/images/logos/2020inc-logo.svg'
  },

  // Service Icons
  services: {
    wood: '/images/services/wood-flooring-icon.svg',
    tile: '/images/services/tile-icon.svg',
    lvt: '/images/services/lvt-icon.svg',
    carpet: '/images/services/carpet-icon.svg'
  },

  // Hero Background Images (full slide backgrounds)
  heroBackgrounds: {
    slide1: '/images/hero/backgrounds/hero-bg-1.jpg',
    slide2: '/images/hero/backgrounds/hero-bg-2.jpg', 
    slide3: '/images/hero/backgrounds/hero-bg-3.jpg',
    slide4: '/images/hero/backgrounds/hero-bg-4.jpg'
  },

  // Testimonial Photos
  testimonials: {
    daveFarr: '/images/testimonials/dave-farr.jpg',
    kateJackson: '/images/testimonials/kate-jackson.jpg',
    sarahThompson: '/images/testimonials/sarah-thompson.jpg'
  }
};

// Dynamic Gallery System - Just add images to public/images/gallery/ folder!
// Supported formats: .jpg, .jpeg, .png, .webp
export const generateGalleryImages = () => {
  const galleryImages = [];
  const imageFormats = ['jpg', 'jpeg', 'png', 'webp'];
  
  // You can easily add more images by just putting them in public/images/gallery/
  // with any descriptive name you want!
  const imageNames = [
    'project-1', 'project-2', 'project-3', 'project-4', 'project-5', 'project-6',
    'project-7', 'project-8', 'project-9', 'project-10', 'project-11', 'project-12',
    'project-13', 'project-14', 'project-15', 'project-16', 'project-17', 'project-18',
    'project-19', 'project-20', 'project-21', 'project-22', 'project-23', 'project-24',
    'project-25', 'project-26', 'project-27', 'project-28', 'project-29', 'project-30',
    
    // Or use descriptive names like these:
    'kitchen-lvt-installation',
    'bathroom-luxury-vinyl',
    'living-room-oak-flooring',
    'bedroom-carpet-fitting',
    'office-commercial-flooring',
    'hallway-laminate',
    'dining-room-hardwood',
    'conservatory-waterproof-lvt',
    'stairs-carpet-runner',
    'entrance-hall-tiles',
    'master-bedroom-engineered-wood',
    'guest-bathroom-vinyl',
    'family-room-natural-oak',
    'modern-kitchen-grey-lvt',
    'traditional-lounge-carpet',
    'contemporary-bathroom-tiles',
    'home-office-laminate',
    'luxury-bedroom-wool-carpet',
    'open-plan-living-wood',
    'utility-room-waterproof-vinyl'
  ];
  
  // Try each image name with different formats
  imageNames.forEach(name => {
    imageFormats.forEach(format => {
      galleryImages.push(`/images/gallery/${name}.${format}`);
    });
  });
  
  return galleryImages;
};

// Static gallery for fallback (in case you want to manually specify images)
export const STATIC_GALLERY = {
  // You can manually add specific images here if needed
  featured1: '/images/gallery/featured-project-1.jpg',
  featured2: '/images/gallery/featured-project-2.jpg',
  featured3: '/images/gallery/featured-project-3.jpg'
};

// Fallback to Webflow URLs if local images aren't available yet
export const WEBFLOW_IMAGES = {
  logo: {
    main: 'https://cdn.prod.website-files.com/674bb7d56541130c2b3a3a27/674bb7efb061743931a227e3_svg-logo.svg'
  },
  // ... you can keep the original URLs as fallbacks
};

// Helper function to check if image exists and fallback if needed
export const getImageUrl = (localPath, fallbackUrl = null) => {
  // In development, you might want to add logic to check if image exists
  return localPath || fallbackUrl;
}; 