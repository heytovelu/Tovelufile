import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type LogoContrastMode = 'on-light' | 'on-dark' | 'on-colored' | 'monochrome-black' | 'monochrome-white';

export interface HomeostasisLogoProps {
  size?: number;
  mode?: LogoContrastMode;
  showWordmark?: boolean;
  className?: string;
}

export const HomeostasisLogo: React.FC<HomeostasisLogoProps> = ({
  size = 36,
  mode = 'on-light',
  showWordmark = false,
  className,
}) => {
  /**
   * UNIVERSAL COLOR & CONTRAST LAW (FOUNDER MANDATE)
   * Goal: Full icon and every arc must remain 100% sharp and visible in ALL situations.
   *
   * 1. ON DARK (#000000 to #1E293B):
   *    - Arc 1 & Core: Luminous Electric Mint/Cyan-Emerald (#2DD4BF -> #34D399) to POP against deep black.
   *    - Arc 2: Pure Solid Crisp White (#FFFFFF) with zero transparency.
   *
   * 2. ON LIGHT (#FFFFFF to #E2E8F0):
   *    - Arc 1 & Core: Deep Clinical Sea-Teal/Emerald (#0F766E -> #0D9488 -> #059669) for rich saturation on white.
   *    - Arc 2: Pure Solid Obsidian Black (#090D14) with zero transparency.
   *
   * 3. ON COLORED / VIBRANT BRAND SURFACES:
   *    - Arc 1 & Core: Pure Solid White (#FFFFFF).
   *    - Arc 2: Crisp Solid White (#FFFFFF, 80% opacity for arc separation).
   *
   * 4. MONOCHROME BLACK (1-color print, fax, thermal slips):
   *    - Arc 1 & Core: Pure Black (#090D14).
   *    - Arc 2: Pure Black (#090D14, 75% opacity for arc separation).
   */

  // Unique Gradient IDs based on mode to prevent DOM collisions
  const gradientId = mode === 'on-dark' ? 'tovelu-dark-gradient' : 'tovelu-light-gradient';

  const arc1Stroke = {
    'on-light': `url(#${gradientId})`,
    'on-dark': `url(#${gradientId})`,
    'on-colored': '#FFFFFF',
    'monochrome-white': '#FFFFFF',
    'monochrome-black': '#090D14',
  }[mode];

  const arc2Stroke = {
    'on-light': '#090D14',       // 100% Solid Obsidian Black
    'on-dark': '#FFFFFF',        // 100% Solid Crisp White
    'on-colored': '#FFFFFF',     // Crisp White on colored surfaces
    'monochrome-white': '#FFFFFF',
    'monochrome-black': '#090D14',
  }[mode];

  const arc2Opacity = mode === 'on-colored' || mode === 'monochrome-white' || mode === 'monochrome-black' ? 0.8 : 1.0;

  const coreFill = {
    'on-light': `url(#${gradientId})`,
    'on-dark': `url(#${gradientId})`,
    'on-colored': '#FFFFFF',
    'monochrome-white': '#FFFFFF',
    'monochrome-black': '#090D14',
  }[mode];

  const wordmarkColor = {
    'on-light': 'text-slate-900',
    'on-dark': 'text-white',
    'on-colored': 'text-white',
    'monochrome-white': 'text-white',
    'monochrome-black': 'text-black',
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
          {/* Light Background Gradient: Deep, saturated, clinical sea-teal for maximum punch on white */}
          <linearGradient id="tovelu-light-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="50%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* Dark Background Gradient: High-luminance, electric mint/cyan-emerald so it GLOWS against black */}
          <linearGradient id="tovelu-dark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="50%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>
        </defs>

        {/* Arc 1: The Living Science & Intelligence Arc */}
        <path
          d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71"
          stroke={arc1Stroke}
          strokeWidth="7.5"
          strokeLinecap="round"
        />

        {/* Arc 2: The Human Reality Arc (Deterministic Contrast Enforced) */}
        <path
          d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13"
          stroke={arc2Stroke}
          strokeWidth="7.5"
          strokeLinecap="round"
          opacity={arc2Opacity}
        />

        {/* The Living Core: Human Individual */}
        <circle cx="42" cy="42" r="5.5" fill={coreFill} />
      </svg>

      {/* ONLY LOGO + WORDMARK (NO TAGLINE PER FOUNDER MANDATE) */}
      {showWordmark && (
        <span
          className={clsx(
            "font-sans font-bold tracking-[0.22em] leading-none pl-1",
            size >= 40 ? "text-2xl" : size >= 32 ? "text-lg" : "text-base",
            wordmarkColor
          )}
        >
          TOVELU
        </span>
      )}
    </div>
  );
};
