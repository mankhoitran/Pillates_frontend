import React from 'react';
import { motion } from 'motion/react';
import { MoveRight, Sparkles, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';
import { BrandMonogram } from './BrandMonogram';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#FAF6EE] overflow-hidden border-t border-[#C9A876]/20">
      {/* Background Arch Shapes */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[750px] border border-[#EDE0C8] arch-top pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Oversized Typography & Luxury CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
                07 / KHỞI ĐẦU HÀNH TRÌNH
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#3D2417] leading-[1.02] font-normal"
            >
              CƠ THỂ BẠN. <br />
              <span className="italic font-light text-[#3D2417]">CHUYỂN ĐỘNG CỦA BẠN.</span> <br />
              <span className="text-[#B08D57]">KHÔNG GIAN CỦA BẠN.</span>
            </motion.h2>

            <p className="text-sm sm:text-base text-[#5A3826] font-light leading-relaxed max-w-lg">
              Bước qua khung cửa vòm vào một thế giới tinh tế về giải phẫu học, thiết bị Reformer gỗ sồi vững chãi và nguồn
              năng lượng chuyển động chánh niệm.
            </p>

            {/* Interactive Luxury CTA Button with Gold Shimmer */}
            <div className="pt-2">
              <motion.button
                onClick={onOpenBooking}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-4 px-9 py-5 rounded-full bg-[#3D2417] text-[#FAF6EE] text-xs sm:text-sm font-editorial tracking-[0.28em] uppercase overflow-hidden shadow-[0_15px_40px_rgba(61,36,23,0.18)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(176,141,87,0.3)]"
                data-cursor="book"
                data-cursor-label="ĐẶT CHỖ"
              >
                {/* Gold Shimmer Light Passing */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B08D57]/70 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <span className="relative z-10 font-semibold">ĐẶT CHỖ BUỔI TẬP CỦA BẠN</span>
                <span className="relative z-10 w-7 h-7 rounded-full bg-[#FAF6EE] text-[#3D2417] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <MoveRight size={14} />
                </span>
              </motion.button>
            </div>

            {/* Concierge Micro Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#C9A876]/30 text-xs text-[#5A3826]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#B08D57]" />
                <span>Lớp Học Riêng Tư (Tối Đa 5 Học Viên)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#B08D57]" />
                <span>Chính Sách Đổi Lịch Linh Hoạt Trước 24 Giờ</span>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Large Editorial Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[3/4] arch-asymmetric-left overflow-hidden border-2 border-[#C9A876]/40 shadow-[0_25px_70px_rgba(61,36,23,0.08)] bg-[#EDE0C8]">
              <img
                src="/brand.jpg"
                alt="Không gian studio HPILATES thanh tịnh và thiết bị Reformer cao cấp"
                className="w-full h-full object-cover filter brightness-[1.02] contrast-[0.98] transition-transform duration-1000 hover:scale-106"
                referrerPolicy="no-referrer"
              />

              {/* Light Sand Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2417]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
