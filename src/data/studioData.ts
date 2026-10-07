import { siteConfig } from '../config/siteConfig';

export interface ClassDiscipline {
  id: string;
  tagline: string;
  name: string;
  subtitle: string;
  description: string;
  focus: string[];
  equipment: string;
  intensity: 'Thư Thái & Chánh Niệm' | 'Điêu Khắc & Chuẩn Xác' | 'Rèn Luyện Thể Lực' | 'Chuyên Biệt Cá Nhân';
  duration: string;
  image: string;
  imageClassName?: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Kiến Trúc' | 'Chuyển Động' | 'Cân Bằng' | 'Không Gian';
  aspect: 'portrait' | 'landscape' | 'square' | 'tall';
  image: string;
  caption: string;
  archType?: 'arch-top' | 'arch-full' | 'arch-asymmetric-left' | 'arch-asymmetric-right' | 'rect';
  imageClassName?: string;
}

export interface TimetableSlot {
  id: string;
  time: string;
  title: string;
  category: 'Reformer' | 'Barre & Thảm' | 'Cadillac Riêng' | 'Prenatal Mẹ Bầu';
  instructor: string;
  instructorTitle: string;
  level: 'Mọi Trình Độ' | 'Nền Tảng' | 'Nâng Cao' | 'Chuyên Sâu 1-1';
  spots: number;
  room: 'Không Gian Vòm Arch Sanctuary' | 'Phòng Riêng Cadillac Suite' | 'Phòng Tập Barre Atelier';
  intensity: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  membership: string;
  image: string;
  studioMoment: string;
}

export interface CustomerBooking {
  id: string;
  bookingCode: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  className: string;
  category: 'Reformer' | 'Barre & Thảm' | 'Cadillac Riêng' | 'Prenatal Mẹ Bầu';
  day: string;
  date: string;
  time: string;
  instructor: string;
  room: 'Không Gian Vòm Arch Sanctuary' | 'Phòng Riêng Cadillac Suite' | 'Phòng Tập Barre Atelier';
  matNumber: number;
  status: 'Đã Xác Nhận' | 'Đã Hoàn Thành' | 'Danh Sách Chờ';
  notes?: string;
}

export interface RoomDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  highlights: { title: string; description: string }[];
}

export const STUDIO_DETAILS = {
  brandName: siteConfig.business.name,
  tagline: siteConfig.business.tagline,
  motto: 'Tìm đến sự cân bằng trong chính mình, đặt tâm trí vào hơi thở và sức mạnh của cơ bắp.',
  est: '2024',
  logoPath: '/logo.jpg',
  roomImgPath: '/room_img.jpg',
  brandImgPath: '/brand.jpg',
  address: siteConfig.location.address,
  shortAddress: 'TTTM Phương Nam, TP. Bảo Lộc',
  hours: {
    monFri: '06:00 — 21:00',
    sat: '07:00 — 19:30',
    sun: '07:30 — 18:00',
    display: 'Thứ Hai – Thứ Sáu: 06:00 – 21:00 | Thứ Bảy – Chủ Nhật: 07:00 – 19:30',
  },
  phone: siteConfig.contact.phone,
  phoneDisplay: `Hotline: ${siteConfig.contact.phone}`,
  email: siteConfig.contact.email,
  instagram: siteConfig.social.instagram,
  facebookUrl: siteConfig.social.facebook,
  hpillUrl: siteConfig.social.facebook,
  social: {
    facebook: siteConfig.social.facebook,
    hpillFacebook: siteConfig.social.facebook,
    instagram: siteConfig.social.instagram,
    pinterest: '@hpilates.baoloc',
  },
  valet: 'Khu vực đỗ xe rộng rãi, thuận tiện ngay sảnh TTTM Phương Nam, TP. Bảo Lộc',
  leadTrainer: siteConfig.owner.name,
  leadTrainerTitle: siteConfig.owner.title,
};

export interface HealthBenefit {
  number: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
}

