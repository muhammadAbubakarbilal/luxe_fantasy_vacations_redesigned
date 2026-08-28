'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

const PlanYourTripModal = dynamic(() => import('@/src/components/forms/PlanYourTripModal'), { ssr: false });
import { DESTINATIONS } from '@/src/data/destinations';
import { ArrowRight, CheckCircle2, MapPin, Calendar, Sparkles, Compass, Shield, Clock } from 'lucide-react';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';
import ParallaxImage from '@/src/components/motion/ParallaxImage';
import { MotionStaggerContainer, MotionStaggerItem } from '@/src/components/motion/MotionStagger';
import MagneticButton from '@/src/components/motion/MagneticButton';

export default function DestinationDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const destination = DESTINATIONS.find((d) => d.slug === slug);

  if (!destination) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header onOpenInquiry={() => setIsInquiryOpen(true)} />

      <main className="grow">
        {/* Cinematic Destination Hero */}
        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[65vh] flex items-end justify-start overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage offset={30} className="w-full h-full">
              <Image
                src={destination.heroImage}
                alt={destination.name}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center scale-105"
                referrerPolicy="no-referrer"
              />
            </ParallaxImage>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 w-full text-white">
            <MotionFadeIn direction="up" distance={24} className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#C5A880] text-xs uppercase tracking-widest font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{destination.category} · Curated Destination</span>
              </div>

              <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
                {destination.name}
              </h1>

              <p className="text-base sm:text-xl text-[#E6DCce] font-light italic font-serif-luxury max-w-2xl">
                &ldquo;{destination.tagline}&rdquo;
              </p>

              <div className="pt-2 flex items-center space-x-4">
                <MagneticButton strength={8}>
                  <button
                    type="button"
                    onClick={() => setIsInquiryOpen(true)}
                    className="inline-flex items-center px-6 py-3.5 bg-[#FAF8F5] text-[#1C1815] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#C5A880] hover:text-white transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 mr-2 text-[#9B784A]" />
                    <span>Plan a Trip to {destination.name}</span>
                  </button>
                </MagneticButton>
              </div>
            </MotionFadeIn>
          </div>
        </section>

        {/* Overview & Why Visit */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <MotionFadeIn direction="up" distance={20} className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
                  Destination Overview
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1815]">
                  The Rhythm of {destination.name}
                </h2>
              </div>

              <p className="text-base text-[#57534E] leading-relaxed font-sans-clean">
                {destination.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-[#E6DCce]">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                  Why Visit {destination.name}
                </h3>
                <div className="space-y-3">
                  {destination.whyVisit.map((reason, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-[#57534E]">
                      <CheckCircle2 className="w-4 h-4 text-[#9B784A] shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionFadeIn>

            {/* Right Card: Quick Facts */}
            <MotionFadeIn direction="up" distance={20} delay={0.15} className="lg:col-span-5 bg-white p-8 rounded-sm border border-[#E6DCce] shadow-xs space-y-6">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1815] pb-3 border-b border-[#F4EFE6]">
                Advisor Insights &amp; Timing
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold uppercase tracking-wider text-[#9B784A] block mb-1">
                    Best Time to Visit:
                  </span>
                  <p className="text-[#57534E]">{destination.bestTimeToVisit}</p>
                </div>

                <div>
                  <span className="font-semibold uppercase tracking-wider text-[#9B784A] block mb-1">
                    Ideal For:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {destination.bestFor.map((b, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E6DCce] rounded-full text-xs text-[#1C1815]">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F4EFE6]">
                  <span className="font-semibold uppercase tracking-wider text-[#9B784A] block mb-1">
                    Insider Travel Tips:
                  </span>
                  <ul className="space-y-2 text-[#57534E] text-xs">
                    {destination.travelTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#9B784A] font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsInquiryOpen(true)}
                className="w-full py-3.5 px-4 bg-[#1C1815] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#9B784A] transition-colors cursor-pointer"
              >
                Inquire About {destination.name}
              </button>
            </MotionFadeIn>
          </div>
        </section>

        {/* Featured Resorts Section */}
        {destination.featuredResorts && destination.featuredResorts.length > 0 && (
          <section className="py-16 bg-[#F4EFE6] border-y border-[#E6DCce]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <MotionFadeIn direction="up" distance={20} className="max-w-2xl mb-12 space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold">
                  Hand-Vetted Accommodations
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1815]">
                  Signature Resorts &amp; Sanctuaries
                </h2>
              </MotionFadeIn>

              <MotionStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {destination.featuredResorts.map((resort, idx) => (
                  <MotionStaggerItem key={idx} className="bg-white rounded-sm border border-[#E6DCce] overflow-hidden shadow-xs flex flex-col justify-between group">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={resort.image}
                        alt={resort.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-104 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-[#1C1815]/90 text-white rounded-full">
                          {resort.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                        {resort.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                        {resort.highlights}
                      </p>
                    </div>
                  </MotionStaggerItem>
                ))}
              </MotionStaggerContainer>
            </div>
          </section>
        )}

        {/* Signature Experiences */}
        {destination.signatureExperiences && destination.signatureExperiences.length > 0 && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionFadeIn direction="up" distance={20} className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold">
                Curated Moments
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1815]">
                Signature Experiences in {destination.name}
              </h2>
            </MotionFadeIn>

            <MotionStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.signatureExperiences.map((exp, idx) => (
                <MotionStaggerItem key={idx} className="bg-white p-6 rounded-sm border border-[#E6DCce] shadow-xs space-y-2 hover:border-[#9B784A]/50 transition-colors">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {exp.description}
                  </p>
                </MotionStaggerItem>
              ))}
            </MotionStaggerContainer>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="py-16 bg-[#1C1815] text-[#FAF8F5] text-center">
          <MotionFadeIn direction="up" distance={20} className="max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
              Ready to Experience {destination.name}?
            </h2>
            <p className="text-sm sm:text-base text-[#A8A29E] leading-relaxed">
              Let us take care of all the research, suite upgrades, transfers, and private excursions.
            </p>
            <button
              type="button"
              onClick={() => setIsInquiryOpen(true)}
              className="inline-flex items-center px-8 py-4 bg-[#FAF8F5] text-[#1C1815] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#C5A880] hover:text-white transition-colors cursor-pointer"
            >
              <span>Start Planning My Vacation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </MotionFadeIn>
        </section>
      </main>

      <Footer onOpenInquiry={() => setIsInquiryOpen(true)} />

      <PlanYourTripModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialData={{ destination: destination.name }}
      />
    </div>
  );
}
