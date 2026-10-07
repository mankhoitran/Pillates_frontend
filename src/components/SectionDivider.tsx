import React from 'react';

interface SectionDividerProps {
  variant?: 'light' | 'sand' | 'dark';
  withCrest?: boolean;
  label?: string;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'light',
  withCrest = true,
  label,
  className = '',
}) => {
  const lineGradient =
    variant === 'dark'
      ? 'from-transparent via-[#C9A876]/40 to-transparent'
      : 'from-transparent via-[#B08D57]/50 to-transparent';

  const badgeBg =
    variant === 'sand'
      ? 'bg-[#F3EBE0]'
      : variant === 'dark'
      ? 'bg-[#23150C]'
      : 'bg-[#FAF6EE]';

  const textColor = variant === 'dark' ? 'text-[#C9A876]' : 'text-[#8C6B3E]';

  return (
    <div className={`relative w-full flex items-center justify-center py-0 ${className}`}>
      {/* High-definition Gradient Separator Line */}
      <div className={`w-full h-[1px] bg-gradient-to-r ${lineGradient}`} />

      {/* Decorative Center Crest / Label Marker */}
      {(withCrest || label) && (
        <div
          className={`absolute px-4 sm:px-6 ${badgeBg} flex items-center gap-2.5 ${textColor} transition-colors duration-300`}
        >
          <span className="w-1.5 h-1.5 rotate-45 border border-[#B08D57] bg-[#B08D57]/20" />
          {label ? (
            <span className="font-editorial text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-semibold">
              {label}
            </span>
          ) : (
            <span className="font-serif text-[11px] text-[#B08D57] tracking-widest select-none">
              ✦
            </span>
          )}
          <span className="w-1.5 h-1.5 rotate-45 border border-[#B08D57] bg-[#B08D57]/20" />
        </div>
      )}
    </div>
  );
};
