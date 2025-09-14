import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./AdmissionsSection.module.css";
import { AdmissionsSectionContent } from "../../data/admissions";

export interface AdmissionsSectionProps {
  admissionsData: AdmissionsSectionContent;
}


const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ admissionsData }) => {
  const { admissionsForms, consultationTitle, consultationItems, ctaButtonText } =
    admissionsData;

  const renderList = (items: Array<{ title: string; link: string }>) => (
    <ul className={styles.infoList}>
      {items.map((item, idx) => (
        <li key={idx} className={styles.infoItem}>
          <span className={styles.dot} aria-hidden />
          <a className={styles.infoLink} href={item.link}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <section className={styles.admissionsSection}>
      <Container>
        {admissionsForms.map((form, index) => (
          <div key={index} className="mb-5">
            {/* Title per form */}
            <h1 className={styles.systemTitle}>{form.title}</h1>

            {/* 2-column block */}
            <Row className={`${styles.rowBlock} align-items-center`}>
              {/* Left: hero box or big illustration */}
              <Col md={6} className="mb-4 mb-md-0">
                {form.announcementBox ? (
                  <div className={styles.heroBoxWrap}>
                    <img
                      src="/images/admissions-hero-circle.svg"
                      alt=""
                      aria-hidden
                      className={styles.heroCircle}
                    />
                    <div className={styles.heroBox}>
                      <h3 className={styles.heroTitle}>
                        {form.announcementBox.title}
                      </h3>
                      <p className={styles.heroText}>
                        {form.announcementBox.text}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className={styles.illustration}>
                    {form.infoImage && (
                      <img
                        src={form.infoImage}
                        alt="Minh họa tuyển sinh"
                        className="img-fluid"
                      />
                    )}
                  </div>
                )}
              </Col>

              {/* Right: thumbnails + list */}
              <Col md={6}>
                <div className={styles.newsList}>
                  {form.announcements.map((it, i) => (
                    <div key={i} className={styles.newsItem}>
                      {it.image && (
                        <div className={styles.newsThumb}>
                          <img src={it.image} alt={it.title} />
                        </div>
                      )}
                      <a href={it.link} className={styles.newsText}>
                        {it.title}
                      </a>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        ))}

        {/* Consultation */}
        <h2 className={styles.consultationTitle}>{consultationTitle}</h2>
        <Row>
          <Col md={12}>
            <div className={styles.consultationGrid}>
              {consultationItems.map((item, i) => (
                <div key={i} className={styles.consultationCard}>
                  <div className={styles.consultationImg}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <p className={styles.consultationText}>{item.title}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* CTA */}
        <div className="text-center mt-4">
          <button type="button" className={styles.ctaButton}>
            <span className={styles.spark} aria-hidden>✹</span>
            {ctaButtonText}
            <span className={styles.spark} aria-hidden>✹</span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default AdmissionsSection;