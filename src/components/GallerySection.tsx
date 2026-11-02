import React, { useState } from 'react';
import { SlidersHorizontal, Columns, ShieldCheck, Wrench, Check, ZoomIn } from 'lucide-react';
import { CASE_STUDIES, SITE_INFO } from '../data/siteData';

export const GallerySection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState(CASE_STUDIES[0].id);
  const [viewMode, setViewMode] = useState<'two-cut' | 'slider'>('two-cut');
  const [sliderPos, setSliderPos] = useState(50);
  const [activePreviewImg, setActivePreviewImg] = useState<{ src: string; caption: string } | null>(null);

  const activeCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
              BEFORE & AFTER GALLERY
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              실제 현장 시공 갤러리
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {SITE_INFO.brandName} 대표가 위례신도시 현장에서 직접 시공하고 촬영한 100% 실제 사진입니다.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setViewMode('two-cut')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'two-cut'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>2컷 비교</span>
            </button>
            <button
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'slider'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>슬라이더 비교</span>
            </button>
          </div>
        </div>

        {/* Case Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {CASE_STUDIES.map((c, idx) => {
            const isSelected = c.id === activeCase.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCaseId(c.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-white border-sky-600 shadow-md ring-1 ring-sky-500'
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
                  <span>Case 0{idx + 1}</span>
                  <span className="text-sky-600">{c.category}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {c.complex}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Case Content Box */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-5 sm:p-8">
          {/* Case Title & Context */}
          <div className="mb-6 pb-6 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2 text-xs text-sky-700 font-semibold mb-2">
              <span className="bg-sky-50 px-2 py-0.5 rounded">{activeCase.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-700 font-medium">{activeCase.complex}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              {activeCase.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
              <div className="bg-rose-50/70 p-3.5 rounded-xl border border-rose-100">
                <span className="font-bold text-rose-800 block mb-1">발생 증상 (시공 전)</span>
                <p>{activeCase.problem}</p>
              </div>
              <div className="bg-sky-50/70 p-3.5 rounded-xl border border-sky-100">
                <span className="font-bold text-sky-800 block mb-1">정석 솔루션 (시공 후)</span>
                <p>{activeCase.solution}</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase: Either Two-Cut or Interactive Slider */}
          {viewMode === 'two-cut' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* BEFORE CARD with Full-view Real Photo */}
              <div className="border border-rose-200 bg-rose-50/20 rounded-xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded bg-rose-600 text-white font-extrabold text-xs tracking-wider">
                      BEFORE · 시공 전
                    </span>
                    <span className="text-xs font-semibold text-rose-700">심각한 막힘/누수</span>
                  </div>

                  {/* Real Photo: uncropped full view container with zoom */}
                  <div className="relative group rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center aspect-[4/3] sm:aspect-square md:aspect-[4/3]">
                    <img
                      src={activeCase.beforeImage}
                      alt={`${activeCase.title} 시공 전`}
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => setActivePreviewImg({ src: activeCase.beforeImage, caption: `${activeCase.title} (시공 전)` })}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-2.5 text-white pointer-events-none">
                      <p className="text-xs font-semibold text-rose-200">{activeCase.beforeLabel}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActivePreviewImg({ src: activeCase.beforeImage, caption: `${activeCase.title} (시공 전)` })}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 text-white hover:bg-black transition-colors"
                      aria-label="사진 확대"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  <ul className="space-y-2">
                    {activeCase.beforeDetails.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-rose-950">
                        <span className="text-rose-500 font-bold shrink-0">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* AFTER CARD with Full-view Real Photo */}
              <div className="border border-emerald-200 bg-emerald-50/20 rounded-xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded bg-emerald-600 text-white font-extrabold text-xs tracking-wider">
                      AFTER · 시공 후
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">100% 완전 복원</span>
                  </div>

                  {/* Real Photo: uncropped full view container with zoom */}
                  <div className="relative group rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center aspect-[4/3] sm:aspect-square md:aspect-[4/3]">
                    <img
                      src={activeCase.afterImage}
                      alt={`${activeCase.title} 시공 후`}
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => setActivePreviewImg({ src: activeCase.afterImage, caption: `${activeCase.title} (시공 후)` })}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-2.5 text-white pointer-events-none">
                      <p className="text-xs font-semibold text-emerald-300">{activeCase.afterLabel}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActivePreviewImg({ src: activeCase.afterImage, caption: `${activeCase.title} (시공 후)` })}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 text-white hover:bg-black transition-colors"
                      aria-label="사진 확대"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  <ul className="space-y-2">
                    {activeCase.afterDetails.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-emerald-950">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Slider Mode with Real Images without cutoffs */
            <div className="mb-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] max-h-[520px] bg-slate-950 rounded-xl overflow-hidden select-none border border-slate-700 flex items-center justify-center">
                {/* Before Image (Left Background) */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
                  <img
                    src={activeCase.beforeImage}
                    alt="시공 전 실제 현장 사진"
                    className="w-full h-full object-contain p-1"
                  />
                  <div className="absolute top-3 left-3 bg-rose-600/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                    BEFORE (시공 전)
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded max-w-xs">
                    {activeCase.beforeLabel}
                  </div>
                </div>

                {/* After Image (Right Foreground, clipped by sliderPos) */}
                <div
                  className="absolute inset-0 overflow-hidden flex items-center justify-center bg-slate-950"
                  style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                >
                  <img
                    src={activeCase.afterImage}
                    alt="시공 후 실제 현장 사진"
                    className="w-full h-full object-contain p-1"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                    AFTER (시공 후)
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded max-w-xs text-right">
                    {activeCase.afterLabel}
                  </div>
                </div>

                {/* Slider Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] cursor-ew-resize z-20 flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center text-xs font-bold border border-slate-300">
                    ↔
                  </div>
                </div>

                {/* Native range input overlay for intuitive touch and mouse drag */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
                  aria-label="시공 전후 비교 슬라이더"
                />
              </div>
              <p className="text-center text-xs text-slate-500 mt-2">
                중앙의 조절바를 터치/드래그하여 시공 전과 후의 실제 상태를 직접 비교해 보세요.
              </p>
            </div>
          )}

          {/* Tools & Equipment Strip */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-sky-600" />
              <span className="font-semibold text-slate-800">현장 투입 장비 및 자재:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeCase.tools.map((t, i) => (
                  <span key={i} className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-sky-700 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>미해결 시 출장비 0원 전액 면제</span>
            </div>
          </div>
        </div>

      </div>

      {/* Image Modal Lightbox */}
      {activePreviewImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePreviewImg(null)}
        >
          <div
            className="max-w-3xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePreviewImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black"
              aria-label="닫기"
            >
              ✕
            </button>
            <img
              src={activePreviewImg.src}
              alt={activePreviewImg.caption}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="p-4 bg-slate-900 text-white text-xs sm:text-sm font-medium text-center">
              {activePreviewImg.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
