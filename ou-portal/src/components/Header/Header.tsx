import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

interface HeaderProps {
  backgroundImage?: string;
  logo?: string;
  schoolName?: string;
  schoolNameEn?: string;
  navItems?: Array<{
    label: string;
    path: string;
  }>;
  coreValuesTitle?: string;
  coreValuesText?: string;
  buttonText?: string;
  buttonLink?: string;
  overlayOpacity?: number;
}

const Header: React.FC<HeaderProps> = ({
  backgroundImage = '/default/themeheader.jpg',
  logo = '/default/logo-default.jpg',
  schoolName = 'TRƯỜNG ĐẠI HỌC MỞ TP. HỒ CHÍ MINH',
  schoolNameEn = 'HO CHI MINH CITY OPEN UNIVERSITY',
  navItems = [
    { label: 'Trang Chủ', path: '/' },
    { label: 'Về chúng tôi', path: '/about' },
    { label: 'Giảng viên', path: '/faculty' },
    { label: 'Tuyển sinh', path: '/admissions' },
    { label: 'Liên hệ', path: '/contact' },
    { label: 'Tin tức', path: '/news' }
  ],
  coreValuesTitle = 'GIÁ TRỊ CỐT LÕI',
  coreValuesText = 'Mở rộng tri thức, Gắn kết thực tiễn, Phục vụ cộng đồng, Chuyên nghiệp, hiệu quả, sáng tạo và thân thiện',
  buttonText = 'Liên hệ',
  buttonLink = '/contact',
  overlayOpacity = 0.7
}) => {
  const location = useLocation();
  
  return (
    <div className={styles.headerSection}>
      {/* Background image with overlay */}
      <div 
        className={styles.headerBackground}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage})`
        }}
      ></div>
      
      {/* Navigation */}
      <div className={styles.headerNavigation}>
        <Container>
          <Navbar expand="lg" className={styles.headerNavbar}>
            <Navbar.Brand className={styles.headerBrand}>
              <img 
                src={logo} 
                alt="Logo" 
                className={styles.headerLogo}
              />
              <div className={styles.headerSchoolNames}>
                <div className={styles.headerSchoolName}>{schoolName}</div>
                <div className={styles.headerSchoolNameEn}>{schoolNameEn}</div>
              </div>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.headerNavToggle} />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`ms-auto ${styles.headerNavLinks}`}>
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Nav.Link
                      key={index}
                      as={Link}
                      to={item.path}
                      className={`${styles.headerNavLink} ${isActive ? styles.active : ''}`}
                    >
                      {item.label}
                      {isActive && <div className={styles.navIndicator}></div>}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      
      {/* Header Content */}
      <Container className={styles.headerContentContainer}>
        <Row>
          <Col lg={12}>
            <div className={styles.coreValuesSection}>
              <div className={styles.coreValuesTitle}>
                {coreValuesTitle}
              </div>
              <div className={styles.coreValuesText}>
                {coreValuesText}
              </div>
              <Button 
                href={buttonLink}
                className={styles.headerContactButton}
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

export default Header;