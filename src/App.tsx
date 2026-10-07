import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { RoomShowcase } from './components/RoomShowcase';
import { Philosophy } from './components/Philosophy';
import { PilatesExperience } from './components/PilatesExperience';
import { HealthBenefitsSection } from './components/HealthBenefitsSection';
import { EditorialGallery } from './components/EditorialGallery';
import { CinematicMoment } from './components/CinematicMoment';
import { StudioScheduleSection } from './components/StudioScheduleSection';
import { Testimonials } from './components/Testimonials';
import { BrandStatement } from './components/BrandStatement';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingContact } from './components/FloatingContact';
import { GoogleLocationSection } from './components/GoogleLocationSection';
import { ConsultationSection } from './components/ConsultationSection';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialClass, setBookingInitialClass] = useState<string | undefined>(undefined);
  const [prefillCustomer, setPrefillCustomer] = useState<string>('');
  const [bookingInitialSlot, setBookingInitialSlot] = useState<
    { time: string; title: string; instructor: string; day: string } | undefined
  >(undefined);

  const handleScrollToConsultation = (_initialClass?: string) => {
    const el = document.getElementById('tu-van');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralBooking = (initialClass?: string) => {
    handleScrollToConsultation(initialClass);
  };

  const handleBookClassDiscipline = (_disciplineName: string) => {
    handleScrollToConsultation(_disciplineName);
  };

  const handleEnterStudioFromHero = () => {
    handleScrollToConsultation();
  };

  // Track scroll position to show/hide sticky CTA
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF6EE] text-[#3D2417] selection:bg-[#B08D57]/30 selection:text-[#3D2417]">
      {/* Luxury Custom Cursor */}
      <CustomCursor />

      {/* Floating Contact Widget */}
      <FloatingContact />

      {/* Navigation with Logo, Room & Schedule Access */}
      <Navbar onOpenBooking={handleScrollToConsultation} />

      {/* Main Experience Stream */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero onEnterStudio={handleEnterStudioFromHero} />

        {/* 2. Introduction: "A Space to Move" */}
        <Introduction />

        {/* 3. The Studio Sanctuary: Room Descriptions (Tạm ẩn) */}
        {/* <RoomShowcase onOpenBooking={() => handleOpenGeneralBooking('Reformer Flow')} /> */}

        {/* 4. Core Philosophy: Body / Breath / Balance */}
        <Philosophy />

        {/* 5. The Pilates Experience / Disciplines (Reformer, Barre, Cadillac) */}
        <PilatesExperience onBookClass={handleBookClassDiscipline} />

        {/* 6. Health & Therapy Values (5 Core Benefits & Posture Assessment) */}
        <HealthBenefitsSection onOpenBooking={handleOpenGeneralBooking} />

        {/* 7. Tư Vấn Hội Viên & Đào Tạo HLV: Member Info, Policies, Contact & Trainer Certification */}
        <ConsultationSection onOpenBooking={handleOpenGeneralBooking} />

        {/* 8. Editorial Masonry Movement Gallery (Tạm ẩn) */}
        {/* <EditorialGallery /> */}

        {/* 8. Cinematic Interlude Moment ("Strength can be quiet.") */}
        <CinematicMoment />

        {/* 9. Studio Schedule & Customer Lookup Portal (Phone / Gmail) */}
        <StudioScheduleSection
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* 10. Testimonials: "Words from the Studio" */}
        <Testimonials />

        {/* 11. Giant Typography Brand Statement: "MOVE" */}
        <BrandStatement />

        {/* 11. Final Booking Experience CTA */}
        <BookingCTA onOpenBooking={() => handleScrollToConsultation()} />

        {/* 12. Google Maps Location Section */}
        <GoogleLocationSection />
      </main>

      {/* Studio Sanctuary Footer */}
      <Footer />

      {/* Interactive Reservation Concierge Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialClass={bookingInitialClass}
        initialSlot={bookingInitialSlot}
        prefillCustomer={prefillCustomer}
      />

      {/* Sticky Bottom Mobile CTA Bar */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden bg-[#FAF6EE]/95 backdrop-blur-xl border-t border-[#C9A876]/30 px-4 py-3 flex items-center gap-3" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
          <a
            href="tel:0901234567"
            className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EDE0C8] border border-[#C9A876]/40 flex items-center justify-center hover:bg-[#3D2417] hover:text-[#FAF6EE] transition-colors duration-300"
            aria-label="Gọi điện đặt lịch"
          >
            <Phone size={20} className="text-[#3D2417]" />
          </a>
          <button
            onClick={() => handleScrollToConsultation()}
            className="flex-1 py-3.5 rounded-full bg-[#3D2417] text-[#FAF6EE] text-xs font-editorial tracking-[0.22em] uppercase text-center shadow-[0_4px_15px_rgba(61,36,23,0.15)] hover:bg-[#B08D57] transition-colors duration-300"
          >
            ĐẶT LỊCH TẬP NGAY
          </button>
        </div>
      )}
    </div>
  );
}
