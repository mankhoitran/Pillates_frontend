import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const GoogleLocationSection: React.FC = () => {
  // Use a generic embed URL based on the address, as maps.app.goo.gl shortlinks cannot be embedded directly in an iframe.
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    siteConfig.business.name + ' Bảo Lộc'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F3EBE0] overflow-hidden border-y border-[#C9A876]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.8)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B08D57]" />
            <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
              VỊ TRÍ STUDIO
            </span>
            <span className="w-8 h-[1px] bg-[#B08D57]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#3D2417] leading-snug">
            Tọa Lạc Tại Trung Tâm Bảo Lộc
          </h2>
          <p className="mt-4 text-sm text-[#5A3826] font-light max-w-2xl mx-auto">
            Ghé thăm HPILATES & Wellness để trải nghiệm không gian luyện tập và chữa lành đẳng cấp nhất khu vực.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[400px] sm:h-[520px] rounded-3xl overflow-hidden border border-[#C9A876]/40 shadow-[0_20px_50px_rgba(61,36,23,0.08)] group">
          {/* Decorative Overlay Frame */}
          <div className="absolute inset-0 pointer-events-none border-[12px] border-[#FAF6EE]/20 rounded-3xl z-20" />

          {/* Clickable Overlay to open Google Maps without trapping scroll gestures */}
          <a
            href={siteConfig.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 block cursor-pointer"
            aria-label="Mở Google Maps HPILATES & Wellness"
          />

          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-0 grayscale-[0.2] contrast-110 sepia-[0.15] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 w-full h-full pointer-events-none"
            title="Google Maps Location"
          />
        </div>
      </div>
    </section>
  );
};

