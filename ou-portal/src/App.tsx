import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import GallerySection from './components/GallerySection/GallerySection';
import Footer from './components/Footer/Footer';

// Theme configuration
import { defaultTheme, applyTheme } from './config/theme';

// Pages
const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <GallerySection />
  </>
);

const AboutPage = () => (
  <div className="page-content">
    <div className="container py-5">
      <h1>Về chúng tôi</h1>
      <p>Trang giới thiệu về trường đại học...</p>
    </div>
  </div>
);

const FacultyPage = () => (
  <div className="page-content">
    <div className="container py-5">
      <h1>Giảng viên</h1>
      <p>Thông tin về đội ngũ giảng viên...</p>
    </div>
  </div>
);

const AdmissionsPage = () => (
  <div className="page-content">
    <div className="container py-5">
      <h1>Tuyển sinh</h1>
      <p>Thông tin tuyển sinh...</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="page-content">
    <div className="container py-5">
      <h1>Liên hệ</h1>
      <p>Thông tin liên hệ...</p>
    </div>
  </div>
);

const NewsPage = () => (
  <div className="page-content">
    <div className="container py-5">
      <h1>Tin tức</h1>
      <p>Tin tức và sự kiện...</p>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Apply default theme on app load
    applyTheme(defaultTheme);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/gallery" element={<GallerySection />} />
            <Route path="/introduction" element={<AboutPage />} />
            <Route path="/admissions-guide" element={<AdmissionsPage />} />
            <Route path="/address" element={<ContactPage />} />
            <Route path="/facilities" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
