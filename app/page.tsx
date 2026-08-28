'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import dynamic from 'next/dynamic';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import TrustStrip from '@/src/components/sections/TrustStrip';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';

const PlanYourTripModal = dynamic(() => import('@/src/components/forms/PlanYourTripModal'), { ssr: false });
import { MotionStaggerContainer, MotionStaggerItem } from '@/src/components/motion/MotionStagger';
import MagneticButton from '@/src/components/motion/MagneticButton';
import { DESTINATIONS } from '@/src/data/destinations';
import { GETAWAYS } from '@/src/data/getaways';
import { ADVISOR_PROFILE } from '@/src/data/advisor';
import { ARTICLES } from '@/src/data/articles';
import { EASINGS, DURATIONS } from '@/src/lib/motion';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Phone,
  Sliders,
  HeartHandshake
} from 'lucide-react';

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPrefill, setInquiryPrefill] = useState<{
    destination?: string;
    tripType?: string;
  }>({});

  const handleOpenInquiry = (prefill?: { destination?: string; tripType?: string }) => {
    if (prefill) {
      setInquiryPrefill(prefill);
    } else {
      setInquiryPrefill({});
    }
    setIsInquiryOpen(true);
  };

  // Select 3 top destinations for preview
  const featuredDestinations = DESTINATIONS.slice(0, 3);
  // Select 2 top getaways for preview
  const featuredGetaways = GETAWAYS.slice(0, 2);
  // Select 2 top articles for preview
  const featuredArticles = ARTICLES.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Navigation Header */}
      <Header onOpenInquiry={() => handleOpenInquiry()} />

      <main className="grow">
        {/* 1. Welcoming Hero Banner */}
        <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center text-white overflow-hidden pt-20">
          <motion.div 
            initial={{ scale: shouldReduceMotion ? 1 : 1.05, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: DURATIONS.cinematic, ease: EASINGS.easeOutCubic }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
              alt="Luxury Overwater Resort"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.70] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-black/35 to-black/60" />
          </motion.div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATIONS.normal, ease: EASINGS.easeOutCubic, delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C5A880] text-xs font-sans-clean font-medium tracking-widest uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Boutique Travel Advisory &amp; Custom Escapes</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATIONS.slow, ease: EASINGS.easeOutExpo, delay: 0.2 }}
              className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              You bring the dream. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#FAF8F5]">We craft the journey.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATIONS.normal, ease: EASINGS.easeOutCubic, delay: 0.35 }}
              className="text-base sm:text-xl text-[#FAF8F5]/90 max-w-2xl mx-auto font-sans-clean leading-relaxed"
            >
              Boutique Caribbean getaways, all-inclusive sanctuaries, and luxury cruises planned with intention by dedicated human travel advisors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATIONS.normal, ease: EASINGS.easeOutCubic, delay: 0.48 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <MagneticButton strength={10}>
                <button
                  type="button"
                  onClick={() => handleOpenInquiry()}
                  className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] text-[#1C1815] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Plan Your Vacation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </MagneticButton>

              <Link
                href="/destinations"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs border border-white/30 text-xs font-bold uppercase tracking-widest rounded-sm transition-all text-center"
              >
                Explore Destinations
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Accreditation & Trust Strip */}
        <TrustStrip />

        {/* 3. Advisory Gateways (Navigation Hub) */}
        <section className="py-14 sm:py-18 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionFadeIn className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
                Distinct Advisory Wings
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1815]">
                Curated Travel Services
              </h2>
              <p className="text-base text-[#78716C] leading-relaxed">
                Explore our dedicated areas of expertise, customized itineraries, and advisory philosophies.
              </p>
            </MotionFadeIn>

            <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Gateway 1 */}
              <MotionStaggerItem>
                <Link
                  href="/destinations"
                  className="group bg-white p-8 rounded-sm border border-[#E6DCce] hover:border-[#9B784A] transition-all hover:shadow-md flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-sm bg-[#F4EFE6] text-[#9B784A] flex items-center justify-center group-hover:bg-[#9B784A] group-hover:text-white transition-colors">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815] group-hover:text-[#9B784A] transition-colors">
                      Destinations
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                      Explore curated guides to St. Lucia, Riviera Maya, Tahiti, Costa Rica, and the Caribbean.
                    </p>
                  </div>
                  <div className="pt-6 flex items-center text-xs font-bold uppercase tracking-wider text-[#9B784A] group-hover:text-[#1C1815]">
                    <span>View All Destinations</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </MotionStaggerItem>

              {/* Gateway 2 */}
              <MotionStaggerItem>
                <Link
                  href="/packages"
                  className="group bg-white p-8 rounded-sm border border-[#E6DCce] hover:border-[#9B784A] transition-all hover:shadow-md flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-sm bg-[#F4EFE6] text-[#9B784A] flex items-center justify-center group-hover:bg-[#9B784A] group-hover:text-white transition-colors">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815] group-hover:text-[#9B784A] transition-colors">
                      Vacation Packages
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                      Browse curated sample packages, luxury inclusions, and romantic overwater escapes.
                    </p>
                  </div>
                  <div className="pt-6 flex items-center text-xs font-bold uppercase tracking-wider text-[#9B784A] group-hover:text-[#1C1815]">
                    <span>Explore Packages</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </MotionStaggerItem>

              {/* Gateway 3 */}
              <MotionStaggerItem>
                <Link
                  href="/how-it-works"
                  className="group bg-white p-8 rounded-sm border border-[#E6DCce] hover:border-[#9B784A] transition-all hover:shadow-md flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-sm bg-[#F4EFE6] text-[#9B784A] flex items-center justify-center group-hover:bg-[#9B784A] group-hover:text-white transition-colors">
                      <Sliders className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815] group-hover:text-[#9B784A] transition-colors">
                      How It Works
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                      Our 4-step collaborative journey from initial vision to VIP arrival and on-trip support.
                    </p>
                  </div>
                  <div className="pt-6 flex items-center text-xs font-bold uppercase tracking-wider text-[#9B784A] group-hover:text-[#1C1815]">
                    <span>Our 4-Step Process</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </MotionStaggerItem>

              {/* Gateway 4 */}
              <MotionStaggerItem>
                <Link
                  href="/about"
                  className="group bg-white p-8 rounded-sm border border-[#E6DCce] hover:border-[#9B784A] transition-all hover:shadow-md flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-sm bg-[#F4EFE6] text-[#9B784A] flex items-center justify-center group-hover:bg-[#9B784A] group-hover:text-white transition-colors">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815] group-hover:text-[#9B784A] transition-colors">
                      About Our Advisory
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                      Compare personalized human advisory against algorithmic mass-market booking platforms.
                    </p>
                  </div>
                  <div className="pt-6 flex items-center text-xs font-bold uppercase tracking-wider text-[#9B784A] group-hover:text-[#1C1815]">
                    <span>The Advisory Advantage</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </MotionStaggerItem>
            </MotionStaggerContainer>
          </div>
        </section>

        {/* 4. Featured Destination Spotlight */}
        <section className="py-14 sm:py-18 bg-white border-y border-[#E6DCce]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionFadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold">
                  Hand-Selected Sanctuaries
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1815] mt-1">
                  Featured Destinations
                </h2>
              </div>
              <Link
                href="/destinations"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#9B784A] hover:text-[#1C1815] transition-colors"
              >
                <span>Browse All 8 Regions</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </MotionFadeIn>

            <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredDestinations.map((dest) => (
                <MotionStaggerItem key={dest.id}>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="group bg-[#FAF8F5] rounded-sm overflow-hidden border border-[#E6DCce] hover:border-[#9B784A] transition-all hover:shadow-md flex flex-col h-full"
                  >
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={dest.heroImage}
                        alt={dest.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] uppercase font-bold tracking-wider rounded-xs">
                          {dest.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between grow space-y-4">
                      <div>
                        <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815] group-hover:text-[#9B784A] transition-colors">
                          {dest.name}
                        </h3>
                        <p className="text-xs text-[#78716C] line-clamp-2 mt-2 leading-relaxed">
                          {dest.tagline}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[#E6DCce] flex items-center justify-between text-xs text-[#9B784A] font-semibold">
                        <span>Explore Destination Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </MotionStaggerItem>
              ))}
            </MotionStaggerContainer>
          </div>
        </section>

        {/* 5. Founder Welcome / Advisory Ethos */}
        <section className="py-14 sm:py-18 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <MotionFadeIn direction="left" className="lg:col-span-5">
                <div className="relative aspect-4/5 rounded-sm overflow-hidden border border-[#E6DCce] shadow-lg">
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
                      Founder &amp; Principal Advisor
                    </span>
                    <p className="font-serif-luxury text-2xl font-bold">{ADVISOR_PROFILE.name}</p>
                  </div>
                </div>
              </MotionFadeIn>

              <MotionFadeIn direction="right" className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold">
                  Personalized Planning
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1815]">
                  A Message from Your Travel Advisor
                </h2>
                <p className="text-base text-[#57534E] leading-relaxed">
                  &ldquo;{ADVISOR_PROFILE.personalQuote}&rdquo;
                </p>
                <p className="text-sm text-[#78716C] leading-relaxed">
                  With certified affiliations across CLIA, ASTA, and premier luxury resort partners, we provide direct human advocacy, exclusive VIP privileges, and personalized care from your initial consultation until you return home.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="px-6 py-3.5 bg-[#1C1815] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#9B784A] transition-colors"
                  >
                    Read Our Full Story
                  </Link>

                  <Link
                    href="/contact"
                    className="px-6 py-3.5 bg-white border border-[#D3C4AF] text-[#1C1815] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#F4EFE6] transition-colors"
                  >
                    Contact Concierge
                  </Link>
                </div>
              </MotionFadeIn>
            </div>
          </div>
        </section>

        {/* 6. Clean Closing Call to Action */}
        <section className="py-12 sm:py-16 bg-[#1C1815] text-white">
          <MotionFadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              Begin Your Vacation Consultation
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Escape the Ordinary?
            </h2>
            <p className="text-sm sm:text-base text-[#A8A29E] max-w-xl mx-auto leading-relaxed">
              Take 3 minutes to tell us about your dream destination, travel dates, and preferred atmosphere. We handle the rest.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton strength={8}>
                <Link
                  href="/travel-inquiry"
                  className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] text-[#1C1815] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors block text-center"
                >
                  Launch Digital Planner
                </Link>
              </MagneticButton>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-colors block text-center"
              >
                Contact Advisory
              </Link>
            </div>
          </MotionFadeIn>
        </section>
      </main>

      {/* Site Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Interactive Modal */}
      <PlanYourTripModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialData={inquiryPrefill}
      />
    </div>
  );
}
