import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHistory, faMapMarkerAlt, faTrophy } from '@fortawesome/free-solid-svg-icons';
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

// Animation variants với kiểu được định nghĩa đúng
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const imageVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const textVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const buttonVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#0178B8",
    transition: {
      duration: 0.3
    }
  },
  tap: {
    scale: 0.95
  }
};

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'Giới thiệu Trường',
  description = 'Dưới đây là phần giới thiệu tổng quan về trường chúng tôi, từ cổng trường đến toàn bộ các cơ sở vật chất hiện có...',
  buttonText = 'Xem chi tiết',
  buttonLink = '/history',
  principalName = 'GS.TS. Nguyễn Minh Hà',
  principalTitle = 'Hiệu trưởng Trường',
  principalMessage = 'Lời chúc mừng kỷ niệm 35 năm thành lập Trường Đại học Mở Thành phố Hồ Chí Minh',
  principalDescription = 'Từ quy mô ban đầu chỉ với 02 khoa và 13 cán bộ, đến nay Trường Đại học Mở TP.HCM đã phát triển thành một cơ sở giáo dục đa ngành với 13 khoa, 03 trung tâm đào tạo và hơn 850 cán bộ viên chức, người lao động, trong đó hơn 40% có trình độ tiến sĩ trở lên. Bên cạnh đó, hệ thống đào tạo từ xa và vừa học vừa làm đã phủ rộng hơn 40 tỉnh, thành từ Bình Định đến Cà Mau.',
  principalImage = '/default/logo-default.jpg',
  infoCards = [
    {
      icon: <FontAwesomeIcon icon={faBuilding} className={styles.cardIcon} />,
      title: 'Cơ sở vật chất',
      description: 'Phòng học hiện đại, thư viện với 50.000 đầu sách, phòng thí nghiệm, phòng máy tính, khu thể thao...'
    },
    {
      icon: <FontAwesomeIcon icon={faHistory} className={styles.cardIcon} />,
      title: 'Lịch sử',
      description: 'Thành lập ngày 15/06/1990...'
    },
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.cardIcon} />,
      title: 'Địa chỉ',
      description: 'Địa chỉ 1: 97 Võ Văn Tần, P.Xuân Hòa, TP Hồ Chí Minh.'
    },
    {
      icon: <FontAwesomeIcon icon={faTrophy} className={styles.cardIcon} />,
      title: 'Thành tựu',
      description: 'Top 1201-1500 Thế giới theo Times Higher Education năm 2025'
    }
  ]
}) => {
  // Sắp xếp lại thứ tự các thẻ: Cơ sở vật chất trước, sau đó đến Lịch sử
  const sortedInfoCards = [...infoCards];
  const facilityIndex = sortedInfoCards.findIndex(card => card.title === 'Cơ sở vật chất');
  const historyIndex = sortedInfoCards.findIndex(card => card.title === 'Lịch sử');
  
  // Nếu cả hai thẻ đều tồn tại, đảo vị trí để Cơ sở vật chất đứng trước Lịch sử
  if (facilityIndex !== -1 && historyIndex !== -1 && facilityIndex > historyIndex) {
    const temp = sortedInfoCards[facilityIndex];
    sortedInfoCards[facilityIndex] = sortedInfoCards[historyIndex];
    sortedInfoCards[historyIndex] = temp;
  }

  return (
    <motion.div 
      className={styles.aboutSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className={styles.headerBg}></div>
      
      <Container className="position-relative">
        {/* Principal Message Section */}
        <Row className={`${styles.principalSection} mb-5`}>
          <Col lg={6} className="mb-4 mb-lg-0">
            <motion.div 
              className={styles.videoContainer}
              variants={imageVariants}
            >
              <div className={styles.videoBg}>
                <img 
                  src={principalImage} 
                  alt="Principal" 
                  className={styles.principalImage}
                />
                <div className={styles.videoOverlay}></div>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div 
              className={styles.principalContent }
              variants={textVariants}
            >
            <motion.h2 
              className={`${styles.sectionTitle} ${styles.principalMessage}`}
              variants={itemVariants}
            >
              {principalMessage}
            </motion.h2>
              <motion.h3 
                className={styles.principalName}
                variants={itemVariants}
              >
                {principalName} – {principalTitle}
              </motion.h3>
              <motion.p 
                className={styles.principalDescription}
                variants={itemVariants}
              >
                {principalDescription}
              </motion.p>
              <motion.a 
                href={buttonLink} 
                className={styles.principalButton}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {buttonText}
              </motion.a>
            </motion.div>
          </Col>
        </Row>

        {/* School Introduction Section */}
        <Row className={styles.schoolIntroSection}>
          <Col md={5} lg={4} className="mb-4 mt-4 mb-md-0">
            <motion.div 
              className={styles.introContent}
              variants={textVariants}
            >
              <motion.h2 
                className={styles.introTitle}
                variants={itemVariants}
              >
                {title}
              </motion.h2>
              <motion.p 
                className={styles.introDescription}
                variants={itemVariants}
              >
                {description}
              </motion.p>
              <motion.a 
                href={buttonLink} 
                className={styles.introButton}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {buttonText}
              </motion.a>
            </motion.div>
          </Col>
          <Col md={7} lg={7}>
            <Row>
              {sortedInfoCards.map((card, index) => (
                <Col sm={6} key={index} className="mb-4">
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                  >
                  <Card className={styles.infoCard}>
                    <Card.Body>
                      <div className={styles.cardIconWrapper}>
                        {card.icon}
                      </div>
                      <Card.Title className={styles.cardTitle}>{card.title}</Card.Title>
                      <Card.Text className={styles.cardDescription}>{card.description}</Card.Text>
                    </Card.Body>
                  </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default AboutSection;