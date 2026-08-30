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
      <div className={`w-full max-w-[448px] ${noPadding ? 'h-screen' : 'min-h-screen'} relative flex flex-col ${
        darkMode ? 'bg-[#080A0E] text-slate-100 border-x border-slate-800/60 shadow-[0_0_60px_rgba(0,0,0,0.8)]' : 'bg-white text-slate-900 border-x border-slate-200 shadow-2xl'
      }`}>
        {/* Sticky Header */}
        {header && (
          <div className="sticky top-0 z-40 w-full shrink-0">
            {header}
          </div>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 w-full flex flex-col ${noPadding ? 'h-[calc(100vh-68px)] overflow-hidden pb-0' : 'overflow-y-auto overflow-x-hidden pb-28'}`}>
          {children}
        </main>

        {/* Fixed / Sticky Bottom Navigation */}
        {bottomNav && (
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[448px] z-50 pointer-events-auto">
            {bottomNav}
          </div>
        )}
      </div>
    </div>
  );
};
