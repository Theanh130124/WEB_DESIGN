import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.module.css';

interface HeroSectionProps {
  backgroundImage?: string;
  coreValuesTitle?: string;
  coreValuesText?: string;
  buttonText?: string;
  buttonLink?: string;
  overlayOpacity?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = '/hero-bg.jpg',
  coreValuesTitle = 'GIÁ TRỊ CỐT LÕI',
  coreValuesText = 'Mở rộng tri thức, Gắn kết thực tiễn, Phục vụ cộng đồng, Chuyên nghiệp, hiệu quả, sáng tạo và thân thiện',
  buttonText = 'Liên hệ',
  buttonLink = '/contact',
  overlayOpacity = 0.7
}) => {
  return (
    <div 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container>
        <Row className="align-items-center" style={{ minHeight: '440px' }}>
          <Col lg={8}>
            <div className="hero-content">
              <div className="core-values-title">
                {coreValuesTitle}
              </div>
              <div className="core-values-text">
                {coreValuesText}
              </div>
              <Button 
                href={buttonLink}
                className="hero-button"
                size="lg"
              >
                {buttonText}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
