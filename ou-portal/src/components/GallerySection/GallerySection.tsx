import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, Variants } from 'framer-motion';
import './GallerySection.module.css';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface GallerySectionProps {
  title?: string;
  images?: GalleryImage[];
  buttonText?: string;
  buttonLink?: string;
  imageSize?: {
    width: string;
    height: string;
  };
}

// Animation variants với kiểu dáng TypeScript chính xác
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const titleVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const buttonContainerVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const buttonHoverVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

const imageHoverVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4
    }
  }
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const titleHoverVariants: Variants = {
  hidden: { y: 20 },
  hover: {
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const GallerySection: React.FC<GallerySectionProps> = ({
  title = 'Hình ảnh nhà trường',
  images = [
    {
      src: '/gallery/school-building-1.jpg',
      alt: 'School Building 1',
      title: 'Main Campus Building'
    },
    {
      src: '/gallery/school-building-2.jpg',
      alt: 'School Building 2',
      title: 'Campus Aerial View'
    },
    {
      src: '/gallery/graduation-ceremony.jpg',
      alt: 'Graduation Ceremony',
      title: 'Graduation Ceremony 2025'
    },
    {
      src: '/gallery/students-studying.jpg',
      alt: 'Students Studying',
      title: 'Students in Library'
    },
    {
      src: '/gallery/computer-lab.jpg',
      alt: 'Computer Lab',
      title: 'Computer Laboratory'
    },
    {
      src: '/gallery/classroom.jpg',
      alt: 'Classroom',
      title: 'Modern Classroom'
    }
  ],


  imageSize = { width: '100%', height: '280px' }
}) => {
  return (
    <motion.div 
      className="gallery-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <Container className='mt-4 mb-4'>
        
        <Row>
          <Col>
            <motion.h2 
              className="gallery-title"
              variants={titleVariants}
            >
              {title}
            </motion.h2>
            <motion.div 
              className="title-underline"
              variants={titleVariants}
            ></motion.div>
          </Col>
        </Row>
        
        <Row className="gallery-grid">
          {images.map((image, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <motion.div 
                className="gallery-item"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="image-container">
                  <motion.img 
                    src={image.src} 
                    alt={image.alt}
                    className="gallery-image"
                    loading="lazy"
                    style={{
                      width: imageSize.width,
                      height: imageSize.height
                    }}
                    variants={imageHoverVariants}
                    whileHover="hover"
                  />
                  <motion.div 
                    className="image-overlay"
                    variants={overlayVariants}
                    whileHover="hover"
                    initial="hidden"
                  >
                    <motion.div 
                      className="image-title"
                      variants={titleHoverVariants}
                    >
                      {image.title || image.alt}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        
        <Row>
          <Col className="text-center">
            <motion.div 
              variants={buttonContainerVariants}
              whileHover="hover"
            >
            </motion.div>
          </Col>
        </Row>
        <Row className='mt-4 mb-4'>

        </Row>
      </Container>
    </motion.div>
  );
};

export default GallerySection;