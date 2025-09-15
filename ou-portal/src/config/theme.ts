
// Các thay đổi ở theme

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textSecondary: string;
    white: string;
    black: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  images: {
    logo: string;
    heroBackground: string;
    principalImage: string;
    galleryImages: string[];
  };
  imageSizes: {
    logo: {
      width: string;
      height: string;
    };
    heroBackground: {
      width: string;
      height: string;
    };
    principalImage: {
      width: string;
      height: string;
    };
    galleryImage: {
      width: string;
      height: string;
    };
  };
  content: {
    schoolName: string;
    schoolNameEn: string;
    coreValuesTitle: string;
    coreValuesText: string;
    aboutTitle: string;
    aboutDescription: string;
    principalName: string;
    principalTitle: string;
    principalMessage: string;
    principalDescription: string;
    contactInfo: {
      address: string;
      phone: string;
      website: string;
      email: string;
    };
    admissions: {
      heroTitle: string; // "Hệ Đại học chính quy"
      announcementTitle: string; // "Thông báo"
      announcements: Array<{ title: string; link: string }>;
      infoTitle: string; // "THÔNG TIN TUYỂN SINH"
      infoItems: Array<{ title: string; link: string }>;
      consultationTitle: string; // "TƯ VẤN TUYỂN SINH"
      consultationItems: Array<{ title: string; image: string }>;
      ctaButtonText: string; // "Đăng ký nhận tư vấn"
    };
    whyChoose: {
      ribbonText: string; // "Đăng ký nhận tư vấn"
      title: string; // "Vì sao bạn chọn OU ?"
      introRight?: string; // đoạn mô tả ngắn 
      items: Array<{
        heading: string;
        body: string;
        image: string;
        imageAlt?: string;
        captionRight?: string; // chú thích đỏ
      }>;
      extrasTitle?: string; // "Và rất nhiều điều hấp dẫn khác"
      extraLinks?: Array<{ label: string; href?: string }>;
    };
  };
  navigation: {
    items: Array<{
      label: string;
      path: string;
      active?: boolean;
    }>;
  };
}

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#2BA7E2',
    secondary: '#0193DC',
    accent: '#F8C301',
    background: '#F9FBFD',
    text: '#0C101A',
    textSecondary: '#919FAE',
    white: '#FFFFFF',
    black: '#000000'
  },
  fonts: {
    primary: 'Open Sans, sans-serif',
    secondary: 'Arial, sans-serif'
  },
  images: {
    logo: 'default/logo-default.jpg',
    heroBackground: 'default/themeheader.jpg',
    principalImage: 'default/GS-Nguyen-Minh-Ha.jpg',
    galleryImages: [
      '/gallery/nhatruong1.jpg',
      '/gallery/nhatruong2.jpg',
      '/gallery/nhatruong3.jpg',
      '/gallery/nhatruong4.jpg',
      '/gallery/nhatruong5.jpg',
      '/gallery/nhatruong6.jpg'
    ]
  },
  imageSizes: {
    logo: {
      width: '56px',
      height: '56px'
    },
    heroBackground: {
      width: '100%',
      height: '528px'
    },
    principalImage: {
      width: '100%',
      height: '342px'
    },
    galleryImage: {
      width: '100%',
      height: '280px'
    }
  },
  content: {
    schoolName: 'TRƯỜNG ĐẠI HỌC MỞ TP. HỒ CHÍ MINH',
    schoolNameEn: 'HO CHI MINH CITY OPEN UNIVERSITY',
    coreValuesTitle: 'GIÁ TRỊ CỐT LÕI',
    coreValuesText: 'Mở rộng tri thức, Gắn kết thực tiễn, Phục vụ cộng đồng, Chuyên nghiệp, hiệu quả, sáng tạo và thân thiện',
    aboutTitle: 'Giới thiệu Trường',
    aboutDescription: 'Dưới đây là phần giới thiệu tổng quan về trường chúng tôi, từ cổng trường đến toàn bộ các cơ sở vật chất hiện có...',
    principalName: 'GS.TS. Nguyễn Minh Hà',
    principalTitle: 'Hiệu trưởng Trường',
    principalMessage: 'Lời chúc mừng kỷ niệm 35 năm thành lập Trường Đại học Mở Thành phố Hồ Chí Minh',
    principalDescription: 'Từ quy mô ban đầu chỉ với 02 khoa và 13 cán bộ, đến nay Trường Đại học Mở TP.HCM đã phát triển thành một cơ sở giáo dục đa ngành với 13 khoa, 03 trung tâm đào tạo và hơn 850 cán bộ viên chức, người lao động, trong đó hơn 40% có trình độ tiến sĩ trở lên. Bên cạnh đó, hệ thống đào tạo từ xa và vừa học vừa làm đã phủ rộng hơn 40 tỉnh, thành từ Bình Định đến Cà Mau.',
    contactInfo: {
      address: '97 Võ Văn Tần, Phường 6, Quận 3, TP. Hồ Chí Minh',
      phone: '028-39207639 hoặc 028-39207640',
      website: 'https://www.hcmou.edu.vn',
      email: 'ou@ou.edu.vn'
    },
    admissions: {
      heroTitle: "Hệ Đại học chính quy",
      announcementTitle: "Thông báo",
      announcements: [
        { title: "Thông báo Danh sách trúng tuyển bổ sung, Đợt 1 - Năm 2025", link: "#" },
        { title: "Thông báo Điểm chuẩn trúng tuyển Đợt 1 - Năm 2025", link: "#" },
        { title: "Thông báo Ngưỡng đảm bảo chất lượng đầu vào và Quy tắc quy đổi điểm tương đương", link: "#" },
      ],
      infoTitle: "THÔNG TIN TUYỂN SINH ĐH BẰNG THỨ 2 VÀ LIÊN THÔNG CĐ-ĐH",
      infoItems: [
        { title: "Thông báo tuyển sinh Đại học bằng thứ 2 Chính quy - năm 2024", link: "#" },
        { title: "Thông báo tuyển sinh đào tạo liên thông từ cao đẳng lên đại học chính quy năm...", link: "#" },
        { title: "Thông báo và việc không mở lớp đại học liên thông chính quy năm 2023", link: "#" },
      ],
      consultationTitle: "TƯ VẤN TUYỂN SINH",
      consultationItems: [
        { title: "Lịch livestream tư vấn tuyển sinh năm 2025", image: "/images/livestream.jpg" },
        { title: "Các hình thức tư vấn sinh năm học 2025", image: "/images/consultation-type.jpg" },
      ],
      ctaButtonText: "Đăng ký nhận tư vấn",
    },
    whyChoose: {
      ribbonText: "Đăng ký nhận tư vấn",
      title: "Vì sao bạn chọn OU ?",
      introRight: "có bề dày và kinh nghiệm đào tạo suốt 30 năm qua và nhiều thế hệ học trò thành đạt.",
      items: [
        {
          heading: "Trường Đại học công lập",
          body: "HCMCU-OU là trường công lập với nhiều chương trình đạt chuẩn...",
          image: "/images/ou-public.jpg", // Tên file hình ảnh ví dụ
          imageAlt: "Trường Đại học công lập"
        },
        {
          heading: "Đội ngũ giảng viên chất lượng",
          body: "Giảng viên tốt nghiệp trong/ngoài nước, giàu kinh nghiệm thực tiễn...",
          image: "/images/ou-teachers.jpg", // Tên file hình ảnh ví dụ
          captionRight: "Lễ tuyên dương sinh viên có thành tích xuất sắc"
        },
        {
          heading: "Chất lượng đào tạo tốt",
          body: "Tỉ lệ sinh viên có việc làm phù hợp chuyên ngành cao (khảo sát 2019 đạt 82.12%)…",
          image: "/images/ou-quality.jpg", // Tên file hình ảnh ví dụ
        },
        {
          heading: "Học phí thấp",
          body: "Học phí ổn định, phù hợp đa số gia đình.",
          image: "/images/ou-tuition.jpg", // Tên file hình ảnh ví dụ
          captionRight: "Trao học bổng cho sinh viên"
        }
      ],
      extrasTitle: "Và rất nhiều điều hấp dẫn khác",
      extraLinks: [
        { label: "Đào tạo đa ngành" },
        { label: "Cơ sở vật chất tốt" },
        { label: "Vị trí trung tâm" },
        { label: "Dịch vụ hỗ trợ sinh viên" }
      ]
    }

  },
  navigation: {
    items: [
      { label: 'Trang Chủ', path: '/', active: true },
      { label: 'Về chúng tôi', path: '/about' },
      { label: 'Giảng viên', path: '/faculty' },
      { label: 'Tuyển sinh', path: '/admissions' },
      { label: 'Liên hệ', path: '/contact' },
      { label: 'Tin tức', path: '/news' }
    ]
  }
};

