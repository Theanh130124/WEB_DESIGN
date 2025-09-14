import React from 'react';
import styles from './Styles/AboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.pageContent}>
      <div className="container py-5">
        <h1>Về chúng tôi</h1>
        <p>Trang giới thiệu về trường đại học...</p>
      </div>
    </div>
  );
};

export default AboutPage;