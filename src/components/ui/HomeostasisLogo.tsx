import React, { useId } from 'react';
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
   * FOUNDER'S UNIVERSAL COLOR & CONTRAST LAW (AJAY RULE):
   * 
   * 1. GREEN PART IS ALWAYS VISIBLE AT ALL CONDITIONS.
   *    - In Dark Theme: Ultra-luminous Bio-Green (#00FF9D -> #00E599) with 74% luminance that GLOWS against black.
   *    - In Light Theme: Deep Clinical Emerald (#0D9488 -> #059669) for rich, saturated contrast on white.
   * 
   * 2. SECOND PART IS ALWAYS THE EXACT OPPOSITE COLOR OF THE BACKGROUND:
   *    - In Black or Dark BG -> Second part MUST be PURE SOLID WHITE (#FFFFFF).
   *    - In White or Light BG -> Second part MUST be PURE SOLID BLACK (#000000).
   * 
   * 3. RESULT: BOTH COLORS STAND OUT VIVIDLY IN EVERY SITUATION.
   */

  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, '');
  const gradientId = `tovelu-grad-${safeId}`;

  const isDark = mode === 'on-dark';

  // Part 1: Green Part (Always 100% visible)
  const arc1Stroke = {
    'on-light': `url(#${gradientId})`,
    'on-dark': `url(#${gradientId})`,
    'on-colored': '#FFFFFF',
    'monochrome-white': '#FFFFFF',
    'monochrome-black': '#000000',
  }[mode];

  // Part 2: Always the opposite color of the background
  const arc2Stroke = {
    'on-light': '#000000',       // In White/Light BG -> PURE SOLID BLACK
    'on-dark': '#FFFFFF',        // In Black/Dark BG  -> PURE SOLID WHITE
    'on-colored': '#FFFFFF',     // On Colored BG     -> PURE SOLID WHITE
    'monochrome-white': '#FFFFFF',
    'monochrome-black': '#000000',
  }[mode];

  const coreFill = {
    'on-light': `url(#${gradientId})`,
    'on-dark': `url(#${gradientId})`,
    'on-colored': '#FFFFFF',
    'monochrome-white': '#FFFFFF',
    'monochrome-black': '#000000',
  }[mode];

  const wordmarkColor = {
    'on-light': 'text-black',
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
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            {isDark ? (
              <>
                {/* Dark Mode: Ultra-Luminous Bio-Green (#00FF9D -> #00E599) - Pops 100% on black */}
                <stop offset="0%" stopColor="#00FF9D" />
                <stop offset="50%" stopColor="#00E599" />
                <stop offset="100%" stopColor="#10B981" />
              </>
            ) : (
              <>
                {/* Light Mode: Saturated Clinical Emerald (#0D9488 -> #059669) - Punches 100% on white */}
                <stop offset="0%" stopColor="#0D9488" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </>
            )}
          </linearGradient>
        </defs>

        {/* Part 1: Green Living Arc (Always Visible in All Conditions) */}
        <path
          d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71"
          stroke={arc1Stroke}
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Part 2: Dynamic Arc (Strictly Opposite of Background: White on Dark, Black on Light) */}
        <path
          d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13"
          stroke={arc2Stroke}
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* The Living Core: Human Individual (Always Visible Green) */}
        <circle cx="42" cy="42" r="5.5" fill={coreFill} />
      </svg>

      {/* FULL LOGO: ICON + WORDMARK ONLY (NO TAGLINE) */}
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