export const HEALTH_BENEFITS: HealthBenefit[] = [
  {
    number: '01',
    title: 'Tạm Biệt Đau Mỏi Vai Gáy & Lưng Dưới',
    tagline: 'GIẢI PHÓNG ÁP LỰC CỘT SỐNG SAU 8 TIẾNG LÀM VIỆC',
    description:
      'Các bài tập kéo giãn nhẹ nhàng với lực kháng lò xo êm ái giúp giải tỏa sự chèn ép đè nặng lên các đốt sống lưng, mở rộng khoang ngực và đánh tan mọi cơn nhức mỏi cổ vai gáy do ngồi văn phòng lâu.',
    badge: 'Trị Liệu Cột Sống',
  },
  {
    number: '02',
    title: 'Siết Eo Thon Gọn & Phẳng Bụng Dưới',
    tagline: 'KÍCH HOẠT NHÓM CƠ LÕI SÂU KHÔNG CẦN TẬP NẶNG',
    description:
      'Tác động sâu vào khối cơ ngang bụng (transverse abdominis) và đáy chậu, giúp siết gọn vòng eo, tạo đường thắt lưng thanh thoát và làm phẳng bụng dưới tự nhiên mà không gây áp lực lên khớp gối hay thắt lưng.',
    badge: 'Điêu Khắc Cơ Thể',
  },
  {
    number: '03',
    title: 'Chỉnh Dáng Gù, Mở Vai Thanh Thoát',
    tagline: 'CÂN BẰNG LẠI TRỤC CƠ THỂ TỰ NHIÊN & TỰ TIN',
    description:
      'Tái thiết lập cấu trúc xương khớp, mở rộng khớp vai và chỉnh sửa tật gù lưng hay ưỡn bụng. Bạn sẽ sở hữu dáng đi đứng thẳng thớm, cao ráo và phong thái tự tin đầy cuốn hút.',
    badge: 'Chỉnh Dáng Chuẩn Xác',
  },
  {
    number: '04',
    title: 'Xả Stress & Ngủ Sâu Giấc Hơn',
    tagline: 'HÒA NHỊP HƠI THỞ SÂU VÀ CHUYỂN ĐỘNG CHÁNH NIỆM',
    description:
      'Sự kết hợp đồng điệu giữa hơi thở cơ hoành và chuỗi chuyển động chậm rãi giúp làm dịu hệ thần kinh giao cảm, giải phóng hormone endorphin đem lại giấc ngủ sâu êm đềm và tâm trí nhẹ bẫng.',
    badge: 'Thư Giãn Thân Tâm',
  },
  {
    number: '05',
    title: 'Êm Ái & An Toàn Cho Mọi Thể Trạng',
    tagline: 'CHẾ ĐỘ NÂNG ĐỠ ĐẶC BIỆT CHO NGƯỜI MỚI BẮT ĐẦU',
    description:
      'Dù bạn là người mới bắt đầu, ít vận động hay có khớp gối/cột sống nhạy cảm, hệ thống máy móc cao cấp luôn có chế độ trợ lực và tinh chỉnh biên độ riêng biệt, cam kết không gây chấn thương.',
    badge: 'An Toàn Tuyệt Đối',
  },
];

export const INSTRUCTORS = [
  {
    name: 'HLV Nguyễn Thu Huyền',
    role: 'Huấn Luyện Viên Trưởng & Chuyên Gia Đào Tạo',
    experience: '8+ Năm Kinh Nghiệm',
    specialty: 'Reformer Flow Chuyên Sâu, Khóa Đào Tạo HLV Pilates Toàn Diện, Chỉnh Dáng & Phục Hồi',
    bio: 'Chuyên gia đào tạo hàng đầu tại Bảo Lộc, người trực tiếp xây dựng giáo trình rèn luyện chuẩn quốc tế và dẫn dắt các khóa đào tạo HLV Pilates chuyên nghiệp.',
    quote: '"Tìm đến sự cân bằng trong cơ thể chính mình, đặt tâm trí vào hơi thở và sức mạnh của cơ bắp."',
  },
  {
    name: 'HLV Minh Thư',
    role: 'Chuyên Viên Căn Chỉnh Tư Thế & Cơ Sinh Học',
    experience: '5 Năm Kinh Nghiệm',
    specialty: 'Khắc Phục Gù Lưng, Đau Cổ Vai Gáy & Cung Uốn Spine Arc',
    bio: 'Tốt nghiệp chuyên ngành khoa học vận động, thấu hiểu tường tận giải phẫu học và chuyên sâu về các vi điều chỉnh trên thảm và thùng Barrel.',
    quote: '"Kỷ luật chính là chiếc cầu nối vững chắc giữa mục tiêu và thành tựu."',
  },
  {
    name: 'HLV Hoàng Yến',
    role: 'HLV Chuyên Sâu Cadillac Trapeze & Mẹ Bầu',
    experience: '4 Năm Kinh Nghiệm',
    specialty: 'Cadillac 1-1, Prenatal Chăm Sóc Khung Chậu & Phục Hồi Thần Kinh',
    bio: 'Tận tâm, ân cần đồng hành cùng các mẹ bầu và học viên phục hồi thể trạng sau sinh hoặc chấn thương.',
    quote: '"Dòng chảy êm dịu, tỏa sáng từ bên trong."',
  },
  {
    name: 'HLV Quốc Bảo',
    role: 'Chuyên Viên Hiệu Suất Thể Lực & Dynamic Reformer',
    experience: '5 Năm Kinh Nghiệm',
    specialty: 'Dynamic Athletic Reformer, Tăng Cường Cơ Lõi & Sức Bền',
    bio: 'Mang đến năng lượng bùng nổ, giúp học viên bức phá giới hạn thể lực một cách khoa học và an toàn.',
    quote: '"Chinh phục bản thân chính là điều chúng ta luôn tìm kiếm."',
  },
];

