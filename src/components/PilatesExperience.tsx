import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DISCIPLINES, ClassDiscipline } from '../data/studioData';
import { Check, ArrowRight, Sparkles, Clock, Layers } from 'lucide-react';

interface PilatesExperienceProps {
  onBookClass: (disciplineName: string) => void;
}

export const PilatesExperience: React.FC<PilatesExperienceProps> = ({ onBookClass }) => {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const currentDiscipline = DISCIPLINES[activeChapter];

  return (
    <section id="experience" className="relative w-full py-28 sm:py-36 bg-[#F0E6D8] overflow-hidden border-y border-[#C9A876]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.8)]">
      {/* Background Arch Ambient Curves */}
      <div className="absolute -left-48 top-1/4 w-[500px] h-[500px] rounded-full border border-[#C9A876]/20 pointer-events-none" />
      <div className="absolute -right-48 bottom-1/4 w-[600px] h-[600px] arch-top border border-[#C9A876]/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header with Editorial Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
                03 / CÁC BỘ MÔN
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#3D2417] leading-[1.05]">
              Trải Nghiệm <br />
              <span className="italic font-light text-[#3D2417]">Pilates</span>
            </h2>
          </div>

          {/* Chapter Navigation Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-[#FAF6EE] p-1.5 rounded-[1.25rem] sm:rounded-full border border-[#C9A876]/45 shadow-sm w-full md:w-auto justify-center">
            {DISCIPLINES.map((discipline, idx) => (
              <button
                key={discipline.id}
                onClick={() => setActiveChapter(idx)}
                className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-editorial text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.22em] uppercase transition-all duration-500 whitespace-nowrap ${activeChapter === idx
                    ? 'text-[#FAF6EE] bg-[#3D2417] shadow-[0_2px_10px_rgba(61,36,23,0.2)]'
                    : 'text-[#5A3826] hover:text-[#3D2417] hover:bg-[#EDE0C8]/60'
                  }`}
              >
                {discipline.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Gold Interactive Progress Indicator */}
        <div className="w-full h-[2px] bg-[#EDE0C8] mb-12 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#B08D57]"
            animate={{
              width: `${((activeChapter + 1) / DISCIPLINES.length) * 100}%`,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Immersive Chapter Content Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDiscipline.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left Column: Visual Chapter Artwork with Arch Silhouette */}
            <div className="lg:col-span-7 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] arch-top overflow-hidden border-2 border-[#C9A876]/45 shadow-[0_25px_60px_rgba(61,36,23,0.12)] bg-[#FAF6EE]">
                <img
                  src={currentDiscipline.image}
                  alt={currentDiscipline.name}
                  className={`w-full h-full object-cover filter brightness-[1.02] contrast-[0.98] transition-transform duration-1000 hover:scale-105 ${currentDiscipline.imageClassName || ''}`}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Sand Tone Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Editorial Chapter Description & Biomechanical Focus */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className="font-editorial text-xs tracking-[0.32em] text-[#B08D57] uppercase font-semibold">
                    {currentDiscipline.tagline}
                  </span>
                  <div className="flex items-center gap-2 font-editorial text-[10px] tracking-[0.18em] text-[#5A3826] bg-[#FAF6EE] border border-[#C9A876]/35 px-3 py-1 rounded-full shadow-xs">
                    <Clock size={11} className="text-[#B08D57]" />
                    <span>{currentDiscipline.duration}</span>
                    <span>•</span>
                    <span>{currentDiscipline.intensity}</span>
                  </div>
                </div>
                <h3 className="font-serif text-3xl sm:text-5xl text-[#3D2417] mt-1 font-normal">
                  {currentDiscipline.name}
                </h3>
                <p className="font-serif italic text-lg sm:text-xl text-[#B08D57] mt-1">
                  {currentDiscipline.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#5A3826] font-light leading-relaxed">
                {currentDiscipline.description}
              </p>

              {/* Apparatus Specification */}
              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#C9A876]/35 shadow-sm">
                <div className="flex items-center gap-2 text-[#3D2417] font-editorial text-[10px] tracking-[0.24em] uppercase font-semibold mb-1">
                  <Layers size={13} className="text-[#B08D57]" />
                  CẤU TRÚC THIẾT BỊ
                </div>
                <p className="text-xs text-[#5A3826] font-light">
                  {currentDiscipline.equipment}
                </p>
              </div>

              {/* Key Kinetic Focus Points */}
              <div className="space-y-2.5 pt-2">
                <div className="font-editorial text-[10px] tracking-[0.28em] text-[#3D2417] uppercase font-semibold">
                  TRỌNG TÂM CHUYỂN ĐỘNG:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentDiscipline.focus.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#5A3826]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reserve Button for this Discipline */}
              <div className="pt-4">
                <button
                  onClick={() => onBookClass(currentDiscipline.name)}
                  className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-xs tracking-[0.24em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_8px_25px_rgba(61,36,23,0.2)]"
                  data-cursor="book"
                  data-cursor-label="ĐẶT CHỖ"
                >
                  <span className="relative z-10">ĐẶT LỚP {currentDiscipline.name.split(' ')[0]}</span>
                  <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-[#B08D57] transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
