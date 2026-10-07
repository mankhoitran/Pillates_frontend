import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-[88px] sm:bottom-6 right-4 sm:right-6 z-[95] flex flex-col gap-2.5 sm:gap-3">
      {/* Gmail Button */}
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#FAF6EE] text-[#3D2417] flex items-center justify-center shadow-[0_8px_30px_rgba(61,36,23,0.15)] border border-[#C9A876]/40 hover:bg-[#EDE0C8] hover:scale-110 transition-all duration-300 group relative"
        aria-label="Liên hệ qua Email"
      >
        <Mail size={18} className="sm:!w-[22px] sm:!h-[22px] group-hover:text-[#B08D57] transition-colors" />
        
        {/* Tooltip - hidden on mobile */}
        <div className="hidden sm:block absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#3D2417] text-[#FAF6EE] text-[10px] font-editorial tracking-wider whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Gửi Email Tư Vấn
        </div>
      </a>

      {/* Zalo Button */}
      <a
        href={`${siteConfig.contact.zalo}?text=${encodeURIComponent('Chào HPILATES, mình muốn tìm hiểu về lịch tập Pilates ạ!')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,104,255,0.3)] hover:bg-[#0055D4] hover:scale-110 transition-all duration-300 group relative"
        aria-label="Liên hệ qua Zalo"
      >
        <MessageCircle size={20} className="sm:!w-[24px] sm:!h-[24px]" />
        
        {/* Tooltip - hidden on mobile */}
        <div className="hidden sm:block absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#0068FF] text-white text-[10px] font-editorial tracking-wider whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat qua Zalo
        </div>
      </a>
    </div>
  );
};