export const SPECIAL_PROGRAMS = [
  {
    id: 'posture-assessment',
    title: 'Đo & Kiểm Tra Tư Thế Miễn Phí (Posture Assessment)',
    tagline: 'ĐẶC QUYỀN BUỔI TRẢI NGHIỆM ĐẦU TIÊN',
    description:
      'Được HLV Nguyễn Thu Huyền trực tiếp phân tích trục cột sống, độ nghiêng khung chậu, điểm mất cân bằng cơ và lập phác đồ tập luyện cá nhân hóa hoàn toàn miễn phí.',
    badge: 'Miễn Phí 100%',
  },
  {
    id: 'trainer-certification',
    title: 'Khóa Đào Tạo HLV Pilates Toàn Diện Tại Bảo Lộc',
    tagline: 'CẤP CHỨNG CHỈ CHUYÊN NGHIỆP — DẪN DẮT BỞI HLV NGUYỄN THU HUYỀN',
    description:
      'Chương trình đào tạo toàn diện từ giải phẫu học, vận hành hệ máy Reformer, Cadillac, Barrel đến kỹ năng sư phạm thực chiến dành cho những ai đam mê nghề HLV Pilates cao cấp.',
    badge: 'Chứng Chỉ Đào Tạo',
  },
  {
    id: 'beginner-friendly',
    title: 'Lớp Pilates Dành Cho Người Mới Bắt Đầu',
    tagline: 'GIÁO ÁN THÍCH ỨNG NHỊP NHÀNG — TỐI ĐA 5 HỌC VIÊN',
    description:
      'Không đòi hỏi dẻo dai hay thể lực trước. Huấn luyện viên theo sát từng chuyển động, hỗ trợ căn chỉnh lực lò xo phù hợp nhất cho từng học viên.',
    badge: 'Thân Thiện Mới Bắt Đầu',
  },
];

export const ROOM_DETAILS: RoomDetail[] = [
  {
    id: 'arch-sanctuary',
    title: 'Không Gian Vòm Arch Sanctuary',
    subtitle: 'Nắng ấm tự nhiên hòa cùng thiết bị Reformer gỗ sồi thủ công',
    tagline: 'PHÒNG TẬP CHÍNH & KHÔNG GIAN THIẾT BỊ',
    description:
      'Được kiến tạo từ những hốc vòm thạch cao Venetian cách âm tinh tế cùng rèm lanh dệt mộc, Arch Sanctuary đón trọn ánh nắng dịu dàng trong từng khoảnh khắc chuyển ngày. Từng chiếc máy Reformer được các nghệ nhân chế tác thủ công từ gỗ sồi tự nhiên nguyên khối, kết hợp hệ lò xo mạ niken vận hành êm ái, mang đến lực kháng mượt mà và cảm giác nâng đỡ cột sống hoàn hảo.',
    image: '/room_img3.jpg',
    specs: [
      { label: 'QUY MÔ LỚP', value: 'Tối Đa 5 Thảm / Phiên' },
      { label: 'THIẾT BỊ', value: 'Reformer Gỗ Sồi Nghệ Nhân' },
      { label: 'ÂM HỌC', value: 'Vòm Thạch Cao Venetian Tĩnh Lặng' },
      { label: 'KHÔNG KHÍ', value: 'Lọc HEPA-13 & Hương Khuynh Diệp' },
    ],
    features: [
      'Độ căng lò xo được vi chỉnh tương thích tối đa với cấu trúc cột sống của từng học viên',
      'Hệ thống chiếu sáng tự nhiên mô phỏng nhịp sinh học bình minh và hoàng hôn êm dịu',
      'Khoảng cách rộng rãi giữa các máy đảm bảo sự riêng tư và không gian tập trung tuyệt đối',
      'Bàn trượt ổ bi chính xác theo chuẩn kỹ thuật Đức cho chuyển động lướt êm ái, không ma sát',
    ],
    highlights: [
      {
        title: 'Cấu Trúc Vòm Triệt Âm',
        description: 'Đường cong kiến trúc giữ lại sự thanh tịnh, biến mọi xao động bên ngoài thành khoảng lặng an yên.',
      },
      {
        title: 'Chất Liệu Xúc Giác Mộc',
        description: 'Gỗ sồi ấm áp, chi tiết đồng thau chải xước và bề mặt sợi dệt cao cấp chống trượt êm ái.',
      },
      {
        title: 'Bầu Không Khí Chữa Lành',
        description: 'Hệ thống thanh lọc khuếch tán tinh dầu thảo mộc tự nhiên, duy trì nền nhiệt lý tưởng 21.5°C.',
      },
    ],
  },
  {
    id: 'brand-sanctuary-details',
    title: 'Sảnh Thư Thái & Phòng Cadillac Biệt Lập',
    subtitle: 'Nghi thức giác quan và trải nghiệm phục hồi thân tâm',
    tagline: 'TIỆN ÍCH, QUẦY TRÀ THẢO MỘC & PHÒNG CADILLAC 1-1',
    description:
      'Vượt trên một buổi rèn luyện thể chất, studio mở ra một nghi thức chăm sóc giác quan toàn diện. Học viên có thể thư giãn tại sảnh tiếp đón ốp tường vữa Venetian ấm áp, soi bóng qua gương uốn lượn nghệ thuật, tận hưởng trà thảo mộc tươi và không gian Cadillac biệt lập.',
    image: '/room_img1.jpg',
    specs: [
      { label: 'TIỆN ÍCH', value: 'Sảnh Chờ & Gương Lượn Sóng' },
      { label: 'DƯỠNG CHẤT', value: 'Trà Thảo Mộc & Nước Kiềm Tươi' },
      { label: 'PHÒNG RIÊNG', value: 'Cadillac & Trapeze Độc Bản' },
      { label: 'DỊCH VỤ', value: 'Concierge & Đỗ Xe Chu Đáo' },
    ],
    features: [
      'Sảnh đón tiếp thư thái với sofa bọc nỉ boucle uốn cong, gương nghệ thuật viền led lung linh',
      'Phòng tập 1-1 trang bị trọn bộ thiết bị Cadillac Trapeze và Ghế Wunda dành cho chỉnh dáng chuyên biệt',
      'Quầy trà thư giãn phục vụ các loại trà ủ từ hương thảo tươi hữu cơ, hoa cúc La Mã và lá bạc hà mát lành',
      'Tủ đồ cá nhân bảo mật thông minh tích hợp sẵn trạm sạc thiết bị không dây tiện lợi',
    ],
    highlights: [
      {
        title: 'Sảnh Đón & Gương Nghệ Thuật',
        description: 'Không gian thư giãn nhẹ nhàng giúp cơ thể cân bằng năng lượng và lắng đọng tâm trí trước giờ tập.',
      },
      {
        title: 'Phòng Cadillac Chuyên Sâu',
        description: 'Không gian riêng tư tuyệt đối với hệ thống khung treo Cadillac và thùng uốn Spine Barrel cổ điển.',
      },
      {
        title: 'Dịch Vụ Concierge Chu Đáo',
        description: 'Đội ngũ chăm sóc tận tâm, khăn ấm ướp tinh dầu khuynh diệp và tất tập cao cấp sẵn có.',
      },
    ],
  },
];

