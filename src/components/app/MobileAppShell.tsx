import React from 'react';

interface MobileAppShellProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  bottomNav?: React.ReactNode;
  darkMode?: boolean;
  noPadding?: boolean;
}

/**
 * MobileAppShell
 * Constrains the view on desktop to an authentic luxury mobile viewport (max-w-[448px])
 * while expanding to 100% on mobile devices with native safe-area insets.
 */
export const MobileAppShell: React.FC<MobileAppShellProps> = ({
  children,
  header,
  bottomNav,
  darkMode = true,
  noPadding = false,
}) => {
  return (
    <div className={`min-h-screen w-full flex justify-center items-start ${darkMode ? 'bg-[#050709]' : 'bg-slate-100'} transition-colors font-sans selection:bg-[#00FF9D]/30 selection:text-[#00FF9D]`}>
      {/* Centered Mobile Device Frame on Desktop */}
      <div className={`w-full max-w-[448px] h-[calc(100dvh-49px)] max-h-[100dvh] relative flex flex-col ${
        darkMode ? 'bg-[#080A0E] text-slate-100 border-x border-slate-800/60 shadow-[0_0_60px_rgba(0,0,0,0.8)]' : 'bg-white text-slate-900 border-x border-slate-200 shadow-2xl'
      }`}>
        {/* Sticky Header if provided */}
        {header && (
          <div className="sticky top-0 z-40 w-full shrink-0">
            {header}
          </div>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 w-full min-h-0 flex flex-col ${noPadding ? 'overflow-hidden' : 'overflow-y-auto overflow-x-hidden'}`}>
          {children}
        </main>

        {/* Bottom Navigation */}
        {bottomNav && (
          <div className="w-full shrink-0 z-50 bg-[#080A0E]">
            {bottomNav}
          </div>
        )}
      </div>
    </div>
  );
};
