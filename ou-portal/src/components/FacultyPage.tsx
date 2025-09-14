import React from 'react';
import styles from './Styles/FacultyPage.module.css';

const FacultyPage: React.FC = () => {
  return (
    <div className={styles.pageContent}>
      <div className="container py-5">
        <h1>Giảng viên</h1>
        <p>Thông tin về đội ngũ giảng viên...</p>
      </div>
    </div>
  );
};

export default FacultyPage;