import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BrandMonogram } from './BrandMonogram';
import { Compass, Sparkles } from 'lucide-react';

export const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const archParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const goldLineWidth = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="introduction"
      className="relative w-full py-28 sm:py-36 bg-[#FAF6EE] overflow-hidden"
    >
      {/* Subtle background ambient arch watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] border border-[#EDE0C8]/80 arch-top pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header Micro-Tag */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-6 h-[1px] bg-[#B08D57]" />
          <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
            01 / GIỚI THIỆU
          </span>
          <span className="w-6 h-[1px] bg-[#B08D57]" />
        </div>

        {/* Large Centered Serif Statement Line-by-Line Reveal */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#3D2417] leading-[1.12] font-normal"
          >
            Không gian với <br className="hidden sm:inline" />
            <span className="italic font-light text-[#B08D57]">sức mạnh tĩnh lặng.</span>
          </motion.h2>

          {/* Animated Gold Center Divider */}
          <div className="w-32 h-[1px] bg-[#EDE0C8] mx-auto mt-8 relative overflow-hidden">
            <motion.div
              style={{ width: goldLineWidth }}
              className="absolute inset-y-0 left-0 bg-[#B08D57]"
            />
          </div>
        </div>

        {/* Asymmetric Composition: Editorial Portrait Framed in Arch & Poetic Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Signature Architectural Arched Image Framing */}
          <div className="lg:col-span-6 relative">
            {/* Background glowing contour arch */}
            <div className="absolute -inset-3 bg-[#EDE0C8]/50 arch-top filter blur-sm -z-10" />

            <motion.div
              style={{ y: archParallax }}
              className="relative w-full max-w-md mx-auto aspect-[3/4] arch-top overflow-hidden border-2 border-[#C9A876]/30 shadow-[0_20px_50px_rgba(61,36,23,0.06)]"
              data-cursor="view"
              data-cursor-label="STUDIO"
            >
              <img
                src="/brand_img.jpg"
                alt="Không gian studio HPILATES và thiết bị Reformer cao cấp"
                className="w-full h-full object-cover translate-x-[25px] -translate-y-[-30px] scale-[1.05] filter brightness-[1.02] contrast-[0.98] transition-transform duration-700 hover:scale-[1.1]"
                referrerPolicy="no-referrer"
              />

              {/* In-image subtle gold overlay frame */}
              <div className="absolute inset-4 arch-top border border-[#FAF6EE]/40 pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Editorial Narrative & Studio Manifesto */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3">
              <BrandMonogram size="sm" showText={false} color="#B08D57" />
              <span className="font-editorial text-[11px] tracking-[0.3em] text-[#3D2417] uppercase font-semibold">
                SỰ HÀI HÒA KIẾN TRÚC & LÀM CHỦ REFORMER
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-[#3D2417] leading-snug font-light">
              Nâng tầm Pilates vượt khỏi việc tập luyện đơn thuần thành một nghi thức điêu khắc cơ thể và lắng đọng tâm trí.
            </h3>

            <p className="text-sm sm:text-base text-[#5A3826] font-light leading-relaxed">
              Tọa lạc tại Lô 25, TTTM Phương Nam, TP. Bảo Lộc, HPILATES & Wellness mang đến không gian tập luyện chữa lành đẳng cấp với hệ thống máy Reformer gỗ sồi thủ công. Dưới sự dẫn dắt của Huấn luyện viên Trưởng Nguyễn Thu Huyền, chúng tôi tin rằng sức mạnh đích thực bắt nguồn từ sự chuẩn xác cơ học, hơi thở sâu và sự dẻo dai nguyên bản của cột sống.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
