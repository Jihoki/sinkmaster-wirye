import React from 'react';
import { UserCheck, ShieldAlert, Zap } from 'lucide-react';
import { PROMISES } from '../data/siteData';

export const PromiseBanner: React.FC = () => {
  const icons = [UserCheck, ShieldAlert, Zap];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">
            SINKMASTER THREE PROMISES
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            싱크마스터 3대 안심 약속
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            위례 전 지역 20~30분 내 신속 방문 · 정직하고 투명한 시공
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMISES.map((promise, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={promise.num}
                className="relative bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-sky-300 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-wider text-sky-700 bg-sky-100/70 px-2.5 py-1 rounded-md">
                      PROMISE {promise.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {promise.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60">
                  <span className="text-xs font-semibold text-sky-800">
                    ✓ {promise.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
