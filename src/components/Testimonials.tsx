import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/studioData';
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto transition every 9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 9000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full py-32 sm:py-40 bg-[#FAF6EE] overflow-hidden">
      {/* Background Soft Studio Ambient Image with Subtle Blur & Low Opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.image}
            src={current.image}
            alt="Chân dung học viên studio"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.12, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full object-cover filter blur-[2px] brightness-105"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EE] via-[#FAF6EE]/80 to-[#FAF6EE]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Header Tag */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="w-8 h-[1px] bg-[#B08D57]" />
          <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
            06 / ĐÁNH GIÁ TRÊN GOOGLE MAPS
          </span>
          <span className="w-8 h-[1px] bg-[#B08D57]" />
        </div>

        {/* Large Testimonial Dominating Viewport */}
        <div className="relative min-h-[320px] flex flex-col justify-between items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Quote Mark */}
              <div className="w-12 h-12 rounded-full border border-[#C9A876]/40 bg-[#EDE0C8]/50 flex items-center justify-center mx-auto text-[#B08D57]">
                <Quote size={20} className="rotate-180" />
              </div>

              {/* Large Quote Statement */}
              <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#3D2417] leading-[1.25] font-light max-w-4xl mx-auto">
                "{current.quote}"
              </blockquote>

              {/* Member Provenance & Metadata */}
              <div className="pt-4 space-y-2 flex flex-col items-center">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#FABB05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="font-serif text-xl sm:text-2xl text-[#3D2417] font-medium mt-2 flex items-center gap-2">
                  {current.author}
                  <CheckCircle size={14} className="text-[#34A853]" />
                </p>

                <div className="flex items-center gap-2 text-xs font-editorial tracking-[0.1em] text-[#5A3826]">
                  <span className="bg-white/50 px-2 py-0.5 rounded border border-[#C9A876]/30 flex items-center gap-1.5">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-3 h-3" />
                    Đánh giá xác thực trên Google
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination & Subtle Controls */}
        <div className="mt-16 flex items-center justify-between border-t border-[#C9A876]/30 pt-8">
          {/* Subtle Numbering */}
          <div className="font-serif text-lg text-[#3D2417]">
            <span className="text-[#B08D57] font-medium">0{currentIndex + 1}</span>
            <span className="text-[#C9A876] mx-2">/</span>
            <span className="text-[#5A3826]/60">0{TESTIMONIALS.length}</span>
          </div>

          {/* Gold Progress Track */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-8 bg-[#B08D57]' : 'w-2 bg-[#EDE0C8]'
                  }`}
                aria-label={`Đi tới chia sẻ ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[#C9A876]/40 text-[#3D2417] hover:bg-[#EDE0C8] transition-colors"
              aria-label="Chia sẻ trước"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[#C9A876]/40 text-[#3D2417] hover:bg-[#EDE0C8] transition-colors"
              aria-label="Chia sẻ tiếp theo"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
