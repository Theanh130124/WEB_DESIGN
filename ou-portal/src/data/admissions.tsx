export interface AdmissionsSectionContent {
    admissionsForms: Array<{
        title: string;
        announcements: Array<{ title: string; link: string }>;
        announcementImageGroup: string[];
        announcementBox: { title: string; text: string } | null;
        infoImage: string | null;
    }>;
    consultationTitle: string;
    consultationItems: Array<{ title: string; image: string }>;
    ctaButtonText: string;
}

export interface WhyChooseContent {
    title: string;
    items: Array<{
        title: string;
        description: string;
        image?: string;
        imageTitle?: string;
    }>;
}

export const admissionsData: AdmissionsSectionContent = {
    admissionsForms: [
        {
            title: "Hệ Đại học chính quy",
            announcements: [                
                { title: "Thông báo Danh sách trúng tuyển bổ sung, Đợt 1 - Năm 2025", link: "#" },
                { title: "Thông báo Điểm chuẩn trúng tuyển Đợt 1 - Năm 2025", link: "#" },
                { title: "Thông báo Ngưỡng đảm bảo chất lượng đầu vào và Quy tắc quy đổi điểm tương đương", link: "#" },
            ],
            announcementImageGroup: [
                "/images/noti-img1.jpg",
                "/images/noti-img2.jpg",
                "/images/noti-img3.jpg",
            ],
            announcementBox: {
                title: "THÔNG BÁO",
                text: "Đăng ký xét tuyển đại học chính quy đợt 2 (đợt bổ sung) năm 2025",
            },
            infoImage: null,
        },
        {
            title: "THÔNG TIN TUYỂN SINH ĐH BẰNG THỨ 2 VÀ LIÊN THÔNG CĐ-ĐH",
            announcements: [
                { title: "Thông báo tuyển sinh Đại học bằng thứ 2 chính quy - năm 2024", link: "#" },
                { title: "Thông báo tuyển sinh đào tạo liên thông từ cao đẳng lên đại học chính quy năm...", link: "#" },
                { title: "Thông báo về việc không mở lớp đại học liên thông chính quy năm 2023", link: "#" },
            ],
            announcementImageGroup: [
                "/images/info-img1.jpg",
                "/images/info-img2.jpg",
                "/images/info-img3.jpg",
            ],
            announcementBox: null,
            infoImage: "/images/illustration-people.png",
        }
    ],
    consultationTitle: "TƯ VẤN TUYỂN SINH",
    consultationItems: [
        { title: "Lịch livestream tư vấn tuyển sinh năm 2025", image: "/images/livestream.png" },
        { title: "Các hình thức tư vấn tuyển sinh năm học 2025", image: "/images/consultation.png" },
    ],
    ctaButtonText: "Đăng ký nhận tư vấn",
};

export const whyChooseData: WhyChooseContent = {
    title: "Vì sao bạn chọn OU ?",
    items: [
        {
            title: "Trường Đại học công lập",
            description: "có bề dày và kinh nghiệm đào tạo suốt 30 năm qua và nhiều thế hệ học trò thành đạt.",
            image: "/images/why-ou-1.jpg",
            imageTitle: "Lễ trao bằng tốt nghiệp đại học năm 2019"
        },
        {
            title: "Đội ngũ giảng viên chất lượng",
            description: "Chương Giảng viên chất lượng, tốt nghiệp từ nhiều trường danh giá nước ngoài, có kinh nghiệm thực tiễn, thâm niên giảng dạy và quan tâm đến người học.",
            image: "/images/why-ou-2.jpg",
            imageTitle: "Lễ tuyên dương sinh viên có thành tích xuất sắc"
        },
        {
            title: "Chất lượng đào tạo tốt",
            description: "Chất lượng đào tạo luôn được quan tâm và với kết quả khảo sát sinh viên có việc làm phù hợp với ngành nghề được đào tạo luôn đạt mức 82.12% (số liệu khảo sát năm 2019)"
        },
        {
            title: "Học phí thấp",
            description: "Học phí ổn định và thấp, phù hợp với đa số các bạn học sinh cả nước. Bạn có thể hoàn toàn an tâm khi tham gia học tại HCMC-OU mà không quá lo lắng về học phí."
        },
        {
            title: "Rất nhiều học bổng",
            description: "HCMC-OU dành cho đến 20% kinh phí nhà trường cho các loại học bổng dành cho các bạn sinh viên như: Học bổng tuyển sinh, học bổng tài năng, học bổng khuyến khích học tập, học bổng sinh viên giỏi, học bổng vượt khó... Và mặc dù các bạn, rất nhiều anh chị cựu sinh viên ở HCMC-OU học suốt 4 năm mà không tốn bất kỳ khoản học phí nào nhờ nhận học bổng đó nha. Ngoài ra Trường còn có phương châm \"không để bất kỳ sinh viên nào khó khăn phải nghỉ học vì vấn đề học phí\", như vậy các bạn có thể an tâm mà tập trung học thật tốt."
        },
        {
            title: "Và rất nhiều điều hấp dẫn khác",
            description: "Đào tạo đa ngành, song ngành\nCơ sở vật chất tốt, vị trí khu trung tâm thành phố\nNhiều phương thức xét tuyển\nDịch vụ tư vấn, hỗ trợ sinh viên tốt, thuận tiện, nhanh chóng"
        }
    ]
};