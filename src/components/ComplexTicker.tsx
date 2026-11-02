import React from 'react';
import { Building2, MapPin } from 'lucide-react';
import { WIRYE_COMPLEXES } from '../data/siteData';

interface ComplexTickerProps {
  onSelectComplex?: (name: string) => void;
}

export const ComplexTicker: React.FC<ComplexTickerProps> = ({ onSelectComplex }) => {
  return (
    <div className="bg-slate-900 text-white py-6 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-sky-400" />
            <h2 className="text-sm font-bold tracking-tight text-white">
              주요 다빈도 출동 아파트 단지
            </h2>
          </div>
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            송파 더센트레 · 위례자이 · 힐스테이트 위례 · 롯데캐슬 등 위례 40여 단지 20~30분 출동
          </p>
        </div>

        {/* Clean responsive badge strip */}
        <div className="flex flex-wrap gap-2 pt-1">
          {WIRYE_COMPLEXES.map((complex) => (
            <button
              key={complex.id}
              onClick={() => onSelectComplex && onSelectComplex(complex.name)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium border border-slate-700/80 transition-colors flex items-center gap-1.5"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                complex.district === '위례송파' ? 'bg-sky-400' :
                complex.district === '위례성남' ? 'bg-emerald-400' : 'bg-amber-400'
              }`} />
              <span>{complex.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
