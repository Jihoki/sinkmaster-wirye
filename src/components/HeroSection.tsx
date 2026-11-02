import React, { useState } from 'react';
import { Phone, ChevronRight, ShieldCheck, Clock, CheckCircle2, AlertTriangle, Sparkles, MessageSquare, ZoomIn, X } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const HeroSection: React.FC = () => {
  const [modalImg, setModalImg] = useState<{ src: string; title: string; desc: string } | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200 pt-8 pb-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Clean kicker text */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200/80 rounded-full px-3.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
              <span>하청 없는 100% 대표 직접 시공 · 못 뚫으면 0원</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] text-balance">
              위례 싱크대 막힘·역류,<br />
              <span className="text-sky-600">대표가 직접</span> 갑니다.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              송파 더센트레 · 위례자이 · 힐스테이트 위례 · 자연앤래미안 · 위례 롯데캐슬 · 플로리체 위례 등 위례신도시(송파·성남·하남) 40여 개 전 아파트 단지별 배관 구조를 완벽히 파악한 대표가 직접 방문하여 기름 슬러지 막힘과 역류를 근본적으로 해결합니다.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={SITE_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all group"
              >
                <Phone className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform" />
                <span>24시 긴급 출동 전화하기</span>
              </a>

              <a
                href={`sms:${SITE_INFO.phone}?body=${encodeURIComponent('[싱크마스터 위례 문의] 아파트 단지명 및 증상:')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-sm border border-sky-200 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-sky-600" />
                <span>문자 견적 문의</span>
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors"
              >
                <span>실제 시공 사진 보기</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Guarantee subtext */}
            <div className="pt-2 text-xs sm:text-sm text-slate-500 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1">
              <span className="font-semibold text-slate-800">대표 직통 {SITE_INFO.phone}</span>
              <span aria-hidden="true">·</span>
              <span className="text-sky-700 font-medium">미해결 시 출장비·내시경 점검비 일체 0원</span>
            </div>
          </div>

          {/* Right Column: High-Trust Visual Service Card with actual camera photo */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-5 sm:p-7">
              {/* Header badge strip */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">{SITE_INFO.brandName} 출동 본부</h2>
                    <p className="text-xs text-slate-500">24시간 위례 실시간 배관 복구 시스템</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                    상시대기
                  </span>
                </div>
              </div>

              {/* Real In-pipe camera view: FULL VISIBILITY on PC and Mobile without cutoffs */}
              <div className="my-4 rounded-xl bg-slate-950 text-white overflow-hidden border border-slate-800 shadow-inner">
                <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    현장 실제 Full HD 배관 내시경 촬영 화면
                  </span>
                  <span className="text-slate-400 text-[10px]">사진 터치 시 확대</span>
                </div>

                <div className="grid grid-cols-2 gap-2 p-2 sm:p-2.5 bg-slate-950">
                  {/* Before camera screen */}
                  <div
                    onClick={() =>
                      setModalImg({
                        src: '/assets/aistudio/_______________d526bb81.jpg',
                        title: '시공 전 내시경 진단 화면 (0.4M)',
                        desc: '배관 내벽에 굳은 노란색 유지방 기름 슬러지로 관경의 90% 이상이 꽉 막힌 상태',
                      })
                    }
                    className="relative rounded-lg bg-black p-1.5 border border-rose-900/60 hover:border-rose-500 transition-colors cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="text-[11px] font-bold text-rose-400 mb-1 flex items-center justify-between">
                      <span className="bg-rose-950 px-1.5 py-0.5 rounded text-[10px] text-rose-300 border border-rose-800/60">
                        [전] 기름 슬러지
                      </span>
                      <ZoomIn className="w-3 h-3 text-slate-400 group-hover:text-rose-400 transition-colors" />
                    </div>

                    <div className="w-full aspect-[4/3] relative overflow-hidden rounded bg-black flex items-center justify-center">
                      <img
                        src="/assets/aistudio/_______________d526bb81.jpg"
                        alt="배관 슬러지 막힘 시공 전 내시경 사진"
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                    </div>
                    <div className="mt-1 text-[10px] text-center text-rose-300 font-medium truncate">
                      내시경 0.4M 심각 막힘
                    </div>
                  </div>

                  {/* After camera screen */}
                  <div
                    onClick={() =>
                      setModalImg({
                        src: '/assets/aistudio/______________daa8df9d.jpg',
                        title: '시공 후 내시경 검수 화면 (3.0M)',
                        desc: '플렉스 샤프트 스케일링 후 배관 내벽 기름때가 100% 분쇄 흡입되어 신축처럼 깨끗해진 상태',
                      })
                    }
                    className="relative rounded-lg bg-black p-1.5 border border-emerald-900/60 hover:border-emerald-500 transition-colors cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="text-[11px] font-bold text-emerald-400 mb-1 flex items-center justify-between">
                      <span className="bg-emerald-950 px-1.5 py-0.5 rounded text-[10px] text-emerald-300 border border-emerald-800/60">
                        [후] 100% 관통
                      </span>
                      <ZoomIn className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    </div>

                    <div className="w-full aspect-[4/3] relative overflow-hidden rounded bg-black flex items-center justify-center">
                      <img
                        src="/assets/aistudio/______________daa8df9d.jpg"
                        alt="플렉스 샤프트 스케일링 후 내시경 사진"
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                    </div>
                    <div className="mt-1 text-[10px] text-center text-emerald-300 font-medium truncate">
                      내시경 3.0M 관경 복원
                    </div>
                  </div>
                </div>

                <div className="px-3 py-2 bg-slate-900 text-xs flex items-center justify-between text-slate-300 border-t border-slate-800">
                  <span className="flex items-center gap-1.5 font-medium text-[11px] sm:text-xs">
                    <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    위례 전역 평균 도착: <strong className="text-white">20~30분</strong>
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px] sm:text-xs">
                    ✓ 모니터 현장 확인
                  </span>
                </div>
              </div>

              {/* 3 Major Commitments Checkpoints */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">100% 대표 본인 직접 방문</strong>
                    <p className="text-xs text-slate-500">외주·하청 기사에게 일을 넘기지 않고 끝까지 책임집니다.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">못 뚫으면 출장비 0원</strong>
                    <p className="text-xs text-slate-500">해결하지 못하면 단 1원도 청구하지 않는 자신감.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">정품 SUS304 스텐 배수통 & 규격 수전</strong>
                    <p className="text-xs text-slate-500">고객 직접 구매 수전 설치대행부터 악취 차단 트랩까지 완벽 시공.</p>
                  </div>
                </div>
              </div>

              {/* Urgent Emergency Warning box */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-amber-800 bg-amber-50/80 rounded-lg p-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>싱크대 역류는 방치 시 마루 썩음 및 아랫집 누수로 번집니다.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal for Hero Inspection Photos */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalImg(null)}
        >
          <div
            className="max-w-2xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="bg-black p-2 flex items-center justify-center max-h-[75vh]">
              <img
                src={modalImg.src}
                alt={modalImg.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-4 bg-slate-900 text-white border-t border-slate-800">
              <h3 className="font-bold text-sm sm:text-base text-sky-400 mb-1">{modalImg.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300">{modalImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
