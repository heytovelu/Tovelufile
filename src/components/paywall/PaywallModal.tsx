import React, { useState } from 'react';
import { HomeostasisLogo } from '../ui/HomeostasisLogo';

export type PricingTierId = 'starter_30' | 'master_90' | 'annual_365' | 'lifetime_vip';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: (tier: PricingTierId, dateChoice?: string) => void;
  userEmail?: string;
  affiliateCode?: string;
  darkMode?: boolean;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  onPaymentSuccess,
  userEmail = 'ajay@tovelu.store',
  affiliateCode = 'partner_creator',
  darkMode = false,
}) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [selectedTier, setSelectedTier] = useState<PricingTierId>('master_90');
  const [isProcessing, setIsProcessing] = useState(false);
  const [payToast, setPayToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const tiers = [
    {
      id: 'starter_30' as PricingTierId,
      name: '30-Day Starter Arc',
      duration: '30 Days Access',
      priceUSD: '$49',
      priceINR: '₹1,499',
      guarantee: '7-Day Money-Back Guarantee',
      badge: null,
      description: 'Acute 30-day reset to reverse gut bloating and stabilize glucose crashes.',
    },
    {
      id: 'master_90' as PricingTierId,
      name: '90-Day Master Arc',
      duration: '90 Days Full Arc',
      priceUSD: '$119',
      priceINR: '₹3,499',
      guarantee: '14-Day Money-Back Guarantee',
      badge: '⭐ MOST POPULAR • MASTER PROTOCOL',
      description: 'Complete biological transformation. Deep visceral fat reversal and cellular homeostasis.',
      isHero: true,
    },
    {
      id: 'annual_365' as PricingTierId,
      name: '365-Day Serious Arc',
      duration: 'Full 1-Year Access',
      priceUSD: '$299',
      priceINR: '₹7,999',
      guarantee: '30-Day Money-Back Guarantee',
      badge: '👑 FOR THE SERIOUS • SAVE 60%',
      description: 'Permanent metabolic lifestyle mastery. Includes 4 quarterly clinical lab audit adaptations.',
    },
    {
      id: 'lifetime_vip' as PricingTierId,
      name: 'Lifetime Sovereign VIP',
      duration: 'Forever Unrestricted',
      priceUSD: '$799',
      priceINR: '₹19,999',
      guarantee: '30-Day Money-Back Guarantee',
      badge: '💎 PRESTIGE • 1-TIME PAYMENT',
      description: 'Lifetime access to all current and future clinical protocols, 3D body mirrors, and algorithms.',
    },
  ];

  const handleCheckout = () => {
    setIsProcessing(true);
    setPayToast('🔒 Connecting to Dodo Payments Secure Checkout...');

    // Simulate Dodo Payments checkout completion
    setTimeout(() => {
      setIsProcessing(false);
      setPayToast('✅ Payment authorized via Dodo Payments! Tax included. Proceeding to Day 1 Setup...');
      setTimeout(() => {
        onPaymentSuccess(selectedTier);
      }, 1200);
    }, 1000);
  };

  const cardCls = darkMode
    ? 'bg-[#0E1318] border-slate-800 text-slate-100'
    : 'bg-white border-slate-200 text-slate-900 shadow-2xl';
  const textTitle = darkMode ? 'text-slate-100' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl p-5 sm:p-7 border transition-all ${cardCls} space-y-5`}>
        {/* Header */}
        <div className={`flex items-center justify-between pb-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex items-center gap-2.5">
            <HomeostasisLogo size={32} mode={darkMode ? 'on-dark' : 'on-light'} showWordmark={true} />
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
          >
            ✕
          </button>
        </div>

        {/* Title */}
        <div className="text-center space-y-1.5">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-600 dark:text-[#00FF9D] font-bold">
            DODO PAYMENTS • 100% TAX INCLUDED
          </span>
          <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${textTitle}`}>
            Unlock Your Sovereign Health Protocol
          </h2>
          <p className={`text-xs ${textSub} max-w-md mx-auto leading-relaxed`}>
            Every tier grants <strong>100% full access to all features</strong>: food sequencing, all 14 organ systems, 500-disease registry, and verified certificates.
          </p>
        </div>

        {/* Toast */}
        {payToast && (
          <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500 text-center text-xs font-bold text-emerald-700 dark:text-[#00FF9D] animate-bounce">
            {payToast}
          </div>
        )}

        {/* Currency Switcher */}
        <div className="flex items-center justify-between px-1">
          <span className={`text-[11px] font-bold ${textSub}`}>
            Select Your Currency:
          </span>
          <div className={`flex items-center p-1 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-300'}`}>
            <button
              onClick={() => setCurrency('USD')}
              className={`py-1 px-3 rounded-lg text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                  : textSub
              }`}
            >
              🇺🇸 USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`py-1 px-3 rounded-lg text-xs font-bold transition-all ${
                currency === 'INR'
                  ? 'bg-[#00FF9D] text-slate-950 shadow-sm'
                  : textSub
              }`}
            >
              🇮🇳 INR (₹)
            </button>
          </div>
        </div>

        {/* 4 Official Tiers */}
        <div className="space-y-2.5">
          {tiers.map((t) => {
            const isSelected = selectedTier === t.id;
            const price = currency === 'USD' ? t.priceUSD : t.priceINR;

            return (
              <div
                key={t.id}
                onClick={() => setSelectedTier(t.id)}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all relative ${
                  isSelected
                    ? darkMode
                      ? 'border-[#00FF9D] bg-emerald-950/20 shadow-[0_0_25px_rgba(0,255,157,0.15)]'
                      : 'border-emerald-500 bg-emerald-50/50 shadow-md'
                    : darkMode
                    ? 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Optional Badge */}
                {t.badge && (
                  <div className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[#00FF9D] text-slate-950 shadow-sm">
                    {t.badge}
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-sm font-black tracking-tight ${textTitle}`}>
                        {t.name}
                      </h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {t.duration}
                      </span>
                    </div>
                    <p className={`text-[11px] ${textSub} leading-snug`}>
                      {t.description}
                    </p>
                    <div className="text-[10px] font-bold text-emerald-600 dark:text-[#00FF9D] pt-0.5">
                      ✓ {t.guarantee} • 100% Tax Included
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right shrink-0">
                    <div className={`text-lg sm:text-xl font-black ${textTitle}`}>
                      {price}
                    </div>
                    <span className={`text-[9px] uppercase font-mono font-bold block ${textSub}`}>
                      Tax Included
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Affiliate & Tax Guarantee Banner */}
        <div className={`p-3 rounded-2xl border text-xs flex items-center justify-between ${
          darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-base">🤝</span>
            <span>Account: <strong className="font-mono text-emerald-600 dark:text-[#00FF9D]">{userEmail}</strong> • Partner: @{affiliateCode} (40% locked)</span>
          </div>
          <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-[#00FF9D]">✓ 0% Extra Tax</span>
        </div>

        {/* 1-Tap Checkout Button */}
        <div className="pt-2 space-y-2">
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full py-4 px-4 rounded-2xl bg-[#00FF9D] hover:bg-[#00FF9D]/90 active:scale-98 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,157,0.35)] flex items-center justify-center gap-2"
          >
            <span>{isProcessing ? 'Securing via Dodo Payments...' : `Pay ${currency === 'USD' ? tiers.find(t => t.id === selectedTier)?.priceUSD : tiers.find(t => t.id === selectedTier)?.priceINR} (Tax Included) & Unlock Full Protocol →`}</span>
          </button>

          <div className="text-center text-[10px] text-slate-400 font-mono flex items-center justify-center gap-3 pt-1">
            <span>🔒 256-Bit SSL Encryption</span>
            <span>•</span>
            <span>Merchant of Record: Dodo Payments</span>
            <span>•</span>
            <span>Apple Pay / UPI / Cards</span>
          </div>
        </div>
      </div>
    </div>
  );
};
