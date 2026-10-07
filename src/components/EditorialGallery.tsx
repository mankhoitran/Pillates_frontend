import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem } from '../data/studioData';
import { X, ZoomIn, Eye, ArrowUpRight } from 'lucide-react';

export const EditorialGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Tất Cả');

  const categories = ['Tất Cả', 'Kiến Trúc', 'Chuyển Động', 'Cân Bằng', 'Không Gian'];

  const filteredItems =
    activeCategory === 'Tất Cả'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative w-full py-28 sm:py-36 bg-[#FAF6EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
                04 / BỘ SƯU TẬP CHUYỂN ĐỘNG
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#3D2417] leading-[1.05]">
              Hình Khối & <br />
              <span className="italic font-light text-[#3D2417]">Kiến Trúc</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-editorial text-[10px] tracking-[0.22em] uppercase transition-all duration-300 ${activeCategory === cat
                    ? 'bg-[#3D2417] text-[#FAF6EE]'
                    : 'bg-[#EDE0C8]/40 text-[#5A3826] hover:bg-[#EDE0C8] hover:text-[#3D2417]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          {filteredItems.map((item, idx) => {
            // Asymmetric column distribution
            const colSpanClass =
              idx === 0
                ? 'md:col-span-7 aspect-[4/5] arch-top'
                : idx === 1
                  ? 'md:col-span-5 aspect-[3/4] arch-asymmetric-left md:translate-y-12'
                  : idx === 2
                    ? 'md:col-span-12 aspect-[16/9] rounded-2xl my-4'
                    : idx === 3
                      ? 'md:col-span-4 aspect-[3/4] arch-asymmetric-right'
                      : idx === 4
                        ? 'md:col-span-4 aspect-[4/5] arch-top md:-translate-y-8'
                        : 'md:col-span-4 aspect-square rounded-2xl md:translate-y-6';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
                onClick={() => setSelectedItem(item)}
                className={`group relative overflow-hidden bg-[#EDE0C8] border border-[#C9A876]/30 shadow-[0_15px_40px_rgba(61,36,23,0.05)] cursor-pointer ${colSpanClass}`}
                data-cursor="view"
                data-cursor-label="XEM"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover filter brightness-[1.02] contrast-[0.98] transition-transform duration-1000 ease-out group-hover:scale-108 ${item.imageClassName || ''}`}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle light sand gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2417]/80 via-[#3D2417]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8" />

                {/* Hover Caption Details */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-[#FAF6EE] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-editorial text-[9px] tracking-[0.28em] text-[#EDE0C8] uppercase">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#FAF6EE] mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#FAF6EE]/80 font-light mt-1 max-w-md line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[10px] font-editorial tracking-[0.24em] text-[#EDE0C8] uppercase">
                    <span>CHI TIẾT KIẾN TRÚC</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>

                {/* Animated Gold Perimeter Highlight on Hover */}
                <div className="absolute inset-0 border border-[#B08D57]/0 group-hover:border-[#B08D57] transition-colors duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-[#FAF6EE]/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#FAF6EE] border border-[#C9A876]/40 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(61,36,23,0.15)] flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-[#FAF6EE]/80 border border-[#C9A876]/40 text-[#3D2417] hover:bg-[#3D2417] hover:text-[#FAF6EE] transition-colors"
                aria-label="Đóng xem ảnh"
              >
                <X size={18} />
              </button>

              {/* Large Image View */}
              <div className="lg:w-2/3 max-h-[70vh] lg:max-h-[80vh] overflow-hidden bg-[#EDE0C8]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Metadata Panel */}
              <div className="lg:w-1/3 p-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-editorial text-[10px] tracking-[0.32em] text-[#B08D57] uppercase font-semibold">
                    {selectedItem.category} — LƯU TRỮ
                  </span>
                  <h3 className="font-serif text-3xl text-[#3D2417] mt-1 font-normal">
                    {selectedItem.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-[#B08D57] my-4" />
                  <p className="text-sm text-[#5A3826] font-light leading-relaxed">
                    {selectedItem.caption}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#C9A876]/20">
                  <p className="font-editorial text-[9px] tracking-[0.25em] text-[#5A3826]/70 uppercase">
                    HPILATES & WELLNESS SANCTUARY
                  </p>
                  <p className="font-serif italic text-sm text-[#3D2417] mt-1">
                    "Đường nét mềm mại, cốt lõi vững vàng."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
