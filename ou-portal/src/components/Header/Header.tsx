import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
    { label: 'Triển lãm lịch sử', path: '/history' }
  ],
  coreValuesTitle = 'GIÁ TRỊ CỐT LÕI',
  coreValuesText = 'Mở rộng tri thức, Gắn kết thực tiễn, Phục vụ cộng đồng, Chuyên nghiệp, hiệu quả, sáng tạo và thân thiện',
  buttonText = 'Liên hệ',
  buttonLink = '/contact',
  overlayOpacity = 0.7
}) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Hiệu ứng load trang
    setIsLoaded(true);
    
    // Hiệu ứng scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Tách coreValuesText thành các từ để animate riêng lẻ
  const coreValuesWords = coreValuesText.split(' ');
  
  return (
    <div className={styles.headerSection}>
      {/* Background image với hiệu ứng parallax */}
      <motion.div 
        className={styles.headerBackground}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage})`
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      {/* Navigation với hiệu ứng xuất hiện khi scroll */}
      <motion.div 
        className={`${styles.headerNavigation} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <Navbar expand="lg" className={styles.headerNavbar}>
            <Navbar.Brand className={styles.headerBrand}>
              <motion.img 
                src={logo} 
                alt="Logo" 
                className={styles.headerLogo}
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
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
                      <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                      >
                        {item.label}
                      </motion.span>
                      {isActive && (
                        <motion.div 
                          className={styles.navIndicator}
                          layoutId="navIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </motion.div>
      
      {/* Header Content với hiệu ứng typewriter và từ xuất hiện tuần tự */}
      <Container className={styles.headerContentContainer}>
        <Row>
          <Col lg={12}>
            <div className={styles.coreValuesSection}>
              <motion.div 
                className={styles.coreValuesTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {coreValuesTitle}
              </motion.div>
              <div className={styles.coreValuesText}>
                {coreValuesWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.05 + 0.5,
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      color: "#0193DC",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  href={buttonLink}
                  className={styles.headerContactButton}
                >
                  {buttonText}
                </Button>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;