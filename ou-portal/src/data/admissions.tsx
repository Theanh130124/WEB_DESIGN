export type AnnouncementItem = { title: string; link: string };

export type AdmissionsForm = {
  title: string;
  // 1 trong 2: announcementBox hoặc infoImage
  announcementBox?: { title: string; text: string };
  infoImage?: string;

  // cột phải: nhóm thumbnail + list thông báo
  announcementImageGroup: string[];
  announcements: AnnouncementItem[];
};

export type AdmissionsSectionContent = {
  admissionsForms: AdmissionsForm[];
  consultationTitle: string;
  consultationItems: { title: string; image: string }[];
  ctaButtonText: string;
};

export type WhyChooseContent = {
  title: string;
  items: { title: string; description: string; image?: string; imageTitle?: string }[];
};

// ====== DATA ======

export const admissionsSectionData: AdmissionsSectionContent = {
  admissionsForms: [
    {
      title: "Hệ Đại học chính quy",
      announcementBox: {
        title: "THÔNG BÁO",
        text: "Đăng ký xét tuyển đại học chính quy đợt 2 (đợt bổ sung) năm 2025",
      },
      announcementImageGroup: [
        "https://tuyensinh.ou.edu.vn/tmp/rscache/112x70-thongbao2_thumb.jpg",
        "https://tuyensinh.ou.edu.vn/tmp/rscache/112x70-TTTS2025-01.png",
        "https://tuyensinh.ou.edu.vn/tmp/rscache/112x70-bosung-01.png",
        "https://tuyensinh.ou.edu.vn/tmp/rscache/112x70-TT-bosung-01.png"
      ],
      announcements: [
        { title: "Danh sách trúng tuyển bổ sung, Đợt 1 - 2025", link: "#" },
        { title: "Điểm chuẩn trúng tuyển Đợt 1 - 2025", link: "#" },
        { title: "Ngưỡng đảm bảo chất lượng đầu vào", link: "#" },
        { title: "Thông báo Danh sách trúng tuyển bổ sung, Đợt 1 - Năm 2025", link: "#" },
      ],
    },
    {
      title: "THÔNG TIN TUYỂN SINH ĐH BẰNG THỨ 2 VÀ LIÊN THÔNG CĐ–ĐH",
      infoImage: "https://tuyensinh.ou.edu.vn/tmp/rscache/540x305-thontgtintuyensinh.jpg",
      announcementImageGroup: [
        "https://tuyensinh.ou.edu.vn/tmp/rscache/112x70-LT2024-01.png",
        "https://tuyensinh.ou.edu.vn/tmp/rscache/112x70-thongbao2_thumb.jpg",
        "https://tuyensinh.ou.edu.vn/tmp/rscache/112x70-LT2024-01.png"
      ],
      announcements: [
        { title: "Tuyển sinh ĐH bằng thứ 2 chính quy - 2024", link: "#" },
        { title: "Tuyển sinh liên thông CĐ → ĐH hệ chính quy", link: "#" },
        { title: "Về việc không mở lớp liên thông chính quy năm 2023", link: "#" },
      ],
    },
  ],
  consultationTitle: "TƯ VẤN TUYỂN SINH",
  consultationItems: [
    { title: "Lịch livestream tư vấn 2025", image: "https://tuyensinh.ou.edu.vn/media/photos/Logos/664527.jpeg" },
    { title: "Các hình thức tuyển sinh 2025", image: "https://tuyensinh.ou.edu.vn/media/photos/Logos/hmm.jpg" },
  ],
  ctaButtonText: "Đăng ký nhận tư vấn",
};

export const whyChooseData: WhyChooseContent = {
  title: "Vì sao bạn chọn OU ?",
  items: [
    {
      title: "Trường Đại học công lập",
      description:
        "Có bề dày và kinh nghiệm đào tạo suốt 30 năm qua và nhiều thế hệ học trò thành đạt.",
      image: "https://ou.edu.vn/wp-content/uploads/2025/09/1.jpg",
      imageTitle: "Lễ trao bằng tốt nghiệp",
    },
    {
      title: "Đội ngũ giảng viên chất lượng",
      description:
        "Giảng viên tốt nghiệp từ các trường danh giá, giàu kinh nghiệm thực tiễn, thân thiện với người học.",
      image: "https://www.tapchicongsan.org.vn/documents/20182/344510302/vna_potal_ruc_ro_nhung_bong_hoa_tren_giang_duong_trong_ngay_quoc_te_phu_nu_83_6617838.jpg/4d8d442c-7989-43e3-bf0f-a1032f733598?t=1708170870958",
    },
    {
      title: "Chất lượng đào tạo tốt",
      description:
        "Kết quả khảo sát sinh viên có việc làm phù hợp với ngành nghề đạt cao.",
      image: "https://tuyensinh.ou.edu.vn/media/photos/Duy.nhv/DB1.jpg",
    },
    {
      title: "Học phí thấp & nhiều học bổng",
      description:
        "Học phí ổn định, nhiều loại học bổng tuyển sinh, tài năng, khuyến khích học tập…",
      image: "https://ou.edu.vn/wp-content/uploads/2023/07/IMG_1792-scaled.jpg",
      imageTitle: "Trao học bổng cho sinh viên",
    },
  ],
};