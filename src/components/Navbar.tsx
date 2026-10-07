import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandMonogram } from './BrandMonogram';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (initialClass?: string) => void;
  onOpenScheduleLookup?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    // { name: 'KHÔNG GIAN', href: '#rooms' },
    { name: 'TRIẾT LÝ', href: '#practice' },
    { name: 'BỘ MÔN', href: '#experience' },
    { name: 'TƯ VẤN', href: '#tu-van' },
    // { name: 'BỘ SƯU TẬP', href: '#gallery' },
    { name: 'LỊCH TẬP', href: '#timetable' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Setup intersection observer for scroll spy
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Also observe hero to reset active section if at top
    const heroElement = document.getElementById('hero');
    if (heroElement) observer.observe(heroElement);

    const introElement = document.getElementById('introduction');
    if (introElement) observer.observe(introElement);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-[var(--color-ivory)]/85 backdrop-blur-xl py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-[var(--color-tan)]/15'
            : 'bg-gradient-to-b from-[var(--color-ivory)]/95 via-[var(--color-ivory)]/70 to-transparent py-3.5 sm:py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none relative"
            aria-label="HPILATES & Wellness Trang Chủ"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <BrandMonogram
              size={isScrolled ? 'navScrolled' : 'nav'}
              showText={false}
              color="var(--color-coffee)"
              imageClassName="scale-[1.22] transition-transform duration-500 group-hover:scale-[1.28]"
            />
            <div className="flex flex-col whitespace-nowrap overflow-hidden">
              <motion.span
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                className={`font-serif tracking-[0.08em] font-semibold text-[var(--color-coffee)] leading-none whitespace-nowrap group-hover:text-[var(--color-gold)] transition-all duration-500 ${isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-[1.32rem]'
                  }`}
              >
                HPILATES
              </motion.span>
              <motion.span
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                className={`font-editorial tracking-[0.32em] text-[var(--color-gold)] uppercase font-medium whitespace-nowrap group-hover:text-[var(--color-coffee)] transition-all duration-500 ${isScrolled ? 'text-[9px] sm:text-[10px] mt-0.5' : 'text-[10px] sm:text-[11px] mt-1'
                  }`}
              >
                & Wellness
              </motion.span>
            </div>
          </a>

          {/* Desktop Editorial Navigation Links - The Art of Movement Style */}
          <nav className="hidden lg:flex items-center p-1.5 rounded-full bg-[var(--color-sand)]/20 backdrop-blur-md border border-[var(--color-tan)]/20 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-5 py-2 font-editorial text-[10px] tracking-[0.24em] transition-all duration-500 z-10 rounded-full flex items-center justify-center ${isActive ? 'text-[var(--color-ivory)]' : 'text-[var(--color-espresso)] hover:text-[var(--color-coffee)]'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[var(--color-espresso)] to-[var(--color-coffee)] rounded-full -z-10 shadow-md"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Check Schedule Button */}
            <a
              href="#timetable"
              onClick={(e) => handleNavClick(e, '#timetable')}
              className="px-4 py-2.5 rounded-full border border-[var(--color-tan)]/30 bg-[var(--color-ivory)]/50 hover:bg-[var(--color-sand)]/80 text-[var(--color-coffee)] text-[10px] font-editorial tracking-[0.22em] uppercase transition-all duration-300 flex items-center gap-1.5 hover:shadow-sm"
            >
              <Calendar size={12} className="text-[var(--color-gold)]" />
              <span>LỊCH CỦA TÔI</span>
            </a>

            {/* Reserve Session Button */}
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-[var(--color-gold)] bg-[var(--color-coffee)] text-[var(--color-ivory)] text-[10px] font-editorial tracking-[0.24em] transition-all duration-500 hover:shadow-[0_4px_20px_rgba(176,141,87,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
                GIỮ CHỖ THẢM
                <motion.div
                  animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowUpRight size={12} className="text-[var(--color-sand)]" />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-tan)] transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-full text-[var(--color-coffee)] hover:bg-[var(--color-sand)]/50 focus:outline-none transition-colors"
              aria-label="Mở menu điều hướng"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[var(--color-ivory)]/95 backdrop-blur-xl flex flex-col justify-between p-8"
          >
            {/* Header in Overlay */}
            <div className="flex items-center justify-between">
              <BrandMonogram size="sm" showText={false} />
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full border border-[var(--color-tan)]/40 text-[var(--color-coffee)] hover:bg-[var(--color-sand)] bg-white/50"
                aria-label="Đóng menu điều hướng"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Navigation List - Flowing Animation */}
            <div className="flex flex-col space-y-6 my-auto items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="h-[1px] bg-[var(--color-gold)] mb-4"
              />
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.5, ease: "easeOut" }}
                    className={`font-serif text-3xl transition-all duration-300 relative group flex items-center gap-4 ${isActive ? 'text-[var(--color-gold)] italic' : 'text-[var(--color-coffee)] hover:text-[var(--color-gold)]'
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="mobileActive"
                        className="w-2 h-2 rounded-full bg-[var(--color-gold)] absolute -left-6"
                      />
                    )}
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-500 ease-out group-hover:w-full" />
                  </motion.a>
                );
              })}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-sand)] to-transparent my-6" />
              <motion.button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="w-full max-w-sm py-4 rounded-full bg-gradient-to-r from-[var(--color-coffee)] to-[var(--color-espresso)] text-[var(--color-ivory)] font-editorial text-xs tracking-[0.24em] uppercase text-center shadow-xl shadow-[var(--color-coffee)]/10"
              >
                ĐẶT CHỖ BUỔI TẬP CỦA BẠN →
              </motion.button>
            </div>

            {/* Footer Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center font-editorial text-[10px] tracking-[0.2em] text-[var(--color-espresso)]/70 flex flex-col items-center gap-2"
            >
              <span>HPILATES & WELLNESS</span>
              <span className="text-[var(--color-gold)]">NGHỆ THUẬT CỦA SỰ CHUYỂN ĐỘNG</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
