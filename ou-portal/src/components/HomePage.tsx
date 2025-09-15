import React from 'react';
import AboutSection from '../components/AboutSection/AboutSection';
import GallerySection from '../components/GallerySection/GallerySection';
import { defaultTheme } from '../config/theme';
import styles from './Styles/HomePage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHistory, faMapMarkerAlt, faTrophy } from '@fortawesome/free-solid-svg-icons';
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
              <FontAwesomeIcon icon={faBuilding} className={styles.cardIcon} />
            ),
            title: 'Cơ sở vật chất',
            description: 'Cơ sở vật chất hiện đại với phòng học tiện nghi, thư viện hơn 50.000 đầu sách, phòng thí nghiệm và phòng máy tính. Bên cạnh đó, trường còn có khu thể thao và hệ thống e-learning phục vụ hiệu quả cho học tập và rèn luyện.'
          },
          {
            icon: (
              <FontAwesomeIcon icon={faHistory}  />
            ),
            title: 'Lịch sử',
            description: 'Thành lập ngày 15/06/1990 là Viện Đào tạo Mở rộng TP.Hồ Chí Minh, năm 1993 mang tên Trường Đại học Mở Bán Công TP.Hồ Chí Minh, năm 2006 là trường công lập lấy tên Trường Đại học Mở TP.Hồ Chí Minh.'
          },
          {
            icon: (
              <FontAwesomeIcon icon={faMapMarkerAlt}  />
            ),
            title: 'Địa chỉ',
            description: 'Địa chỉ 1: 97 Võ Văn Tần, P.6, Quận 3, TP.HCM    Địa chỉ 2: 35-37 Hồ Hảo Hớn, Quận 1 TP.HCM  Địa chỉ 3: KDC Nhơn Đức, xã Hiệp Phước, TP.HCM.'
          },
          {
            icon: (
              <FontAwesomeIcon icon={faTrophy} />
            ),
            title: 'Thành tựu',
            description: 'Top 1201-1500 Thế giới theo Times Higher Education năm 2025. Nhóm 501–600 đại học tốt nhất châu Á (THE Asia University Rankings 2025). Đã đạt chứng nhận giáo dục MOET.'
          }
        ]}
      />
      
      <GallerySection 
        title="Hình ảnh nhà trường"
        images={[
          {
            src: '/default/nhatruong1.jpg',
            alt: 'Nhà trường 1',
            title: 'Cơ sở nhà trường'
          },
          {
            src: '/default/nhatruong2.jpg',
            alt: 'Nhà trường 2',
            title: 'Khuôn viên trường'
          },
          {
            src: '/default/nhatruong3.jpg',
            alt: 'Nhà trường 3',
            title: 'Phòng hội trường'
          },
          {
            src: '/default/nhatruong4.jpg',
            alt: 'Nhà trường 4',
            title: 'Thư viện'
          },
          {
            src: '/default/nhatruong5.jpg',
            alt: 'Nhà trường 5',
            title: 'Sân trường'
          },
          {
            src: '/default/nhatruong6.jpg',
            alt: 'Nhà trường 6',
            title: 'Phòng học'
          }
        ]}

        imageSize={{ width: '100%', height: '280px' }}
      />
    </div>
  );
};

export default HomePage;