import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface FooterLink {
  label: string;
  path: string;
}

interface SocialMedia {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface FooterProps {
  logo?: string;
  schoolName?: string;
  schoolNameEn?: string;
  address?: string;
  phone?: string;
  website?: string;
  email?: string;
  exploreLinks?: FooterLink[];
  facultyLinks?: FooterLink[];
  socialMedia?: SocialMedia[];
  copyrightText?: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
};

const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
};

const socialIconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 10
    }
  },
  hover: {
    scale: 1.2,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
};

const linkVariants = {
  hover: {
    x: 5,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
};

const Footer: React.FC<FooterProps> = ({
  logo = '/default/logo-default.jpg',
  schoolName = 'TRƯỜNG ĐẠI HỌC MỞ TP. HỒ CHÍ MINH',
  schoolNameEn = 'HO CHI MINH CITY OPEN UNIVERSITY',
  address = '97 Võ Văn Tần, Phường 6, Quận 3, TP. Hồ Chí Minh',
  phone = '028-39207639 hoặc 028-39207640',
  website = 'https://www.hcmou.edu.vn',
  email = 'ou@ou.edu.vn',
  exploreLinks = [
    { label: 'Lời giới thiệu', path: '/introduction' },
    { label: 'Hình ảnh nhà trường', path: '/gallery' },
    { label: 'Giới thiệu trường', path: '/about' }
  ],
  facultyLinks = [
    { label: 'Tuyển sinh', path: '/admissions' },
    { label: 'Hướng dẫn tuyển sinh', path: '/admissions-guide' },
    { label: 'Địa chỉ', path: '/address' },
    { label: 'Cơ sở vật chất', path: '/facilities' },
    { label: 'Liên hệ', path: '/contact' }
  ],
  socialMedia = [
    { name: 'Facebook', icon: <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />, url: '#' },
    { name: 'Twitter', icon: <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />, url: '#' },
    { name: 'Instagram', icon: <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />, url: '#' },
  ],
  copyrightText = 'Copyright © 2025 Trường Đại học Mở TP.HCM. All rights reserved. Hosting by Trần Thế Anh & Võ Duy Khang'
}) => {
  return (
    <motion.footer 
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div 
        className={styles.verticalDivider}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      ></motion.div>
      
      <Container>
        <Row className={styles.footerContent}>
          <Col lg={4} className={styles.footerSection}>
            <motion.div 
              className={styles.footerLogoSection}
              variants={itemVariants}
            >
              <motion.img 
                src={logo} 
                alt="Logo" 
                className={styles.footerLogo}
                variants={logoVariants}
                whileHover={{ rotate: 2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className={styles.footerSchoolNames}>
                <motion.div 
                  className={styles.footerSchoolName}
                  variants={itemVariants}
                >
                  {schoolName}
                </motion.div>
                <motion.div 
                  className={styles.footerSchoolNameEn}
                  variants={itemVariants}
                >
                  {schoolNameEn}
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className={styles.footerContact}
              variants={itemVariants}
            >
              <p><strong>Địa chỉ:</strong> {address}</p>
              <p><strong>Số điện thoại:</strong> {phone}</p>
              <p><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
            </motion.div>
          </Col>
          
          <Col lg={2} className={styles.footerSection}>
            <motion.h5 
              className={styles.footerSectionTitle}
              variants={itemVariants}
            >
              Khám phá
            </motion.h5>
            <ul className={styles.footerLinks}>
              {exploreLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <Link to={link.path} className={styles.footerLink}>
                    <motion.span variants={linkVariants}>
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3} className={styles.footerSection}>
            <motion.h5 
              className={styles.footerSectionTitle}
              variants={itemVariants}
            >
              Thông tin giảng viên
            </motion.h5>
            <ul className={styles.footerLinks}>
              {facultyLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <Link to={link.path} className={styles.footerLink}>
                    <motion.span variants={linkVariants}>
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3} className={styles.footerSection}>
            <motion.h5 
              className={styles.footerSectionTitle}
              variants={itemVariants}
            >
              Mạng xã hội
            </motion.h5>
            <div className={styles.socialMedia}>
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.span 
                    className={styles.socialIcon}
                    variants={socialIconVariants}
                  >
                    {social.icon}
                  </motion.span>
                  <span className={styles.socialName}>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      
      <motion.div 
        className={styles.footerDivider}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      ></motion.div>
      
      <motion.div 
        className={styles.footerCopyright}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {copyrightText}
      </motion.div>
    </motion.footer>
  );
};

export default Footer;