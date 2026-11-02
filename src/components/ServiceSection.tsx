import React from 'react';
import { Phone, CheckCircle2, Wrench, Droplet, Shield, MessageSquare } from 'lucide-react';
import { SERVICES, SITE_INFO } from '../data/siteData';

export const ServiceSection: React.FC = () => {
  const serviceIcons = [Wrench, Droplet, Shield];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
            SERVICE SCOPE
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {SITE_INFO.brandName} 전문 서비스 안내
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            최신 배관 장비와 검증된 정품 자재로 원인을 정확히 진단하고 재발 없이 해결합니다.
          </p>
        </div>

        {/* 3 Large Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            const smsBody = encodeURIComponent(`[싱크마스터 ${srv.title.split('&')[0]} 문의] 단지명: `);
            return (
              <div
                key={srv.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-sky-300 transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-sky-700 bg-sky-100/80 px-2.5 py-1 rounded-md">
                      {srv.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.subtitle}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {srv.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-200 flex flex-col gap-2">
                  <a
                    href={SITE_INFO.phoneTel}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>{srv.title.split('&')[0]} 전화 상담</span>
                  </a>

                  <a
                    href={`sms:${SITE_INFO.phone}?body=${smsBody}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                    <span>문자로 사진 보내고 견적 문의</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
