# HPILATES & Wellness — Cấu Trúc Thư Mục & Tài Liệu Kỹ Thuật Dự Án (Project Construction & UI Architecture)

> **Dự án**: Website HPILATES & Wellness ("Nghệ Thuật Của Sự Chuyển Động")  
> **Địa điểm**: Lô 25, TTTM Phương Nam, TP. Bảo Lộc, Lâm Đồng  
> **Phiên bản tài liệu**: 1.0.0 — Cập nhật: 07/10/2026  
> **Trạng thái**: Đã rà soát toàn bộ UI/UX, Component Tree, Data Engine và đối chiếu yêu cầu nghiệp vụ mới từ khách hàng.

---

## 1. Tổng Quan Dự Án (Project Overview)

HPILATES & Wellness là nền tảng web ứng dụng phong cách **Luxury Boutique Studio**, hướng tới phân khúc khách hàng cao cấp tại TP. Bảo Lộc. Trang web kết hợp giữa ngôn ngữ thiết kế **Architectural Curves (Đường cong vòm kiến trúc)**, bảng màu trầm ấm tự nhiên (**Ivory - Sand - Coffee - Champagne Gold**), chuyển động mượt mà và hệ thống âm thanh tần số chữa lành 432 Hz Solfeggio độc bản.

### Công Nghệ Nền Tảng (Tech Stack)
- **Framework UI**: React 19 (`react`, `react-dom` 19.0.1)
- **Ngôn Ngữ**: TypeScript 5.8.2 (Strict typechecking, Path Alias `@/*`)
- **Bundler & Build Tool**: Vite 6.2.3 (`@vitejs/plugin-react` 5.0.4)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` 4.1.14) kết hợp `@theme` token & custom arch classes trong `src/index.css`
- **Animation Engine**: Motion (`motion/react` 12.23.24) cho scroll parallax, layout animations, exit transitions
- **Iconography**: Lucide React (`lucide-react` 0.546.0)
- **Client Persistence**: Browser `localStorage` (Key: `hp_studio_customer_bookings`)
- **Audio Engine**: Web Audio API Procedural Synthesizer (432 Hz Solfeggio soundscape)

---

## 2. Cấu Trúc Thư Mục Toàn Dự Án (Folder Construction)

```text
Frontend/
├── docs/                                  → Thư mục tài liệu kiến trúc, specs & hướng dẫn triển khai
│   └── README.md                          → Tài liệu chi tiết về folder construct & UI architecture
│
├── public/                                → Tài nguyên tĩnh phục vụ trực tiếp tại root URL
│   ├── trainers/                          → [MỚI] Thư mục ảnh đại diện từng HLV được tối ưu hóa cho web
│   │   ├── hlv-nguyen-thu-huyen/avatar.jpg
│   │   ├── hlv-minh-thu/avatar.jpg
│   │   ├── hlv-hoang-yen/avatar.jpg
│   │   ├── hlv-quoc-bao/avatar.jpg
│   │   └── hlv-nguyen-thi-mai/avatar.jpg
│   ├── 2508.08781v1.pdf                   → Tài liệu nghiên cứu / chứng nhận chuyên ngành
│   ├── background1.jpg                    → Ảnh chụp thiết bị Cadillac & động tác treo
│   ├── black_logo.jpg                     → Logo phiên bản nền tối
│   ├── body.jpg / body_2.jpg              → Hình ảnh tư thế & cơ thể tập luyện
│   ├── brand.jpg / brand_2.jpg            → Hình ảnh nhận diện thương hiệu & không gian sảnh
│   ├── brand_img.jpg / brand_img_3.jpg    → Hình ảnh chụp góc uốn Wunda Chair & mẹ bầu
│   ├── breath.jpg                         → Ảnh nghệ thuật hơi thở & thiền động
│   ├── cadillac.jpg                       → Ảnh chụp chuyên sâu hệ máy Cadillac Trapeze
│   ├── flip_2.jpg / flip_3.jpg            → Ảnh visual phục vụ hiệu ứng card
│   ├── flip_body.jpg                      → Ảnh visual phục hồi cột sống
│   ├── logo.jpg                           → Logo chính thức HPILATES & Wellness
│   ├── room_img.jpg                       → Ảnh Hero bao quát toàn bộ không gian phòng tập
│   ├── room_img1.jpg ~ room_img7.jpg      → Bộ sưu tập hình ảnh từng góc phòng tập, sảnh chờ, máy móc
│   └── tu_van_1.jpg ~ tu_van_3.jpg        → Bộ 3 ảnh thẻ tư vấn (Nội quy, Đăng ký, Gia hạn)
│
├── src/                                   → Toàn bộ mã nguồn ứng dụng
│   ├── assets/                            → Assets nội bộ được Vite bundle & xử lý
│   │   └── images/                        → Ảnh chụp chất lượng cao
│   │
│   ├── components/                        → 21 React Component UI chuyên biệt
│   │   ├── Navbar.tsx                     → Header điều hướng cố định (Scroll-spy, CTA Giữ chỗ, Mobile Drawer)
│   │   ├── Hero.tsx                       → Màn hình đầu trang cinematic với Parallax & Typography
│   │   ├── Introduction.tsx               → Giới thiệu triết lý không gian ("A Space to Move")
│   │   ├── Philosophy.tsx                 → 3 Trụ cột cốt lõi: Thân Thể (Body) - Hơi Thở (Breath) - Cân Bằng (Balance)
│   │   ├── RoomShowcase.tsx               → Giới thiệu chi tiết không gian phòng tập & máy móc (Đang tạm ẩn)
│   │   ├── PilatesExperience.tsx          → Giới thiệu các bộ môn & thiết bị tập (Reformer, Barre/Barrel, Cadillac)
│   │   ├── HealthBenefitsSection.tsx      → 5 Giá trị vàng sức khỏe & Trị liệu cột sống
│   │   ├── ConsultationSection.tsx        → Tư vấn hội viên, nội quy gói tập, slider ảnh chính sách & khóa đào tạo HLV
│   │   ├── CinematicMoment.tsx            → Khung trích dẫn nghệ thuật tạo khoảng lặng thị giác ("Strength can be quiet")
│   │   ├── EditorialGallery.tsx           → Bộ sưu tập ảnh Masonry dạng khung vòm nghệ thuật (Đang tạm ẩn)
│   │   ├── StudioScheduleSection.tsx      → Thời khóa biểu tuần & Cổng tra cứu lịch cá nhân bằng SĐT/Gmail
│   │   ├── Testimonials.tsx               → Cảm nhận thực tế từ học viên thân thiết tại Bảo Lộc
│   │   ├── BrandStatement.tsx             → Typography khổng lồ chuyển động ("MOVE / SỰ CHUYỂN ĐỘNG")
│   │   ├── BookingCTA.tsx                 → Khối kích hoạt kêu gọi đặt chỗ cuối trang
│   │   ├── GoogleLocationSection.tsx      → Bản đồ vị trí studio tại TTTM Phương Nam & chỉ đường Google Maps
│   │   ├── Footer.tsx                     → Chân trang (Thông tin studio, giờ mở cửa, nút bật/tắt âm thanh 432Hz)
│   │   ├── BookingModal.tsx               → Modal đặt lịch tập tương tác 3 bước (Đang lưu vào LocalStorage)
│   │   ├── FloatingContact.tsx            → Widget liên hệ nhanh nổi góc màn hình (Zalo, Hotline, Đặt lịch)
│   │   ├── BrandMonogram.tsx              → Biểu tượng logo chữ H lồng khung tròn / vòm tinh xảo
│   │   ├── CustomCursor.tsx               → Con trỏ chuột luxury tương tác động theo ngữ cảnh (Hover, Click, Drag)
│   │   └── SectionDivider.tsx             → Đường chia section họa tiết hoa văn vòm tối giản
│   │
│   ├── config/                            → Cấu hình tĩnh tập trung
│   │   └── siteConfig.ts                  → Thông tin liên hệ (Hotline, Zalo, Email, Địa chỉ, Founder, Social links)
│   │
│   ├── data/                              → Schema dữ liệu, interfaces & mock data
│   │   ├── studioData.ts                  → Định nghĩa Types, Disciplines, Timetable, Instructors, Benefits, Testimonials
│   │   └── trainers.ts                    → [MỚI] Type & mảng TRAINERS_DATA chuyên dụng cho InstructorsSection
│   │
│   ├── utils/                             → Tiện ích tính toán & engine hỗ trợ
│   │   ├── audioAmbience.ts               → Bộ tạo âm thanh 432Hz Solfeggio bằng Web Audio API
│   │   └── scheduleStorage.ts             → Engine CRUD LocalStorage, tìm kiếm mã đặt chỗ, SĐT, Email
│   │
│   ├── App.tsx                            → Root Component điều phối layout, state modal, sticky mobile CTA & cuộn trang
│   ├── index.css                          → Tailwind v4 `@theme`, design tokens, arch curves (`arch-top`, `arch-full`)
│   └── main.tsx                           → Điểm gắn kết React (Mounting root) & defensive sandbox shims
```

### Thư Mục Quản Lý Nội Dung Huấn Luyện Viên Độc Lập (`D:\Me\2026-2027\WEB_HPILL\Trainer`)
```text
Trainer/
├── README.md                              → Tài liệu hướng dẫn cấu trúc & quy chuẩn đưa vào website
├── index.json                             → File dữ liệu JSON tổng hợp của toàn bộ Huấn luyện viên
│
├── HLV_Nguyen_Thu_Huyen/                  → HLV Trưởng & Founder Nguyễn Thu Huyền
│   ├── info.json                          → Dữ liệu JSON chi tiết (Tên, vai trò, kinh nghiệm, bio, quote)
│   ├── profile.md                         → Bản xem trước thông tin định dạng Markdown
│   ├── avatar.jpg                         → Ảnh chân dung đại diện chính
│   └── gallery/                           → Thư mục chứa hình ảnh đứng lớp & hình ảnh tập luyện
│
├── HLV_Minh_Thu/                          → Chuyên viên Căn chỉnh tư thế HLV Minh Thư
├── HLV_Hoang_Yen/                         → HLV Chuyên sâu Cadillac & Mẹ bầu Hoàng Yến
├── HLV_Quoc_Bao/                          → Chuyên gia Thể lực & Sức bền Quốc Bảo
└── HLV_Nguyen_Thi_Mai/                    → Master Trainer Nguyễn Thị Mai
```

---

## 3. Bảng Phân Tích Chi Tiết Toàn Bộ Component UI

| Tên Component | Mục đích & Chức năng | Trạng thái hiển thị trong `App.tsx` | Điểm tương tác chính (User Interactions) |
| :--- | :--- | :--- | :--- |
| `Navbar.tsx` | Thanh điều hướng toàn cục | **Đang hiển thị** | Scroll spy đổi background khi cuộn, link cuộn mượt `#practice`, `#experience`, `#tu-van`, `#timetable`, nút "Lịch của tôi", nút "Giữ chỗ thảm" |
| `Hero.tsx` | Khung mở đầu thị giác | **Đang hiển thị** | Parallax zoom ảnh nền, animation chữ nổi bật, nút "Khám Phá Studio" dẫn xuống form tư vấn |
| `Introduction.tsx` | Giới thiệu phòng tập | **Đang hiển thị** | Đoạn văn mở đầu định vị không gian boutique tại Bảo Lộc, visual monogram |
| `Philosophy.tsx` | 3 Triết lý cốt lõi | **Đang hiển thị** | Thẻ tương tác: Thân Thể (Body) - Hơi Thở (Breath) - Cân Bằng (Balance) |
| `RoomShowcase.tsx` | Showroom không gian phòng & máy | *Tạm comment (dòng 81)* | Tab chuyển đổi giữa Arch Sanctuary (Phòng Reformer) và Cadillac Private Suite kèm thông số kỹ thuật |
| `PilatesExperience.tsx` | Giới thiệu các bộ môn & máy tập | **Đang hiển thị** | Tab chuyển đổi giữa 3 bộ môn (Reformer Flow, Barre & Arch, Cadillac Private), nút đặt lớp theo bộ môn |
| `HealthBenefitsSection.tsx` | 5 Giá trị trị liệu cột sống | **Đang hiển thị** | Accordion / thẻ hiển thị 5 lợi ích: Giảm đau cổ vai gáy, siết eo thon, chỉnh dáng gù, ngủ sâu, an toàn |
| `ConsultationSection.tsx` | Tư vấn hội viên & Đào tạo HLV | **Đang hiển thị** | Slider ảnh 3 thẻ chính sách (Nội quy, Hội viên, Gia hạn) hỗ trợ vuốt chạm + Lightbox phóng to ảnh; 4 kênh liên hệ nhanh; Banner khóa đào tạo HLV |
| `CinematicMoment.tsx` | Khung trích dẫn tĩnh lặng | **Đang hiển thị** | Trích dẫn *"Strength can be quiet"* tạo nhịp nghỉ thị giác |
| `EditorialGallery.tsx` | Thư viện ảnh Masonry | *Tạm comment (dòng 96)* | Lưới ảnh nghệ thuật vòm bất đối xứng |
| `StudioScheduleSection.tsx` | Thời khóa biểu & Tra cứu | **Đang hiển thị** | Tab lọc theo các ngày trong tuần; Ô tra cứu lịch cá nhân bằng Số điện thoại/Gmail/Mã vé + Hủy lịch |
| `Testimonials.tsx` | Đánh giá từ hội viên | **Đang hiển thị** | Thẻ review thực tế kèm hình ảnh hội viên tại studio Bảo Lộc |
| `BrandStatement.tsx` | Khối tuyên ngôn thương hiệu | **Đang hiển thị** | Typography chuyển động "MOVE" kích thước lớn |
| `BookingCTA.tsx` | Khối kêu gọi chốt chuyển đổi | **Đang hiển thị** | Nút CTA cỡ lớn "Đặt Chỗ Buổi Tập Của Bạn" |
| `GoogleLocationSection.tsx` | Bản đồ & Địa chỉ | **Đang hiển thị** | Thông tin địa chỉ TTTM Phương Nam, nút dẫn trực tiếp tới Google Maps app |
| `Footer.tsx` | Chân trang & Âm thanh | **Đang hiển thị** | Logo, bản quyền, thông tin pháp lý, nút bật/tắt âm thanh tần số 432Hz Solfeggio |
| `BookingModal.tsx` | Modal đặt chỗ tương tác | **Đang có sẵn** (Kích hoạt qua State) | Form 3 bước chọn lớp, ngày giờ, nhập tên, email, SĐT, mục tiêu -> Lưu vào LocalStorage |
| `FloatingContact.tsx` | Widget nổi cố định | **Đang hiển thị** | Nút nổi bên góc phải: Hotline, Zalo, Cuộn đến Form tư vấn |
| `CustomCursor.tsx` | Con trỏ chuột tùy biến | **Đang hiển thị** | Vòng tròn vàng sang trọng bám theo chuột, phóng to khi hover nút bấm |
| `BrandMonogram.tsx` | Monogram SVG / Hình ảnh | Component dùng chung | Render biểu tượng chữ H lồng khung tròn |
| `SectionDivider.tsx` | Họa tiết phân cách | Component dùng chung | Tạo điểm nhấn nhã nhặn giữa các khối nội dung |

