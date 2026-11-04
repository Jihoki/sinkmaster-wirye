import React from 'react';
import { Phone } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-28 sm:pb-16 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Info Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-white font-extrabold text-lg tracking-tight">
                {SITE_INFO.brandName}
              </span>
              <span className="text-slate-500 font-normal">| {SITE_INFO.brandEn}</span>
            </div>
            <p className="text-slate-400 text-xs">
              위례신도시 전 지역(송파·성남·하남) 싱크대 막힘·역류·배수통교체·수전교체 전문 (대표 직접 시공 · 못 뚫으면 0원)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>긴급 출동 상담 ({SITE_INFO.phone})</span>
            </a>
          </div>
        </div>

        {/* Legal & Business Registration Details */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5 leading-relaxed">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>
                <strong className="text-slate-300 font-semibold">상호명:</strong> {SITE_INFO.brandName}
              </span>
              <span>
                <strong className="text-slate-300 font-semibold">대표자:</strong> {SITE_INFO.ownerName}
              </span>
              <span>
                <strong className="text-slate-300 font-semibold">대표 전화:</strong>{' '}
                <a href={`tel:${SITE_INFO.legalPhone.replace(/-/g, '')}`} className="text-slate-300 hover:underline">
                  {SITE_INFO.legalPhone}
                </a>
              </span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>
                <strong className="text-slate-300 font-semibold">사업자등록번호:</strong> {SITE_INFO.businessNumber}
              </span>
              <span>
                <strong className="text-slate-300 font-semibold">이메일:</strong> {SITE_INFO.email}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400">
              <span>
                <strong className="text-slate-300 font-semibold">긴급 출동 직통:</strong> {SITE_INFO.phone}
              </span>
              <span>
                <strong className="text-slate-300 font-semibold">책임 권역:</strong> {SITE_INFO.areaSummary}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              * 싱크마스터는 무단 하청과 중개 수수료 없는 정직한 대표 직접 시공과 미해결 시 출장비 0원 원칙을 엄수합니다.
            </p>
          </div>

          <div className="md:text-right space-y-1">
            <p className="text-slate-500">
              © {new Date().getFullYear()} {SITE_INFO.brandName}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600">
              Reliable residential kitchen plumbing & scaling service.
            </p>
          </div>
        </div>

        {/* Subtle Bottom Information Strip */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>대표 전화 : {SITE_INFO.legalPhone}</span>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <span>대표자 : {SITE_INFO.ownerName}</span>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <span>사업자등록번호 : {SITE_INFO.businessNumber}</span>
          </div>
          <div className="text-slate-500">
            <span>위례신도시 24시간 긴급 출동</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
