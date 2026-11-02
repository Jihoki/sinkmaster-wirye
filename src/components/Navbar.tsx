import React, { useState } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '차별점', href: '#why' },
    { label: '서비스 안내', href: '#services' },
    { label: '시공 갤러리', href: '#gallery' },
    { label: '출동 단지 안내', href: '#coverage' },
    { label: '진행 절차', href: '#process' },
    { label: '자주 묻는 질문', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="font-medium">위례신도시 전 지역 24시간 상시 대기 · 못 뚫으면 출장비 0원</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <span>20~30분 내 신속 출동</span>
            <span aria-hidden="true">·</span>
            <span className="text-white font-semibold">24시 상담 직통: {SITE_INFO.phone}</span>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
            S
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
            {SITE_INFO.brandName}
          </span>
        </a>

        {/* Zone 2: Navigation Links (Single-line, unboxed) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action (Phone call) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={SITE_INFO.phoneTel}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors whitespace-nowrap shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>전화 상담 ({SITE_INFO.phone})</span>
          </a>
        </div>

        {/* Mobile Action & Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={SITE_INFO.phoneTel}
            className="p-2 bg-slate-900 text-white rounded-lg text-xs font-bold flex items-center gap-1"
            aria-label="전화 연결"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>상담</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <a
              href={SITE_INFO.phoneTel}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3.5 rounded-xl text-sm"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              24시간 전화 연결 ({SITE_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