---

## 4. Hệ Thống Dữ Liệu & Data Layer

### A. Cấu Hình Studio (`src/config/siteConfig.ts`)
- **Chủ nhiệm/Founder**: HLV Nguyễn Thu Huyền
- **Hotline**: `090 123 4567` (sẵn sàng tích hợp số thực)
- **Zalo**: `https://zalo.me/0901234567`
- **Địa chỉ**: Lô 25, TTTM Phương Nam, TP. Bảo Lộc, Lâm Đồng
- **Google Maps Link**: `https://maps.app.goo.gl/zBogWwoiUnDZUwB5A?g_st=afm`

### B. Cấu Trúc Dữ Liệu Miền (`src/data/studioData.ts`)
1. **`ClassDiscipline`**: Định nghĩa tên bộ môn, phân loại máy móc, mức độ tập luyện, ảnh đại diện, trọng tâm chuyển động.
2. **`INSTRUCTORS`**: Danh sách đội ngũ huấn luyện viên (HLV Nguyễn Thu Huyền, HLV Minh Thư, HLV Hoàng Yến, HLV Quốc Bảo) kèm danh hiệu, số năm kinh nghiệm, thế mạnh chuyên môn và trích dẫn truyền cảm hứng.
3. **`TimetableSlot`**: Lịch học theo từng khung giờ trong tuần (07:00 đến 19:00), phân loại theo lớp máy Reformer, Cadillac 1:1, Thảm/Barrel.
4. **`CustomerBooking`**: Cấu trúc vé đặt lịch của khách hàng (Mã booking `HP-XXXXXX`, Tên, SĐT, Email, Lớp tập, Giờ tập, Huấn luyện viên, Số thảm, Trạng thái).
5. **`SPECIAL_PROGRAMS`**: Các chương trình đặc quyền (Đo tư thế miễn phí Posture Assessment, Khóa đào tạo HLV quốc tế, Lớp cho người mới bắt đầu).

