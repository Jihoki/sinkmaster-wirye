/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PromiseBanner } from './components/PromiseBanner';
import { ComplexTicker } from './components/ComplexTicker';
import { WhySection } from './components/WhySection';
import { ServiceSection } from './components/ServiceSection';
import { GallerySection } from './components/GallerySection';
import { CoverageSection } from './components/CoverageSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [targetSearch, setTargetSearch] = useState('');

  const handleSelectComplex = (name: string) => {
    setTargetSearch(name);
    const coverageEl = document.getElementById('coverage');
    if (coverageEl) {
      coverageEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 md:pb-0 overflow-x-hidden w-full">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <PromiseBanner />
        <ComplexTicker onSelectComplex={handleSelectComplex} />
        <WhySection />
        <ServiceSection />
        <GallerySection />
        <CoverageSection initialSearch={targetSearch} />
        <ProcessSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar />
    </div>
  );
}

