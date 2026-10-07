import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calendar, Clock, User, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { BrandMonogram } from './BrandMonogram';
import { saveBooking } from '../utils/scheduleStorage';
import { CustomerBooking } from '../data/studioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClass?: string;
  initialSlot?: { time: string; title: string; instructor: string; day: string };
  prefillCustomer?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialClass,
  initialSlot,
  prefillCustomer = '',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    discipline: initialClass || initialSlot?.title || 'Reformer Flow — Dòng Chảy Thân Thể & Trị Liệu Cột Sống',
    day: initialSlot?.day || 'Thứ Hai',
    time: initialSlot?.time || '09:00 — 09:50',
    instructor: initialSlot?.instructor || 'HLV Nguyễn Thu Huyền',
    room: (initialSlot?.title?.includes('Cadillac') ? 'Phòng Cadillac Suite' : initialSlot?.title?.includes('Barre') || initialSlot?.title?.includes('Barrel') ? 'Không Gian Vòm Arch Sanctuary' : 'Không Gian Vòm Arch Sanctuary') as 'Không Gian Vòm Arch Sanctuary' | 'Phòng Cadillac Suite',
    fullName: '',
    email: prefillCustomer.includes('@') ? prefillCustomer : '',
    phone: !prefillCustomer.includes('@') ? prefillCustomer : '',
    experienceLevel: 'Người Mới Bắt Đầu / Lần Đầu',
    goals: '',
  });

  const [createdBooking, setCreatedBooking] = useState<CustomerBooking | null>(null);

  useEffect(() => {
    if (initialSlot) {
      setFormData((prev) => ({
        ...prev,
        discipline: initialSlot.title,
        day: initialSlot.day,
        time: initialSlot.time,
        instructor: initialSlot.instructor,
        room: initialSlot.title.includes('Cadillac') ? 'Phòng Cadillac Suite' : 'Không Gian Vòm Arch Sanctuary',
      }));
    } else if (initialClass) {
      setFormData((prev) => ({
        ...prev,
        discipline: initialClass,
      }));
    }
  }, [initialSlot, initialClass]);

  useEffect(() => {
    if (prefillCustomer) {
      if (prefillCustomer.includes('@')) {
        setFormData((prev) => ({ ...prev, email: prefillCustomer }));
      } else {
        setFormData((prev) => ({ ...prev, phone: prefillCustomer }));
      }
    }
  }, [prefillCustomer]);

  const disciplines = [
    'Reformer Flow — Dòng Chảy Thân Thể & Trị Liệu Cột Sống',
    'Cadillac & Trapeze Private — Khai Phóng Trọng Lực 1-1',
    'Barrel & Arc Artistry — Điêu Khắc Vòm Cột Sống & Vòng Eo',
    'Đo & Kiểm Tra Tư Thế Miễn Phí (Posture Assessment)',
    'Khóa Đào Tạo HLV Pilates Toàn Diện tại Bảo Lộc',
    'Pilates Cho Mẹ Bầu & Ổn Định Khung Chậu',
  ];

  const instructors = [
    'HLV Nguyễn Thu Huyền (HLV Trưởng & Chuyên Gia Đào Tạo)',
    'HLV Minh Thư (Chuyên Viên Căn Chỉnh Tư Thế & Cột Sống)',
    'HLV Hoàng Yến (HLV Chuyên Sâu Reformer Flow & Mẹ Bầu)',
    'HLV Quốc Bảo (Chuyên Gia Thể Lực & Sức Bền)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const instructorClean = formData.instructor.split('(')[0].trim();
    
    // Save directly to localStorage customer ledger
    const categoryVal: 'Reformer' | 'Barre & Thảm' | 'Cadillac Riêng' | 'Prenatal Mẹ Bầu' =
      formData.discipline.includes('Cadillac')
        ? 'Cadillac Riêng'
        : formData.discipline.includes('Mat') || formData.discipline.includes('Barre')
        ? 'Barre & Thảm'
        : formData.discipline.includes('Prenatal')
        ? 'Prenatal Mẹ Bầu'
        : 'Reformer';

    const saved = saveBooking({
      customerName: formData.fullName || 'Khách Quý Studio',
      customerEmail: formData.email || 'khach@hpilates.com',
      customerPhone: formData.phone || '0901234567',
      className: formData.discipline,
      category: categoryVal,
      day: formData.day,
      date: `Sắp diễn ra • ${formData.day}`,
      time: formData.time,
      instructor: instructorClean,
      room: formData.room === 'Phòng Cadillac Suite' ? 'Phòng Riêng Cadillac Suite' : 'Không Gian Vòm Arch Sanctuary',
      matNumber: Math.floor(Math.random() * 5) + 1,
      status: 'Đã Xác Nhận',
      notes: formData.goals || 'Căn chỉnh cột sống và rèn luyện hơi thở chánh niệm.',
    });

    setCreatedBooking(saved);
    setStep(3);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setCreatedBooking(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] bg-[#FAF6EE]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={handleResetAndClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl w-full bg-[#FAF6EE] border border-[#C9A876]/50 rounded-3xl p-8 sm:p-12 shadow-[0_30px_90px_rgba(61,36,23,0.15)] my-8"
        >
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-6 right-6 p-2.5 rounded-full border border-[#C9A876]/40 text-[#3D2417] hover:bg-[#EDE0C8] transition-colors"
            aria-label="Đóng cửa sổ đặt chỗ"
          >
            <X size={18} />
          </button>

          {/* Modal Header */}
          <div className="text-center mb-8">
            <BrandMonogram size="sm" showText={false} color="#B08D57" className="mb-2" />
            <span className="font-editorial text-[10px] tracking-[0.32em] text-[#B08D57] uppercase font-semibold">
              DỊCH VỤ ĐẶT CHỖ ĐẶC QUYỀN CONCIERGE
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#3D2417] mt-1 font-normal">
              {step === 3 ? 'Đặt Chỗ Thành Công' : 'Giữ Chỗ Thảm Của Bạn'}
            </h3>
            <p className="text-xs text-[#5A3826] font-light mt-1">
              {step === 3
                ? 'Vị trí riêng tư của bạn tại studio đã được bảo lưu và cập nhật vào lịch tập cá nhân.'
                : 'Trải nghiệm không gian rèn luyện thân thể ngập tràn ánh nắng và sự chăm sóc tận tâm.'}
            </p>
          </div>

          {/* Form */}
          {step !== 3 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Session Choice */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block font-editorial text-[10px] tracking-[0.25em] text-[#3D2417] uppercase font-semibold mb-2">
                      BỘ MÔN / LỚP HỌC
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/40 text-sm text-[#3D2417] focus:outline-none focus:border-[#B08D57]"
                    >
                      {disciplines.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-editorial text-[10px] tracking-[0.25em] text-[#3D2417] uppercase font-semibold mb-2">
                        NGÀY TẬP MONG MUỐN
                      </label>
                      <select
                        value={formData.day}
                        onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/40 text-sm text-[#3D2417] focus:outline-none focus:border-[#B08D57]"
                      >
                        {['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'].map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-editorial text-[10px] tracking-[0.25em] text-[#3D2417] uppercase font-semibold mb-2">
                        KHUNG GIỜ
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/40 text-sm text-[#3D2417] focus:outline-none focus:border-[#B08D57]"
                      >
                        <option value="07:00 — 07:50">Bình Minh (07:00 — 07:50)</option>
                        <option value="09:00 — 09:50">Buổi Sáng (09:00 — 09:50)</option>
                        <option value="11:30 — 12:20">Giữa Ngày (11:30 — 12:20)</option>
                        <option value="16:30 — 17:20">Chiều Muộn (16:30 — 17:20)</option>
                        <option value="18:00 — 18:50">Hoàng Hôn (18:00 — 18:50)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-editorial text-[10px] tracking-[0.25em] text-[#3D2417] uppercase font-semibold mb-2">
                      GIẢNG VIÊN HƯỚNG DẪN
                    </label>
                    <select
                      value={formData.instructor}
                      onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/40 text-sm text-[#3D2417] focus:outline-none focus:border-[#B08D57]"
                    >
                      {instructors.map((inst) => (
                        <option key={inst} value={inst}>
                          {inst}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-4 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-xs tracking-[0.24em] uppercase flex items-center justify-center gap-2 hover:bg-[#B08D57] transition-all duration-300 shadow-md"
                  >
                    <span>TIẾP TỤC ĐIỀN THÔNG TIN HỌC VIÊN</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}

              {/* Step 2: Guest Details (Phone / Gmail) */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-editorial text-[10px] tracking-[0.25em] text-[#3D2417] uppercase font-semibold mb-1.5">
                      HỌ VÀ TÊN *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="VD: Nguyễn Mai Lan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/40 text-sm text-[#3D2417] focus:outline-none focus:border-[#B08D57]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-editorial text-[10px] tracking-[0.25em] text-[#3D2417] uppercase font-semibold mb-1.5">
                        ĐỊA CHỈ GMAIL / EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="spiderpool122@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/40 text-sm text-[#3D2417] focus:outline-none focus:border-[#B08D57]"
                      />
                    </div>

                    <div>
                      <label className="block font-editorial text-[10px] tracking-[0.25em] text-[#3D2417] uppercase font-semibold mb-1.5">
                        SỐ ĐIỆN THOẠI *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0901234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/40 text-sm text-[#3D2417] focus:outline-none focus:border-[#B08D57]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-editorial text-[10px] tracking-[0.25em] text-[#3D2417] uppercase font-semibold mb-1.5">
                      KINH NGHIỆM PILATES & MỤC TIÊU CƠ THỂ
                    </label>
                    <textarea
                      rows={2}
                      placeholder="VD: Cải thiện tư thế lưng gù, kéo dài cột sống, phục hồi sau sinh..."
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/40 text-sm text-[#3D2417] focus:outline-none focus:border-[#B08D57]"
                    />
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3.5 rounded-full border border-[#C9A876]/50 font-editorial text-xs tracking-[0.2em] text-[#5A3826] hover:bg-[#EDE0C8]"
                    >
                      QUAY LẠI
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-xs tracking-[0.24em] uppercase hover:bg-[#B08D57] transition-all duration-300 shadow-md"
                    >
                      XÁC NHẬN GIỮ CHỖ THẢM →
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* Step 3: Success Confirmation Pass */
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EDE0C8] border-2 border-[#B08D57] flex items-center justify-center mx-auto text-[#3D2417]">
                <CheckCircle2 size={32} className="text-[#B08D57]" />
              </div>

              <div className="p-6 rounded-2xl bg-[#EDE0C8]/40 border border-[#C9A876]/40 space-y-3 text-left">
                <div className="flex justify-between items-center pb-3 border-b border-[#C9A876]/30">
                  <span className="font-editorial text-[10px] tracking-widest text-[#B08D57] uppercase font-semibold">
                    MÃ ĐẶT CHỖ XÁC NHẬN
                  </span>
                  <span className="font-mono text-sm font-bold text-[#3D2417] bg-[#FAF6EE] px-3 py-1 rounded border border-[#C9A876]/40">
                    {createdBooking?.bookingCode}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-[#5A3826]">
                  <div>
                    <span className="font-editorial text-[9px] tracking-widest text-[#B08D57] uppercase block font-semibold">
                      HỌC VIÊN
                    </span>
                    <span className="font-medium text-[#3D2417]">{createdBooking?.customerName}</span>
                  </div>
                  <div>
                    <span className="font-editorial text-[9px] tracking-widest text-[#B08D57] uppercase block font-semibold">
                      LỚP & VỊ TRÍ THẢM
                    </span>
                    <span className="font-medium text-[#3D2417]">
                      {createdBooking?.className} (Thảm #{createdBooking?.matNumber})
                    </span>
                  </div>
                  <div>
                    <span className="font-editorial text-[9px] tracking-widest text-[#B08D57] uppercase block font-semibold">
                      LỊCH TẬP
                    </span>
                    <span className="font-medium text-[#3D2417]">
                      {createdBooking?.day}, {createdBooking?.time}
                    </span>
                  </div>
                  <div>
                    <span className="font-editorial text-[9px] tracking-widest text-[#B08D57] uppercase block font-semibold">
                      PHÒNG & GIẢNG VIÊN
                    </span>
                    <span className="font-medium text-[#3D2417]">
                      {createdBooking?.room} • {createdBooking?.instructor}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#5A3826] font-light leading-relaxed">
                Buổi tập của bạn đã được lưu trữ. Bạn có thể tra cứu lịch tập này bất kỳ lúc nào bằng cách nhập{' '}
                <strong>{formData.phone || formData.email}</strong> vào thanh tra cứu lịch tập của studio.
              </p>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3.5 rounded-full bg-[#3D2417] text-[#FAF6EE] font-editorial text-xs tracking-[0.24em] uppercase hover:bg-[#B08D57] transition-colors"
              >
                XEM TRONG THỜI KHÓA BIỂU STUDIO
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