### C. Engine Xử Lý Lưu Trữ (`src/utils/scheduleStorage.ts`)
- `getBookings()`: Lấy danh sách booking từ `localStorage` (tự động khởi tạo dữ liệu mẫu nếu chưa có).
- `saveBooking(newBooking)`: Sinh mã ngẫu nhiên `HP-XXXXXX`, lưu vào danh sách đầu tiên.
- `findBookingsByCustomer(query)`: Chuẩn hóa tìm kiếm thông minh theo SĐT (loại bỏ khoảng trắng, dấu gạch) hoặc Email hoặc Mã Booking.
- `cancelBooking(bookingId)`: Cập nhật trạng thái hủy hoặc xóa phiên tập theo yêu cầu khách.

---

## 5. Đối Chiếu Hiện Trạng UI & Yêu Cầu Mới Của Khách Hàng (Gap Analysis & Alignment Plan)

Dưới đây là bảng so sánh chi tiết giữa yêu cầu thực tế của khách hàng và hiện trạng code hiện tại:

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ YÊU CẦU CỦA KHÁCH HÀNG                                   │ HIỆN TRẠNG TRÊN CODE & UI HIỆN TẠI    │
├──────────────────────────────────────────────────────────┼───────────────────────────────────────┤
│ 1. ĐẦU TIÊN BẤM VÀO ĐẶT LỊCH                             │ • Các nút CTA hiện đang cuộn xuống    │
│    -> Dẫn tới chỗ điền thông tin để studio liên hệ.      │   phần #tu-van hoặc mở BookingModal.  │
│    Form gồm 5 trường bắt buộc:                           │ • BookingModal hiện tại có: Tên, SĐT, │
│    - Tên                                                 │   Email, Môn tập, Giờ tập, HLV.       │
│    - Tuổi                                                │ • ĐANG THIẾU: Trường "Tuổi" &         │
│    - Nghề nghiệp                                         │   "Nghề nghiệp".                      │
│    - SĐT / Zalo                                          │ • CẦN LÀM: Tạo Form đặt lịch liên hệ  │
│    - Mail                                                │   nhanh (Lead Form) chuẩn 5 trường    │
│                                                          │   được ghim nổi bật / mở trực tiếp.   │
├──────────────────────────────────────────────────────────┼───────────────────────────────────────┤
│ 2. GIỚI THIỆU PHÒNG TẬP CÓ NHỮNG LOẠI THIẾT BỊ:          │ • Đang có PilatesExperience giới thiệu│
│    - Tập máy: Reformer, Wunda Chair,                     │   Reformer, Barre & Arch, Cadillac.   │
│      Ladder Barrel, Cadillac                             │ • RoomShowcase đang bị comment ẩn.    │
│    - Tập thảm (Mat Pilates)                              │ • CẦN LÀM: Tách bạch rõ 5 loại hình:  │
│                                                          │   1) Máy Reformer                     │
│                                                          │   2) Wunda Chair                      │
│                                                          │   3) Barrel Ladder                    │
│                                                          │   4) Cadillac & Trapeze               │
│                                                          │   5) Tập Thảm (Mat Pilates)           │
├──────────────────────────────────────────────────────────┼───────────────────────────────────────┤
│ 3. HÌNH THỨC LỚP TẬP:                                    │ • Đã có nhắc phân tán trong nội quy & │
│    - Lớp tập 1:1 (Private)                               │   thời khóa biểu.                     │
│    - Lớp tập 1:2 (Duet)                                  │ • CẦN LÀM: Đưa thành 1 khối nổi bật   │
│                                                          │   giới thiệu quyền lợi & đặc trưng    │
│                                                          │   của hình thức tập 1:1 và 1:2.       │
├──────────────────────────────────────────────────────────┼───────────────────────────────────────┤
│ 4. DANH SÁCH ĐỘI NGŨ HUẤN LUYỆN VIÊN (HLV):              │ • File studioData.ts ĐÃ CÓ sẵn dữ liệu│
│    - Các HLV đứng lớp gồm những bạn nào...               │   4 HLV: HLV Nguyễn Thu Huyền,        │
│                                                          │   HLV Minh Thư, HLV Hoàng Yến,        │
│                                                          │   HLV Quốc Bảo.                       │
│                                                          │ • CẦN LÀM: Tạo mới component          │
│                                                          │   `InstructorsSection.tsx` hiển thị   │
│                                                          │   thẻ profile HLV sang trọng trên UI. │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Lộ Trình Triển Khai Tiếp Theo (Implementation Roadmap)

