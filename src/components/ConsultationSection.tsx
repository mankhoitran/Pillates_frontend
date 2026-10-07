import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { STUDIO_DETAILS } from '../data/studioData';
import {
  Phone,
  MessageCircle,
  Mail,
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Headphones,
  ZoomIn,
  Award,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ConsultationSectionProps {
  onOpenBooking?: (initialClass?: string) => void;
}

interface ConsultationImage {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

const CONSULTATION_IMAGES: ConsultationImage[] = [
  {
    id: 'tv-1',
    image: '/tu_van_1.jpg',
    title: 'Hướng Dẫn Tập Luyện & Nội Quy Studio',
    subtitle: 'Thời hạn gói tập, quy định đặt & hủy lịch, lớp Duet và trang phục chuẩn',
  },
  {
    id: 'tv-2',
    image: '/tu_van_2.jpg',
    title: 'Chính Sách Đăng Ký Hội Viên',
    subtitle: 'Phí tham gia, ưu đãi gia hạn 10% và quyền lợi bảo lưu gói tập',
  },
  {
    id: 'tv-3',
    image: '/tu_van_3.jpg',
    title: 'Quy Trình Gia Hạn Gói Tập',
    subtitle: 'Tự động nhắc lịch khi còn 3 buổi, ưu tiên giữ lịch tập và HLV quen thuộc',
  },
];

const CONTACT_CHANNELS = [
  {
    icon: Phone,
    label: 'Hotline',
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, '')}`,
    color: 'text-[#3D2417]',
    hoverBg: 'hover:bg-[#3D2417] hover:text-[#FAF6EE]',
  },
  {
    icon: MessageCircle,
    label: 'Zalo',
    value: 'Chat Zalo Ngay',
    href: `${siteConfig.contact.zalo}?text=${encodeURIComponent('Chào HPILATES, mình muốn tư vấn về gói tập Pilates ạ!')}`,
    color: 'text-[#0068FF]',
    hoverBg: 'hover:bg-[#0068FF] hover:text-white',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    color: 'text-[#B08D57]',
    hoverBg: 'hover:bg-[#B08D57] hover:text-[#FAF6EE]',
  },
  {
    icon: ExternalLink,
    label: 'Facebook',
    value: 'Fanpage HPILATES',
    href: siteConfig.social.facebook,
    color: 'text-[#1877F2]',
    hoverBg: 'hover:bg-[#1877F2] hover:text-white',
    external: true,
  },
];

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  onOpenBooking,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentImage = CONSULTATION_IMAGES[activeImageIdx];

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    setSlideDirection(1);
    setActiveImageIdx((prev) => (prev + 1) % CONSULTATION_IMAGES.length);
  };

  const goPrev = () => {
    setSlideDirection(-1);
    setActiveImageIdx(
      (prev) => (prev - 1 + CONSULTATION_IMAGES.length) % CONSULTATION_IMAGES.length
    );
  };

  const goNextLightbox = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % CONSULTATION_IMAGES.length : null
    );

  const goPrevLightbox = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + CONSULTATION_IMAGES.length) % CONSULTATION_IMAGES.length
        : null
    );

  return (
    <>
      <section
        id="tu-van"
        className="relative w-full py-28 sm:py-36 bg-[#F3EBE0] overflow-hidden border-y border-[#C9A876]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.8)]"
      >
        {/* Decorative Background Elements */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] border border-[#EDE0C8]/60 arch-full pointer-events-none opacity-40" />
        <div className="absolute -right-20 top-1/3 w-[300px] h-[500px] border border-[#C9A876]/20 arch-top pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
                04 / TƯ VẤN HỘI VIÊN & ĐÀO TẠO
              </span>
              <span className="w-8 h-[1px] bg-[#B08D57]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#3D2417] leading-[1.12] font-normal">
              Thông Tin Hội Viên <br className="hidden sm:inline" />
              <span className="italic font-light text-[#B08D57]">
                & Chính Sách Gói Tập
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A3826] font-light max-w-2xl mx-auto mt-4 leading-relaxed">
              Mọi thông tin về quy chuẩn tập luyện, chính sách đăng ký và quy trình gia hạn tại HPILATES & Wellness.
            </p>
          </div>

          {/* ============================================================ */}
          {/* 1. RECTANGULAR IMAGE SLIDER WITH SWIPE / AUTO FIT NATIVE RATIO */}
          {/* ============================================================ */}
          <div className="max-w-2xl mx-auto">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#C9A876]/45 shadow-[0_20px_50px_rgba(61,36,23,0.1)] bg-[#FAF6EE] select-none">
              {/* Swipeable Draggable Image Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage.id}
                  initial={{ opacity: 0, x: slideDirection > 0 ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slideDirection > 0 ? -30 : 30 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -40) {
                      goNext();
                    } else if (info.offset.x > 40) {
                      goPrev();
                    }
                  }}
                  className="w-full flex items-center justify-center cursor-grab active:cursor-grabbing relative"
                  onClick={() => openLightbox(activeImageIdx)}
                >
                  <img
                    src={currentImage.image}
                    alt={currentImage.title}
                    className="w-full h-auto block object-contain pointer-events-none rounded-2xl sm:rounded-3xl"
                    referrerPolicy="no-referrer"
                  />

                  {/* Zoom Badge on Top-Right */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#FAF6EE]/95 backdrop-blur-md text-[#3D2417] shadow-md border border-[#C9A876]/40 flex items-center gap-1.5 text-[9px] sm:text-[10px] font-editorial tracking-wider uppercase font-semibold pointer-events-none">
                    <ZoomIn size={12} className="text-[#B08D57]" />
                    <span>Phóng to</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Left / Right Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FAF6EE]/90 hover:bg-[#3D2417] hover:text-[#FAF6EE] border border-[#C9A876]/45 text-[#3D2417] flex items-center justify-center transition-all duration-300 shadow-lg z-10"
                aria-label="Ảnh trước"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FAF6EE]/90 hover:bg-[#3D2417] hover:text-[#FAF6EE] border border-[#C9A876]/45 text-[#3D2417] flex items-center justify-center transition-all duration-300 shadow-lg z-10"
                aria-label="Ảnh tiếp theo"
              >
                <ChevronRight size={18} />
              </button>

              {/* Mobile Swipe Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#3D2417]/80 text-[#FAF6EE] text-[9px] font-editorial tracking-wider uppercase sm:hidden pointer-events-none shadow-md">
                Vuốt để đổi ảnh
              </div>
            </div>

            {/* Slider Caption & Indicators Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-2 gap-3">
              <div className="text-center sm:text-left">
                <h4 className="font-serif text-lg text-[#3D2417] font-medium">
                  {currentImage.title}
                </h4>
                <p className="text-xs text-[#5A3826] font-light">
                  {currentImage.subtitle}
                </p>
              </div>

              {/* Step Pill Indicators */}
              <div className="flex items-center gap-2">
                {CONSULTATION_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSlideDirection(idx > activeImageIdx ? 1 : -1);
                      setActiveImageIdx(idx);
                    }}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      activeImageIdx === idx
                        ? 'w-8 bg-[#B08D57]'
                        : 'w-2.5 bg-[#EDE0C8] hover:bg-[#C9A876]'
                    }`}
                    aria-label={`Xem ảnh ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. UNIFIED FIXED CONTENT SECTION BELOW THE SLIDER */}
          {/* ============================================================ */}
          <div className="max-w-4xl mx-auto mt-10 p-6 sm:p-10 rounded-3xl bg-[#FAF6EE] border border-[#C9A876]/40 shadow-[0_15px_40px_rgba(61,36,23,0.04)]">
            <div className="flex items-center gap-2 text-[#B08D57] font-editorial text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold mb-3">
              <Sparkles size={14} />
              QUY CHUẨN & CHÍNH SÁCH ATELIER
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#3D2417] mb-6 font-normal">
              Tổng Hợp Quy Định Hội Viên & Gia Hạn Gói Tập
            </h3>

            {/* 3 Unified Content Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#C9A876]/30">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-serif text-[#3D2417] font-semibold">
                  <span className="w-6 h-6 rounded-full bg-[#EDE0C8] text-[#B08D57] flex items-center justify-center text-xs font-serif font-bold flex-shrink-0">
                    01
                  </span>
                  <span>Nội Quy Luyện Tập</span>
                </div>
                <p className="text-xs text-[#5A3826] font-light leading-relaxed">
                  Gói tập kích hoạt trong 30 ngày. Vui lòng báo trước 12 - 24 giờ khi cần hủy hoặc đổi lịch tập để được bảo lưu buổi tập. Bắt buộc trang bị vớ bám sàn (grip socks) chuyên dụng.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-serif text-[#3D2417] font-semibold">
                  <span className="w-6 h-6 rounded-full bg-[#EDE0C8] text-[#B08D57] flex items-center justify-center text-xs font-serif font-bold flex-shrink-0">
                    02
                  </span>
                  <span>Đặc Quyền Hội Viên</span>
                </div>
                <p className="text-xs text-[#5A3826] font-light leading-relaxed">
                  Miễn phí đo & phân tích tư thế (Posture Assessment 1-1). Giảm ngay 10% khi gia hạn gói tập liên tiếp. Hỗ trợ chính sách chuyển nhượng và bảo lưu gói tập minh bạch.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-serif text-[#3D2417] font-semibold">
                  <span className="w-6 h-6 rounded-full bg-[#EDE0C8] text-[#B08D57] flex items-center justify-center text-xs font-serif font-bold flex-shrink-0">
                    03
                  </span>
                  <span>Quy Trình Gia Hạn</span>
                </div>
                <p className="text-xs text-[#5A3826] font-light leading-relaxed">
                  Hệ thống CSKH tự động gửi thông báo khi gói tập còn 3 buổi. Ưu tiên giữ lịch tập và Huấn luyện viên quen thuộc theo yêu cầu của học viên.
                </p>
              </div>
            </div>

            {/* Action CTA Row */}
            <div className="mt-8 pt-6 border-t border-[#C9A876]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#5A3826] italic font-serif text-center sm:text-left">
                "Đội ngũ cố vấn của HPILATES luôn sẵn sàng hỗ trợ giải đáp mọi thắc mắc của bạn."
              </p>
              <button
                onClick={() => onOpenBooking?.('Tư Vấn Gói Tập & Chính Sách Hội Viên')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-xs tracking-[0.24em] uppercase hover:bg-[#B08D57] transition-all duration-300 shadow-md flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>NHẬN TƯ VẤN NGAY</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 3. CONTACT CTA STRIP */}
          {/* ============================================================ */}
          <div
            id="lien-he"
            className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#FAF6EE] border border-[#C9A876]/40 shadow-[0_15px_40px_rgba(61,36,23,0.06)] scroll-mt-24"
          >
            {/* Contact Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#B08D57]">
                  <Headphones size={16} />
                  <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold">
                    LIÊN HỆ TƯ VẤN
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#3D2417]">
                  Kết Nối Với HPILATES & Wellness
                </h3>
              </div>
              <a
                href={`${siteConfig.contact.zalo}?text=${encodeURIComponent('Chào HPILATES, mình muốn tư vấn về gói tập Pilates ạ!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-[10px] tracking-[0.22em] uppercase transition-all duration-500 hover:bg-[#B08D57] hover:shadow-[0_8px_25px_rgba(176,141,87,0.3)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B08D57]/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 font-semibold">LIÊN HỆ TƯ VẤN NGAY</span>
                <ArrowRight size={13} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Contact Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONTACT_CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  className={`group/card flex items-center gap-4 p-4 rounded-2xl bg-[#F3EBE0]/60 border border-[#C9A876]/35 transition-all duration-300 hover:bg-[#FAF6EE] hover:border-[#B08D57]/60 hover:shadow-[0_8px_25px_rgba(61,36,23,0.06)] ${channel.hoverBg}`}
                >
                  <div
                    className={`w-11 h-11 rounded-full border border-[#C9A876]/40 bg-[#EDE0C8]/50 flex items-center justify-center ${channel.color} group-hover/card:bg-transparent group-hover/card:border-current transition-colors duration-300 flex-shrink-0`}
                  >
                    <channel.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-editorial text-[9px] tracking-[0.22em] text-[#5A3826]/70 uppercase block group-hover/card:text-current/70 transition-colors">
                      {channel.label}
                    </span>
                    <span className="text-sm text-[#3D2417] font-medium truncate block group-hover/card:text-current transition-colors">
                      {channel.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Studio Hours Micro Row */}
            <div className="mt-6 pt-6 border-t border-[#C9A876]/25 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#5A3826] font-light">
              <span>
                <strong className="font-medium text-[#3D2417]">T2–T6:</strong>{' '}
                {STUDIO_DETAILS.hours.monFri}
              </span>
              <span className="text-[#C9A876]">·</span>
              <span>
                <strong className="font-medium text-[#3D2417]">T7:</strong>{' '}
                {STUDIO_DETAILS.hours.sat}
              </span>
              <span className="text-[#C9A876]">·</span>
              <span>
                <strong className="font-medium text-[#3D2417]">CN:</strong>{' '}
                {STUDIO_DETAILS.hours.sun}
              </span>
              <span className="text-[#C9A876]">·</span>
              <span className="italic text-[#B08D57]">
                {STUDIO_DETAILS.shortAddress}
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 4. TRAINER CERTIFICATION SECTION */}
          {/* ============================================================ */}
          <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-[#FAF6EE] border border-[#C9A876]/40 shadow-[0_15px_40px_rgba(61,36,23,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-[#B08D57]">
                  <Award size={18} />
                  <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold">
                    CHƯƠNG TRÌNH ĐÀO TẠO ĐẲNG CẤP TẠI BẢO LỘC
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl text-[#3D2417] leading-tight">
                  Khóa Đào Tạo Huấn Luyện Viên Pilates Toàn Diện
                </h3>

                <p className="text-xs sm:text-sm text-[#5A3826] font-light leading-relaxed">
                  Được dẫn dắt trực tiếp bởi <strong>HLV Nguyễn Thu Huyền</strong> (Chuyên gia đào tạo & HLV Trưởng). Chương trình trang bị kiến thức giải phẫu học chuyên sâu, kỹ năng vận hành trọn bộ hệ máy Reformer, Cadillac, Ladder Barrel và kỹ năng sư phạm chuẩn mực.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#3D2417]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#B08D57]" />
                    <span>Chứng chỉ đào tạo toàn diện</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#B08D57]" />
                    <span>Thực hành 100% trên thiết bị gỗ sồi cao cấp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#B08D57]" />
                    <span>Cơ hội làm việc tại hệ thống studio</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenBooking?.('Khóa Đào Tạo HLV Pilates Toàn Diện tại Bảo Lộc')}
                  className="px-8 py-4 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-xs tracking-[0.24em] uppercase hover:bg-[#B08D57] transition-all duration-300 shadow-md text-center"
                >
                  ĐĂNG KÝ TƯ VẤN KHÓA HỌC
                </button>
                <a
                  href={STUDIO_DETAILS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#FAF6EE] text-[#3D2417] border border-[#C9A876]/60 font-editorial text-xs tracking-[0.22em] uppercase hover:border-[#3D2417] transition-all duration-300 text-center"
                >
                  XEM TRANG FACEBOOK
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Fullscreen Lightbox Modal === */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-[#3D2417]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-[#FAF6EE]/10 border border-[#C9A876]/30 text-[#FAF6EE] hover:bg-[#FAF6EE]/20 transition-colors z-10"
              aria-label="Đóng xem ảnh"
            >
              <X size={20} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrevLightbox();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#FAF6EE]/10 border border-[#C9A876]/30 text-[#FAF6EE] hover:bg-[#FAF6EE]/20 transition-colors z-10"
              aria-label="Ảnh trước"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNextLightbox();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#FAF6EE]/10 border border-[#C9A876]/30 text-[#FAF6EE] hover:bg-[#FAF6EE]/20 transition-colors z-10"
              aria-label="Ảnh tiếp theo"
            >
              <ChevronRight size={20} />
            </button>

            {/* Image Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={CONSULTATION_IMAGES[lightboxIndex].image}
                  alt={CONSULTATION_IMAGES[lightboxIndex].title}
                  className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Caption Under Image */}
                <div className="mt-4 text-center">
                  <h4 className="font-serif text-lg text-[#FAF6EE] font-medium">
                    {CONSULTATION_IMAGES[lightboxIndex].title}
                  </h4>
                  <p className="text-sm text-[#EDE0C8]/80 font-light mt-1">
                    {CONSULTATION_IMAGES[lightboxIndex].subtitle}
                  </p>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-2 mt-4">
                  {CONSULTATION_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(idx);
                      }}
                      className={`h-1.5 transition-all duration-300 rounded-full ${
                        lightboxIndex === idx
                          ? 'w-8 bg-[#B08D57]'
                          : 'w-2 bg-[#FAF6EE]/30'
                      }`}
                      aria-label={`Xem ảnh ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};