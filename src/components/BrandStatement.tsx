import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BrandMonogram } from './BrandMonogram';

export const BrandStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.85, 1.08, 1.0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.4, 1, 0.6]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 sm:py-48 bg-[#EFE5D6] overflow-hidden flex flex-col items-center justify-center border-y border-[#C9A876]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.8)]"
    >
      {/* Background Arch Overlay Contour */}
      <div className="absolute inset-x-12 top-12 bottom-12 border border-[#C9A876]/25 arch-full pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full text-center relative z-10">
        {/* Monogram Crest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <BrandMonogram size="md" showText={false} color="#B08D57" />
        </motion.div>

        {/* Huge Scaled Typography: CHUYỂN ĐỘNG */}
        <motion.div style={{ scale, opacity: textOpacity }} className="select-none">
          <h2
            className="font-serif text-[13vw] sm:text-[12vw] leading-[0.85] font-normal tracking-tight text-[#3D2417] bg-clip-text text-transparent bg-gradient-to-b from-[#3D2417] via-[#5A3826] to-[#B08D57]"
          >
            CHUYỂN ĐỘNG
          </h2>
        </motion.div>

        {/* Transitioning Into: CHUYỂN ĐỘNG CÓ CHỦ ĐÍCH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 sm:mt-10"
        >
          <p className="font-editorial text-xs sm:text-base tracking-[0.45em] text-[#B08D57] uppercase font-semibold">
            CHUYỂN ĐỘNG CÓ CHỦ ĐÍCH
          </p>

          <p className="font-serif italic text-2xl sm:text-4xl text-[#3D2417] mt-3 font-light max-w-2xl mx-auto">
            "Dòng chảy êm dịu, tỏa sáng từ bên trong. Đường nét mềm mại, cốt lõi vững vàng."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
