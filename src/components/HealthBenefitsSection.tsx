import React from 'react';
import { motion } from 'motion/react';
import { HEALTH_BENEFITS, SPECIAL_PROGRAMS, STUDIO_DETAILS } from '../data/studioData';
import { BrandMonogram } from './BrandMonogram';
import {
  Sparkles,
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Award,
  Activity,
  UserCheck,
} from 'lucide-react';

interface HealthBenefitsSectionProps {
  onOpenBooking: (initialClass?: string) => void;
}

export const HealthBenefitsSection: React.FC<HealthBenefitsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="benefits"
      className="relative w-full py-28 sm:py-36 bg-[#FAF6EE] overflow-hidden border-t border-[#C9A876]/20"
    >
      {/* Background Arch Ambient Contour */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#EDE0C8]/60 arch-full pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#B08D57]" />
          <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
            04 / LỢI ÍCH TRỊ LIỆU & SỨC KHỎE
          </span>
          <span className="w-8 h-[1px] bg-[#B08D57]" />
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#3D2417] leading-[1.12] font-normal"
          >
            Đừng đợi đến khi lưng “lên tiếng” <br className="hidden sm:inline" />
            <span className="italic font-light text-[#B08D57]">mới bắt đầu</span> rèn luyện Pilates!
          </motion.h2>

          <p className="text-sm sm:text-base text-[#5A3826] font-light max-w-2xl mx-auto mt-6 leading-relaxed">
            Dù là dân văn phòng ngồi nhiều đau mỏi lưng gáy, mẹ bầu cần chăm sóc khung chậu hay người mới bắt đầu ít vận động,
            Pilates mang đến phương pháp phục hồi khoa học, êm ái và toàn diện cho từng đốt sống.
          </p>
        </div>

        {/* 5 Core Health Benefits — Structured Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {HEALTH_BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl bg-[#FAF6EE] border border-[#C9A876]/35 shadow-[0_10px_30px_rgba(61,36,23,0.03)] hover:shadow-[0_20px_45px_rgba(176,141,87,0.15)] hover:border-[#B08D57]/70 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              {/* Subtle top light shimmer */}
              <div className="absolute -right-12 -top-12 w-28 h-28 bg-[radial-gradient(ellipse_at_top_right,rgba(176,141,87,0.15),transparent_70%)] pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl sm:text-4xl text-[#B08D57] font-light">
                    {benefit.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#EDE0C8]/60 text-[#3D2417] font-editorial text-[9px] tracking-[0.2em] uppercase font-semibold">
                    {benefit.badge}
                  </span>
                </div>

                <span className="font-editorial text-[9px] tracking-[0.24em] text-[#5A3826]/80 uppercase block mb-2 font-medium">
                  {benefit.tagline}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl text-[#3D2417] leading-snug group-hover:text-[#B08D57] transition-colors duration-300 mb-4">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A3826] font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#EDE0C8] mt-6 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-[#B08D57] transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}

          {/* 6th Slot: Posture Assessment & Trainer Certification Promotion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="p-8 rounded-3xl bg-[#3D2417] text-[#FAF6EE] border border-[#B08D57] shadow-[0_15px_40px_rgba(61,36,23,0.2)] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[radial-gradient(circle,rgba(176,141,87,0.3),transparent_70%)] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <BrandMonogram size="sm" showText={false} color="#EDE0C8" />
                <span className="px-3 py-1 rounded-full bg-[#B08D57]/30 text-[#EDE0C8] font-editorial text-[9px] tracking-[0.2em] uppercase font-semibold border border-[#B08D57]/50">
                  ĐẶC BIỆT MIỄN PHÍ
                </span>
              </div>

              <span className="font-editorial text-[9px] tracking-[0.25em] text-[#B08D57] uppercase block mb-2 font-semibold">
                POSTURE ASSESSMENT 1-1
              </span>

              <h3 className="font-serif text-xl sm:text-2xl text-[#FAF6EE] leading-snug mb-3">
                Đo & Kiểm Tra Tư Thế Miễn Phí
              </h3>

              <p className="text-xs text-[#EDE0C8]/90 font-light leading-relaxed mb-4">
                Được chuyên gia phân tích trục cột sống, độ cong sinh học và độ mở khớp vai trước khi bắt đầu lộ trình rèn luyện cá nhân hóa.
              </p>
            </div>

            <div className="pt-4 border-t border-[#B08D57]/40">
              <button
                onClick={() => {
                  const el = document.getElementById('lien-he') || document.getElementById('tu-van');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onOpenBooking('Đo & Kiểm Tra Tư Thế Miễn Phí (Posture Assessment)');
                  }
                }}
                className="w-full py-3 px-5 rounded-full bg-[#B08D57] text-[#FAF6EE] font-editorial text-[10px] tracking-[0.22em] uppercase hover:bg-[#FAF6EE] hover:text-[#3D2417] transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              >
                <span>NHẬN LỊCH ĐO TƯ THẾ</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
