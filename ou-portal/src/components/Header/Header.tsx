import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.module.css';

interface HeaderProps {
  logo?: string;
  schoolName?: string;
  schoolNameEn?: string;
  navItems?: Array<{
    label: string;
    path: string;
    active?: boolean;
  }>;
}

const Header: React.FC<HeaderProps> = ({
  logo = '/logo.png',
  schoolName = 'TRƯỜNG ĐẠI HỌC MỞ TP. HỒ CHÍ MINH',
  schoolNameEn = 'HO CHI MINH CITY OPEN UNIVERSITY',
  navItems = [
    { label: 'Trang Chủ', path: '/', active: true },
    { label: 'Về chúng tôi', path: '/about' },
    { label: 'Giảng viên', path: '/faculty' },
    { label: 'Tuyển sinh', path: '/admissions' },
    { label: 'Liên hệ', path: '/contact' },
    { label: 'Tin tức', path: '/news' }
  ]
}) => {
  return (
    <div className="header-container">
      <div className="header-bg">
        <Container fluid className="px-0">
          <Navbar expand="lg" className="custom-navbar">
            <Container>
              <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                <div className="logo-container">
                  <img src={logo} alt="Logo" className="logo-img" />
                  <div className="logo-text">
                    <div className="school-name">{schoolName}</div>
                    <div className="school-name-en">{schoolNameEn}</div>
                  </div>
                </div>
              </Navbar.Brand>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  {navItems.map((item, index) => (
                    <Nav.Link
                      key={index}
                      as={Link}
                      to={item.path}
                      className={`nav-link ${item.active ? 'active' : ''}`}
                    >
                      {item.label}
                    </Nav.Link>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
