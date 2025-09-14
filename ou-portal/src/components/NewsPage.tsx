import React from 'react';

import styles from './Styles/NewsPage.module.css';
const NewsPage: React.FC = () => {
  return (
    <div className={styles.pageContent}>
      <div className="container py-5">
        <h1>Tin tức</h1>
        <p>Tin tức và sự kiện...</p>
      </div>
    </div>
  );
};

export default NewsPage;