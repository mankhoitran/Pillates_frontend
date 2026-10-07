import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomerBooking } from '../data/studioData';
import {
  findBookingsByCustomer,
  cancelBooking,
} from '../utils/scheduleStorage';
import {
  Clock,
  Search,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

interface StudioScheduleSectionProps {
  onOpenBooking: (initialClass?: string) => void;
}

export const StudioScheduleSection: React.FC<StudioScheduleSectionProps> = ({ onOpenBooking }) => {
  // Customer Personal Schedule Lookup States (Phone / Gmail)
  const [customerLookupInput, setCustomerLookupInput] = useState<string>('');
  const [lookupBookings, setLookupBookings] = useState<CustomerBooking[]>([]);
  const [hasSearchedLookup, setHasSearchedLookup] = useState<boolean>(false);
  const [searchedQueryText, setSearchedQueryText] = useState<string>('');
  const [cancelSuccessMsg, setCancelSuccessMsg] = useState<string | null>(null);

  // Handle Customer Phone/Gmail Search
  const handleCustomerLookup = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!customerLookupInput.trim()) return;

    const results = findBookingsByCustomer(customerLookupInput);
    setLookupBookings(results);
    setSearchedQueryText(customerLookupInput.trim());
    setHasSearchedLookup(true);
    setCancelSuccessMsg(null);
  };

  const handleCancelBooking = (bookingId: string) => {
    const success = cancelBooking(bookingId);
    if (success && searchedQueryText) {
      setCancelSuccessMsg('Đã hủy lịch tập thành công. Vị trí thảm đã được giải phóng.');
      // Refresh lookup
      const results = findBookingsByCustomer(searchedQueryText);
      setLookupBookings(results);
      setTimeout(() => setCancelSuccessMsg(null), 4000);
    }
  };

  return (
    <section id="timetable" className="relative w-full py-28 sm:py-36 bg-[#F3EBE0] overflow-hidden border-y border-[#C9A876]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.8)]">
      {/* Background Arch Overlay Contour */}
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[850px] h-[550px] border border-[#C9A876]/20 arch-top pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="font-editorial text-[10px] sm:text-[11px] tracking-[0.35em] text-[#B08D57] uppercase font-semibold">
                05 / THỜI KHÓA BIỂU & TRA CỨU LỊCH TẬP
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#3D2417] leading-[1.05]">
              Lịch Tập <br />
              <span className="italic font-light text-[#3D2417]">Studio Atelier</span>
            </h2>
          </div>

          {/* Quick Schedule Manifesto */}
          <div className="max-w-md text-xs sm:text-sm text-[#5A3826] font-light leading-relaxed">
            <p>
              Mỗi khung giờ chỉ dành riêng cho tối đa 5 học viên nhằm đảm bảo tính chuẩn xác giải phẫu học và sự chăm sóc
              tận tâm. Bạn có thể tra cứu lịch tập cá nhân bằng Số Điện Thoại hoặc Gmail bên dưới.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CUSTOMER PERSONAL SCHEDULE LOOKUP CARD (Phone / Gmail) */}
        {/* ============================================================ */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-[#FAF6EE] border border-[#C9A876]/45 shadow-[0_15px_40px_rgba(61,36,23,0.06)] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-48 h-48 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,118,0.25),transparent_70%)] pointer-events-none" />

          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-[#B08D57]">
              <Sparkles size={16} />
              <span className="font-editorial text-[10px] tracking-[0.3em] uppercase font-semibold">
                TRA CỨU LỊCH TẬP CỦA BẠN (SỐ ĐIỆN THOẠI HOẶC GMAIL)
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#3D2417]">
              Kiểm tra hoặc điều chỉnh lịch tập đã đặt của bạn
            </h3>

            <p className="text-xs sm:text-sm text-[#5A3826] font-light">
              Nhập Số Điện Thoại hoặc Địa Chỉ Gmail bạn đã sử dụng khi đăng ký giữ chỗ thảm để xem danh sách các buổi tập sắp tới.
            </p>

            {/* Input Form */}
            <form onSubmit={handleCustomerLookup} className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#B08D57]">
                  <Search size={16} />
                </div>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại hoặc Gmail (VD: 0901234567 hoặc spiderpool122@gmail.com)..."
                  value={customerLookupInput}
                  onChange={(e) => setCustomerLookupInput(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#FAF6EE] border border-[#C9A876]/60 text-xs sm:text-sm text-[#3D2417] placeholder:text-[#5A3826]/50 focus:outline-none focus:border-[#B08D57] transition-all shadow-inner"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-xs tracking-[0.22em] uppercase hover:bg-[#B08D57] transition-all duration-300 shadow-md flex items-center justify-center gap-2 flex-shrink-0"
              >
                <Search size={14} />
                <span>TRA CỨU LỊCH TẬP</span>
              </button>
            </form>

            {/* Success message on cancellation */}
            {cancelSuccessMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-[#EDE0C8]/60 border border-[#B08D57] text-xs text-[#3D2417] flex items-center gap-2"
              >
                <CheckCircle2 size={16} className="text-[#B08D57] flex-shrink-0" />
                <span>{cancelSuccessMsg}</span>
              </motion.div>
            )}

            {/* Lookup Results Display */}
            <AnimatePresence>
              {hasSearchedLookup && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="pt-6 border-t border-[#C9A876]/30 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-xs tracking-wider text-[#3D2417] font-semibold">
                      KẾT QUẢ TRA CỨU: {searchedQueryText} ({lookupBookings.length} buổi tập)
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCustomerLookup()}
                      className="text-[10px] font-editorial tracking-wider text-[#B08D57] hover:underline flex items-center gap-1"
                    >
                      <RefreshCw size={11} />
                      LÀM MỚI
                    </button>
                  </div>

                  {lookupBookings.length === 0 ? (
                    <div className="p-6 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/30 text-center space-y-2">
                      <AlertCircle size={24} className="text-[#B08D57] mx-auto" />
                      <p className="font-serif text-base text-[#3D2417]">
                        Không tìm thấy lịch tập cho "{searchedQueryText}"
                      </p>
                      <p className="text-xs text-[#5A3826]">
                        Bạn chưa đặt buổi tập nào với thông tin này hoặc buổi tập đã hoàn thành. Hãy chọn một khung giờ bên dưới để giữ chỗ thảm.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {lookupBookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#C9A876]/40 shadow-sm flex flex-col justify-between space-y-3 relative group"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="px-2.5 py-1 rounded-full bg-[#EDE0C8] text-[#3D2417] font-editorial text-[9px] tracking-wider uppercase font-semibold">
                                {booking.day} • {booking.time}
                              </span>
                              <h4 className="font-serif text-lg text-[#3D2417] mt-2">
                                {booking.className}
                              </h4>
                              <p className="text-xs text-[#5A3826]">
                                Giảng viên: <span className="text-[#3D2417] font-medium">{booking.instructor}</span>
                              </p>
                            </div>

                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-medium">
                              {booking.status}
                            </span>
                          </div>

                          <div className="pt-3 border-t border-[#C9A876]/20 text-[11px] text-[#5A3826] space-y-1">
                            <div className="flex justify-between">
                              <span>Phòng tập:</span>
                              <span className="text-[#3D2417] font-medium">{booking.room}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Học viên:</span>
                              <span className="text-[#3D2417] font-medium">{booking.customerName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Mã đặt chỗ:</span>
                              <span className="font-mono text-[#3D2417] font-semibold">{booking.bookingCode}</span>
                            </div>
                          </div>

                          <div className="pt-2 flex justify-end">
                            <button
                              onClick={() => handleCancelBooking(booking.id)}
                              className="text-[10px] font-editorial tracking-wider text-rose-700 hover:text-rose-900 uppercase font-semibold hover:underline"
                            >
                              HỦY ĐẶT CHỖ NÀY
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>


      </div>
    </section>
  );
};
