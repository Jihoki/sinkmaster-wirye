import React from 'react';
import { Phone } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto">
        <a
          href={SITE_INFO.phoneTel}
          className="w-full flex items-center justify-center gap-2 bg-slate-900 active:bg-slate-800 text-white font-bold text-[15px] py-3.5 px-4 rounded-xl shadow-md transition-transform active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 text-sky-400 shrink-0" />
          <span>24시간 긴급 전화 연결 ({SITE_INFO.phone})</span>
        </a>
      </div>
    </div>
  );
};
