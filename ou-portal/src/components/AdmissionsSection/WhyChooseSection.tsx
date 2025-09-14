import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./WhyChooseSection.module.css";
import { WhyChooseContent } from "../../data/admissions";

export interface WhyChooseSectionProps {
  whyChooseData: WhyChooseContent;
  ctaButtonText: string;
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  whyChooseData,
  ctaButtonText,
}) => {
  return (
    <section className={styles.whyChooseSection}>
      <Container>
        {/* Tiêu đề chính */}
        <h2 className={styles.sectionTitle}>
          <span className={styles.ctaHighlight}>Đăng ký nhận tư vấn</span>
          <br />
          {whyChooseData.title}
        </h2>

        {/* Lưới nội dung: text + ảnh minh họa */}
        {whyChooseData.items.map((item, index) => (
          <Row key={index} className={`${styles.itemRow} mb-5 align-items-center`}>
            <Col md={6}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </Col>
            {item.image && (
              <Col md={6} className="text-center">
                <div className={styles.itemImageContainer}>
                  <img
                    src={item.image}
                    alt={item.imageTitle || item.title}
                    className="img-fluid"
                  />
                  {item.imageTitle && (
                    <p className={styles.imageTitleText}>{item.imageTitle}</p>
                  )}
                </div>
              </Col>
            )}
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default WhyChooseSection;