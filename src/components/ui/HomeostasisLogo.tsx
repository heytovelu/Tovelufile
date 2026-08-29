import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type LogoContrastMode = 'on-light' | 'on-dark' | 'monochrome-white' | 'monochrome-black';

export interface HomeostasisLogoProps {
  size?: number;
  mode?: LogoContrastMode;
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
}

export const HomeostasisLogo: React.FC<HomeostasisLogoProps> = ({
  size = 36,
  mode = 'on-light',
  showWordmark = false,
  showTagline = false,
  className,
}) => {
  // Strict Contrast Color Matrix (The Founder Law)
  // Light Surface -> Arc 2 is PURE SOLID BLACK (#090D14)
  // Dark Surface  -> Arc 2 is PURE SOLID WHITE (#FFFFFF)
  // Brand Surface -> Monochrome White
  // 1-Color Print -> Monochrome Black

  const arc1Color = {
    'on-light': 'url(#tovelu-brand-gradient)',
    'on-dark': 'url(#tovelu-brand-gradient)',
    'monochrome-white': '#FFFFFF',
    'monochrome-black': '#090D14',
  }[mode];

  const arc2Color = {
    'on-light': '#090D14',      // Pure solid obsidian black on light surfaces
    'on-dark': '#FFFFFF',       // Pure solid white on dark surfaces
    'monochrome-white': '#FFFFFF',
    'monochrome-black': '#090D14',
  }[mode];

  const coreColor = {
    'on-light': 'url(#tovelu-brand-gradient)',
    'on-dark': 'url(#tovelu-brand-gradient)',
    'monochrome-white': '#FFFFFF',
    'monochrome-black': '#090D14',
  }[mode];

  const wordmarkTextColor = {
    'on-light': 'text-slate-900',
    'on-dark': 'text-white',
    'monochrome-white': 'text-white',
    'monochrome-black': 'text-black',
  }[mode];

  const taglineTextColor = {
    'on-light': 'text-slate-500',
    'on-dark': 'text-slate-400',
    'monochrome-white': 'text-white/80',
    'monochrome-black': 'text-black/70',
  }[mode];

  return (
    <div className={twMerge(clsx("inline-flex items-center gap-3 select-none", className))}>
      {/* The Sovereign Homeostasis Ring Vector */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 84 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="tovelu-brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Arc 1: The Living Science & Intelligence Arc */}
        <path
          d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71"
          stroke={arc1Color}
          strokeWidth="7.5"
          strokeLinecap="round"
        />

        {/* Arc 2: The Human Reality Arc (Deterministic Contrast Enforced) */}
        <path
          d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13"
          stroke={arc2Color}
          strokeWidth="7.5"
          strokeLinecap="round"
          opacity={mode === 'monochrome-white' || mode === 'monochrome-black' ? 0.7 : 0.95}
        />

        {/* The Living Core: Human Individual */}
        <circle cx="42" cy="42" r="5.5" fill={coreColor} />
      </svg>

      {/* Optional Wordmark & Tagline Lockup */}
      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={clsx(
              "font-sans font-bold tracking-[0.2em] leading-none",
              size >= 40 ? "text-xl" : "text-base",
              wordmarkTextColor
            )}
          >
            TOVELU
          </span>
          {showTagline && (
            <span
              className={clsx(
                "text-[9px] font-mono tracking-[0.25em] uppercase mt-1",
                taglineTextColor
              )}
            >
              Towards Better Health
            </span>
          )}
        </div>
      )}
    </div>
  );
};
