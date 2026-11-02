import React from 'react';
import { UserX, DollarSign, Navigation, CheckCircle } from 'lucide-react';

export const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
            WHY SINKMASTER
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            설비 업체를 부를 때 가장 불안한 지점,<br className="hidden sm:inline" />
            싱크마스터가 정면으로 해소합니다
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            과도한 중개 수수료나 무책임한 외주 배정 없이, 처음 상담부터 시공 후 내시경 검수까지 대표가 직접 책임집니다.
          </p>
        </div>

        {/* 3 Core Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 01 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-black text-sky-600 tracking-tight">01</span>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <UserX className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                외주/하청 없는 100% 대표 직접 시공
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                중개 플랫폼의 과도한 수수료나 경험 없는 외주 기사 배정이 아닌, 대표 본인이 직접 방문해 배관 구조를 진단하고 끝까지 책임집니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>수수료 거품 없는 정직한 현장 견적</span>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-black text-sky-600 tracking-tight">02</span>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                미해결 시 0원 보장제
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                최신 배관 내시경과 전문 장비로 원인을 진단하며, 싱크대 막힘 문제를 해결하지 못하면 출장비와 점검비를 단 1원도 청구하지 않습니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>출장비 · 내시경 점검비 일체 0원 원칙</span>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-black text-sky-600 tracking-tight">03</span>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Navigation className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                위례 지역 밀착형 빠른 출동
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                송파 위례, 성남 위례, 하남 위례 전역을 상시 집중 운영하여 야간/주말에도 지체 없이 20~30분 내 신속 방문합니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>위례 아파트 단지별 배관 특성 완벽 파악</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