// Example theme configurations for different schools
export const exampleThemes: Record<string, Partial<ThemeConfig>> = {
  'university-red': {
    colors: {
      primary: '#DC2626',
      secondary: '#B91C1C',
      accent: '#F59E0B',
      background: '#F9FBFD',
      text: '#0C101A',
      textSecondary: '#919FAE',
      white: '#FFFFFF',
      black: '#000000'
    },
    content: {
      schoolName: 'TRƯỜNG ĐẠI HỌC ABC',
      schoolNameEn: 'ABC UNIVERSITY',
      coreValuesTitle: 'SỨ MỆNH CỦA CHÚNG TÔI',
      coreValuesText: 'Giáo dục chất lượng cao, Nghiên cứu khoa học, Phục vụ cộng đồng, Đổi mới và sáng tạo',
      aboutTitle: 'Giới thiệu Trường',
      aboutDescription: 'Dưới đây là phần giới thiệu tổng quan về trường chúng tôi...',
      principalName: 'GS.TS. Nguyễn Văn A',
      principalTitle: 'Hiệu trưởng Trường',
      principalMessage: 'Lời chúc mừng kỷ niệm 35 năm thành lập Trường Đại học ABC',
      principalDescription: 'Từ quy mô ban đầu...',
      contactInfo: {
        address: '123 Đường ABC, Quận 1, TP. Hồ Chí Minh',
        phone: '028-12345678',
        website: 'https://www.abc.edu.vn',
        email: 'info@abc.edu.vn'
      },
      admissions: {
        heroTitle: "Hệ Đại học chính quy",
        announcementTitle: "Thông báo",
        announcements: [
          { title: "Thông báo Danh sách trúng tuyển bổ sung, Đợt 1 - Năm 2025", link: "#" },
          { title: "Thông báo Điểm chuẩn trúng tuyển Đợt 1 - Năm 2025", link: "#" },
          { title: "Thông báo Ngưỡng đảm bảo chất lượng đầu vào và Quy tắc quy đổi điểm tương đương", link: "#" },
        ],
        infoTitle: "THÔNG TIN TUYỂN SINH ĐH BẰNG THỨ 2 VÀ LIÊN THÔNG CĐ-ĐH",
        infoItems: [
          { title: "Thông báo tuyển sinh Đại học bằng thứ 2 Chính quy - năm 2024", link: "#" },
          { title: "Thông báo tuyển sinh đào tạo liên thông từ cao đẳng lên đại học chính quy năm...", link: "#" },
          { title: "Thông báo và việc không mở lớp đại học liên thông chính quy năm 2023", link: "#" },
        ],
        consultationTitle: "TƯ VẤN TUYỂN SINH",
        consultationItems: [
          { title: "Lịch livestream tư vấn tuyển sinh năm 2025", image: "/images/livestream.jpg" },
          { title: "Các hình thức tư vấn sinh năm học 2025", image: "/images/consultation-type.jpg" },
        ],
        ctaButtonText: "Đăng ký nhận tư vấn",
      },
      whyChoose: {
        ribbonText: "Đăng ký nhận tư vấn",
        title: "Vì sao bạn chọn OU ?",
        introRight: "có bề dày và kinh nghiệm đào tạo suốt 30 năm qua và nhiều thế hệ học trò thành đạt.",
        items: [
          {
            heading: "Trường Đại học công lập",
            body: "HCMCU-OU là trường công lập với nhiều chương trình đạt chuẩn...",
            image: "/images/ou-public.jpg", // Tên file hình ảnh ví dụ
            imageAlt: "Trường Đại học công lập"
          },
          {
            heading: "Đội ngũ giảng viên chất lượng",
            body: "Giảng viên tốt nghiệp trong/ngoài nước, giàu kinh nghiệm thực tiễn...",
            image: "/images/ou-teachers.jpg", // Tên file hình ảnh ví dụ
            captionRight: "Lễ tuyên dương sinh viên có thành tích xuất sắc"
          },
          {
            heading: "Chất lượng đào tạo tốt",
            body: "Tỉ lệ sinh viên có việc làm phù hợp chuyên ngành cao (khảo sát 2019 đạt 82.12%)…",
            image: "/images/ou-quality.jpg", // Tên file hình ảnh ví dụ
          },
          {
            heading: "Học phí thấp",
            body: "Học phí ổn định, phù hợp đa số gia đình.",
            image: "/images/ou-tuition.jpg", // Tên file hình ảnh ví dụ
            captionRight: "Trao học bổng cho sinh viên"
          }
        ],
        extrasTitle: "Và rất nhiều điều hấp dẫn khác",
        extraLinks: [
          { label: "Đào tạo đa ngành" },
          { label: "Cơ sở vật chất tốt" },
          { label: "Vị trí trung tâm" },
          { label: "Dịch vụ hỗ trợ sinh viên" }
        ]
      }
    },
  },

  'university-green': {
    colors: {
      primary: '#059669',
      secondary: '#047857',
      accent: '#F59E0B',
      background: '#F9FBFD',
      text: '#0C101A',
      textSecondary: '#919FAE',
      white: '#FFFFFF',
      black: '#000000'
    },
    content: {
      schoolName: 'TRƯỜNG ĐẠI HỌC XYZ',
      schoolNameEn: 'XYZ UNIVERSITY',
      coreValuesTitle: 'TẦM NHÌN CỦA CHÚNG TÔI',
      coreValuesText: 'Trở thành trường đại học hàng đầu, Đào tạo nhân tài, Nghiên cứu xuất sắc, Hợp tác quốc tế',
      aboutTitle: 'Giới thiệu Trường',
      aboutDescription: 'Dưới đây là phần giới thiệu tổng quan về trường chúng tôi...',
      principalName: 'GS.TS. Nguyễn Văn B',
      principalTitle: 'Hiệu trưởng Trường',
      principalMessage: 'Lời chúc mừng kỷ niệm 35 năm thành lập Trường Đại học XYZ',
      principalDescription: 'Từ quy mô ban đầu...',
      contactInfo: {
        address: '456 Đường XYZ, Quận 2, TP. Hồ Chí Minh',
        phone: '028-87654321',
        website: 'https://www.xyz.edu.vn',
        email: 'info@xyz.edu.vn'
      },
      admissions: {
        heroTitle: "Hệ Đại học chính quy",
        announcementTitle: "Thông báo",
        announcements: [
          { title: "Thông báo Danh sách trúng tuyển bổ sung, Đợt 1 - Năm 2025", link: "#" },
          { title: "Thông báo Điểm chuẩn trúng tuyển Đợt 1 - Năm 2025", link: "#" },
          { title: "Thông báo Ngưỡng đảm bảo chất lượng đầu vào và Quy tắc quy đổi điểm tương đương", link: "#" },
        ],
        infoTitle: "THÔNG TIN TUYỂN SINH ĐH BẰNG THỨ 2 VÀ LIÊN THÔNG CĐ-ĐH",
        infoItems: [
          { title: "Thông báo tuyển sinh Đại học bằng thứ 2 Chính quy - năm 2024", link: "#" },
          { title: "Thông báo tuyển sinh đào tạo liên thông từ cao đẳng lên đại học chính quy năm...", link: "#" },
          { title: "Thông báo và việc không mở lớp đại học liên thông chính quy năm 2023", link: "#" },
        ],
        consultationTitle: "TƯ VẤN TUYỂN SINH",
        consultationItems: [
          { title: "Lịch livestream tư vấn tuyển sinh năm 2025", image: "/images/livestream.jpg" },
          { title: "Các hình thức tư vấn sinh năm học 2025", image: "/images/consultation-type.jpg" },
        ],
        ctaButtonText: "Đăng ký nhận tư vấn",
      },
      whyChoose: {
        ribbonText: "Đăng ký nhận tư vấn",
        title: "Vì sao bạn chọn OU ?",
        introRight: "có bề dày và kinh nghiệm đào tạo suốt 30 năm qua và nhiều thế hệ học trò thành đạt.",
        items: [
          {
            heading: "Trường Đại học công lập",
            body: "HCMCU-OU là trường công lập với nhiều chương trình đạt chuẩn...",
            image: "/images/ou-public.jpg", // Tên file hình ảnh ví dụ
            imageAlt: "Trường Đại học công lập"
          },
          {
            heading: "Đội ngũ giảng viên chất lượng",
            body: "Giảng viên tốt nghiệp trong/ngoài nước, giàu kinh nghiệm thực tiễn...",
            image: "/images/ou-teachers.jpg", // Tên file hình ảnh ví dụ
            captionRight: "Lễ tuyên dương sinh viên có thành tích xuất sắc"
          },
          {
            heading: "Chất lượng đào tạo tốt",
            body: "Tỉ lệ sinh viên có việc làm phù hợp chuyên ngành cao (khảo sát 2019 đạt 82.12%)…",
            image: "/images/ou-quality.jpg", // Tên file hình ảnh ví dụ
          },
          {
            heading: "Học phí thấp",
            body: "Học phí ổn định, phù hợp đa số gia đình.",
            image: "/images/ou-tuition.jpg", // Tên file hình ảnh ví dụ
            captionRight: "Trao học bổng cho sinh viên"
          }
        ],
        extrasTitle: "Và rất nhiều điều hấp dẫn khác",
        extraLinks: [
          { label: "Đào tạo đa ngành" },
          { label: "Cơ sở vật chất tốt" },
          { label: "Vị trí trung tâm" },
          { label: "Dịch vụ hỗ trợ sinh viên" }
        ]
      }
    }
  }
}

