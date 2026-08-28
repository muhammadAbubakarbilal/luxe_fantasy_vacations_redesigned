'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

const PlanYourTripModal = dynamic(() => import('@/src/components/forms/PlanYourTripModal'), { ssr: false });
import { PACKAGES } from '@/src/data/packages';
import { ArrowRight, MapPin, Clock, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';
import { MotionStaggerContainer, MotionStaggerItem } from '@/src/components/motion/MotionStagger';

export default function PackagesPage() {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [prefill, setPrefill] = useState<{ destination?: string; tripType?: string }>({});

  const categories = [
    'All',
    'Featured',
    'Luxury Escapes',
    'All-Inclusive',
    'Cruises',
    'Romantic',
    'Family & Group'
  ];

  const filteredPackages = selectedType === 'All'
    ? PACKAGES
    : selectedType === 'Featured'
    ? PACKAGES.slice(0, 3)
    : selectedType === 'Luxury Escapes'
    ? PACKAGES.filter((p) => p.tripType === 'Boutique Resort' || p.tripType === 'Romantic Escape')
    : selectedType === 'All-Inclusive'
    ? PACKAGES.filter((p) => p.tripType === 'All-Inclusive')
    : selectedType === 'Cruises'
    ? PACKAGES.filter((p) => p.tripType === 'Luxury Cruise')
    : selectedType === 'Romantic'
    ? PACKAGES.filter((p) => p.tripType === 'Romantic Escape')
    : selectedType === 'Family & Group'
    ? PACKAGES.filter((p) => p.tripType === 'Group Celebration' || p.tripType === 'Boutique Resort')
    : PACKAGES;

  const handlePlanPackage = (dest: string, type: string) => {
    setPrefill({ destination: dest, tripType: type });
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header onOpenInquiry={() => { setPrefill({}); setIsInquiryOpen(true); }} />

      <main className="grow pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
          <MotionFadeIn direction="up" distance={20} className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
              Signature Vacation Dossiers
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1815]">
              Curated Travel Packages
            </h1>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Explore bespoke vacation frameworks curated by our luxury advisors. Each itinerary serves as an inspirational foundation that is custom-tailored to your exact travel dates, party size, and preferences.
            </p>
          </MotionFadeIn>

          {/* Filter Pills */}
          <div className="mt-6 flex items-center space-x-2.5 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78716C] mr-2 flex items-center shrink-0">
              <Filter className="w-3.5 h-3.5 mr-1 text-[#9B784A]" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedType(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedType === cat
                    ? 'bg-[#1C1815] text-white shadow-xs'
                    : 'bg-white border border-[#E6DCce] text-[#2C2621] hover:bg-[#F4EFE6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <MotionStaggerItem
                key={pkg.id}
                className="bg-white rounded-sm border border-[#E6DCce] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-[#1C1815]/90 text-white rounded-full">
                        {pkg.tripType}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#78716C]">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-[#9B784A]" />
                        <span>{pkg.destination}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-[#9B784A]" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815] group-hover:text-[#9B784A] transition-colors leading-snug">
                      <Link href={`/packages/${pkg.slug}`}>
                        {pkg.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#57534E] line-clamp-2 leading-relaxed">
                      {pkg.tagline}
                    </p>

                    <div className="pt-3 border-t border-[#F4EFE6] space-y-1.5">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78716C] block">
                        Signature Included Experiences:
                      </span>
                      <ul className="text-xs text-[#57534E] space-y-1">
                        {pkg.highlights.slice(0, 2).map((h, idx) => (
                          <li key={idx} className="flex items-start space-x-1.5 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#9B784A] shrink-0 mt-0.5" />
                            <span className="truncate">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-[#F4EFE6] flex items-center justify-between">
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="text-xs uppercase tracking-wider font-bold text-[#1C1815] hover:text-[#9B784A] transition-colors inline-flex items-center"
                  >
                    <span>View Package</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handlePlanPackage(pkg.destination, pkg.tripType)}
                    className="inline-flex items-center px-3.5 py-1.5 bg-[#1C1815] text-[#FAF8F5] text-[11px] uppercase tracking-wider font-semibold rounded-sm hover:bg-[#9B784A] transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 mr-1 text-[#C5A880]" />
                    <span>Plan This</span>
                  </button>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStaggerContainer>
        </div>
      </main>

      <Footer onOpenInquiry={() => { setPrefill({}); setIsInquiryOpen(true); }} />

      <PlanYourTripModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialData={prefill}
      />
    </div>
  );
}
