import React from 'react';
import styles from './Styles/AdmissionsPage.module.css';

const AdmissionsPage: React.FC = () => {
  return (
    <div className={styles.pageContent}>
      <div className="container py-5">
        <h1>Tuyển sinh</h1>
        <p>Thông tin tuyển sinh...</p>
      </div>
    </div>
  );
};

export default AdmissionsPage;