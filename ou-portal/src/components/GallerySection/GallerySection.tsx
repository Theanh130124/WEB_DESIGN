import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
}

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
  buttonText = 'Xem thêm',
  buttonLink = '/gallery'
}) => {
  return (
    <div className="gallery-section">
      <Container>
        <Row>
          <Col>
            <h2 className="gallery-title">
              {title}
            </h2>
            <div className="title-underline"></div>
          </Col>
        </Row>
        
        <Row className="gallery-grid">
          {images.map((image, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <div className="gallery-item">
                <div className="image-container">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="image-title">
                      {image.title || image.alt}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <Row>
          <Col className="text-center">
            <Button 
              href={buttonLink}
              className="gallery-button"
              size="lg"
            >
              {buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GallerySection;