1. **Bước 1: Nâng cấp Form Đặt Lịch & Tư Vấn Khách Hàng (Booking & Contact Lead Form)**
   - Cập nhật `BookingModal.tsx` và tạo thêm một `QuickBookingLeadSection.tsx` (hoặc nâng cấp khối `#tu-van`) với đầy đủ 5 trường:
     * Họ & Tên
     * Độ tuổi
     * Nghề nghiệp (Giúp HLV nắm bắt thói quen vận động như văn phòng, kinh doanh, đứng nhiều...)
     * Số điện thoại / Zalo
     * Email liên hệ
     * Lựa chọn loại máy / hình thức quan tâm (1:1 hoặc 1:2)
   - Lưu trữ dữ liệu vào LocalStorage và hỗ trợ click chuyển tiếp trực tiếp sang gửi qua Zalo Studio kèm nội dung tự động soạn sẵn.

2. **Bước 2: Chuẩn hóa Phân Loại Thiết Bị & Phòng Tập (Studio Equipment Showcase)**
   - Cập nhật `DISCIPLINES` và `RoomShowcase.tsx` hoặc `PilatesExperience.tsx` để thể hiện trọn vẹn 5 hạng mục:
     1. **Máy Reformer**: Kéo giãn cột sống, điều chỉnh lực lò xo thông minh.
     2. **Wunda Chair (Ghế Wunda)**: Tăng cường cơ lõi sâu, thăng bằng và sức mạnh phần thân dưới.
     3. **Ladder Barrel (Thùng uốn)**: Uốn dẻo cột sống, giải tỏa áp lực đĩa đệm, mở ngực và hông.
     4. **Cadillac & Trapeze**: Hệ khung treo không trọng lực, phục hồi chuyên sâu và các tư thế bay lượn.
     5. **Tập Thảm (Mat Pilates)**: Nền tảng kiểm soát hơi thở, kích hoạt cơ bụng tự thân không cần phụ thuộc máy.

