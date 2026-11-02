import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageSquare } from 'lucide-react';
import { FAQS, SITE_INFO } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            자주 묻는 질문
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            시공 전 고객님들께서 가장 많이 궁금해하시는 사항들을 명확하게 답변해 드립니다.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors bg-slate-50/50 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs shrink-0 font-bold">
                      Q
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <div className="flex items-start gap-2.5 pt-2">
                      <span className="text-sky-600 font-bold shrink-0 mt-0.5">답변:</span>
                      <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance box */}
        <div className="mt-10 p-5 rounded-xl bg-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-slate-600 shrink-0 hidden sm:block" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                추가로 궁금한 점이나 단지별 특이사항이 있으신가요?
              </p>
              <p className="text-xs text-slate-500">
                부담 없이 편하신 채널로 문의해 주시면 친절히 상담해 드립니다.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`sms:${SITE_INFO.phone}?body=${encodeURIComponent('[싱크마스터 문의] 아파트 단지명 및 증상:')}`}
              className="px-4 py-2.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-slate-600" />
              문자 문의
            </a>
            <a
              href={SITE_INFO.phoneTel}
              className="px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
              전화 연결
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
