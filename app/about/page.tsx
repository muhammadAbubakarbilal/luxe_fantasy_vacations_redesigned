'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

const PlanYourTripModal = dynamic(() => import('@/src/components/forms/PlanYourTripModal'), { ssr: false });
import { ADVISOR_PROFILE } from '@/src/data/advisor';
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Sparkles, Check, X, Shield, Lock, Clock } from 'lucide-react';
import { CertificationGroup } from '@/src/components/ui/CertificationLogos';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';
import MagneticButton from '@/src/components/motion/MagneticButton';

export default function AboutPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header onOpenInquiry={() => setIsInquiryOpen(true)} />

      <main className="grow pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <MotionFadeIn direction="up" distance={20} className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
              The Advisory Behind Your Journeys
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1815]">
              About Luxe Fantasy Vacations
            </h1>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Boutique, human-led luxury travel advisory built on personal relationships, firsthand destination insight, and an unyielding commitment to seamless escapes.
            </p>
          </MotionFadeIn>

          {/* Profile & Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
            {/* Left: Portrait */}
            <MotionFadeIn direction="up" distance={20} className="lg:col-span-5">
              <div className="relative aspect-4/5 rounded-sm overflow-hidden border border-[#E6DCce] shadow-xl">
                <Image
                  src={ADVISOR_PROFILE.portraitImage}
                  alt={ADVISOR_PROFILE.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block">
                    Principal Travel Advisor
                  </span>
                  <p className="font-serif-luxury text-2xl font-bold">{ADVISOR_PROFILE.name}</p>
                </div>
              </div>
            </MotionFadeIn>

            {/* Right: Narrative */}
            <MotionFadeIn direction="up" distance={20} delay={0.15} className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1815]">
                  Our Founder Story &amp; Ethos
                </h2>
                <p className="text-base text-[#57534E] leading-relaxed">
                  {ADVISOR_PROFILE.personalStory}
                </p>
              </div>

              <div className="p-6 bg-[#F4EFE6] border-l-4 border-[#9B784A] rounded-r-sm space-y-2">
                <p className="font-serif-luxury text-xl italic text-[#1C1815]">
                  &ldquo;{ADVISOR_PROFILE.personalQuote}&rdquo;
                </p>
                <span className="text-xs font-semibold text-[#9B784A] uppercase tracking-wider block">
                  — Our Founding Philosophy
                </span>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <MagneticButton strength={8}>
                  <button
                    type="button"
                    onClick={() => setIsInquiryOpen(true)}
                    className="inline-flex items-center px-7 py-4 bg-[#1C1815] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#9B784A] transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Start a Planning Conversation</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </MagneticButton>
              </div>
            </MotionFadeIn>
          </div>

          {/* Section: Why Luxe Fantasy vs Mass Market DIY Sites */}
          <MotionFadeIn direction="up" distance={20} className="mb-16 sm:mb-20 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold">
                Why Choose Luxe Fantasy
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1815]">
                The Advisory Advantage vs DIY Booking
              </h2>
              <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
                When planning a vacation, the difference between an algorithm-generated booking site and a human luxury advisor is extraordinary.
              </p>
            </div>

            <div className="bg-white rounded-sm border border-[#E6DCce] shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#F4EFE6] border-b border-[#E6DCce]">
                      <th className="p-4 sm:p-6 text-xs uppercase tracking-wider font-bold text-[#1C1815] w-1/3">
                        Travel Feature / Service
                      </th>
                      <th className="p-4 sm:p-6 text-xs uppercase tracking-wider font-bold text-[#9B784A] w-1/3 bg-[#FAF8F5]">
                        Luxe Fantasy Vacations
                      </th>
                      <th className="p-4 sm:p-6 text-xs uppercase tracking-wider font-bold text-[#78716C] w-1/3">
                        DIY Online Travel Agencies (OTAs)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6DCce] text-xs sm:text-sm">
                    <tr>
                      <td className="p-4 sm:p-6 font-semibold text-[#1C1815]">Custom Itinerary Architecture</td>
                      <td className="p-4 sm:p-6 bg-[#FAF8F5] text-[#1C1815] font-medium flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#9B784A] shrink-0" />
                        <span>Tailored specifically to your pace, dates &amp; group dynamics</span>
                      </td>
                      <td className="p-4 sm:p-6 text-[#78716C] flex items-center space-x-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Generic algorithmic results &amp; cookie-cutter packages</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-6 font-semibold text-[#1C1815]">VIP Perks &amp; Upgrades</td>
                      <td className="p-4 sm:p-6 bg-[#FAF8F5] text-[#1C1815] font-medium flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#9B784A] shrink-0" />
                        <span>Resort credits, room upgrades &amp; champagne welcomes</span>
                      </td>
                      <td className="p-4 sm:p-6 text-[#78716C] flex items-center space-x-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Standard entry-level staterooms with zero perks</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-6 font-semibold text-[#1C1815]">Advocacy During Delays</td>
                      <td className="p-4 sm:p-6 bg-[#FAF8F5] text-[#1C1815] font-medium flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#9B784A] shrink-0" />
                        <span>24/7 dedicated advisor advocacy resolving flight or resort issues</span>
                      </td>
                      <td className="p-4 sm:p-6 text-[#78716C] flex items-center space-x-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Endless call center holds and automated bots</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 sm:p-6 font-semibold text-[#1C1815]">Pricing &amp; Value Integrity</td>
                      <td className="p-4 sm:p-6 bg-[#FAF8F5] text-[#1C1815] font-medium flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#9B784A] shrink-0" />
                        <span>100% transparent pricing matching or beating direct resort rates</span>
                      </td>
                      <td className="p-4 sm:p-6 text-[#78716C] flex items-center space-x-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Hidden resort fees and restrictive cancellation terms</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </MotionFadeIn>

          {/* Section: Certifications & Industry Credentials */}
          <MotionFadeIn direction="up" distance={20} className="mb-16 sm:mb-20">
            <div id="certifications" className="scroll-mt-28 bg-white p-8 sm:p-12 rounded-sm border border-[#E6DCce] shadow-xs space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold">
                  Accreditations &amp; Trust Signals
                </span>
                <h2 className="font-serif-luxury text-3xl font-bold text-[#1C1815]">
                  Certifications &amp; Industry Affiliations
                </h2>
                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl">
                  Luxe Fantasy Vacations operates under strict global travel industry accreditations, ensuring financial security, professional standards, and direct VIP resort privileges for every client.
                </p>
              </div>

              <CertificationGroup />

              <div className="pt-4 border-t border-[#E6DCce] flex flex-wrap items-center justify-between gap-4 text-xs text-[#78716C]">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-[#9B784A]" />
                  <span>Licensed &amp; Insured Travel Agency Registration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#9B784A]" />
                  <span>100% Dedicated Advisor Support Before, During &amp; After Travel</span>
                </div>
              </div>
            </div>
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
