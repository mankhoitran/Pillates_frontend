import React, { useState } from 'react';
import { BrandMonogram } from './BrandMonogram';
import { STUDIO_DETAILS } from '../data/studioData';
import { Check, Sparkles, MapPin, Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="relative w-full bg-[#EAE0CD] border-t border-[#C9A876]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] text-[#3D2417] overflow-hidden pt-20 pb-12">
      {/* Decorative Arch Watermark in Background */}
      <div className="absolute left-1/2 -top-40 -translate-x-1/2 w-[800px] h-[500px] border border-[#C9A876]/20 arch-top pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Top Newsletter & Studio Inscription Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF6EE] border border-[#C9A876]/40 shadow-[0_10px_35px_rgba(61,36,23,0.04)] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-[#B08D57] font-editorial text-[10px] tracking-[0.3em] uppercase font-semibold mb-2">
                <Sparkles size={12} />
                BẢN TIN ATELIER ĐẶC QUYỀN
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3D2417]">
                Nhận thư mời các chuyến retreat riêng tư và lớp masterclass chuyển động theo mùa.
              </h3>
            </div>

            <div className="lg:col-span-5">
              {isSubscribed ? (
                <div className="p-4 rounded-2xl bg-[#EDE0C8]/60 border border-[#B08D57] flex items-center gap-3 text-xs text-[#3D2417]">
                  <Check size={16} className="text-[#B08D57]" />
                  <span>Email của bạn đã được thêm vào danh sách khách quý của atelier.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Nhập địa chỉ email của bạn..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full bg-[#FAF6EE] border border-[#C9A876]/50 text-xs text-[#3D2417] focus:outline-none focus:border-[#B08D57]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-[10px] tracking-[0.22em] uppercase hover:bg-[#B08D57] transition-colors flex-shrink-0"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main 4-Column Editorial Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <BrandMonogram size="md" color="#3D2417" />
            <p className="text-xs text-[#5A3826] font-light leading-relaxed max-w-sm">
              Không gian Pilates và chăm sóc sức khỏe kiến trúc cao cấp, nơi tôn vinh sự chuẩn xác cơ học, làm chủ hơi thở
              và phong thái khoan thai đầy nội lực.
            </p>
            <div className="pt-2">
              <p className="font-serif italic text-sm text-[#B08D57]">
                "Đường nét mềm mại, cốt lõi vững vàng. Dòng chảy êm dịu, tỏa sáng từ bên trong."
              </p>
            </div>
          </div>

          {/* Col 2: Studio Sanctuary Location */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-editorial text-[10px] tracking-[0.28em] text-[#B08D57] uppercase font-semibold block">
              ĐỊA CHỈ SANCTUARY
            </span>
            <div className="space-y-2 text-xs text-[#5A3826]">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#B08D57] mt-0.5 flex-shrink-0" />
                <span>{STUDIO_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#B08D57] flex-shrink-0" />
                <a href={`mailto:${STUDIO_DETAILS.email}`} className="hover:text-[#3D2417] transition-colors">
                  {STUDIO_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#B08D57] flex-shrink-0" />
                <span>{STUDIO_DETAILS.phone}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <MessageCircle size={14} className="text-[#B08D57] flex-shrink-0" />
                <a href={siteConfig.contact.zalo} target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2417] transition-colors">
                  Zalo Official Account
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Atelier Hours */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-editorial text-[10px] tracking-[0.28em] text-[#B08D57] uppercase font-semibold block">
              GIỜ MỞ CỬA ATELIER
            </span>
            <div className="space-y-1.5 text-xs text-[#5A3826]">
              <div className="flex justify-between border-b border-[#C9A876]/20 pb-1">
                <span>Thứ Hai — Thứ Sáu</span>
                <span className="text-[#3D2417] font-medium">{STUDIO_DETAILS.hours.monFri}</span>
              </div>
              <div className="flex justify-between border-b border-[#C9A876]/20 pb-1">
                <span>Thứ Bảy</span>
                <span className="text-[#3D2417] font-medium">{STUDIO_DETAILS.hours.sat}</span>
              </div>
              <div className="flex justify-between">
                <span>Chủ Nhật</span>
                <span className="text-[#3D2417] font-medium">{STUDIO_DETAILS.hours.sun}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Links & Social */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-editorial text-[10px] tracking-[0.28em] text-[#B08D57] uppercase font-semibold block">
              ĐIỀU HƯỚNG
            </span>
            <ul className="space-y-1.5 text-xs text-[#5A3826]">
              <li>
                <a href="#practice" className="hover:text-[#B08D57] transition-colors">Triết Lý Luyện Tập</a>
              </li>
              {/* <li>
                <a href="#rooms" className="hover:text-[#B08D57] transition-colors">Không Gian Phòng Tập</a>
              </li> */}
              <li>
                <a href="#experience" className="hover:text-[#B08D57] transition-colors">Các Bộ Môn</a>
              </li>
              {/* <li>
                <a href="#gallery" className="hover:text-[#B08D57] transition-colors">Bộ Sưu Tập Kiến Trúc</a>
              </li> */}
              <li>
                <a href="#timetable" className="hover:text-[#B08D57] transition-colors">Lịch Tập & Tra Cứu</a>
              </li>
              <li className="pt-2">
                <a
                  href={`https://instagram.com/${STUDIO_DETAILS.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#B08D57] hover:text-[#3D2417] font-editorial text-[10px] tracking-wider"
                >
                  <Instagram size={13} />
                  <span>{STUDIO_DETAILS.social.instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#C9A876]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-editorial tracking-[0.22em] text-[#5A3826]/70 uppercase">
          <div>
            © {new Date().getFullYear()} HPILATES & WELLNESS. BẢO LƯU MỌI QUYỀN.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#3D2417] transition-colors">CHÍNH SÁCH BẢO MẬT</a>
            <a href="#" className="hover:text-[#3D2417] transition-colors">ĐIỀU KHOẢN LUYỆN TẬP</a>
            <a href="#" className="hover:text-[#3D2417] transition-colors">DỊCH VỤ KHÁCH HÀNG CONCIERGE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
