import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./LecturersSection.module.css";
import type { LecturersSectionContent } from "../../data/lecturers";

export interface LecturersSectionProps {
  data: LecturersSectionContent;
}

const LecturersSection: React.FC<LecturersSectionProps> = ({ data }) => {
  const { title, subtitle, lecturers } = data;
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className={styles.lecturersSection}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.sectionTitle}>{title}</h1>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>

        <Row className={styles.grid}>
          {lecturers.map((lec, index) => (
            <Col key={lec.id} xl={4} lg={4} md={6} className={styles.col}>
              <article 
                className={`${styles.card} ${activeCard === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={styles.cardInner}>
                  {/* Avatar */}
                  <div className={styles.avatarContainer}>
                    <div className={styles.avatarGlow}></div>
                    <div className={styles.avatarWrap}>
                      <img src={lec.image} alt={lec.name} className={styles.avatar} />
                      <div className={styles.avatarOverlay}></div>
                    </div>
                    <div className={styles.degreeBadge}>{lec.degree}</div>
                  </div>

                  {/* Thông tin giảng viên */}
                  <div className={styles.meta}>
                    <h3 className={styles.name}>{lec.name}</h3>
                    
                    {lec.field && (
                      <div className={styles.field}>
                        <span className={styles.fieldIcon}>📚</span>
                        {lec.field}
                      </div>
                    )}

                    {lec.role && (
                      <div className={styles.role}>
                        <span className={styles.roleIcon}>🎯</span>
                        {lec.role}
                      </div>
                    )}
                  </div>

                  {/* Hiệu ứng hover */}
                  <div className={styles.cardHoverEffect}></div>
                </div>
              </article>
            </Col>
          ))}
        </Row>

        {/* CTA Buttons */}
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            <span className={styles.buttonIcon}>🔍</span>
            Khám phá
          </button>
          <button className={styles.ctaButton}>
            <span className={styles.buttonIcon}>📋</span>
            Thông tin giảng viên
          </button>
          <button className={styles.ctaButton}>
            <span className={styles.buttonIcon}>🌐</span>
            Mạng xã hội
          </button>
        </div>
      </Container>
    </section>
  );
};

export default LecturersSection;