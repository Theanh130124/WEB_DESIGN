import React from 'react';
import styles from './Styles/FacultyPage.module.css';
import LecturersSection from './LecturersSection/LecturersSection';
import { lecturersSectionData } from '../data/lecturers';
const FacultyPage: React.FC = () => {
  return (
    <main className={styles.pageContent}>
      {/* Header ngắn gọn của trang */}
      <div className="container py-5">
        <h1 className={styles.pageTitle}>Giảng viên</h1>
        <p className={styles.pageSubtitle}>
          Thông tin về đội ngũ giảng viên, lĩnh vực chuyên môn và vai trò.
        </p>
      </div>

      {/* Section giảng viên (tự có Container, gradient, grid) */}
      <LecturersSection data={lecturersSectionData} />
    </main>
  );
};

export default FacultyPage;