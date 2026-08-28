'use client';

import React, { useState } from 'react';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import { ShieldCheck, Sparkles, CheckCircle2, Users, Award } from 'lucide-react';

export default function ForTravelAdvisorsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [advisorForm, setAdvisorForm] = useState({
    name: '',
    email: '',
    phone: '',
    experienceLevel: 'Experienced (2+ years)',
    currentNiche: 'Luxury Caribbean & All-Inclusive',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header />

      <main className="grow pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#9B784A] text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Advisor Affiliation</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1C1815]">
              Partner With Luxe Fantasy Vacations
            </h1>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              We provide ambitious travel advisors with industry-leading commission splits, luxury supplier partnerships, and a collaborative environment built on excellence.
            </p>
          </div>

          {/* Pillars for Advisors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 sm:mb-12">
            <div className="bg-white p-6 rounded-sm border border-[#E6DCce] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E6DCce] flex items-center justify-center text-[#9B784A]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                Top-Tier Supplier Access
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Unlock elevated commission tiers with Sandals, Virgin Voyages, Four Seasons, Rosewood, and premier Caribbean luxury DMCs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-[#E6DCce] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E6DCce] flex items-center justify-center text-[#9B784A]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                Mentorship &amp; Support
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Direct mentorship from our Principal Travel Advisor, regular supplier webinars, and client qualification frameworks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-[#E6DCce] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E6DCce] flex items-center justify-center text-[#9B784A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                Modern Digital Assets
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Access to our high-converting editorial dossiers, client intake templates, and marketing materials.
              </p>
            </div>
          </div>

          {/* Advisor Inquiry Form */}
          <div className="bg-white p-8 sm:p-12 rounded-sm border border-[#E6DCce] shadow-xs max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#F4EFE6] text-[#9B784A] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm text-[#57534E]">
                  We review all advisor affiliation inquiries confidentially and will reach back out to {advisorForm.email} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center space-y-1 pb-4 border-b border-[#F4EFE6]">
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                    Inquire About Joining Our Advisory
                  </h3>
                  <p className="text-xs text-[#78716C]">
                    Tell us briefly about your travel advisory background and goals.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={advisorForm.name}
                    onChange={(e) => setAdvisorForm({ ...advisorForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={advisorForm.email}
                      onChange={(e) => setAdvisorForm({ ...advisorForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={advisorForm.phone}
                      onChange={(e) => setAdvisorForm({ ...advisorForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1">
                    Experience Level
                  </label>
                  <select
                    value={advisorForm.experienceLevel}
                    onChange={(e) => setAdvisorForm({ ...advisorForm, experienceLevel: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                  >
                    <option value="New to Industry (Seeking Host & Training)">New to Industry (Seeking Host &amp; Training)</option>
                    <option value="1–2 Years Experience">1–2 Years Experience</option>
                    <option value="Experienced (2+ years)">Experienced (2+ years)</option>
                    <option value="High Producer ($1M+ annual sales)">High Producer ($1M+ annual sales)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What destinations do you love selling? What are your growth goals?"
                    value={advisorForm.message}
                    onChange={(e) => setAdvisorForm({ ...advisorForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1C1815] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#9B784A] transition-colors cursor-pointer"
                >
                  Submit Advisor Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
