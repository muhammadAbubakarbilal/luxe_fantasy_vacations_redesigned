'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

const PlanYourTripModal = dynamic(() => import('@/src/components/forms/PlanYourTripModal'), { ssr: false });
import { DESTINATIONS } from '@/src/data/destinations';
import { ArrowRight, MapPin, Sparkles, Filter } from 'lucide-react';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';
import { MotionStaggerContainer, MotionStaggerItem } from '@/src/components/motion/MotionStagger';

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  const categories = ['All', 'Caribbean', 'Mexico'];

  const filteredDestinations = selectedCategory === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.category === selectedCategory);

  const handlePlanDestination = (destName: string) => {
    setSelectedDestination(destName);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header onOpenInquiry={() => { setSelectedDestination(''); setIsInquiryOpen(true); }} />

      <main className="grow pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
          <MotionFadeIn direction="up" distance={20} className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
              Curated Escapes &amp; Enclaves
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1815]">
              Curated Destinations
            </h1>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Explore handpicked island sanctuaries, Caribbean cruise waterways, and Mexican coastal retreats vetted personally by Luxe Fantasy Vacations.
            </p>
          </MotionFadeIn>

          {/* Filter Pills */}
          <div className="mt-5 flex items-center space-x-3 overflow-x-auto pb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78716C] mr-2 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" />
              Region:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#1C1815] text-white shadow-xs'
                    : 'bg-white border border-[#E6DCce] text-[#2C2621] hover:bg-[#F4EFE6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <MotionStaggerItem
                key={dest.id}
                className="bg-white rounded-sm border border-[#E6DCce] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={dest.heroImage}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-[#1C1815]/85 backdrop-blur-md text-white rounded-full">
                        {dest.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815] group-hover:text-[#9B784A] transition-colors leading-snug">
                      <Link href={`/destinations/${dest.slug}`}>
                        {dest.name}
                      </Link>
                    </h2>

                    <p className="text-xs uppercase tracking-wider text-[#9B784A] font-semibold">
                      {dest.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#57534E] line-clamp-3 leading-relaxed">
                      {dest.description}
                    </p>

                    <div className="pt-3 border-t border-[#F4EFE6] space-y-1">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78716C] block">
                        Best Suited For:
                      </span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {dest.bestFor.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF8F5] text-[#57534E] rounded border border-[#E6DCce]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Link & Action */}
                <div className="px-6 pb-6 pt-3 border-t border-[#F4EFE6] flex items-center justify-between">
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="text-xs uppercase tracking-wider font-bold text-[#1C1815] hover:text-[#9B784A] transition-colors flex items-center"
                  >
                    <span>View Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handlePlanDestination(dest.name)}
                    className="inline-flex items-center px-3.5 py-1.5 bg-[#1C1815] text-[#FAF8F5] text-[11px] uppercase tracking-wider font-semibold rounded-sm hover:bg-[#9B784A] transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 mr-1 text-[#C5A880]" />
                    <span>Plan Trip</span>
                  </button>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStaggerContainer>
        </div>
      </main>

      <Footer onOpenInquiry={() => { setSelectedDestination(''); setIsInquiryOpen(true); }} />

      <PlanYourTripModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialData={{ destination: selectedDestination }}
      />
    </div>
  );
}
