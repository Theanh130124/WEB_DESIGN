import React from 'react';
import styles from './AboutSection.module.css';

interface InfoCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AboutSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  infoCards?: InfoCard[];
  principalName?: string;
  principalTitle?: string;
  principalMessage?: string;
  principalDescription?: string;
  principalImage?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'Giới thiệu Trường',
  description = 'Dưới đây là phần giới thiệu tổng quan về trường chúng tôi, từ cổng trường đến toàn bộ các cơ sở vật chất hiện có...',
  buttonText = 'Xem chi tiết',
  buttonLink = '/about',
  principalName = 'GS.TS. Nguyễn Minh Hà',
  principalTitle = 'Hiệu trưởng Trường',
  principalMessage = 'Lời chúc mừng kỷ niệm 35 năm thành lập Trường Đại học Mở Thành phố Hồ Chí Minh',
  principalDescription = 'Từ quy mô ban đầu chỉ với 02 khoa và 13 cán bộ, đến nay Trường Đại học Mở TP.HCM đã phát triển thành một cơ sở giáo dục đa ngành với 13 khoa, 03 trung tâm đào tạo và hơn 850 cán bộ viên chức, người lao động, trong đó hơn 40% có trình độ tiến sĩ trở lên. Bên cạnh đó, hệ thống đào tạo từ xa và vừa học vừa làm đã phủ rộng hơn 40 tỉnh, thành từ Bình Định đến Cà Mau.',
  principalImage = '/default/logo-default.jpg',
  infoCards = [
    {
      icon: (
        <div className={styles.facilityIcon}>
          <div className={styles.iconInner}>
            <div className={styles.vector5}></div>
            <div className={styles.ellipse5}></div>
            <div className={styles.ellipse6}></div>
            <div className={styles.ellipse10}></div>
            <div className={styles.ellipse8}></div>
            <div className={styles.ellipse7}></div>
            <div className={styles.ellipse11}></div>
            <div className={styles.ellipse9}></div>
          </div>
        </div>
      ),
      title: 'Cơ sở vật chất',
      description: 'Phòng học hiện đại, thư viện với 50.000 đầu sách, phòng thí nghiệm, phòng máy tính, khu thể thao...'
    },
    {
      icon: (
        <div className={styles.historyIcon}>
          <div className={styles.iconInner}>
            <div className={styles.historyVector}></div>
            <div className={styles.historyLine1}></div>
            <div className={styles.historyLine2}></div>
            <div className={styles.historyLine3}></div>
            <div className={styles.historyLine4}></div>
            <div className={styles.historyEllipse}></div>
            <div className={styles.historyStar}></div>
          </div>
        </div>
      ),
      title: 'Lịch sử',
      description: 'Thành lập ngày 15/06/1990...'
    },
    {
      icon: (
        <div className={styles.addressIcon}>
          <div className={styles.iconInner}>
            <div className={styles.addressSubtract1}></div>
            <div className={styles.addressEllipse12}></div>
            <div className={styles.addressEllipse13}></div>
            <div className={styles.addressEllipse14}></div>
            <div className={styles.addressSubtract2}></div>
            <div className={styles.addressEllipse15}></div>
            <div className={styles.addressEllipse16}></div>
            <div className={styles.addressSubtract3}></div>
            <div className={styles.addressEllipse17}></div>
            <div className={styles.addressEllipse18}></div>
          </div>
        </div>
      ),
      title: 'Địa chỉ',
      description: 'Địa chỉ 1: 97 Võ Văn Tần, P.Xuân Hòa, TP Hồ Chí Minh.'
    },
    {
      icon: (
        <div className={styles.achievementIcon}>
          <div className={styles.iconInner}>
            <div className={styles.achievementRectangle}></div>
            <div className={styles.achievementStar1}></div>
            <div className={styles.achievementEllipse}></div>
            <div className={styles.achievementStar2}></div>
          </div>
        </div>
      ),
      title: 'Thành tựu',
      description: 'Top 1201-1500 Thế giới theo Times Higher Education năm 2025'
    }
  ]
}) => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.headerBg}></div>
      
      {/* Principal Message Section */}
      <div className={styles.principalSection}>
        <div className={styles.videoContainer}>
          <div className={styles.videoBg}>
            <img 
              src={principalImage} 
              alt="Principal" 
              className={styles.principalImage}
            />
            <div className={styles.videoOverlay}></div>
          </div>
        </div>
        
        <div className={styles.principalContent}>
          <h2 className={styles.principalMessage}>
            {principalMessage}
          </h2>
          <h3 className={styles.principalName}>
            {principalName} – {principalTitle}
          </h3>
          <p className={styles.principalDescription}>
            {principalDescription}
          </p>
          <a href={buttonLink} className={styles.principalButton}>
            {buttonText}
          </a>
        </div>
      </div>

      {/* School Introduction Section */}
      <div className={styles.schoolIntroSection}>
        <div className={styles.introContent}>
          <h2 className={styles.introTitle}>
            {title}
          </h2>
          <p className={styles.introDescription}>
            {description}
          </p>
          <a href={buttonLink} className={styles.introButton}>
            {buttonText}
          </a>
        </div>
        
        <div className={styles.infoCardsContainer}>
          {infoCards.map((card, index) => (
            <div key={index} className={styles.infoCard}>
              <div className={styles.cardIcon}>
                {card.icon}
              </div>
              <h5 className={styles.cardTitle}>{card.title}</h5>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;