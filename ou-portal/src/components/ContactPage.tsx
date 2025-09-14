import React from 'react';
import styles from './Styles/ContactPage.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.pageContent}>
      <div className="container py-5">
        <h1>Liên hệ</h1>
        <p>Thông tin liên hệ...</p>
      </div>
    </div>
  );
};

export default ContactPage;