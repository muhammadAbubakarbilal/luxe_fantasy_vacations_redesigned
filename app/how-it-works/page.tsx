'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

const PlanYourTripModal = dynamic(() => import('@/src/components/forms/PlanYourTripModal'), { ssr: false });
import FAQSection from '@/src/components/sections/FAQSection';
import { ArrowRight } from 'lucide-react';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';
import { MotionStaggerContainer, MotionStaggerItem } from '@/src/components/motion/MotionStagger';

export default function HowItWorksPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header onOpenInquiry={() => setIsInquiryOpen(true)} />

      <main className="grow pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <MotionFadeIn direction="up" distance={20} className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
              Step-by-Step Methodology
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1815]">
              How We Plan Your Vacation
            </h1>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              We’ve refined vacation planning into an effortless, transparent four-step journey where your vision is translated into a flawless itinerary.
            </p>
          </MotionFadeIn>

          {/* Deep-Dive 4 Steps */}
          <MotionStaggerContainer staggerDelay={0.12} className="space-y-12 mb-12 sm:mb-16 max-w-4xl mx-auto">
            {/* Step 1 */}
            <MotionStaggerItem className="bg-white p-8 sm:p-10 rounded-sm border border-[#E6DCce] shadow-xs space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-10 h-10 rounded-full bg-[#1C1815] text-white flex items-center justify-center font-serif-luxury font-bold text-base">
                  01
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#9B784A]">Discovery</span>
                  <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                    Tell Us About Your Dream Journey
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Complete our brief 6-step online consultation form or schedule an introductory phone call. Share where you want to go, who is traveling (couples, families, groups), your preferred travel style, and the atmosphere you crave.
              </p>
            </MotionStaggerItem>

            {/* Step 2 */}
            <MotionStaggerItem className="bg-white p-8 sm:p-10 rounded-sm border border-[#E6DCce] shadow-xs space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-10 h-10 rounded-full bg-[#1C1815] text-white flex items-center justify-center font-serif-luxury font-bold text-base">
                  02
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#9B784A]">Curation</span>
                  <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                    We Research, Vet &amp; Narrow the Choices
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Our Principal Travel Advisor explores verified luxury properties, premium suite tiers, and cruise ship deck positions. We filter out the noise and cross-reference our supplier network for exclusive added values (such as resort credits or VIP perks).
              </p>
            </MotionStaggerItem>

            {/* Step 3 */}
            <MotionStaggerItem className="bg-white p-8 sm:p-10 rounded-sm border border-[#E6DCce] shadow-xs space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-10 h-10 rounded-full bg-[#1C1815] text-white flex items-center justify-center font-serif-luxury font-bold text-base">
                  03
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#9B784A]">Collaboration</span>
                  <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                    Review Your Tailored Proposal
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Within 24–48 business hours, you receive a curated proposal featuring 2–3 hand-selected options. We review them together, answering your questions and refining room categories until the plan feels perfect.
              </p>
            </MotionStaggerItem>

            {/* Step 4 */}
            <MotionStaggerItem className="bg-white p-8 sm:p-10 rounded-sm border border-[#E6DCce] shadow-xs space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-10 h-10 rounded-full bg-[#1C1815] text-white flex items-center justify-center font-serif-luxury font-bold text-base">
                  04
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#9B784A]">Seamless Execution</span>
                  <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                    Lock It In &amp; Travel With Confidence
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Once approved, we secure your bookings, coordinate private airport transfers, arrange special dining and excursions, and provide your final travel documents. Should any unexpected travel changes occur, we are by your side to resolve them.
              </p>
            </MotionStaggerItem>
          </MotionStaggerContainer>

          {/* Section: FAQ Accordion */}
          <FAQSection />

          {/* Bottom CTA */}
          <MotionFadeIn direction="up" distance={20} className="mt-20 text-center space-y-6">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1815]">
              Ready to Experience the Difference?
            </h2>
            <button
              type="button"
              onClick={() => setIsInquiryOpen(true)}
              className="inline-flex items-center px-8 py-4 bg-[#1C1815] text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#9B784A] transition-colors cursor-pointer"
            >
              <span>Start Planning My Vacation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </MotionFadeIn>
        </div>
      </main>

      <Footer onOpenInquiry={() => setIsInquiryOpen(true)} />

      <PlanYourTripModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
}
