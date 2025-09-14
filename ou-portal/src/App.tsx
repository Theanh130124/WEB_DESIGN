import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Components
import Header from './components/Header/Header';
import AboutSection from './components/AboutSection/AboutSection';
import GallerySection from './components/GallerySection/GallerySection';
import Footer from './components/Footer/Footer';
import AdmissionsSection from './components/AdmissionsSection/AdmissionsSection';
import WhyChooseSection from './components/AdmissionsSection/WhyChooseSection';
import { admissionsData, whyChooseData } from './data/admissions';
// Theme configuration
import { defaultTheme, applyTheme } from './config/theme';

// Pages
const HomePage = () => (
  <>
    <Header
      backgroundImage={defaultTheme.images.heroBackground}
      logo={defaultTheme.images.logo}
      schoolName={defaultTheme.content.schoolName}
      schoolNameEn={defaultTheme.content.schoolNameEn}
      navItems={defaultTheme.navigation.items}
      coreValuesTitle={defaultTheme.content.coreValuesTitle}
      coreValuesText={defaultTheme.content.coreValuesText}
    />
    <AboutSection
      title={defaultTheme.content.aboutTitle}
      description={defaultTheme.content.aboutDescription}
      principalName={defaultTheme.content.principalName}
      principalTitle={defaultTheme.content.principalTitle}
      principalMessage={defaultTheme.content.principalMessage}
      principalDescription={defaultTheme.content.principalDescription}
      principalImage={defaultTheme.images.principalImage}
      principalImageSize={defaultTheme.imageSizes.principalImage}
    />
    <GallerySection
      images={defaultTheme.images.galleryImages.map((src, index) => ({
        src,
        alt: `Gallery Image ${index + 1}`,
        title: `Gallery Image ${index + 1}`
      }))}
      imageSize={defaultTheme.imageSizes.galleryImage}
    />
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
  <>
    <Header
      backgroundImage={defaultTheme.images.heroBackground}
      logo={defaultTheme.images.logo}
      schoolName={defaultTheme.content.schoolName}
      schoolNameEn={defaultTheme.content.schoolNameEn}
      navItems={defaultTheme.navigation.items}
      coreValuesTitle={defaultTheme.content.coreValuesTitle}
      coreValuesText={defaultTheme.content.coreValuesText}
    />
    <AdmissionsSection
      admissionsData={admissionsData}
    />
    <WhyChooseSection
      whyChooseData={whyChooseData}
      ctaButtonText={admissionsData.ctaButtonText}
    />
  </>
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