export const ROOM_SHOWCASE_DATA = ROOM_DETAILS;

export const DISCIPLINES: ClassDiscipline[] = [
  {
    id: 'reformer',
    tagline: '01 — THIẾT BỊ CHUẨN XÁC',
    name: 'REFORMER FLOW',
    subtitle: 'Kéo dài. Kiểm soát. Cân bằng.',
    description:
      'Hòa mình vào chuỗi chuyển động liên hoàn trên hệ thống máy Reformer gỗ sồi thủ công. Từng bài tập được thiết kế tinh tế nhằm kéo giãn các dải cơ, giải tỏa áp lực đè nặng lên các đốt sống và khơi dậy sức mạnh cốt lõi bền bỉ từ bên trong.',
    focus: ['Giải Áp & Căn Chỉnh Cột Sống', 'Tái Thiết Lập Tư Thế Thẳng', 'Kiểm Soát Lực Kháng Mượt Mà', 'Hòa Nhịp Hơi Thở Chánh Niệm'],
    equipment: 'Máy Reformer Gỗ Sồi Thủ Công & Hệ Thống Lò Xo Kỹ Thuật Đức',
    intensity: 'Điêu Khắc & Chuẩn Xác',
    duration: '',
    image: '/room_img5.jpg',
    quote: '"Làm chủ dòng chuyển động của cơ thể chính là tìm thấy sự tĩnh lặng trong tâm hồn."',
  },
  {
    id: 'barre-mat',
    tagline: '02 — NÉT ĐẸP UYỂN CHUYỂN',
    name: 'BARRE & ARCH FORM',
    subtitle: 'Thanh thoát. Dẻo dai. Kiêu hãnh.',
    description:
      'Sự giao thoa thanh lịch giữa kỹ thuật uốn vòm cột sống trên thùng Barrel, sức bền đẳng trương và các động tác chỉnh dáng hiện đại. Bài tập giúp điêu khắc vóc dáng thon dài, uyển chuyển, đồng thời nuôi dưỡng dáng đi đứng kiêu sa và sự cân đối tự nhiên.',
    focus: ['Điêu Khắc Cơ Thon Gọn', 'Khai Phóng Độ Mở Cột Sống', 'Kích Hoạt Nhóm Cơ Sâu', 'Sức Mạnh & Độ Dẻo Khung Chậu'],
    equipment: 'Thùng Ladder Barrel Gỗ Sồi Tự Nhiên & Cung Uốn Spine Arc',
    intensity: 'Rèn Luyện Thể Lực',
    duration: '',
    image: '/room_img4.jpg',
    quote: '"Trong từng cử động nhẹ nhàng luôn ẩn chứa một nguồn năng lượng phi thường."',
  },
  {
    id: 'private',
    tagline: '03 — TRẢI NGHIỆM ĐỘC BẢN',
    name: 'CADILLAC & CHAIR PRIVATE',
    subtitle: 'Độc bản. Chuẩn xác. Chuyên sâu.',
    description:
      'Buổi rèn luyện 1-1 riêng tư cùng Huấn luyện viên trưởng trên trọn bộ hệ thống thiết bị: Bàn treo Cadillac Trapeze, Ghế Wunda, Ladder Barrel và Reformer. Giáo trình được tinh chỉnh độc bản theo cơ sinh học, nhu cầu hồi phục và mục tiêu thể chất riêng của bạn.',
    focus: ['Đánh Giá Cơ Sinh Học Toàn Diện', 'Giải Phóng Áp Lực Đốt Sống', 'Chuyển Động Treo Trapeze Không Trọng Lực', 'Tái Cân Bằng Thần Kinh - Cơ'],
    equipment: 'Trọn Bộ Cadillac Trapeze Cổ Điển, Ghế Wunda & Thùng Ladder Barrel',
    intensity: 'Chuyên Biệt Cá Nhân',
    duration: '',
    image: '/cadillac.jpg',
    imageClassName: 'object+[20%_10px]',
    quote: '"Cơ thể bạn là một kiệt tác kiến trúc sống động, cần được thấu hiểu và nâng niu."',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Không Gian Vòm Arch Sanctuary',
    category: 'Kiến Trúc',
    aspect: 'tall',
    archType: 'arch-top',
    image: '/room_img6.jpg',
    caption: 'Những hốc vòm mềm mại đón trọn ánh nắng dịu dàng trên hàng máy Reformer gỗ sồi thủ công.',
  },
  {
    id: 'g2',
    title: 'Sảnh Đón & Gương Uốn Lượn',
    category: 'Không Gian',
    aspect: 'portrait',
    archType: 'arch-asymmetric-left',
    image: '/room_img1.jpg',
    caption: 'Tường vữa thạch cao ấm áp, sofa nỉ boucle êm ái và ánh đèn hắt dịu mắt tại sảnh đón.',
  },
  {
    id: 'g3',
    title: 'Biểu Tượng Thương Hiệu H Atelier',
    category: 'Cân Bằng',
    aspect: 'landscape',
    archType: 'rect',
    image: '/logo.jpg',
    caption: 'Biểu tượng HPILATES & Wellness mang tinh thần chuyển động uyển chuyển và chuẩn xác.',
  },
  {
    id: 'g4',
    title: 'Tư Thế Treo Ngược Cadillac Trapeze',
    category: 'Chuyển Động',
    aspect: 'portrait',
    archType: 'arch-asymmetric-right',
    image: '/background1.jpg',
    caption: 'Động tác treo lơ lửng không trọng lực giải phóng toàn bộ áp lực đốt sống và tăng cường dẻo dai.',
  },
  {
    id: 'g5',
    title: 'Uốn Lưng Nghệ Thuật Trên Ghế Wunda',
    category: 'Chuyển Động',
    aspect: 'tall',
    archType: 'arch-top',
    image: '/brand_img.jpg',
    caption: 'Khai mở lồng ngực và dải cơ liên sườn trong khung vòm gương phản chiếu ngập tràn ánh sáng.',
  },
  {
    id: 'g6',
    title: 'Khu Vườn Xương Rồng & Thùng Uốn Barrel',
    category: 'Kiến Trúc',
    aspect: 'square',
    archType: 'rect',
    image: '/room_img7.jpg',
    caption: 'Góc vườn xương rồng mộc mạc bên thiết bị Ladder Barrel với châm ngôn "Gentle flow, inner glow".',
    // imageClassName: 'translate-y-[20px]',
  },
];

