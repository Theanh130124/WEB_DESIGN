import React from 'react';
import styles from './Styles/FacultyPage.module.css';
import LecturersSection from './LecturersSection/LecturersSection';
import { lecturersSectionData } from '../data/lecturers';
const FacultyPage: React.FC = () => {
  return (
    <main className={styles.pageContent}>
      {/* Header ngắn gọn của trang */}


      {/* Section giảng viên (tự có Container, gradient, grid) */}
      <LecturersSection data={lecturersSectionData} />
    </main>
  );
};

export default FacultyPage;