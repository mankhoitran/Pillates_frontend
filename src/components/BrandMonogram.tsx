import React, { useState } from 'react';
import { STUDIO_DETAILS } from '../data/studioData';

interface BrandMonogramProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'nav' | 'navScrolled';
  showText?: boolean;
  color?: string;
  textColor?: string;
  imageClassName?: string;
}

export const BrandMonogram: React.FC<BrandMonogramProps> = ({
  className = '',
  size = 'md',
  showText = true,
  color = '#3D2417',
  textColor = '#3D2417',
  imageClassName = '',
}) => {
  const [imgError, setImgError] = useState(false);

  const getScale = () => {
    switch (size) {
      case 'sm':
        return { h: 36, w: 36, textClass: 'text-[9px] tracking-[0.28em]', iconSize: 28 };
      case 'navScrolled':
        return { h: 44, w: 44, textClass: 'text-[10px] tracking-[0.28em]', iconSize: 34 };
      case 'md':
        return { h: 48, w: 48, textClass: 'text-[11px] tracking-[0.3em]', iconSize: 38 };
      case 'nav':
        return { h: 58, w: 58, textClass: 'text-[12px] tracking-[0.3em]', iconSize: 46 };
      case 'lg':
        return { h: 72, w: 72, textClass: 'text-[13px] tracking-[0.32em]', iconSize: 58 };
      case 'xl':
        return { h: 96, w: 96, textClass: 'text-[16px] tracking-[0.35em]', iconSize: 80 };
      case 'hero':
        return { h: 120, w: 120, textClass: 'text-[18px] tracking-[0.4em]', iconSize: 100 };
      default:
        return { h: 48, w: 48, textClass: 'text-[11px] tracking-[0.3em]', iconSize: 38 };
    }
  };

  const config = getScale();

  return (
    <div className={`inline-flex flex-col items-center select-none group ${className}`}>
      {/* Brand Logo Container with logo.jpg */}
      <div
        className="relative flex items-center justify-center rounded-2xl overflow-hidden border border-[#C9A876]/40 bg-[#FAF6EE] p-1 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:border-[#B08D57]"
        style={{ width: config.w, height: config.h }}
      >
        {!imgError ? (
          <img
            src={STUDIO_DETAILS.logoPath}
            alt="HPilates & Wellness Logo"
            className={`w-full h-full object-contain rounded-xl ${imageClassName}`}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          /* High-end SVG Fallback */
          <svg
            width={config.iconSize}
            height={config.iconSize}
            viewBox="0 0 120 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 18 C34 25, 25 35, 18 39 C24 37, 34 32, 40 28 C45 36, 42 70, 36 108 C34 118, 30 128, 22 134 C30 132, 48 132, 54 135 C52 130, 48 116, 50 100 C53 78, 54 50, 52 24 C50 18, 44 14, 38 18 Z"
              fill={color}
            />
            <path
              d="M43 74 C50 62, 64 54, 76 60 C88 66, 94 82, 90 98 C86 112, 74 122, 64 124 C57 125, 52 120, 53 113 C54 105, 62 101, 70 101 C78 101, 84 106, 83 112 C88 106, 94 92, 91 80 C88 68, 78 63, 67 67 C56 71, 48 83, 46 95 L43 74 Z"
              fill={color}
            />
            <path
              d="M83 112 C92 110, 102 96, 108 86 C105 92, 96 118, 80 124 C73 126, 68 122, 70 115 C72 108, 80 110, 83 112 Z"
              fill={color}
            />
          </svg>
        )}
      </div>

      {showText && (
        <div
          className={`font-editorial font-medium uppercase mt-1.5 transition-colors duration-300 text-center whitespace-nowrap ${config.textClass}`}
          style={{ color: textColor }}
        >
          PILATES <span className="font-serif italic font-normal text-[#B08D57] px-0.5">&</span> WELLNESS
        </div>
      )}
    </div>
  );
};