3. **Bước 3: Hiển thị Khối Hình Thức Lớp Học (1:1 & 1:2 Format Section)**
   - Thiết kế khối so sánh trực quan giữa:
     * **Lớp Cá Nhân 1:1 (Private Atelier)**: Kèm phân tích tư thế riêng biệt, giáo án may đo độc bản theo thể trạng.
     * **Lớp Đôi 1:2 (Duet Dynamic)**: Cùng người thân, bạn bè tập luyện đồng điệu với chi phí tối ưu và sự tương tác thân mật.

4. **Bước 4: Tạo Component Đội Ngũ HLV (`InstructorsSection.tsx`)**
   - Thiết kế thẻ Huấn luyện viên chuyên nghiệp với hình ảnh avatar, chức danh, số năm kinh nghiệm, các chứng chỉ chuyên môn và châm ngôn rèn luyện của từng bạn HLV.

---

## 7. Hướng Dẫn Vận Hành & Lệnh Kiểm Tra Code

| Mục đích | Lệnh thực thi (PowerShell) | Ghi chú |
| :--- | :--- | :--- |
| **Cài đặt thư viện** | `npm.cmd install` | Cài đặt toàn bộ packages |
| **Chạy môi trường Dev** | `npm.cmd run dev` | Khởi chạy server tại `http://localhost:3000` |
| **Kiểm tra TypeScript & Lint** | `npm.cmd run lint` | Chạy `tsc --noEmit` không gây lỗi compile |
| **Đóng gói Production** | `npm.cmd run build` | Tạo thư mục `dist/` tối ưu hóa cao |
| **Xem trước bản Build** | `npm.cmd run preview` | Khởi chạy preview từ thư mục `dist/` |

---

*Tài liệu được khởi tạo và lưu trữ tại [docs/README.md](file:///d:/Me/2026-2027/WEB_HPILL/Frontend/docs/README.md).*
