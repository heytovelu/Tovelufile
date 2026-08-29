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
  // CRITICAL FIX: Generate unique ID per instance so SVG gradients NEVER collide or get hidden by display:none
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, '');
  const gradientId = `tovelu-grad-${safeId}`;

  // Vibrant Green Color Palettes:
  // 1. Dark Mode: Ultra-luminous Bio-Green (#00F59B -> #10B981) with 74% luminance that GLOWS against black
  // 2. Light Mode: Rich Clinical Sea-Teal to Deep Emerald (#0D9488 -> #059669) for deep saturation on white
  const isDark = mode === 'on-dark';

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
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            {isDark ? (
              <>
                {/* Dark Mode: Hyper-Vivid Bio-Green (High Luminance Across Entire Arc) */}
                <stop offset="0%" stopColor="#00FF9D" />
                <stop offset="50%" stopColor="#00E599" />
                <stop offset="100%" stopColor="#10B981" />
              </>
            ) : (
              <>
                {/* Light Mode: Saturated Clinical Sea-Teal to Deep Emerald */}
                <stop offset="0%" stopColor="#0D9488" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </>
            )}
          </linearGradient>
        </defs>

        {/* Arc 1: The Living Science & Intelligence Arc (Green / Emerald) */}
        <path
          d="M 42 10 A 32 32 0 0 1 74 42 A 32 32 0 0 1 54 71"
          stroke={arc1Stroke}
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Arc 2: The Human Reality Arc (Crisp White on Dark / Solid Black on Light) */}
        <path
          d="M 42 74 A 32 32 0 0 1 10 42 A 32 32 0 0 1 30 13"
          stroke={arc2Stroke}
          strokeWidth="8"
          strokeLinecap="round"
          opacity={arc2Opacity}
        />

        {/* The Living Core: Human Individual */}
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
