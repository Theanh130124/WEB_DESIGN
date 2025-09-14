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
        "/images/admissions/thumb1.jpg",
        "/images/admissions/thumb2.jpg",
        "/images/admissions/thumb3.jpg",
      ],
      announcements: [
        { title: "Danh sách trúng tuyển bổ sung, Đợt 1 - 2025", link: "#" },
        { title: "Điểm chuẩn trúng tuyển Đợt 1 - 2025", link: "#" },
        { title: "Ngưỡng đảm bảo chất lượng đầu vào", link: "#" },
        { title: "Quy tắc quy đổi điểm tương đương", link: "#" },
      ],
    },
    {
      title: "THÔNG TIN TUYỂN SINH ĐH BẰNG THỨ 2 VÀ LIÊN THÔNG CĐ–ĐH",
      infoImage: "/images/admissions/hero-second.jpg",
      announcementImageGroup: [
        "/images/admissions/thumb4.jpg",
        "/images/admissions/thumb5.jpg",
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
    { title: "Lịch livestream tư vấn 2025", image: "/images/admissions/live.png" },
    { title: "Các hình thức tuyển sinh 2025", image: "/images/admissions/form.png" },
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
      image: "/images/why/public.jpg",
      imageTitle: "Lễ trao bằng tốt nghiệp",
    },
    {
      title: "Đội ngũ giảng viên chất lượng",
      description:
        "Giảng viên tốt nghiệp từ các trường danh giá, giàu kinh nghiệm thực tiễn, thân thiện với người học.",
      image: "/images/why/lecturers.jpg",
    },
    {
      title: "Chất lượng đào tạo tốt",
      description:
        "Kết quả khảo sát sinh viên có việc làm phù hợp với ngành nghề đạt cao.",
      image: "/images/why/quality.jpg",
    },
    {
      title: "Học phí thấp & nhiều học bổng",
      description:
        "Học phí ổn định, nhiều loại học bổng tuyển sinh, tài năng, khuyến khích học tập…",
      image: "/images/why/scholarship.jpg",
      imageTitle: "Trao học bổng cho sinh viên",
    },
  ],
};