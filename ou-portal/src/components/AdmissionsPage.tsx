// src/components/AdmissionsPage.tsx
import React from "react";
import AdmissionsSection from "./AdmissionsSection/AdmissionsSection";
import WhyChooseSection from "./AdmissionsSection/WhyChooseSection";
import { admissionsSectionData, whyChooseData } from "../data/admissions";
import styles from "./Styles/AdmissionsPage.module.css";

const AdmissionsPage: React.FC = () => {
  return (
    <div className={styles.pageContent}>
      {/* Khối thông báo + minh họa + list, giống layout mockup */}
      <AdmissionsSection admissionsData={admissionsSectionData} />

      {/* Khối Vì sao chọn OU – đồng bộ look với AboutSection (font/màu) */}
      <WhyChooseSection
        whyChooseData={whyChooseData}
        ctaButtonText="Đăng ký nhận tư vấn"
      />
    </div>
  );
};

export default AdmissionsPage;