// Utility function to merge partial theme with default theme
export const mergeTheme = (partialTheme: Partial<ThemeConfig>): ThemeConfig => {
  return {
    colors: {
      ...defaultTheme.colors,
      ...partialTheme.colors
    },
    fonts: {
      ...defaultTheme.fonts,
      ...partialTheme.fonts
    },
    images: {
      ...defaultTheme.images,
      ...partialTheme.images
    },
    imageSizes: {
      ...defaultTheme.imageSizes,
      ...partialTheme.imageSizes
    },
    content: {
      ...defaultTheme.content,
      ...partialTheme.content,
      contactInfo: {
        ...defaultTheme.content.contactInfo,
        ...partialTheme.content?.contactInfo
      },
      whyChoose: {
        ...defaultTheme.content.whyChoose,
        ...partialTheme.content?.whyChoose,
        items:
          partialTheme.content?.whyChoose?.items ??
          defaultTheme.content.whyChoose.items,
        extraLinks:
          partialTheme.content?.whyChoose?.extraLinks ??
          defaultTheme.content.whyChoose.extraLinks,
      },
    },
    navigation: {
      ...defaultTheme.navigation,
      ...partialTheme.navigation
    },

  };
};


export const applyTheme = (theme: ThemeConfig | Partial<ThemeConfig>) => {
  const root = document.documentElement;
  const fullTheme = 'colors' in theme && theme.colors ? theme as ThemeConfig : mergeTheme(theme);

  // Apply CSS custom properties
  root.style.setProperty('--primary-color', fullTheme.colors.primary);
  root.style.setProperty('--secondary-color', fullTheme.colors.secondary);
  root.style.setProperty('--accent-color', fullTheme.colors.accent);
  root.style.setProperty('--background-color', fullTheme.colors.background);
  root.style.setProperty('--text-color', fullTheme.colors.text);
  root.style.setProperty('--text-secondary-color', fullTheme.colors.textSecondary);
  root.style.setProperty('--white-color', fullTheme.colors.white);
  root.style.setProperty('--black-color', fullTheme.colors.black);
  root.style.setProperty('--primary-font', fullTheme.fonts.primary);
  root.style.setProperty('--secondary-font', fullTheme.fonts.secondary);
};
