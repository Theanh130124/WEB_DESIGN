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
            description: 'Cơ sở vật chất hiện đại với phòng học tiện nghi, thư viện hơn 50.000 đầu sách, phòng thí nghiệm và phòng máy tính. Bên cạnh đó, trường còn có khu thể thao và hệ thống e-learning phục vụ hiệu quả cho học tập và rèn luyện.'
          },
          {
            icon: (
              <div className="history-icon">
                {/* SVG hoặc icon cho lịch sử */}
              </div>
            ),
            title: 'Lịch sử',
            description: 'Thành lập ngày 15/06/1990 là viện Đạo tạo Mở rộng TP.Hồ Chí Minh, năm 1993 mang tên Trường Đại học Mở Bán Công TP.Hồ Chí Minh, năm 2006 là trường công lập lấy tên Trường Đại học Mở TP.Hồ Chí Minh'
          },
          {
            icon: (
              <div className="address-icon">
                {/* SVG hoặc icon cho địa chỉ */}
              </div>
            ),
            title: 'Địa chỉ',
            description: 'Địa chỉ 1: 97 Võ Văn Tần, P.Xuân Hòa, TP.HCM  Địa chỉ 2: 35-37 Hồ Hảo Hớn P.Cầu Ông Lãnh  Địa chỉ 3: KDC Nhơn Đức, xã Hiệp Phước, TP.HCM.                                                                            '
          },
          {
            icon: (
              <div className="achievement-icon">
                {/* SVG hoặc icon cho thành tựu */}
              </div>
            ),
            title: 'Thành tựu',
            description: 'Top 1201-1500 Thế giới theo Times Higher Education năm 2025 . Nhóm 501–600 đại học tốt nhất châu Á (THE Asia University Rankings 2025  Đã đạt chứng nhận đảm bảo chất lượng giáo dục MOET Việt Nam cho 5 ngành đại học'
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

        imageSize={{ width: '100%', height: '280px' }}
      />
    </div>
  );
};

export default HomePage;