import React from 'react';
import AboutSection from '../components/AboutSection/AboutSection';
import GallerySection from '../components/GallerySection/GallerySection';
import { defaultTheme } from '../config/theme';
import styles from './Styles/HomePage.module.css';
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <AboutSection 
        title={defaultTheme.content.aboutTitle}
        description={defaultTheme.content.aboutDescription}
        principalName={defaultTheme.content.principalName}
        principalTitle={defaultTheme.content.principalTitle}
        principalMessage={defaultTheme.content.principalMessage}
        principalDescription={defaultTheme.content.principalDescription}
        principalImage={defaultTheme.images.principalImage}
        infoCards={[
          {
            icon: (
              <div className="facility-icon">
                {/* SVG hoặc icon cho cơ sở vật chất */}
              </div>
            ),
            title: 'Cơ sở vật chất',
            description: 'Phòng học hiện đại, thư viện với 50.000 đầu sách, phòng thí nghiệm, phòng máy tính, khu thể thao...'
          },
          {
            icon: (
              <div className="history-icon">
                {/* SVG hoặc icon cho lịch sử */}
              </div>
            ),
            title: 'Lịch sử',
            description: 'Thành lập ngày 15/06/1990...'
          },
          {
            icon: (
              <div className="address-icon">
                {/* SVG hoặc icon cho địa chỉ */}
              </div>
            ),
            title: 'Địa chỉ',
            description: 'Địa chỉ 1: 97 Võ Văn Tần, P.Xuân Hòa, TP Hồ Chí Minh.'
          },
          {
            icon: (
              <div className="achievement-icon">
                {/* SVG hoặc icon cho thành tựu */}
              </div>
            ),
            title: 'Thành tựu',
            description: 'Top 1201-1500 Thế giới theo Times Higher Education năm 2025'
          }
        ]}
      />
      
      <GallerySection 
        title="Hình ảnh nhà trường"
        images={[
          {
            src: '/default/nhatruong1.jpg',
            alt: 'Nhà trường 1',
            title: 'Khuôn viên trường'
          },
          {
            src: '/default/nhatruong2.jpg',
            alt: 'Nhà trường 2',
            title: 'Thư viện'
          },
          {
            src: '/default/nhatruong3.jpg',
            alt: 'Nhà trường 3',
            title: 'Phòng học'
          },
          {
            src: '/default/nhatruong4.jpg',
            alt: 'Nhà trường 4',
            title: 'Khu thể thao'
          },
          {
            src: '/default/nhatruong5.jpg',
            alt: 'Nhà trường 5',
            title: 'Phòng thí nghiệm'
          },
          {
            src: '/default/nhatruong6.jpg',
            alt: 'Nhà trường 6',
            title: 'Lễ tốt nghiệp'
          }
        ]}
        buttonText="Xem thêm"
        buttonLink="/gallery"
        imageSize={{ width: '100%', height: '280px' }}
      />
    </div>
  );
};

export default HomePage;