import React from "react";
import styles from "./Styles/Anniversary35Section.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPen, 
  faCamera, 
  faCalendar, 
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

const Anniversary35Section: React.FC = () => {
  // Dữ liệu hình ảnh (trong thực tế có thể lấy từ API hoặc props)
  const images = [
    {
      src: "/default/35namkyniem_1.jpg",
      title: "Tổng quan chương trình"
    },
    {
      src: "/default/35namkyniem_2.jpg",
      title: "Nghi thức chào cờ"
    },
    {
      src: "/default/35namkyniem_3.jpg",
      title: "PGS.TS. Nguyễn Văn Phúc phát biểu"
    },
    {
      src: "/default/35namkyniem_4.jpg",
      title: "TS. Đỗ Sa Kỳ phát biểu"
    },
    {
      src: "/default/35namkyniem_5.jpg",
      title: "GS.TS. Nguyễn Minh Hà phát biểu"
    },
    {
      src: "/default/35namkyniem_6.jpg",
      title: "Trao bằng khen"
    },
    {
      src: "/default/35namkyniem_7.jpg",
      title: "Tiết mục văn nghệ"
    },
    {
      src: "/default/35namkyniem_8.jpg",
      title: "Đại biểu tham dự"
    }
  ];

  // Dữ liệu các đơn vị truyền thông
  const mediaOutlets = [
    {
      name: "HTV",
      url: "https://www.youtube.com/watch?v=VENh875DIhc"
    },
    {
      name: "Tạp Chí Giáo Dục TPHCM",
      url: "https://giaoduc.edu.vn/thu-truong-nguyen-van-phuc-truong-dh-mo-tp-hcm-da-phat-trien-he-thong-dao-tao-truc-tuyen-hang-dau-ca-nuoc/"
    },
    {
      name: "Cổng thông tin điện tử TP.HCM",
      url: "https://hochiminhcity.gov.vn/vi/web/hcm/w/truong-ai-hoc-mo-tpho-chi-minh-ky-niem-35-nam-thanh-lap"
    },
    {
      name: "Báo Dân trí",
      url: "https://dantri.com.vn/giao-duc/bon-triet-ly-giup-mot-vien-dao-tao-thanh-truong-lot-top-chau-a-20250613221232880.htm"
    }
  ];

  return (
    <Container fluid className={styles.wrapper}>
      {/* Tiêu đề bài báo */}
      <Row>
        <Col className="text-center">
          <h1 className={styles.title}>
            35 năm Trường Đại học Mở TP.HCM: <br /> 
            <span className={styles.subtitle}>Phát triển – Vươn mình – Khẳng định</span>
          </h1>
          <div className={styles.metaInfo}>
           <span className={styles.metaItem}>
            <FontAwesomeIcon icon={faPen} className={styles.metaIcon} />
            Bài viết: Mỹ Hằng
            </span>
            <span className={styles.metaItem}>
            <FontAwesomeIcon icon={faCamera} className={styles.metaIcon} />
            Hình ảnh: Khoa La, Minh Khánh, Hải Quân
            </span>
            <span className={styles.metaItem}>
            <FontAwesomeIcon icon={faCalendar} className={styles.metaIcon} />
            Ngày 15/6/2025
            </span>
          </div>
        </Col>
      </Row>

      {/* Nội dung chính */}
      <Row className="mt-4">
        <Col md={{ span: 10, offset: 1 }}>
          <div className={styles.content}>
            <p className={styles.lead}>
              Sáng ngày 15/6/2025, tại Hội trường 602, cơ sở 97 Võ Văn Tần, Quận 3, Trường Đại học Mở TP.HCM long trọng tổ chức Lễ kỷ niệm 35 năm ngày thành lập Trường Đại học Mở TP.HCM (15/6/1990 – 15/6/2025). 
            </p>
            
            <p>
              Đây là sự kiện lịch sử đặc biệt, đánh dấu mốc quan trọng trong hành trình phát triển của Trường, đồng thời tôn vinh những đóng góp của các thế hệ cán bộ, giảng viên, nhân viên và sinh viên đã cùng nhau tạo nên một ngôi trường vững mạnh như ngày nay.
            </p>

            <p>
              Buổi lễ còn là dịp tri ân sự đồng hành quý báu của Bộ Giáo dục và Đào tạo (Bộ GD&ĐT), các cơ quan, chính quyền địa phương, đối tác trong và ngoài nước, cùng các thế hệ cựu sinh viên đã luôn gắn bó với Trường trong suốt 35 năm qua. Sự kiện cũng mở ra cơ hội nhìn lại chặng đường đã qua, xác lập định hướng và mục tiêu phát triển mới, khẳng định vai trò tiên phong của Trường trong đổi mới sáng tạo, nâng cao chất lượng đào tạo, nghiên cứu và phục vụ cộng đồng.
            </p>

            <div className={styles.highlightBox}>
              <h3>Chương trình vinh dự đón tiếp:</h3>
              <ul>
                <li>PGS.TS. Nguyễn Văn Phúc – Phó Bí thư Đảng ủy, Thứ trưởng Bộ GD&ĐT</li>
                <li>PGS.TS. Nguyễn Thu Thủy – Cục trưởng Cục hợp tác Quốc tế</li>
                <li>Ông Lonphanh Phaodavanh – Lãnh sự quán nước Cộng hòa Dân chủ Nhân dân Lào tại TP.HCM</li>
                <li>Bà Trần Thị Diệu Thúy – Phó Chủ tịch UBND TP.HCM</li>
                <li>Lãnh đạo Trường Đại học Mở TP.HCM qua các thời kỳ</li>
              </ul>
            </div>

            <p>
              Tại buổi lễ, PGS.TS. Nguyễn Văn Phúc – Phó Bí thư Đảng ủy, Thứ trưởng Bộ Giáo dục và Đào tạo, Nguyên Bí thư Đảng ủy, Nguyên Hiệu trưởng Trường Đại học Mở TP.HCM gửi lời chúc mừng nồng nhiệt đến tập thể Nhà trường, đồng thời ghi nhận những đóng góp nổi bật trong suốt 35 năm qua. Thứ trưởng cũng đưa ra những định hướng chiến lược, khuyến khích Trường tiếp tục đổi mới, phát huy thế mạnh và tiên phong trong nâng cao chất lượng giáo dục, phục vụ sự phát triển bền vững của đất nước.
            </p>

            <p>
              TS. Đỗ Sa Kỳ – Bí thư Đảng ủy Trường bày tỏ niềm vui mừng và gửi lời chúc tốt đẹp đến toàn thể cán bộ viên chức, giảng viên, người lao động và sinh viên nhân kỷ niệm 35 năm thành lập Trường. Ông đánh giá cao tinh thần đoàn kết, nỗ lực không ngừng của tập thể Nhà trường trong việc xây dựng môi trường giáo dục nhân văn, hội nhập và ngày càng phát triển.
            </p>

            <blockquote className={styles.quote}>
              "Từ những ngày đầu, quy mô chỉ với 02 khoa đào tạo và 13 cán bộ quản lý và nhân viên. Đến nay, Trường Đại học Mở TP.HCM có 13 khoa và 03 trung tâm đào tạo, trên 850 cán bộ viên chức, người lao động đang làm việc, trong đó có trên 40% có trình độ tiến sĩ trở lên..."
              <footer className={styles.quoteFooter}>- GS.TS. Nguyễn Minh Hà – Hiệu trưởng Trường</footer>
            </blockquote>

            <h2 className={styles.sectionTitle}>Một số dấu ấn trong hành trình 35 năm</h2>
            
            <Row>
              <Col md={6}>
                <div className={styles.achievementCard}>
                  <h4>Xếp hạng quốc tế</h4>
                  <ul>
                    <li>QS Asia Rankings: 701–750 châu Á</li>
                    <li>THE: TOP 801+ thế giới (Kinh tế - Kinh doanh)</li>
                    <li>THE Asia Rankings: TOP 501–600 châu Á</li>
                    <li>Webometrics 2022: Top 16 Việt Nam</li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.achievementCard}>
                  <h4>Chất lượng đào tạo</h4>
                  <ul>
                    <li>39 chương trình được kiểm định</li>
                    <li>16 chương trình đạt chuẩn FIBAA (Châu Europe)</li>
                    <li>4 chương trình đạt chuẩn AUN-QA (Đông Nam Á)</li>
                    <li>19 chương trình đạt chuẩn MOET (Việt Nam)</li>
                  </ul>
                </div>
              </Col>
            </Row>

            <div className={styles.mediaCoverage}>
              <h3 className={styles.sectionTitle}>Các đơn vị truyền thông đưa tin</h3>
              <Row>
                {mediaOutlets.map((outlet, index) => (
                  <Col md={6} key={index} className="mb-2">
                    <a href={outlet.url} target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.mediaIcon} />
                    {outlet.name}
                    </a>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      {/* Gallery hình ảnh */}
      <Row className="mt-5">
        <Col className="text-center">
          <h2 className={styles.sectionTitle}>Hình ảnh tiêu biểu tại Lễ kỷ niệm</h2>
        </Col>
      </Row>

      <Row className={styles.gallery}>
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className={styles.imageCol}>
            <Card className={styles.imageCard}>
              <Card.Img 
                variant="top" 
                src={image.src} 
                alt={image.title}
                className={styles.image}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/1a237e/ffffff?text=Hình+ảnh+35+năm";
                }}
              />
              <Card.Body className={styles.imageCaption}>
                <Card.Text>{image.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Anniversary35Section;