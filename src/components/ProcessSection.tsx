import React from 'react';
import { PhoneCall, SearchCheck, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, SITE_INFO } from '../data/siteData';

export const ProcessSection: React.FC = () => {
  const stepIcons = [PhoneCall, SearchCheck, CheckCircle2, ShieldCheck];

  return (
    <section id="process" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
            PROCESS
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            진행 절차 안내
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            상담부터 사후 내시경 검수까지 투명하고 정직한 4단계 원칙을 지킵니다.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-wider text-sky-700 bg-sky-50 px-2 py-1 rounded">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-sky-700 font-medium mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full border border-slate-200 text-slate-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              위례 싱크대 막힘, 지금 바로 대표와 직접 상담하세요
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              거주하시는 아파트 단지명과 현재 증상을 말씀해 주시면 과잉 견적 없이 정직하고 정확하게 안내해 드립니다. 야간·주말·당일 언제든 긴급 출동 가능합니다.
            </p>
          </div>

          <a
            href={SITE_INFO.phoneTel}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-base transition-colors shadow-lg"
          >
            <PhoneCall className="w-5 h-5" />
            <span>010-5024-8204 전화 연결</span>
          </a>
        </div>

      </div>
    </section>
  );
};
