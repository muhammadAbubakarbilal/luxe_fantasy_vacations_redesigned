'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/src/data/faqs';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';
import { EASINGS, DURATIONS } from '@/src/lib/motion';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-18 lg:py-20 bg-[#F4EFE6] border-y border-[#E6DCce]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionFadeIn className="text-center space-y-3 mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
            Common Questions
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1815]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Everything you need to know about our advisory process, transparent fees, and trip planning.
          </p>
        </MotionFadeIn>

        {/* Minimal Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-sm border border-[#E6DCce] overflow-hidden transition-colors shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-lg sm:text-xl font-bold text-[#1C1815]">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E6DCce] flex items-center justify-center text-[#1C1815] shrink-0 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4 text-[#9B784A]" /> : <Plus className="w-4 h-4 text-[#1C1815]" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: DURATIONS.fast, ease: EASINGS.easeOutCubic }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-[#57534E] leading-relaxed border-t border-[#F4EFE6] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
