'use client';

import React from 'react';
import { ShieldCheck, Award, Shield, Sparkles } from 'lucide-react';

interface CertificationBadgeProps {
  id: 'clia' | 'asta' | 'iata' | 'vip';
  className?: string;
  showDetails?: boolean;
}

export function CertificationLogo({ id, className = 'p-5 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm space-y-2.5', showDetails = true }: CertificationBadgeProps) {
  if (id === 'clia') {
    return (
      <div className={className}>
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[#1C1815] text-[#C5A880] flex items-center justify-center font-serif-luxury font-bold text-xs tracking-wider border border-[#9B784A]">
            CLIA
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1C1815] block">
              CLIA Accredited
            </span>
            <span className="text-[10px] text-[#9B784A] tracking-wider uppercase font-semibold block">
              Cruise Specialist
            </span>
          </div>
        </div>
        {showDetails && (
          <p className="text-xs text-[#78716C] leading-relaxed pt-1">
            Cruise Lines International Association accredited specialist with direct suite allocations.
          </p>
        )}
      </div>
    );
  }

  if (id === 'asta') {
    return (
      <div className={className}>
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[#1C1815] text-[#C5A880] flex items-center justify-center font-serif-luxury font-bold text-xs tracking-wider border border-[#9B784A]">
            ASTA
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1C1815] block">
              ASTA Member
            </span>
            <span className="text-[10px] text-[#9B784A] tracking-wider uppercase font-semibold block">
              Consumer Protection Code
            </span>
          </div>
        </div>
        {showDetails && (
          <p className="text-xs text-[#78716C] leading-relaxed pt-1">
            American Society of Travel Advisors adhering to strict professional ethics and traveler protections.
          </p>
        )}
      </div>
    );
  }

  if (id === 'iata') {
    return (
      <div className={className}>
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[#1C1815] text-[#C5A880] flex items-center justify-center font-serif-luxury font-bold text-xs tracking-wider border border-[#9B784A]">
            IATA
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1C1815] block">
              IATA Accredited
            </span>
            <span className="text-[10px] text-[#9B784A] tracking-wider uppercase font-semibold block">
              Verified Global Agency
            </span>
          </div>
        </div>
        {showDetails && (
          <p className="text-xs text-[#78716C] leading-relaxed pt-1">
            International Air Transport Association verified global travel agency credentials and code.
          </p>
        )}
      </div>
    );
  }

  if (id === 'vip') {
    return (
      <div className={className}>
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[#1C1815] text-[#C5A880] flex items-center justify-center font-serif-luxury font-bold text-xs tracking-wider border border-[#9B784A]">
            VIP
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1C1815] block">
              Preferred Partner
            </span>
            <span className="text-[10px] text-[#9B784A] tracking-wider uppercase font-semibold block">
              Luxury Resort Network
            </span>
          </div>
        </div>
        {showDetails && (
          <p className="text-xs text-[#78716C] leading-relaxed pt-1">
            Direct priority relationships with luxury Caribbean, Mexico &amp; French Polynesia resorts.
          </p>
        )}
      </div>
    );
  }

  return null;
}

export function CertificationGroup({ className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' }: { className?: string }) {
  return (
    <div className={className}>
      <CertificationLogo id="clia" />
      <CertificationLogo id="asta" />
      <CertificationLogo id="iata" />
      <CertificationLogo id="vip" />
    </div>
  );
}
