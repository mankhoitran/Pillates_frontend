import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface Pillar {
  number: string;
  title: string;
  latin: string;
  subtitle: string;
  description: string;
  quote: string;
  image: string;
  aspect: string;
  archClass: string;
}

export const Philosophy: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const pillars: Pillar[] = [
    {
      number: '01',
      title: 'THÂN THỂ',
      latin: 'Corpus Kineticum',
      subtitle: 'Căn Chỉnh Hình Thể & Sức Mạnh Cốt Lõi',
      description:
        'Mọi chuyển động đều khởi sinh từ vùng trung tâm sâu thẳm. Qua lực kháng mượt mà từ hệ thống lò xo, chúng tôi rèn luyện các nhóm cơ thon dài, bền bỉ, mang lại cho bạn phong thái đĩnh đạc và sự giải tỏa áp lực tự nhiên cho cột sống.',
      quote: '"Cơ thể săn chắc tự nhiên mà không cần tập nặng hay kiệt sức."',
      image: '/flip_2.jpg',
      aspect: 'aspect-[4/5]',
      archClass: 'arch-top',
    },
    {
      number: '02',
      title: 'HƠI THỞ',
      latin: 'Spiritus Vitalis',
      subtitle: 'Nhịp Điệu Dưỡng Khí & Sự Thả Lỏng',
      description:
        'Hơi thở cơ hoành lan tỏa nguồn dưỡng khí thuần khiết đến từng tế bào, xoa dịu hệ thần kinh và hòa quyện cùng từng động tác. Hít vào mở rộng không gian lồng ngực; thở ra kích hoạt sự ổn định sâu của vùng cơ trung tâm.',
      quote: '"Sự kết hợp giữa hơi thở sâu và chuyển động chậm giúp tâm trí nhẹ bẫng."',
      image: '/breath.jpg',
      aspect: 'aspect-[3/4]',
      archClass: 'arch-asymmetric-left',
    },
    {
      number: '03',
      title: 'CÂN BẰNG',
      latin: 'Aequilibrium Mentis',
      subtitle: 'Cân Bằng Động & Tĩnh Lặng Nội Tâm',
      description:
        'Cân bằng không phải là sự bất động cứng nhắc; đó là nghệ thuật thích ứng linh hoạt và êm đềm trong từng chuyển động. Trải nghiệm trên mặt phẳng trượt của Reformer đánh thức sự nhạy bén và dẻo dai nguyên bản trong bạn.',
      quote: '"Tìm đến sự cân bằng trong cơ thể, đặt tâm trí vào sức mạnh của cơ bắp."',
      image: '/background1.jpg',
      aspect: 'aspect-[4/5]',
      archClass: 'arch-asymmetric-right',
    },
  ];

  return (
    <section id="practice" className="relative w-full py-28 sm:py-36 bg-[#FAF6EE] overflow-hidden border-t border-[#C9A876]/35">
      {/* Decorative Editorial Background Motif */}
      <div className="absolute top-20 right-10 pointer-events-none opacity-5 font-serif text-[180px] leading-none text-[#3D2417] select-none hidden lg:block">
        PHILOSOPHIA
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
                03 / TRIẾT LÝ CỐT LÕI
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#3D2417] leading-[1.05] font-normal">
              Thân Thể. Hơi Thở. <br />
              <span className="italic font-light text-[#3D2417]">Cân Bằng.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#5A3826] font-light leading-relaxed">
            Ba trụ cột nền tảng định hướng từng hơi thở, từng bước điều chỉnh lò xo và từng chuyển động kéo dài cột sống
            trong không gian sanctuary của chúng tôi.
          </p>
        </div>

        {/* Asymmetric Editorial Compositions — CSS Grid intentionally asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className={`relative flex flex-col justify-between group ${idx === 1 ? 'lg:translate-y-16' : idx === 2 ? 'lg:translate-y-8' : ''
                }`}
            >
              {/* Pillar Number & Latin Provenance */}
              <div className="flex items-baseline justify-between border-b border-[#C9A876]/30 pb-4 mb-6">
                <span className="font-serif text-4xl sm:text-5xl text-[#B08D57] font-light tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                  {pillar.number}
                </span>
                <span className="font-editorial text-[9px] tracking-[0.28em] text-[#5A3826]/70 uppercase">
                  {pillar.latin}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h3 className="font-serif text-3xl sm:text-4xl text-[#3D2417] font-normal tracking-wide transition-colors duration-300 group-hover:text-[#B08D57]">
                  {pillar.title}
                </h3>
                <p className="font-editorial text-[11px] tracking-[0.2em] text-[#5A3826] mt-1 uppercase font-medium">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Portrait Image with Architectural Mask */}
              <div
                className={`relative w-full ${pillar.aspect} ${pillar.archClass} overflow-hidden mb-6 border border-[#C9A876]/35 shadow-[0_15px_35px_rgba(61,36,23,0.05)] bg-[#EDE0C8]`}
                data-cursor="view"
                data-cursor-label={pillar.title}
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover filter brightness-[1.02] contrast-[0.98] transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Light sand gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE]/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />

                {/* Animated Gold Shimmer Border on Hover */}
                <div className="absolute inset-0 border border-[#B08D57]/0 group-hover:border-[#B08D57]/60 transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Description Body Copy */}
              <p className="text-sm text-[#5A3826] font-light leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Poetic Quote Box */}
              <div className="pt-4 border-t border-[#C9A876]/20">
                <p className="font-serif italic text-xs sm:text-sm text-[#3D2417]">
                  {pillar.quote}
                </p>
              </div>

              {/* Bottom Thin Traveling Gold Line Indicator */}
              <div className="w-full h-[1px] bg-[#EDE0C8] mt-6 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-[#B08D57] transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
