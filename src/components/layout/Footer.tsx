import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Mail, Phone, ShieldCheck } from 'lucide-react';
import { ADVISOR_PROFILE } from '@/src/data/advisor';
import { SocialGroup } from '@/src/components/ui/SocialIcons';

interface FooterProps {
  onOpenInquiry?: () => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  return (
    <footer id="main-site-footer" className="bg-[#141210] text-[#E6DCce] pt-12 pb-8 sm:pt-14 sm:pb-10 border-t border-[#2C2621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-[#2C2621]">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif-luxury text-2xl uppercase tracking-widest text-white font-bold block">
                Luxe Fantasy
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-sans-clean font-medium block">
                Vacations · Travel Advisory
              </span>
            </Link>

            <p className="text-sm text-[#A8A29E] leading-relaxed max-w-sm">
              You bring the dream. Luxe Fantasy helps plan the journey. We craft bespoke Caribbean escapes, luxury cruises, all-inclusive sanctuaries, and romantic celebrations tailored exclusively to your personal travel rhythm.
            </p>

            <div className="pt-1 flex items-center space-x-3 text-xs text-[#C5A880]">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" aria-hidden="true" />
              <span>Certified Boutique Luxury Travel Specialist</span>
            </div>

            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#78716C] font-semibold block mb-2">
                Connect With Us
              </span>
              <SocialGroup />
            </div>
          </div>

          {/* Column 2: Discover Escapes */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Discover Escapes
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A8A29E]">
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white transition-colors">
                  Curated Packages
                </Link>
              </li>
              <li>
                <Link href="/destinations/st-lucia" className="hover:text-white transition-colors">
                  St. Lucia Sanctuaries
                </Link>
              </li>
              <li>
                <Link href="/destinations/riviera-maya" className="hover:text-white transition-colors">
                  Riviera Maya Luxury
                </Link>
              </li>
              <li>
                <Link href="/destinations/eastern-caribbean-cruise" className="hover:text-white transition-colors">
                  Eastern Caribbean Cruises
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Advisory */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              The Experience
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A8A29E]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Luxe Fantasy
                </Link>
              </li>
              <li>
                <Link href="/about#certifications" className="hover:text-white transition-colors">
                  Certifications &amp; Trust
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/inspiration" className="hover:text-white transition-colors">
                  Travel Inspiration
                </Link>
              </li>
              <li>
                <Link href="/travel-inquiry" className="hover:text-white transition-colors">
                  Plan Your Trip
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Contact &amp; Inquiries
            </h4>
            <div className="space-y-3 text-sm text-[#A8A29E]">
              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" aria-hidden="true" />
                <a href={`mailto:${ADVISOR_PROFILE.directEmail}`} className="hover:text-white transition-colors break-all">
                  {ADVISOR_PROFILE.directEmail}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" aria-hidden="true" />
                <a href={`tel:${ADVISOR_PROFILE.phoneNumberClean}`} className="hover:text-white transition-colors">
                  {ADVISOR_PROFILE.phoneDisplay}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/travel-inquiry"
                  className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#C5A880] hover:text-white transition-colors group"
                >
                  <span>Start Your Travel Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Travel Advisor Opportunity Strip (Clear & discreet secondary placement) */}
        <div className="py-6 border-b border-[#2C2621] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A29E]">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-[#C5A880]" aria-hidden="true" />
            <span>Interested in joining our network or building a career in luxury travel?</span>
          </div>
          <Link
            href="/for-travel-advisors"
            id="footer-advisor-opportunity-link"
            className="text-white hover:text-[#C5A880] font-medium underline underline-offset-4 tracking-wide"
          >
            Explore Travel Advisor Opportunities →
          </Link>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p>© {new Date().getFullYear()} Luxe Fantasy Vacations. All rights reserved. Personalized Travel Planning.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-[#A8A29E] transition-colors">
              About Advisor
            </Link>
            <Link href="/how-it-works" className="hover:text-[#A8A29E] transition-colors">
              Planning Terms
            </Link>
            <span className="text-[#44403C]">|</span>
            <span className="text-[#A8A29E] flex items-center">
              Crafted with bespoke care
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
