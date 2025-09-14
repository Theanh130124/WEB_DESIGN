// src/components/AdmissionsSection/AdmissionsSection.tsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./AdmissionsSection.module.css";
import { AdmissionsSectionContent } from '../../data/admissions';

export interface AdmissionsSectionProps {
    admissionsData: AdmissionsSectionContent;
}

const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ admissionsData }) => {
    const { admissionsForms, consultationTitle, consultationItems, ctaButtonText } = admissionsData;

    const renderList = (items: Array<{ title: string; link: string }>) => (
        <ul className={styles.infoList}>
            {items.map((item, index) => (
                <li key={index}>
                    <span className={styles.listIcon}></span>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    );

    return (
        <section className={styles.admissionsSection}>
            <Container>
                {admissionsForms.map((form, index) => (
                    <React.Fragment key={index}>
                        <h1 className={styles.systemTitle}>{form.title}</h1>
                        <Row className="mb-5 align-items-center">
                            <Col md={6}>
                                {form.announcementBox ? (
                                    <div className={styles.heroBoxContainer}>
                                        <img src="/images/admissions-hero-circle.svg" alt="Background" className={styles.heroCircle} />
                                        <div className={styles.heroBox}>
                                            <h3 className={styles.boxTitle}>{form.announcementBox.title}</h3>
                                            <p className={styles.boxText}>{form.announcementBox.text}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.illustration}>
                                        {form.infoImage && (
                                            <img src={form.infoImage} alt="Illustration" className="img-fluid" />
                                        )}
                                    </div>
                                )}
                            </Col>
                            
                            <Col md={6}>
                                <div className={styles.infoBlock}>
                                    <div className={styles.infoImageGroup}>
                                        {form.announcementImageGroup.map((imgSrc, imgIndex) => (
                                            <img key={imgIndex} src={imgSrc} alt={`Image ${imgIndex}`} />
                                        ))}
                                    </div>
                                    {renderList(form.announcements)}
                                </div>
                            </Col>
                        </Row>
                    </React.Fragment>
                ))}

                <h2 className={styles.consultationTitle}>{consultationTitle}</h2>
                <Row className="mb-5">
                    <Col>
                        <div className={styles.consultationItems}>
                            {consultationItems.map((item, index) => (
                                <div key={index} className={styles.consultationItem}>
                                    <div className={styles.imageContainer}>
                                        <img src={item.image} alt={item.title} className={styles.itemImage} />
                                    </div>
                                    <p className={styles.itemText}>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

                <div className="text-center mt-4">
                    <button className={`${styles.ctaButton} btn`}>
                        <span className={styles.ctaIcon}></span> {ctaButtonText} <span className={styles.ctaIcon}></span>
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default AdmissionsSection;