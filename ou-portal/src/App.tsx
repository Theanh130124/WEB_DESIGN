import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FacultyPage from './components/FacultyPage';
import AdmissionsPage from './components/AdmissionsPage';
import ContactPage from './components/ContactPage';
import NewsPage from './components/NewsPage';
import GallerySection from './components/GallerySection/GallerySection';

// Theme configuration
import { defaultTheme, applyTheme } from './config/theme';
function App() {
  useEffect(() => {
    // Apply default theme on app load
    applyTheme(defaultTheme);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header
          backgroundImage={defaultTheme.images.heroBackground}
          logo={defaultTheme.images.logo}
          schoolName={defaultTheme.content.schoolName}
          schoolNameEn={defaultTheme.content.schoolNameEn}
          navItems={defaultTheme.navigation.items}
        />
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
        <Footer
          logo={defaultTheme.images.logo}
          schoolName={defaultTheme.content.schoolName}
          schoolNameEn={defaultTheme.content.schoolNameEn}
          address={defaultTheme.content.contactInfo.address}
          phone={defaultTheme.content.contactInfo.phone}
          website={defaultTheme.content.contactInfo.website}
          email={defaultTheme.content.contactInfo.email}
        />
      </div>
    </Router>
  );
}

export default App;