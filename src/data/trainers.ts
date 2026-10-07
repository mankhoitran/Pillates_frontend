export interface TrainerProfile {
  id: string;
  folderName: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  certificates: string[];
  bio: string;
  quote: string;
  avatar: string;
  classesAssigned: string[];
}

export const TRAINERS_DATA: TrainerProfile[] = [
  {
    id: 'hlv-nguyen-thu-huyen',
    folderName: 'HLV_Nguyen_Thu_Huyen',
    name: 'HLV Nguyễn Thu Huyền',
    role: 'Huấn Luyện Viên Trưởng & Founder',
    experience: '8+ Năm Kinh Nghiệm',
    specialties: [
      'Reformer Flow Chuyên Sâu',
      'Khóa Đào Tạo HLV Pilates Toàn Diện',
      'Chỉnh Dáng & Phục Hồi Cột Sống',
      'Master Cadillac & Trapeze',
    ],
    certificates: [
      'PMA Certified Pilates Teacher (USA)',
      'Master Reformer & Cadillac Comprehensive',
      'Chứng Chỉ Phân Tích Tư Thế & Cơ Sinh Học',
    ],
    bio: 'Chuyên gia đào tạo hàng đầu tại Bảo Lộc, người trực tiếp xây dựng giáo trình rèn luyện chuẩn quốc tế và dẫn dắt các khóa đào tạo HLV Pilates chuyên nghiệp.',
    quote: 'Tìm đến sự cân bằng trong cơ thể chính mình, đặt tâm trí vào hơi thở và sức mạnh của cơ bắp.',
    avatar: '/trainers/hlv-nguyen-thu-huyen/avatar.jpg',
    classesAssigned: [
      'Reformer Khởi Đầu Ngày Mới',
      'Cadillac Trapeze Trị Liệu Cột Sống 1-1',
      'Khóa Đào Tạo HLV Pilates Toàn Diện',
    ],
  },
  {
    id: 'hlv-minh-thu',
    folderName: 'HLV_Minh_Thu',
    name: 'HLV Minh Thư',
    role: 'Chuyên Viên Căn Chỉnh Tư Thế & Cơ Sinh Học',
    experience: '5 Năm Kinh Nghiệm',
    specialties: [
      'Khắc Phục Gù Lưng & Đau Cổ Vai Gáy',
      'Cung Uốn Spine Arc & Thùng Barrel',
      'Điêu Khắc Cơ Thon Gọn & Siết Eo',
      'Mat Pilates & Thảm Căn Bản',
    ],
    certificates: [
      'STOTT PILATES Matwork & Reformer',
      'Posture Assessment & Biomechanics Specialist',
    ],
    bio: 'Tốt nghiệp chuyên ngành khoa học vận động, thấu hiểu tường tận giải phẫu học và chuyên sâu về các vi điều chỉnh trên thảm và thùng Barrel.',
    quote: 'Kỷ luật chính là chiếc cầu nối vững chắc giữa mục tiêu và thành tựu.',
    avatar: '/trainers/hlv-minh-thu/avatar.jpg',
    classesAssigned: [
      'Cốt Lõi Chuẩn Xác & Chỉnh Dáng Gù',
      'Thùng Uốn Barrel & Điêu Khắc Vòng Eo',
      'Phòng Lab Tư Thế & Cung Uốn Spine Arc',
    ],
  },
  {
    id: 'hlv-hoang-yen',
    folderName: 'HLV_Hoang_Yen',
    name: 'HLV Hoàng Yến',
    role: 'HLV Chuyên Sâu Cadillac Trapeze & Mẹ Bầu',
    experience: '4 Năm Kinh Nghiệm',
    specialties: [
      'Cadillac 1-1 Chuyên Sâu',
      'Prenatal Pilates Chăm Sóc Mẹ Bầu',
      'Ổn Định Khung Chậu & Cơ Đáy Sàn',
      'Dòng Chảy Ánh Nến Chánh Niệm Phục Hồi',
    ],
    certificates: [
      'Prenatal & Postnatal Pilates Specialist',
      'Cadillac / Trapeze Comprehensive Instructor',
    ],
    bio: 'Tận tâm, ân cần đồng hành cùng các mẹ bầu và học viên phục hồi thể trạng sau sinh hoặc chấn thương cột sống.',
    quote: 'Dòng chảy êm dịu, tỏa sáng từ bên trong.',
    avatar: '/trainers/hlv-hoang-yen/avatar.jpg',
    classesAssigned: [
      'Pilates Cho Mẹ Bầu & Ổn Định Khung Chậu',
      'Reformer Hoàng Hôn Thư Giãn Vai Gáy',
      'Dòng Chảy Ánh Nến Chánh Niệm Phục Hồi',
    ],
  },
  {
    id: 'hlv-quoc-bao',
    folderName: 'HLV_Quoc_Bao',
    name: 'HLV Quốc Bảo',
    role: 'Chuyên Viên Hiệu Suất Thể Lực & Dynamic Reformer',
    experience: '5 Năm Kinh Nghiệm',
    specialties: [
      'Dynamic Athletic Reformer',
      'Tăng Cường Sức Mạnh Cơ Lõi (Core Power)',
      'Jumpboard Reformer Cardio',
      'Cải Thiện Thể Lực & Sức Bền',
    ],
    certificates: [
      'Advanced Dynamic Reformer Instructor',
      'Athletic Conditioning & Mobility Specialist',
    ],
    bio: 'Mang đến nguồn năng lượng tích cực bùng nổ, giúp học viên bức phá giới hạn thể lực một cách khoa học, an toàn và đầy cảm hứng.',
    quote: 'Chinh phục bản thân chính là điều tuyệt vời nhất mà chúng ta luôn tìm kiếm.',
    avatar: '/trainers/hlv-quoc-bao/avatar.jpg',
    classesAssigned: [
      'Dynamic Athletic Reformer',
      'Reformer Jumpboard Nhịp Điệu Khỏe Khoắn',
      'Reformer Đốt Mỡ Cơ Lõi Buổi Sáng',
    ],
  },
  {
    id: 'hlv-nguyen-thi-mai',
    folderName: 'HLV_Nguyen_Thi_Mai',
    name: 'HLV Nguyễn Thị Mai',
    role: 'Master Trainer & Giảng Viên Khách Mời',
    experience: '8 Năm Kinh Nghiệm',
    specialties: [
      'Reformer Master Class',
      'Mat Pilates Cổ Điển & Hiện Đại',
      'Đào Tạo Sư Phạm HLV Pilates',
    ],
    certificates: [
      'PMA-CPT (Pilates Method Alliance)',
      'STOTT PILATES Full Certification',
      '5 Năm Giảng Dạy Tại TP.HCM & Hà Nội',
    ],
    bio: 'Chuyên gia huấn luyện Pilates với 8 năm kinh nghiệm thực chiến và đào tạo tại các trung tâm Pilates hàng đầu TP.HCM và Hà Nội.',
    quote: 'Pilates không chỉ là bài tập, đó là phong cách sống và nghệ thuật làm chủ cơ thể.',
    avatar: '/trainers/hlv-nguyen-thi-mai/avatar.jpg',
    classesAssigned: [
      'Reformer Master Workshop',
      'Khóa Đào Tạo Kỹ Năng Sư Phạm HLV',
    ],
  },
];
