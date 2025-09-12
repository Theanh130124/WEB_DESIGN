import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.module.css';

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
  logo = '/logo.png',
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
    { name: 'Twitter', icon: '🐦', url: '#' },  //xem lại icon
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' }
  ],
  copyrightText = 'Copyright © 2025 Trường Đại học Mở TP.HCM. All rights reserved. Hosting by Trần Thế Anh & Võ Duy Khang'
}) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Logo" className="footer-logo-img" />
              <div className="footer-logo-text">
                <div className="footer-school-name">{schoolName}</div>
                <div className="footer-school-name-en">{schoolNameEn}</div>
              </div>
            </div>
            <div className="footer-contact">
              <p><strong>Địa chỉ:</strong> {address}</p>
              <p><strong>Số điện thoại:</strong> {phone}</p>
              <p><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
            </div>
          </Col>
          
          <Col lg={2} className="footer-section">
            <h5 className="footer-section-title">Khám phá</h5>
            <ul className="footer-links">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3} className="footer-section">
            <h5 className="footer-section-title">Thông tin giảng viên</h5>
            <ul className="footer-links">
              {facultyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3} className="footer-section">
            <h5 className="footer-section-title">Mạng xã hội</h5>
            <div className="social-media">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </Col>
        </Row>
        
        <div className="footer-divider"></div>
        
        <Row>
          <Col>
            <div className="footer-copyright">
              {copyrightText}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
