import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROOM_DETAILS, RoomDetail, STUDIO_DETAILS } from '../data/studioData';
import { Sparkles, Eye, Maximize2, Shield, Wind, Volume2, CheckCircle2, ArrowRight } from 'lucide-react';

interface RoomShowcaseProps {
  onOpenBooking: () => void;
}

export const RoomShowcase: React.FC<RoomShowcaseProps> = ({ onOpenBooking }) => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number>(0);
  const currentRoom: RoomDetail = ROOM_DETAILS[selectedRoomIndex];

  return (
    <section id="rooms" className="relative w-full py-28 sm:py-36 bg-[#F3EBE0] overflow-hidden border-y border-[#C9A876]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.8)]">
      {/* Subtle Background Architectural Blueprint Grid & Arches */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] border border-[#C9A876]/20 arch-top pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] rounded-full border border-[#C9A876]/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
                02 / KHÔNG GIAN STUDIO & KIẾN TRÚC
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#3D2417] leading-[1.05]">
              Không Gian <br />
              <span className="italic font-light text-[#3D2417]">Sanctuary</span>
            </h2>
          </div>

          {/* Interactive Room Navigation Toggle */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 bg-[#FAF6EE] p-1.5 rounded-[1.25rem] sm:rounded-full border border-[#C9A876]/45 shadow-sm w-full md:w-auto">
            {ROOM_DETAILS.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoomIndex(idx)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-editorial text-[9px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.22em] uppercase transition-all duration-500 whitespace-nowrap ${selectedRoomIndex === idx
                    ? 'bg-[#3D2417] text-[#FAF6EE] shadow-md'
                    : 'text-[#5A3826] hover:text-[#3D2417] hover:bg-[#EDE0C8]/60'
                  }`}
              >
                {idx === 0 ? 'KHÔNG GIAN VÒM ARCH' : 'TIỆN ÍCH & PHÒNG SUITE'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Room Presentation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoom.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            {/* Main Asymmetric Grid: Image Showcase & Architectural Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left: Large Editorial Room Image */}
              <div className="lg:col-span-7 relative">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] arch-top overflow-hidden border-2 border-[#C9A876]/45 shadow-[0_25px_60px_rgba(61,36,23,0.12)] bg-[#EDE0C8]">
                  <img
                    src={currentRoom.image}
                    alt={currentRoom.title}
                    className="w-full h-full object-cover filter brightness-[1.02] contrast-[0.98] transition-transform duration-1000 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Right: Room Description & Architectural Highlights */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-editorial text-xs tracking-[0.32em] text-[#B08D57] uppercase font-semibold">
                    {currentRoom.tagline}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#3D2417] mt-1 font-normal">
                    {currentRoom.title}
                  </h3>
                  <p className="font-serif italic text-lg text-[#B08D57] mt-1">
                    "{currentRoom.subtitle}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#5A3826] font-light leading-relaxed">
                  {currentRoom.description}
                </p>

                {/* Key Room Specs 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#C9A876]/35">
                  {currentRoom.specs.map((spec) => (
                    <div key={spec.label} className="p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#C9A876]/35 shadow-sm">
                      <span className="font-editorial text-[9px] tracking-[0.25em] text-[#B08D57] uppercase font-semibold block">
                        {spec.label}
                      </span>
                      <span className="font-serif text-base text-[#3D2417] font-medium mt-0.5 block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Room Features Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  <div className="font-editorial text-[10px] tracking-[0.28em] text-[#3D2417] uppercase font-semibold">
                    CHI TIẾT THIẾT KẾ & TIỆN ÍCH:
                  </div>
                  {currentRoom.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-[#5A3826]">
                      <CheckCircle2 size={15} className="text-[#B08D57] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Booking CTA */}
                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-xs tracking-[0.24em] uppercase hover:bg-[#B08D57] transition-all duration-300 shadow-md"
                  >
                    <span>ĐẶT LỊCH THAM QUAN / GIỮ CHỖ THẢM</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Architectural Highlights 3-Card Bento Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {currentRoom.highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="p-8 rounded-3xl bg-[#FAF6EE] border border-[#C9A876]/40 shadow-[0_10px_30px_rgba(61,36,23,0.04)] flex flex-col justify-between hover:border-[#B08D57] hover:shadow-[0_15px_35px_rgba(61,36,23,0.08)] transition-all duration-300"
                >
                  <div>
                    <span className="font-serif text-2xl text-[#B08D57] font-light">0{i + 1}</span>
                    <h4 className="font-serif text-xl text-[#3D2417] mt-2 mb-2 font-normal">
                      {h.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A3826] font-light leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                  <div className="w-8 h-[1px] bg-[#B08D57] mt-6" />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
