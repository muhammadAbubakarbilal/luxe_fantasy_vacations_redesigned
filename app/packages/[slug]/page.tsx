'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

const PlanYourTripModal = dynamic(() => import('@/src/components/forms/PlanYourTripModal'), { ssr: false });
import ParallaxImage from '@/src/components/motion/ParallaxImage';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';
import { PACKAGES } from '@/src/data/packages';
import { ADVISOR_PROFILE } from '@/src/data/advisor';
import { 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  BedDouble, 
  Calendar, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  Compass,
  Star,
  HelpCircle
} from 'lucide-react';

export default function PackageDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const pkg = PACKAGES.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header onOpenInquiry={() => setIsInquiryOpen(true)} />

      <main className="grow">
        {/* Cinematic Hero Header */}
        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[65vh] flex items-end justify-start overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage offset={30} className="w-full h-full">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </ParallaxImage>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 w-full text-white">
            <MotionFadeIn direction="up" distance={24} className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#1C1815]/80 backdrop-blur-md text-[#C5A880] text-xs uppercase tracking-widest font-semibold border border-[#C5A880]/30">
                  {pkg.tripType}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs uppercase tracking-wider font-semibold">
                  {pkg.region}
                </span>
              </div>

              <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {pkg.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-stone-200 pt-1">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span>{pkg.destination}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <span>{pkg.duration}</span>
                </div>
              </div>
            </MotionFadeIn>
          </div>
        </section>

        {/* Package Overview & Content Architecture */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Main Content */}
            <MotionFadeIn direction="up" distance={20} className="lg:col-span-7 space-y-10">
              {/* 1. Overview */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold">
                  Package Overview
                </span>
                <h2 className="font-serif-luxury text-3xl font-bold text-[#1C1815]">
                  {pkg.tagline}
                </h2>
                <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
                  {pkg.overview}
                </p>
              </div>

              {/* 2. Signature Experiences */}
              <div className="p-8 bg-white rounded-sm border border-[#E6DCce] shadow-xs space-y-6">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815] flex items-center space-x-2">
                  <Compass className="w-5 h-5 text-[#9B784A]" />
                  <span>Signature Curated Experiences</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-[#2C2621]">
                      <CheckCircle2 className="w-4 h-4 text-[#9B784A] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Day-by-Day Itinerary Rhythm */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold">
                    Suggested Framework
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1815]">
                    Sample Itinerary Rhythm
                  </h3>
                </div>

                <div className="space-y-6 border-l-2 border-[#E6DCce] pl-6 ml-2">
                  {pkg.itineraryRhythm.map((item, idx) => (
                    <div key={idx} className="relative space-y-1.5">
                      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#9B784A] ring-4 ring-[#FAF8F5]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#9B784A]">
                        {item.day}
                      </span>
                      <h4 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#57534E] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Accommodations */}
              <div className="p-8 bg-white rounded-sm border border-[#E6DCce] space-y-4">
                <div className="flex items-center space-x-2 text-[#9B784A]">
                  <BedDouble className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Accommodations</span>
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                  {pkg.accommodations.name}
                </h3>
                <p className="text-xs font-semibold text-[#9B784A] uppercase tracking-wider">
                  Style: {pkg.accommodations.style}
                </p>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {pkg.accommodations.description}
                </p>
              </div>

              {/* 5. What's Included */}
              <div className="p-8 bg-[#F4EFE6] rounded-sm border border-[#E6DCce] space-y-4">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                  What Is Included in Your Package
                </h3>
                <ul className="space-y-2.5">
                  {pkg.whatsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-[#2C2621]">
                      <CheckCircle2 className="w-4 h-4 text-[#9B784A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. FAQ & Advisor Guarantee */}
              <div className="p-8 bg-white rounded-sm border border-[#E6DCce] space-y-4">
                <div className="flex items-center space-x-2 text-[#9B784A]">
                  <HelpCircle className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Customization FAQ</span>
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                  Can this package be customized for our dates?
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  Absolutely. Every itinerary shown on Luxe Fantasy Vacations is a customisable framework. We modify flight schedules, room categories, duration, and resort choices based on your preferences.
                </p>
              </div>
            </MotionFadeIn>

            {/* Right Sticky Inquiry Card */}
            <MotionFadeIn direction="up" distance={20} className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#E6DCce] shadow-md space-y-6">
                <div className="space-y-2 pb-4 border-b border-[#E6DCce]">
                  <span className="text-xs uppercase tracking-widest text-[#9B784A] font-semibold">
                    Tailored Travel Dossier
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                    Request Custom Quote
                  </h3>
                  <p className="text-xs text-[#78716C] leading-relaxed">
                    {pkg.verifiedPricingNote || 'Pricing is customized based on your travel dates, room category, and preferred flight origin.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs py-2 border-b border-[#F4EFE6]">
                    <span className="text-[#78716C]">Pace &amp; Atmosphere:</span>
                    <span className="font-semibold text-[#1C1815]">{pkg.suggestedPace}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 border-b border-[#F4EFE6]">
                    <span className="text-[#78716C]">Ideal For:</span>
                    <span className="font-semibold text-[#1C1815]">{pkg.idealFor.join(', ')}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsInquiryOpen(true)}
                  className="w-full py-4 bg-[#C5A880] text-[#1C1815] hover:bg-[#1C1815] hover:text-[#FAF8F5] text-xs font-bold uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center space-x-2 shadow-sm cursor-pointer border border-[#B5956A]"
                >
                  <Sparkles className="w-4 h-4 text-[#1C1815]" />
                  <span>Customize This Package</span>
                </button>

                <div className="space-y-3 pt-2 text-xs text-[#78716C]">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-[#9B784A]" />
                    <span>CLIA &amp; ASTA Accredited Advisory</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#9B784A]" />
                    <span>No-obligation travel consultation</span>
                  </div>
                </div>

                {/* Direct Contact Option */}
                <div className="pt-4 border-t border-[#E6DCce] flex items-center justify-between text-xs">
                  <span className="text-[#78716C]">Speak with an Advisor:</span>
                  <a
                    href={`tel:${ADVISOR_PROFILE.phoneNumberClean}`}
                    className="font-bold text-[#9B784A] hover:underline flex items-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5 mr-1" />
                    <span>{ADVISOR_PROFILE.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </MotionFadeIn>
          </div>
        </section>
      </main>

      <Footer onOpenInquiry={() => setIsInquiryOpen(true)} />

      <PlanYourTripModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialData={{ destination: pkg.destination, tripType: pkg.tripType }}
      />
    </div>
  );
}
