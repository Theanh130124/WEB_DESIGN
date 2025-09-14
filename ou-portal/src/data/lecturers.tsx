export type Lecturer = {
  id: string;
  name: string;
  degree?: string;          // "Tiến sĩ", "Thạc sĩ", ...
  field?: string;           // Lĩnh vực
  role?: string;            // Trưởng bộ môn, Phụ trách khoa...
  image: string;
};

export type LecturersSectionContent = {
  title: string;
  subtitle?: string;
  lecturers: Lecturer[];
};

export const lecturersSectionData: LecturersSectionContent = {
  title: "Đội ngũ giảng viên",
  subtitle: "Tận tâm – Chuyên môn cao – Gắn kết doanh nghiệp",
  lecturers: [
    {
      id: "gv-1",
      name: "Nguyễn Hoàng Sinh",
      degree: "Tiến sĩ",
      field: "Truyền thông Marketing",
      role: "Phụ trách Khoa Quản trị Kinh doanh",
      image: "http://bizweb.dktcdn.net/100/021/721/files/21-nguyen-hoang-sinh.jpg?v=1589640868081",
    },
    {
      id: "gv-2",
      name: "Hà Thị Thùy Dương",
      degree: "Tiến sĩ",
      field: "Quản trị du lịch",
      role: "Trưởng bộ môn Du lịch",
      image: "http://bizweb.dktcdn.net/100/021/721/files/6-ha-thi-thuy-duong.png?v=1589641421928",
    },
    {
      id: "gv-3",
      name: "Kiều Anh Tài",
      degree: "Tiến sĩ",
      field: "Quản trị kinh doanh",
      role: "Trưởng bộ môn Marketing",
      image: "http://bizweb.dktcdn.net/thumb/compact/100/021/721/files/1e2d3f9dcf170d495406.jpg?v=1659522516854",
    },
  ],
};
