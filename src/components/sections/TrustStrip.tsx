'use client';

import React from 'react';
import { ShieldCheck, Compass, Sparkles, HeartHandshake } from 'lucide-react';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';

export default function TrustStrip() {
  const trustPillars = [
    { icon: Sparkles, text: 'Personalized Planning' },
    { icon: Compass, text: 'Curated Travel Options' },
    { icon: ShieldCheck, text: 'Expert Guidance' },
    { icon: HeartHandshake, text: 'Dedicated Personal Support' },
  ];

  return (
    <section id="trust-strip-section" className="bg-[#FAF8F5] border-y border-[#E6DCce] py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFadeIn direction="up" distance={12} duration={0.35} className="flex flex-wrap items-center justify-center gap-y-4 gap-x-6 sm:gap-x-12 md:gap-x-16 text-center">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex items-center space-x-2 text-[#2C2621]">
                <Icon className="w-4 h-4 text-[#9B784A] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans-clean">
                  {pillar.text}
                </span>
                {idx < trustPillars.length - 1 && (
                  <span className="hidden lg:inline-block text-[#D3C4AF] ml-6 sm:ml-12 md:ml-16 font-light">
                    •
                  </span>
                )}
              </div>
            );
          })}
        </MotionFadeIn>
      </div>
    </section>
  );
}
