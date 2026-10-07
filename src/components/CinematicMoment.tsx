import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const CinematicMoment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.0, 1.08]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0.4]);
  const textTranslateY = useTransform(scrollYProgress, [0.2, 0.5], [40, 0]);
  const lightRayX = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-auto min-h-[500px] md:h-[100vh] md:min-h-[650px] overflow-hidden bg-[#23150C] flex items-center justify-center py-20 md:py-0 border-y border-[#B08D57]/40 shadow-[inset_0_1px_0_rgba(176,141,87,0.3),inset_0_-1px_0_rgba(176,141,87,0.3)]"
    >
      {/* Background Cinematic Warm-Lit Studio Image with Sheer Curtains */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ scale }} className="w-full h-full relative">
          <img
            src="/room_img.jpg"
            alt="Ánh sáng tự nhiên len lỏi qua rèm voan chiếu rọi lên thiết bị reformer"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] saturate-[0.85]"
            referrerPolicy="no-referrer"
          />

          {/* Deep Espresso / Golden Amber Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#23150C] via-[#23150C]/60 to-[#23150C]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#23150C]/90 via-[#23150C]/40 to-[#23150C]/80" />

          {/* Moving Warm Sunlight Shimmer */}
          <motion.div
            style={{ x: lightRayX }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_30%,rgba(176,141,87,0.25),transparent_70%)] pointer-events-none"
          />
        </motion.div>
      </div>

      {/* Subtle Plaster Grain */}
      <div className="absolute inset-0 plaster-grain pointer-events-none opacity-20" />

      {/* Floating Typography Card in Deep Velvet Glass */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 w-full flex flex-col items-end text-right">
        <motion.div
          style={{ opacity: textOpacity, y: textTranslateY }}
          className="max-w-xl bg-[#2D1B11]/85 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-[#B08D57]/50 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center justify-end gap-2 mb-3">
            <span className="font-editorial text-[9px] tracking-[0.35em] text-[#C9A876] uppercase font-semibold">
              KHOẢNH KHẮC LẮNG ĐỌNG
            </span>
            <Sparkles size={12} className="text-[#C9A876]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF6EE] leading-[1.12] font-normal">
            Sức mạnh có thể <br />
            <span className="italic font-light text-[#C9A876]">thật tĩnh lặng.</span>
          </h2>

          <div className="w-16 h-[1px] bg-[#B08D57] ml-auto my-4" />

          <p className="text-xs sm:text-sm text-[#EDE0C8]/90 font-light leading-relaxed">
            Trong một thế giới đầy xáo động, chúng ta tìm về nơi chốn an yên của những tinh tế nhẹ nhàng. Nơi sự cân chỉnh
            trở nên tự nhiên, và sức mạnh không đến từ sự gắng gượng, mà từ việc hòa mình trọn vẹn vào hơi thở.
          </p>

          <div className="mt-6 pt-4 border-t border-[#B08D57]/30 flex items-center justify-end gap-3">
            <span className="font-serif italic text-sm text-[#FAF6EE]">Nguyễn Thu Huyền</span>
            <span className="text-[10px] font-editorial tracking-[0.2em] text-[#C9A876]/80 uppercase">
              / SÁNG LẬP & HLV TRƯỞNG
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
