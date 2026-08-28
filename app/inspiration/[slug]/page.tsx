'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

const PlanYourTripModal = dynamic(() => import('@/src/components/forms/PlanYourTripModal'), { ssr: false });
import { ARTICLES } from '@/src/data/articles';
import { ArrowLeft, Clock, CheckCircle2, Sparkles, ArrowRight, BookOpen } from 'lucide-react';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header onOpenInquiry={() => setIsInquiryOpen(true)} />

      <main className="grow pt-20 sm:pt-24 pb-12 sm:pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Back Link */}
          <div className="mb-4 sm:mb-6">
            <Link
              href="/inspiration"
              className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#78716C] hover:text-[#1C1815] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Travel Journal
            </Link>
          </div>

          {/* Article Header */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-xs text-[#78716C]">
              <span className="px-2.5 py-1 bg-[#F4EFE6] text-[#9B784A] font-bold rounded-full uppercase tracking-wider">
                {article.category}
              </span>
              <span>·</span>
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#9B784A]" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1C1815] leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed italic font-serif-luxury">
              {article.excerpt}
            </p>
          </div>

          {/* Featured Hero Image */}
          <div className="relative h-72 sm:h-[450px] w-full rounded-sm overflow-hidden border border-[#E6DCce] shadow-xs mb-10">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-base text-[#2C2621] leading-relaxed font-sans-clean">
            {article.contentParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="my-10 p-6 sm:p-8 bg-[#F4EFE6] rounded-sm border border-[#E6DCce] space-y-4">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
              Key Takeaways for Your Next Trip:
            </h3>
            <div className="space-y-3">
              {article.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-[#57534E]">
                  <CheckCircle2 className="w-4 h-4 text-[#9B784A] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inline Planning CTA */}
          <div className="p-8 bg-[#1C1815] text-[#FAF8F5] rounded-sm text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
              Put This Advice Into Action
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Ready to Design Your Personalized Journey?
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A29E] max-w-md mx-auto">
              Our travel specialists will take your ideas and turn them into a curated, stress-free vacation.
            </p>
            <button
              type="button"
              onClick={() => setIsInquiryOpen(true)}
              className="inline-flex items-center px-6 py-3.5 bg-[#FAF8F5] text-[#1C1815] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#C5A880] hover:text-white transition-colors cursor-pointer"
            >
              <span>Start Planning My Vacation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </article>
      </main>

      <Footer onOpenInquiry={() => setIsInquiryOpen(true)} />

      <PlanYourTripModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
}
