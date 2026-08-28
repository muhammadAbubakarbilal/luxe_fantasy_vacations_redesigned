'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

const PlanYourTripModal = dynamic(() => import('@/src/components/forms/PlanYourTripModal'), { ssr: false });
import { ARTICLES } from '@/src/data/articles';
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';

export default function InspirationPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header onOpenInquiry={() => setIsInquiryOpen(true)} />

      <main className="grow pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
              The Travel Journal
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1815]">
              Travel Inspiration &amp; Guides
            </h1>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Curated perspectives, island matchmaker comparisons, and insider advice from our boutique travel specialists.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-sm border border-[#E6DCce] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-[#1C1815]/90 text-white rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-xs text-[#78716C]">
                      <span>{article.publishedDate}</span>
                      <span>·</span>
                      <div className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-[#9B784A]" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815] group-hover:text-[#9B784A] transition-colors leading-snug">
                      <Link href={`/inspiration/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#57534E] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#F4EFE6]">
                  <Link
                    href={`/inspiration/${article.slug}`}
                    className="inline-flex items-center text-xs uppercase tracking-wider font-bold text-[#1C1815] hover:text-[#9B784A] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