export const TIMETABLE_DAYS = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'] as const;

export const TIMETABLE_DATA: Record<string, TimetableSlot[]> = {
  'Thứ Hai': [
    { id: 'm1', time: '07:00 — 07:50', title: 'Reformer Khởi Đầu Ngày Mới', category: 'Reformer', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Mọi Trình Độ', spots: 2, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Kéo Giãn & Năng Lượng' },
    { id: 'm2', time: '09:00 — 09:50', title: 'Cốt Lõi Chuẩn Xác & Chỉnh Dáng Gù', category: 'Reformer', instructor: 'HLV Minh Thư', instructorTitle: 'Chuyên Viên Căn Chỉnh Tư Thế', level: 'Nền Tảng', spots: 3, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Chuẩn Xác' },
    { id: 'm3', time: '11:00 — 12:00', title: 'Cadillac Trapeze Trị Liệu Cột Sống 1-1', category: 'Cadillac Riêng', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Chuyên Sâu 1-1', spots: 1, room: 'Phòng Riêng Cadillac Suite', intensity: 'Cá Nhân Hóa' },
    { id: 'm4', time: '16:30 — 17:20', title: 'Thùng Uốn Barrel & Điêu Khắc Vòng Eo', category: 'Barre & Thảm', instructor: 'HLV Minh Thư', instructorTitle: 'Chuyên Viên Căn Chỉnh Tư Thế', level: 'Nâng Cao', spots: 4, room: 'Phòng Tập Barre Atelier', intensity: 'Điêu Khắc' },
    { id: 'm5', time: '18:00 — 18:50', title: 'Reformer Hoàng Hôn Thư Giãn Vai Gáy', category: 'Reformer', instructor: 'HLV Hoàng Yến', instructorTitle: 'HLV Chuyên Sâu Reformer Flow', level: 'Mọi Trình Độ', spots: 1, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Kéo Giãn Sâu' },
  ],
  'Thứ Ba': [
    { id: 't1', time: '07:30 — 08:20', title: 'Dynamic Athletic Reformer', category: 'Reformer', instructor: 'HLV Quốc Bảo', instructorTitle: 'Chuyên Gia Thể Lực & Sức Bền', level: 'Nâng Cao', spots: 2, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Cường Độ Cao' },
    { id: 't2', time: '10:00 — 10:50', title: 'Pilates Cho Mẹ Bầu & Ổn Định Khung Chậu', category: 'Prenatal Mẹ Bầu', instructor: 'HLV Hoàng Yến', instructorTitle: 'HLV Chuyên Sâu Reformer Flow', level: 'Nền Tảng', spots: 3, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Thư Thái & Chánh Niệm' },
    { id: 't3', time: '13:00 — 14:00', title: 'Phục Hồi Cột Sống & Căn Chỉnh 1-1', category: 'Cadillac Riêng', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Chuyên Sâu 1-1', spots: 1, room: 'Phòng Riêng Cadillac Suite', intensity: 'Cá Nhân Hóa' },
    { id: 't4', time: '17:30 — 18:20', title: 'Reformer Jumpboard Nhịp Điệu Khỏe Khoắn', category: 'Reformer', instructor: 'HLV Quốc Bảo', instructorTitle: 'Chuyên Gia Thể Lực & Sức Bền', level: 'Mọi Trình Độ', spots: 2, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Năng Động' },
  ],
  'Thứ Tư': [
    { id: 'w1', time: '07:00 — 07:50', title: 'Điêu Khắc Cơ Thể & Siết Eo Reformer', category: 'Reformer', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Mọi Trình Độ', spots: 1, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Điêu Khắc' },
    { id: 'w2', time: '09:30 — 10:20', title: 'Phòng Lab Tư Thế & Cung Uốn Spine Arc', category: 'Barre & Thảm', instructor: 'HLV Minh Thư', instructorTitle: 'Chuyên Viên Căn Chỉnh Tư Thế', level: 'Mọi Trình Độ', spots: 4, room: 'Phòng Tập Barre Atelier', intensity: 'Nhẹ Nhàng' },
    { id: 'w3', time: '12:00 — 13:00', title: 'Master Immersion Cadillac 1-1', category: 'Cadillac Riêng', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Chuyên Sâu 1-1', spots: 1, room: 'Phòng Riêng Cadillac Suite', intensity: 'Cá Nhân Hóa' },
    { id: 'w4', time: '18:15 — 19:05', title: 'Dòng Chảy Ánh Nến Chánh Niệm Phục Hồi', category: 'Reformer', instructor: 'HLV Hoàng Yến', instructorTitle: 'HLV Chuyên Sâu Reformer Flow', level: 'Mọi Trình Độ', spots: 2, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Phục Hồi' },
  ],
  'Thứ Năm': [
    { id: 'th1', time: '07:30 — 08:20', title: 'Reformer Đốt Mỡ Cơ Lõi Buổi Sáng', category: 'Reformer', instructor: 'HLV Quốc Bảo', instructorTitle: 'Chuyên Gia Thể Lực & Sức Bền', level: 'Mọi Trình Độ', spots: 3, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Vừa Phải' },
    { id: 'th2', time: '10:00 — 10:50', title: 'Giải Áp Cột Sống & Cốt Lõi Vững Vàng', category: 'Reformer', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Nền Tảng', spots: 2, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Chuẩn Xác' },
    { id: 'th3', time: '17:00 — 17:50', title: 'Barre Điêu Khắc Cơ Mông & Cốt Lõi', category: 'Barre & Thảm', instructor: 'HLV Minh Thư', instructorTitle: 'Chuyên Viên Căn Chỉnh Tư Thế', level: 'Nâng Cao', spots: 3, room: 'Phòng Tập Barre Atelier', intensity: 'Cường Độ Cao' },
    { id: 'th4', time: '18:30 — 19:20', title: 'Chuỗi Động Tác Reformer Cổ Điển', category: 'Reformer', instructor: 'HLV Hoàng Yến', instructorTitle: 'HLV Chuyên Sâu Reformer Flow', level: 'Mọi Trình Độ', spots: 1, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Vừa Phải' },
  ],
  'Thứ Sáu': [
    { id: 'f1', time: '08:00 — 08:50', title: 'Chỉnh Dáng Cuối Tuần & Thư Giãn Khớp', category: 'Reformer', instructor: 'HLV Minh Thư', instructorTitle: 'Chuyên Viên Căn Chỉnh Tư Thế', level: 'Mọi Trình Độ', spots: 2, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Uyển Chuyển' },
    { id: 'f2', time: '10:30 — 11:20', title: 'Mẹ Bầu & Cân Bằng Khung Chậu Tự Nhiên', category: 'Prenatal Mẹ Bầu', instructor: 'HLV Hoàng Yến', instructorTitle: 'HLV Chuyên Sâu Reformer Flow', level: 'Nền Tảng', spots: 4, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Thư Thái & Chánh Niệm' },
    { id: 'f3', time: '14:00 — 15:00', title: 'Cadillac Trapeze Bay Lượn & Kéo Giãn 1-1', category: 'Cadillac Riêng', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Chuyên Sâu 1-1', spots: 1, room: 'Phòng Riêng Cadillac Suite', intensity: 'Cá Nhân Hóa' },
    { id: 'f4', time: '17:00 — 17:50', title: 'Hoàng Hôn Golden Hour Flow Thân Tâm', category: 'Reformer', instructor: 'HLV Quốc Bảo', instructorTitle: 'Chuyên Gia Thể Lực & Sức Bền', level: 'Mọi Trình Độ', spots: 2, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Điêu Khắc' },
  ],
  'Thứ Bảy': [
    { id: 'sa1', time: '08:30 — 09:20', title: 'Weekend Master Reformer Flow', category: 'Reformer', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Mọi Trình Độ', spots: 1, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Năng Động' },
    { id: 'sa2', time: '10:00 — 10:50', title: 'Ballet Barre & Reformer Hòa Quyện', category: 'Barre & Thảm', instructor: 'HLV Minh Thư', instructorTitle: 'Chuyên Viên Căn Chỉnh Tư Thế', level: 'Mọi Trình Độ', spots: 2, room: 'Phòng Tập Barre Atelier', intensity: 'Nhẹ Nhàng' },
    { id: 'sa3', time: '11:30 — 12:20', title: 'Dòng Chảy Nhẹ Nhàng & Phục Hồi Đốt Sống', category: 'Reformer', instructor: 'HLV Hoàng Yến', instructorTitle: 'HLV Chuyên Sâu Reformer Flow', level: 'Nền Tảng', spots: 3, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Phục Hồi' },
  ],
  'Chủ Nhật': [
    { id: 'su1', time: '09:00 — 09:50', title: 'Đánh Thức Năng Lượng Tươi Mới Ngày Chủ Nhật', category: 'Reformer', instructor: 'HLV Hoàng Yến', instructorTitle: 'HLV Chuyên Sâu Reformer Flow', level: 'Mọi Trình Độ', spots: 2, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Uyển Chuyển' },
    { id: 'su2', time: '10:30 — 11:20', title: 'Cân Bằng Toàn Thân & Khai Mở Hơi Thở Sâu', category: 'Reformer', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Mọi Trình Độ', spots: 1, room: 'Không Gian Vòm Arch Sanctuary', intensity: 'Điêu Khắc' },
    { id: 'su3', time: '14:00 — 15:00', title: 'Buổi Tập Riêng Chủ Nhật Chữa Lành 1-1', category: 'Cadillac Riêng', instructor: 'HLV Nguyễn Thu Huyền', instructorTitle: 'HLV Trưởng & Chuyên Gia Đào Tạo', level: 'Chuyên Sâu 1-1', spots: 1, room: 'Phòng Riêng Cadillac Suite', intensity: 'Cá Nhân Hóa' },
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'HPILATES & Wellness là nơi tuyệt vời nhất tại Bảo Lộc để tái tạo năng lượng. Trước đây mình thường xuyên bị đau thắt lưng và mỏi cổ do ngồi làm việc máy tính. Sau 2 tháng đồng hành cùng HLV Nguyễn Thu Huyền, dáng lưng mình thẳng hơn hẳn, eo gọn lại và cơ thể lúc nào cũng nhẹ nhàng, tràn đầy sức sống.',
    author: 'Chị Mai Lan',
    role: 'Doanh Nhân & Khách Hàng Thân Thiết tại Bảo Lộc',
    membership: 'Hội Viên Reformer Gắn Bó',
    image: '/background1.jpg',
    studioMoment: 'Động Tác Treo Cadillac Trapeze & Căn Chỉnh Cột Sống',
  },
  {
    id: 't2',
    quote:
      'Không gian vòm tại Phương Nam cực kỳ sang trọng và thanh tịnh, ánh sáng ngập tràn và máy móc gỗ sồi chuẩn chỉnh. Tập với HLV Thu Huyền được chỉnh sửa từng góc đặt chân, từng nhịp thở cơ hoành. Cảm giác sau mỗi buổi tập là sự thư thái tuyệt đối và giấc ngủ sâu trọn vẹn.',
    author: 'Chị Thảo My',
    role: 'Học Viên Khóa Đào Tạo HLV Pilates & Lớp Chuyên Sâu',
    membership: 'Học Viên Khóa Đào Tạo HLV Toàn Diện',
    image: '/room_img5.jpg',
    studioMoment: 'Reformer Flow Tại Không Gian Vòm Arch Sanctuary',
  },
  {
    id: 't3',
    quote:
      'Trong suốt thai kỳ, mình được HLV Hoàng Yến và cô Huyền hướng dẫn các bài tập nhẹ nhàng trên Barrel và Cadillac. Khung chậu được giải áp, không hề bị phù nề hay đau nhức lưng hông. Đây thực sự là chốn an yên và chữa lành quý giá cho cả mẹ và bé.',
    author: 'Chị Bích Ngọc',
    role: 'Kiến Trúc Sư & Mẹ Bầu',
    membership: 'Học Viên Lớp Chăm Sóc Mẹ Bầu & 1-1',
    image: '/brand_img_3.jpg',
    studioMoment: 'Bài Tập Chánh Niệm Cho Mẹ Bầu Trên Ladder Barrel',
  },
];

export const INITIAL_CUSTOMER_BOOKINGS: CustomerBooking[] = [
  {
    id: 'bk-1',
    bookingCode: 'HP-782419',
    customerName: 'Khách Quý Studio',
    customerPhone: '090 123 4567',
    customerEmail: 'spiderpool122@gmail.com',
    className: 'Reformer Khởi Đầu Ngày Mới',
    category: 'Reformer',
    day: 'Thứ Hai',
    date: 'Sắp Tới • Thứ Hai',
    time: '07:00 — 07:50',
    instructor: 'HLV Nguyễn Thu Huyền',
    room: 'Không Gian Vòm Arch Sanctuary',
    matNumber: 2,
    status: 'Đã Xác Nhận',
    notes: 'Kiểm tra tư thế 1:1, căn chỉnh cột sống và kéo giãn cơ đùi sau.',
  },
  {
    id: 'bk-2',
    bookingCode: 'HP-910482',
    customerName: 'Khách Quý Studio',
    customerPhone: '090 123 4567',
    customerEmail: 'spiderpool122@gmail.com',
    className: 'Cadillac Trapeze Trị Liệu Cột Sống 1-1',
    category: 'Cadillac Riêng',
    day: 'Thứ Tư',
    date: 'Sắp Tới • Thứ Tư',
    time: '12:00 — 13:00',
    instructor: 'HLV Nguyễn Thu Huyền',
    room: 'Phòng Riêng Cadillac Suite',
    matNumber: 1,
    status: 'Đã Xác Nhận',
    notes: 'Buổi tập 1-1 chuyên sâu kết hợp đánh giá cơ sinh học tư thế miễn phí.',
  },
  {
    id: 'bk-3',
    bookingCode: 'HP-401923',
    customerName: 'Khách Quý Studio',
    customerPhone: '090 123 4567',
    customerEmail: 'spiderpool122@gmail.com',
    className: 'Thùng Uốn Barrel & Điêu Khắc Vòng Eo',
    category: 'Barre & Thảm',
    day: 'Thứ Sáu',
    date: 'Sắp Tới • Thứ Sáu',
    time: '16:30 — 17:20',
    instructor: 'HLV Minh Thư',
    room: 'Phòng Tập Barre Atelier',
    matNumber: 4,
    status: 'Đã Xác Nhận',
    notes: 'Rèn luyện sức bền & siết gọn cơ cốt lõi.',
  },
  {
    id: 'bk-4',
    bookingCode: 'HP-338291',
    customerName: 'Chị Mai Lan',
    customerPhone: '091 234 5678',
    customerEmail: 'mailan.baoloc@gmail.com',
    className: 'Reformer Hoàng Hôn Thư Giãn Vai Gáy',
    category: 'Reformer',
    day: 'Thứ Hai',
    date: 'Sắp Tới • Thứ Hai',
    time: '18:00 — 18:50',
    instructor: 'HLV Hoàng Yến',
    room: 'Không Gian Vòm Arch Sanctuary',
    matNumber: 3,
    status: 'Đã Xác Nhận',
    notes: 'Giải áp cột sống và thở sâu phục hồi năng lượng sau giờ làm.',
  },
  {
    id: 'bk-5',
    bookingCode: 'HP-129840',
    customerName: 'Chị Thảo My',
    customerPhone: '093 876 5432',
    customerEmail: 'thaomy.pilates@gmail.com',
    className: 'Cốt Lõi Chuẩn Xác & Chỉnh Dáng Gù',
    category: 'Reformer',
    day: 'Thứ Ba',
    date: 'Sắp Tới • Thứ Ba',
    time: '09:00 — 09:50',
    instructor: 'HLV Minh Thư',
    room: 'Không Gian Vòm Arch Sanctuary',
    matNumber: 1,
    status: 'Đã Xác Nhận',
    notes: 'Tái thiết lập sự cân xứng tư thế và rèn luyện cơ ổn định vai gáy.',
  },
];
