import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface FooterLink {
  label: string;
  path: string;
}

interface SocialMedia {
  name: string;
  icon: string;
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

const Footer: React.FC<FooterProps> = ({
  logo = '/default/logo-default.jpg', // Sửa đường dẫn để đồng bộ với Header
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
  // Cập nhật icon mạng xã hội đẹp hơn
  socialMedia = [
    { name: 'Facebook', icon: <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />, url: '#' },
    { name: 'Twitter', icon: <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />, url: '#' },
    { name: 'Instagram', icon: <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />, url: '#' },
  ],
  copyrightText = 'Copyright © 2025 Trường Đại học Mở TP.HCM. All rights reserved. Hosting by Trần Thế Anh & Võ Duy Khang'
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.verticalDivider}></div>
      <Container>
        <Row className={styles.footerContent}>
          <Col lg={4} className={styles.footerSection}>
            <div className={styles.footerLogoSection}>
              <img 
                src={logo} 
                alt="Logo" 
                className={styles.footerLogo}
              />
              <div className={styles.footerSchoolNames}>
                <div className={styles.footerSchoolName}>{schoolName}</div>
                <div className={styles.footerSchoolNameEn}>{schoolNameEn}</div>
              </div>
            </div>
            <div className={styles.footerContact}>
              <p><strong>Địa chỉ:</strong> {address}</p>
              <p><strong>Số điện thoại:</strong> {phone}</p>
              <p><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
            </div>
          </Col>
          
          <Col lg={2} className={styles.footerSection}>
            <h5 className={styles.footerSectionTitle}>Khám phá</h5>
            <ul className={styles.footerLinks}>
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3} className={styles.footerSection}>
            <h5 className={styles.footerSectionTitle}>Thông tin giảng viên</h5>
            <ul className={styles.footerLinks}>
              {facultyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3} className={styles.footerSection}>
            <h5 className={styles.footerSectionTitle}>Mạng xã hội</h5>
            <div className={styles.socialMedia}>
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <span className={styles.socialName}>{social.name}</span>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className={styles.footerDivider}></div>
      
      <div className={styles.footerCopyright}>
        {copyrightText}
      </div>
    </footer>
  );
};

export default Footer;