import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faMapMarkerAlt, faGlobe, faPhone, faCalendarAlt, faGraduationCap, faAward, faBook, faHandshake, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Styles/AboutPage.module.css';

const InfoStat: React.FC<{ icon: React.ReactNode; title: string; text: React.ReactNode }> = ({ icon, title, text }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
    <Card className={styles.infoStatCard}>
      <Card.Body className={`${styles.infoStatBody} text-center`}>
        <div className={styles.infoStatIcon}>{icon}</div>
        <Card.Title className={styles.statTitle}><span className={styles.titleIcon}>{icon}</span>{title}</Card.Title>
        <Card.Text className={styles.statText}>{text}</Card.Text>
      </Card.Body>
    </Card>
  </motion.div>
);

const Slideshow: React.FC = () => {
  // build list nhatruong1..8 (if some missing, browser just 404; ensure you have files)
  const allImages = Array.from({ length: 8 }).map((_, i) => `/default/nhatruong${i + 1}.jpg`);
  const [start, setStart] = useState(0);
  const length = allImages.length;
  const visible = Array.from({ length: 6 }).map((_, offset) => allImages[(start + offset) % length]);
  const prev = () => setStart((s) => (s - 1 + length) % length);
  const next = () => setStart((s) => (s + 1) % length);

  return (
    <div className={styles.slideWrapper}>
      <button aria-label="Prev" className={`${styles.slideNavBtn} ${styles.left}`} onClick={prev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className={styles.slideTrack}>
        {visible.map((src, i) => (
          <motion.div
            key={src}
            className={styles.slide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={src} alt={`slide-${i}`} className={styles.slideImage} />
          </motion.div>
        ))}
      </div>
      <button aria-label="Next" className={`${styles.slideNavBtn} ${styles.right}`} onClick={next}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Slideshow Section */}
      <Container className={styles.slideshowSection}>
        <div className={styles.sectionTitle}>CƠ SỞ VẬT CHẤT HIỆN ĐẠI , ĐÁP ỨNG MỌI NHU CẦU</div>
        <Slideshow />
      </Container>
      {/* Banner Section */}
      <div
        className={styles.bannerSection}
        style={{ backgroundImage: "url('/themeheader.jpg')" }}
      >
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerTitle}>
            THÔNG TIN TRƯỜNG ĐẠI HỌC MỞ TP.HỒ CHÍ MINH
          </div>
        </div>
      </div>

      {/* School Info Section - Figma-like layout and icons */}
      <Container className={styles.schoolInfoSection}>
        <Row>
          <Col lg={4} className="mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className={styles.infoCard}>
                <Card.Body className="text-center">
                  <div className={styles.cardIcon}><FontAwesomeIcon icon={faUniversity} /></div>
                  <Card.Title className={styles.cardTitle}>Tên trường</Card.Title>
                  <Card.Text className={styles.cardText}>
                    Đại học Mở TP.Hồ Chí Minh<br />Mã trường: MBS
                  </Card.Text>
                  <Card.Title className={styles.cardTitle}>Hiệu trưởng</Card.Title>
                  <Card.Text className={styles.cardText}>GS.TS. Nguyễn Minh Hà</Card.Text>
                  <div className="mt-4"></div>
                  <div className={styles.cardIcon}><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                  <Card.Title className={styles.cardTitle}>Địa chỉ</Card.Title>
                  <Card.Text className={styles.cardText}>
                    Địa chỉ 1: 97 Võ Văn Tần, P.6, Quận 3, TP.HCM<br />
                    Địa chỉ 2: 35-37 Hồ Hảo Hớn, P. Cầu Ông Lãnh, TP.HCM<br />
                    Địa chỉ 3: KDC Nhơn Đức, xã Hiệp Phước, TP.HCM
                  </Card.Text>
                  <div className="mt-4"></div>
                  <div className={styles.cardIcon}><FontAwesomeIcon icon={faGlobe} /></div>
                  <Card.Title className={styles.cardTitle}>Website/Email</Card.Title>
                  <Card.Text className={styles.cardText}>https://www.hcmou.edu.vn<br />ou@ou.edu.vn</Card.Text>
                  <Card.Title className={styles.cardTitle}>Số điện thoại</Card.Title>
                  <Card.Text className={styles.cardText}>028-39207639 - 028-39207640</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col md={6} className="mb-4">
                <InfoStat icon={<FontAwesomeIcon icon={faCalendarAlt} />} title="Ngày thành lập" text={<><span>15/06/1990</span><br/><small>đến năm 2006 thành trường công lập</small></>} />
              </Col>
              <Col md={6} className="mb-4">
                <InfoStat icon={<FontAwesomeIcon icon={faGraduationCap} />} title="Số lượng sinh viên" text={<><span>hơn 30.000 sinh viên</span><br/>Số lượng giảng viên<br/>hơn 500 giảng viên cơ hữu</>} />
              </Col>
              <Col md={6} className="mb-4">
                <InfoStat icon={<FontAwesomeIcon icon={faAward} />} title="Đạt tiêu chuẩn FIBAA" text={<>14/6/2024<br/>Đạt chuẩn AUN-QA<br/>17/12/2021<br/>Top 1201-1500 Thế giới</>} />
              </Col>
              <Col md={6} className="mb-4">
                <InfoStat icon={<FontAwesomeIcon icon={faBook} />} title="Cơ sở vật chất" text={<>Phòng học hiện đại, thư viện với 50.000 đầu sách, phòng thí nghiệm, phòng máy tính, khu thể thao</>} />
              </Col>
              <Col md={6} className="mb-4">
                <InfoStat icon={<FontAwesomeIcon icon={faBook} />} title="Chương trình đào tạo" text={<>Đào tạo chính quy, từ xa, cao học, 35 ngành học với đa dạng lĩnh vực từ Kinh tế, Luật, Công nghệ đến Ngôn ngữ</>} />
              </Col>
              <Col md={6} className="mb-4">
                <InfoStat icon={<FontAwesomeIcon icon={faHandshake} />} title="Liên kết quốc tế" text={<>Hợp tác với 20 trường đại học và tổ chức quốc tế; chương trình trao đổi sinh viên và giảng viên.</>} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

    
      {/* Leadership Section */}
      <Container className={styles.leadershipSection}>
        <div className={styles.sectionHeading}>BAN GIÁM HIỆU ĐẠI HỌC MỞ TP.HỒ CHÍ MINH</div>
        <Row>
          <Col md={4} className="mb-4">
            <Card className={styles.leaderCard}>
              <Card.Img
                variant="top"
                className={styles.leaderImage}
                src="/default/HIEUTRUONG.jpg"
                alt="GS.TS. Nguyễn Minh Hà"
              />
              <Card.Body className="text-start">
                <Card.Title className={styles.leaderName}>Ông: NGUYỄN MINH HÀ</Card.Title>
                <div className={styles.leaderRole}>Hiệu Trưởng</div>
                <Card.Text className={styles.leaderDesc}>
                  - Lãnh đạo, chỉ đạo, quản lý, điều hành toàn diện các hoạt động của Trường.<br/>
                  - Trực tiếp chỉ đạo các lĩnh vực: Tổ chức–nhân sự; Thanh tra–Pháp chế; Hành chính–Quản trị; Tài chính; Đào tạo sau đại học; Nghiên cứu khoa học và hợp tác quốc tế.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className={styles.leaderCard}>
              <Card.Img
                variant="top"
                className={styles.leaderImage}
                src="/default/PHOHIEUTRUONG.jpg"
                alt="PGS.TS. Lê Nguyễn Quốc Khang"
              />
              <Card.Body className="text-start">
                <Card.Title className={styles.leaderName}>Ông: LÊ NGUYỄN QUỐC KHANG</Card.Title>
                <div className={styles.leaderRole}>Phó Hiệu Trưởng</div>
                <Card.Text className={styles.leaderDesc}>
                  - Phụ trách: đào tạo từ xa, trực tuyến, VLVH; đầu tư xây dựng và cơ sở vật chất; công tác sinh viên; hợp tác trong nước.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className={styles.leaderCard}>
              <Card.Img
                variant="top"
                className={styles.leaderImage}
                src="/default/phohieutruong2.jpg"
                alt="PGS.TS. Lê Xuân Trường"
              />
              <Card.Body className="text-start">
                <Card.Title className={styles.leaderName}>Ông: LÊ XUÂN TRƯỜNG</Card.Title>
                <div className={styles.leaderRole}>Phó Hiệu Trưởng</div>
                <Card.Text className={styles.leaderDesc}>
                  - Phụ trách: đào tạo chính quy; khảo thí, đảm bảo chất lượng; CNTT trong quản lý và đào tạo; thư viện và học liệu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default AboutPage;