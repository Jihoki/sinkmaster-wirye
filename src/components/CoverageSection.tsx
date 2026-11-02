import React, { useState } from 'react';
import { MapPin, Search, Phone } from 'lucide-react';
import { WIRYE_COMPLEXES, SITE_INFO } from '../data/siteData';

interface CoverageSectionProps {
  initialSearch?: string;
}

export const CoverageSection: React.FC<CoverageSectionProps> = ({ initialSearch = '' }) => {
  const [districtFilter, setDistrictFilter] = useState<'all' | '위례송파' | '위례성남' | '위례하남'>('all');
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const filteredComplexes = WIRYE_COMPLEXES.filter((c) => {
    const matchesDistrict = districtFilter === 'all' || c.district === districtFilter;
    const matchesSearch = searchQuery === '' || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.subArea.includes(searchQuery);
    return matchesDistrict && matchesSearch;
  });

  return (
    <section id="coverage" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
            COVERAGE AREA & WIRYE COMPLEXES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            위례신도시 전 지역 (송파·성남·하남) · 40여 개 아파트 단지 책임 시공
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            송파 더센트레, 송파 꿈에그린, 위례자이, 위례 센트럴자이, 힐스테이트 위례, 자연앤래미안, 위례 롯데캐슬, 플로리체 위례 등 위례 전 아파트 단지별 주방 횡주관 구조를 완벽히 파악해 맞춤형 관통과 정석 시공을 제공합니다.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/90 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Segmented Filter */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
            <button
              onClick={() => setDistrictFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                districtFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              전체 단지 ({WIRYE_COMPLEXES.length})
            </button>
            <button
              onClick={() => setDistrictFilter('위례송파')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                districtFilter === '위례송파'
                  ? 'bg-sky-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              위례 송파권 (더센트레·꿈에그린 등)
            </button>
            <button
              onClick={() => setDistrictFilter('위례성남')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                districtFilter === '위례성남'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              위례 성남권 (자이·래미안·힐스 등)
            </button>
            <button
              onClick={() => setDistrictFilter('위례하남')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                districtFilter === '위례하남'
                  ? 'bg-amber-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              위례 하남권 (롯데캐슬·플로리체 등)
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="위례 아파트명 검색 (예: 더센트레, 자이, 롯데캐슬, 푸르지오)"
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Complexes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredComplexes.map((c) => (
            <div
              key={c.id}
              className="bg-white border border-slate-200/90 rounded-xl p-5 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                    c.district === '위례송파' ? 'bg-sky-50 text-sky-700 border border-sky-100' :
                    c.district === '위례성남' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                    'bg-amber-50 text-amber-700 border border-amber-100'
                  }`}>
                    {c.subArea}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    20~30분 출동
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {c.name}
                </h3>

                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  <strong className="text-slate-700 font-medium">배관 특성: </strong>
                  {c.pipeFeature}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] text-sky-700 font-medium truncate">
                    {c.recommendedService}
                  </span>
                  <a
                    href={SITE_INFO.phoneTel}
                    className="shrink-0 text-xs font-bold text-slate-900 hover:text-sky-600 flex items-center gap-1"
                  >
                    <span>출동 문의</span>
                    <Phone className="w-3 h-3 text-sky-500" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Quote Box */}
        <div className="mt-6 p-6 rounded-2xl bg-slate-900 text-white text-center max-w-3xl mx-auto shadow-md">
          <p className="text-sm sm:text-base font-semibold leading-relaxed">
            “무리하게 먼 타 지역까지 외주를 주거나 일정을 미루지 않고,<br />
            오직 위례신도시(송파·성남·하남) 권역만을 대표가 직접 책임 시공합니다.”
          </p>
          <p className="text-xs text-sky-300 mt-2 font-medium">
            싱크마스터 대표 직통 010-5024-8204 · 미해결 시 출장비·점검비 일체 0원
          </p>
        </div>

      </div>
    </section>
  );
};
