import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'image' | 'button' | 'explore' | 'book' | 'view'>('default');
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth physics spring for outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor]') as HTMLElement | null;
      const button = target.closest('button, a, input, select, textarea') as HTMLElement | null;
      const img = target.closest('img, [data-cursor-image]') as HTMLElement | null;

      if (interactive) {
        const type = interactive.getAttribute('data-cursor') as any;
        const label = interactive.getAttribute('data-cursor-label') || '';
        setCursorType(type || 'explore');
        setCursorLabel(label || (type === 'view' ? 'XEM' : type === 'book' ? 'ĐẶT CHỖ' : 'KHÁM PHÁ'));
      } else if (button) {
        setCursorType('button');
        setCursorLabel('');
      } else if (img) {
        setCursorType('image');
        setCursorLabel('XEM');
      } else {
        setCursorType('default');
        setCursorLabel('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorType === 'image' || cursorType === 'view' || cursorType === 'book' || cursorType === 'explore';
  const isButton = cursorType === 'button';

  return (
    <>
      {/* Outer Fluid Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <motion.div
          animate={{
            width: isExpanded ? 72 : isButton ? 44 : 28,
            height: isExpanded ? 72 : isButton ? 44 : 28,
            borderColor: isExpanded ? '#B08D57' : isButton ? '#B08D57' : '#3D2417',
            backgroundColor: isExpanded ? 'rgba(250, 246, 238, 0.92)' : isButton ? 'rgba(176, 141, 87, 0.12)' : 'transparent',
            scale: isExpanded ? 1 : isButton ? 1.15 : 1,
          }}
          transition={{ type: 'spring', damping: 24, stiffness: 300 }}
          className="rounded-full border border-opacity-70 backdrop-blur-[1px] flex items-center justify-center shadow-[0_2px_12px_rgba(61,36,23,0.06)]"
        >
          {cursorLabel && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="text-[10px] font-editorial tracking-[0.22em] text-[#3D2417] font-semibold select-none text-center"
            >
              {cursorLabel}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Center Precise Pinpoint */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        <motion.div
          animate={{
            scale: isExpanded ? 0 : isButton ? 0 : 1,
            opacity: isExpanded ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-1.5 h-1.5 rounded-full bg-[#B08D57]"
        />
      </motion.div>
    </>
  );
};
