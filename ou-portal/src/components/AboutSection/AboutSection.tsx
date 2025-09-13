import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './AboutSection.module.css';

interface InfoCard {
  icon: string;
  title: string;
  description: string;
}

interface AboutSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  infoCards?: InfoCard[];
  backgroundImage?: string;
  principalName?: string;
  principalTitle?: string;
  principalMessage?: string;
  principalDescription?: string;
  principalImage?: string;
  principalImageSize?: {
    width: string;
    height: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'Giới thiệu Trường',
  description = 'Dưới đây là phần giới thiệu tổng quan về trường chúng tôi, từ cổng trường đến toàn bộ các cơ sở vật chất hiện có...',
  buttonText = 'Xem chi tiết',
  buttonLink = '/about',
  backgroundImage = '/about-bg.jpg',
  principalName = 'GS.TS. Nguyễn Minh Hà',
  principalTitle = 'Hiệu trưởng Trường',
  principalMessage = 'Lời chúc mừng kỷ niệm 35 năm thành lập Trường Đại học Mở Thành phố Hồ Chí Minh',
  principalDescription = 'Từ quy mô ban đầu chỉ với 02 khoa và 13 cán bộ, đến nay Trường Đại học Mở TP.HCM đã phát triển thành một cơ sở giáo dục đa ngành với 13 khoa, 03 trung tâm đào tạo và hơn 850 cán bộ viên chức, người lao động, trong đó hơn 40% có trình độ tiến sĩ trở lên. Bên cạnh đó, hệ thống đào tạo từ xa và vừa học vừa làm đã phủ rộng hơn 40 tỉnh, thành từ Bình Định đến Cà Mau.',
  principalImage = '/principal.jpg',
  principalImageSize = { width: '100%', height: '342px' },
  infoCards = [
    {
      icon: '🏢', //xem lại icon
      title: 'Cơ sở vật chất',
      description: 'Phòng học hiện đại, thư viện với 50.000 đầu sách, phòng thí nghiệm, phòng máy tính, khu thể thao...'
    },
    {
      icon: '📍',
      title: 'Địa chỉ',
      description: 'Địa chỉ 1: 97 Võ Văn Tần, P.Xuân Hòa, TP Hồ Chí Minh.'
    },
    {
      icon: '📜',
      title: 'Lịch sử',
      description: 'Thành lập ngày 15/06/1990...'
    },
    {
      icon: '🏆',
      title: 'Thành tựu',
      description: 'Top 1201-1500 Thế giới theo Times Higher Education năm 2025'
    }
  ]
}) => {
  return (
    <div className="about-section">
      <Container>
        {/* Principal Message Section */}
        <Row className="principal-section">
          <Col lg={6}>
            <div className="principal-video">
              <div className="video-container">
                <img 
                  src={principalImage} 
                  alt="Principal" 
                  className="principal-image"
                  style={{
                    width: principalImageSize.width,
                    height: principalImageSize.height
                  }}
                />
                <div className="video-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="principal-content">
              <h2 className="principal-message">
                {principalMessage}
              </h2>
              <h3 className="principal-name">
                {principalName} – {principalTitle}
              </h3>
              <p className="principal-description">
                {principalDescription}
              </p>
              <Button 
                href={buttonLink}
                className="principal-button"
                size="lg"
              >
                {buttonText}
              </Button>
            </div>
          </Col>
        </Row>

        {/* School Introduction Section */}
        <Row className="school-intro-section">
          <Col lg={4}>
            <div className="intro-content">
              <h2 className="intro-title">
                {title}
              </h2>
              <div className="title-underline"></div>
              <p className="intro-description">
                {description}
              </p>
              <Button 
                href={buttonLink}
                className="intro-button"
                size="lg"
              >
                {buttonText}
              </Button>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {infoCards.map((card, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Card className="info-card">
                    <Card.Body>
                      <div className="card-icon">
                        {card.icon}
                      </div>
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-description">{card.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
