import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Sparkles, MoveRight } from 'lucide-react';
import { BrandMonogram } from './BrandMonogram';

interface HeroProps {
  onEnterStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnterStudio }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-[100svh] min-h-[700px] overflow-hidden flex flex-col justify-between bg-[#FAF6EE]"
    >
      {/* Background Cinematic Image with Editorial Crop and Light Warm Sand Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ scale: imgScale }}
          className="w-full h-full relative"
          transition={{ ease: 'easeOut', duration: 1.2 }}
        >
          <img
            src="/room_img.jpg"
            alt="Không gian studio HPILATES ngập tràn ánh nắng và các thiết bị reformer gỗ sồi"
            className="w-full h-full object-cover object-[center_40%] filter brightness-[1.03] contrast-[0.98] saturate-[0.95]"
            referrerPolicy="no-referrer"
          />

          {/* Delicate Light Sand & Ivory Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE] via-[#FAF6EE]/40 to-[#FAF6EE]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE]/75 via-transparent to-[#EDE0C8]/40" />

          {/* Ambient warm sun ray sweep effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_20%,rgba(237,224,200,0.45),transparent_70%)] pointer-events-none" />
        </motion.div>
      </div>

      {/* Floating Delicate Gold Architectural Frame Accents */}
      <div className="absolute inset-x-6 sm:inset-x-12 top-28 bottom-12 border border-[#C9A876]/20 pointer-events-none rounded-t-[120px] rounded-b-2xl hidden md:block">
        {/* Corner Gold Notches */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAF6EE] px-4 py-1 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
          <span className="font-editorial text-[9px] tracking-[0.35em] text-[#B08D57] uppercase">SANCTUARY ATELIER</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
        </div>
      </div>

      {/* Hero Top Metadata Bar */}
      <div className="relative z-10 pt-28 sm:pt-32 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <span className="w-8 h-[1px] bg-[#B08D57]" />
          <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.32em] text-[#5A3826] uppercase">
            HPILATES & WELLNESS ATELIER
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex items-center gap-2 font-editorial text-[10px] tracking-[0.28em] text-[#3D2417]/80 bg-[#FAF6EE]/80 px-4 py-1.5 rounded-full border border-[#C9A876]/30 backdrop-blur-sm"
        >
          <Sparkles size={12} className="text-[#B08D57]" />
          <span>REFORMER & CADILLAC ĐƯƠNG ĐẠI</span>
        </motion.div>
      </div>

      {/* Hero Main Content: Oversized Editorial Typography Overlapping Image */}
      <motion.div
        style={{ y: textY, opacity: opacityFade }}
        className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto w-full my-auto py-8"
      >
        <div className="max-w-4xl">
          {/* Subtitle Eyebrow in Refined Editorial Type */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-editorial text-xs sm:text-sm tracking-[0.38em] text-[#B08D57] uppercase font-medium mb-3"
          >
            KIẾN TRÚC × CHUYỂN ĐỘNG CHUẨN XÁC
          </motion.p>

          {/* Main Statement Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[2.1rem] sm:text-6xl lg:text-[5.5rem] leading-[1.08] sm:leading-[1.05] text-[#3D2417] tracking-[-0.01em] font-normal flex flex-col gap-[5px]"
          >
            <span className="block italic">NGHỆ THUẬT</span>
            <span className="block italic text-[0.62em] sm:text-[0.55em] font-serif font-light text-[#5A3826] tracking-[0.2em] leading-tight">
              CỦA
            </span>
            <span className="block italic font-light text-[#3D2417] hover:text-[#B08D57] transition-colors duration-700">
              SỰ CHUYỂN ĐỘNG
            </span>
          </motion.h1>

          {/* Editorial Descriptor & Monogram Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            {/* <p className="md:col-span-8 text-sm sm:text-base text-[#5A3826] font-light leading-relaxed max-w-xl">
              Nơi cơ sinh học Pilates cổ điển giao thoa cùng sự tĩnh lặng của kiến trúc đương đại. Khơi mở chiều dài cột sống,
              làm chủ cốt lõi sâu và cảm nhận nét uyển chuyển trong không gian vòm ngập tràn ánh nắng.
            </p> */}

            {/* Quick Micro Badge */}
            {/* <div className="md:col-span-4 hidden md:flex items-center gap-3 pl-4 border-l border-[#C9A876]/40">
              <span className="font-serif text-3xl italic text-[#B08D57]">h</span>
              <div className="text-[10px] font-editorial tracking-[0.2em] text-[#5A3826] leading-tight">
                ĐƯỜNG NÉT MỀM MẠI. <br />
                <span className="text-[#3D2417] font-semibold">CỐT LÕI VỮNG VÀNG.</span>
              </div>
            </div> */}
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Bottom Bar & Floating Interactive Magnetic CTA */}
      <div className="relative z-10 pb-8 sm:pb-12 px-6 sm:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Floating CTA Button */}
        <motion.button
          onClick={onEnterStudio}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#FAF6EE]/90 border border-[#B08D57] text-[#3D2417] shadow-[0_10px_30px_rgba(61,36,23,0.08)] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#3D2417]"
          data-cursor="explore"
          data-cursor-label="KHÁM PHÁ"
        >
          {/* Animated Gold Shimmer Travel on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EDE0C8]/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

          <span className="relative z-10 font-editorial text-xs sm:text-sm tracking-[0.28em] uppercase font-semibold">
            ĐẶT LỊCH TẬP THỬ
          </span>
          <span className="relative z-10 w-8 h-8 rounded-full bg-[#3D2417] text-[#FAF6EE] flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:bg-[#B08D57]">
            <MoveRight size={14} />
          </span>
        </motion.button>

        {/* Scroll Indicator Link */}
        <a
          href="#introduction"
          className="hidden sm:flex items-center gap-3 font-editorial text-[10px] tracking-[0.3em] text-[#5A3826] hover:text-[#B08D57] transition-colors group"
        >
          <span>CHUYỂN ĐỘNG CÓ CHỦ ĐÍCH</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-7 h-7 rounded-full border border-[#C9A876]/40 flex items-center justify-center group-hover:border-[#B08D57]"
          >
            <ArrowDown size={12} className="text-[#B08D57]" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};
