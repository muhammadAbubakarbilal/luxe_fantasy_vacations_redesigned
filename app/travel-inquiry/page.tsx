'use client';

import React, { useState } from 'react';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import { InquiryFormData } from '@/src/types';
import { Sparkles, CheckCircle2, Clock, Shield, ArrowRight, ArrowLeft, Send, ShieldCheck, Award } from 'lucide-react';
import Link from 'next/link';

export default function TravelInquiryPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<InquiryFormData>({
    destination: '',
    flexibleDates: true,
    travelMonthOrDates: '',
    tripDurationDays: '7 Nights',
    adultsCount: 2,
    childrenCount: 0,
    roomsCount: 1,
    travelerType: 'Couple',
    celebrationOccasion: '',
    travelStyles: ['All-Inclusive Resort', 'Romantic Escape'],
    priorities: ['Pristine Beach & Calm Water', 'Gourmet Dining & Wine'],
    budgetRange: '$5,000 – $8,000',
    flightAssistanceNeeded: true,
    departureCity: '',
    fullName: '',
    email: '',
    phone: '',
    preferredContactMethod: 'Email',
    specialRequests: '',
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const toggleStyle = (style: string) => {
    setFormData((prev) => {
      const exists = prev.travelStyles.includes(style);
      return {
        ...prev,
        travelStyles: exists ? prev.travelStyles.filter((s) => s !== style) : [...prev.travelStyles, style],
      };
    });
  };

  const togglePriority = (p: string) => {
    setFormData((prev) => {
      const exists = prev.priorities.includes(p);
      return {
        ...prev,
        priorities: exists ? prev.priorities.filter((item) => item !== p) : [...prev.priorities, p],
      };
    });
  };

  const isStepValid = () => {
    if (currentStep === 1) return formData.destination.trim().length > 0 || formData.travelMonthOrDates.trim().length > 0;
    if (currentStep === 6) return formData.fullName.trim().length > 1 && formData.email.includes('@');
    return true;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header />

      <main className="grow pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Intro */}
          <div className="text-center space-y-3 mb-6 sm:mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
              Digital Travel Consultation
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1C1815]">
              Let&apos;s Plan Your Next Escape
            </h1>
            <p className="text-sm sm:text-base text-[#78716C] max-w-xl mx-auto leading-relaxed">
              Share your vision with us in six brief steps. Our Principal Travel Advisor personally reviews every submission to prepare a custom travel proposal.
            </p>
          </div>

          {/* Consultation Container Card */}
          <div className="bg-white rounded-sm border border-[#E6DCce] shadow-xs overflow-hidden">
            {!isSubmitted ? (
              <div>
                {/* Progress Bar */}
                <div className="bg-[#F4EFE6] px-6 py-4 border-b border-[#E6DCce] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#1C1815]">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span className="text-xs text-[#78716C]">
                      • {
                        currentStep === 1 ? 'Destination & Timing' :
                        currentStep === 2 ? 'Travelers & Occasion' :
                        currentStep === 3 ? 'Travel Style' :
                        currentStep === 4 ? 'Vacation Priorities' :
                        currentStep === 5 ? 'Budget Expectations' :
                        'Contact & Final Notes'
                      }
                    </span>
                  </div>
                  <div className="w-24 sm:w-36 h-2 bg-[#E6DCce] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9B784A] transition-all duration-300"
                      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-10 space-y-8">
                  {/* STEP 1: DESTINATION & TIMING */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                          Where would you love to travel?
                        </h2>
                        <p className="text-xs sm:text-sm text-[#78716C]">
                          Select a specific island or describe your general tropical preference.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-2">
                            Destination Preference *
                          </label>
                          <input
                            type="text"
                            value={formData.destination}
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                            placeholder="e.g. St. Lucia, Riviera Maya, Turks & Caicos, Open to Suggestions"
                            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815] focus:outline-none focus:border-[#9B784A]"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-2">
                              Target Travel Dates / Month
                            </label>
                            <input
                              type="text"
                              value={formData.travelMonthOrDates}
                              onChange={(e) => setFormData({ ...formData, travelMonthOrDates: e.target.value })}
                              placeholder="e.g. October 2026, Spring Break, Late Nov"
                              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815] focus:outline-none focus:border-[#9B784A]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-2">
                              Approximate Duration
                            </label>
                            <select
                              value={formData.tripDurationDays}
                              onChange={(e) => setFormData({ ...formData, tripDurationDays: e.target.value })}
                              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815] focus:outline-none focus:border-[#9B784A]"
                            >
                              <option value="4-5 Nights">4–5 Nights (Quick Escape)</option>
                              <option value="7 Nights">7 Nights (Classic Week)</option>
                              <option value="10-12 Nights">10–12 Nights (Extended Sanctuary)</option>
                              <option value="14+ Nights">14+ Nights (Grand Journey)</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                          <input
                            type="checkbox"
                            id="flexibleDates"
                            checked={formData.flexibleDates}
                            onChange={(e) => setFormData({ ...formData, flexibleDates: e.target.checked })}
                            className="w-4 h-4 text-[#9B784A] border-[#E6DCce] rounded focus:ring-0"
                          />
                          <label htmlFor="flexibleDates" className="text-xs text-[#57534E]">
                            My travel dates are flexible (+/- 3 to 5 days for better rates/villas)
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: TRAVELERS & OCCASION */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                          Who is traveling with you?
                        </h2>
                        <p className="text-xs sm:text-sm text-[#78716C]">
                          This helps us select adults-only vs family-friendly properties and suit count.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-2">
                              Adults
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="30"
                              value={formData.adultsCount}
                              onChange={(e) => setFormData({ ...formData, adultsCount: parseInt(e.target.value) || 1 })}
                              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-2">
                              Children
                            </label>
                            <input
                              type="number"
                              min="0"
                              max="20"
                              value={formData.childrenCount}
                              onChange={(e) => setFormData({ ...formData, childrenCount: parseInt(e.target.value) || 0 })}
                              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-2">
                              Rooms/Suites
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="15"
                              value={formData.roomsCount}
                              onChange={(e) => setFormData({ ...formData, roomsCount: parseInt(e.target.value) || 1 })}
                              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-2">
                            Celebration or Special Occasion?
                          </label>
                          <input
                            type="text"
                            value={formData.celebrationOccasion}
                            onChange={(e) => setFormData({ ...formData, celebrationOccasion: e.target.value })}
                            placeholder="e.g. Honeymoon, 10th Anniversary, 50th Birthday, Family Reunion"
                            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815]"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: TRAVEL STYLE */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                          What type of vacation experience do you prefer?
                        </h2>
                        <p className="text-xs sm:text-sm text-[#78716C]">
                          Select all that appeal to your group.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { title: 'All-Inclusive Luxury Resort', desc: 'Gourmet dining, top-shelf spirits, zero bill stress' },
                          { title: 'Luxury Cruise / Ship-in-Ship Suite', desc: 'Unpack once, visit multiple ports with butler service' },
                          { title: 'Private Villa or Estate Sanctuary', desc: 'Private chef, plunge pool, ultimate seclusion' },
                          { title: 'Romantic Honeymoon / Couples Only', desc: 'Adults-only tranquility and intimate beachfront dining' },
                          { title: 'Family-Friendly Luxury', desc: 'Supervised kids activities, calm waters, multi-bedroom suites' },
                          { title: 'Group & Milestone Celebration', desc: 'Group room block, shared yacht charters, coordinated billing' },
                        ].map((style) => {
                          const isSelected = formData.travelStyles.includes(style.title);
                          return (
                            <button
                              key={style.title}
                              type="button"
                              onClick={() => toggleStyle(style.title)}
                              className={`p-4 text-left rounded-sm border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#F4EFE6] border-[#9B784A] text-[#1C1815] shadow-xs'
                                  : 'bg-[#FAF8F5] border-[#E6DCce] text-[#57534E] hover:border-[#9B784A]'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#1C1815]">
                                  {style.title}
                                </span>
                                {isSelected && <CheckCircle2 className="w-4 h-4 text-[#9B784A]" />}
                              </div>
                              <p className="text-xs text-[#78716C] leading-snug">{style.desc}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 4: PRIORITIES */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                          Top Vacation Priorities &amp; Desires
                        </h2>
                        <p className="text-xs sm:text-sm text-[#78716C]">
                          Choose the features that will make this trip truly memorable.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {[
                          'Pristine Beach & Calm Water',
                          'Gourmet Fine Dining',
                          'Private Infinity Pool',
                          'Spa & Wellness Rituals',
                          'Catamaran & Sailing',
                          'Butler Service',
                          'Snorkeling & Diving',
                          'Adults-Only Atmosphere',
                          'Championship Golf',
                          'Cultural Excursions',
                          'VIP Fast-Track Customs',
                          'Helicopter Airport Transfer'
                        ].map((item) => {
                          const isSelected = formData.priorities.includes(item);
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => togglePriority(item)}
                              className={`p-3 text-left text-xs font-semibold rounded-sm border transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-[#1C1815] text-[#FAF8F5] border-[#1C1815]'
                                  : 'bg-[#FAF8F5] text-[#2C2621] border-[#E6DCce] hover:bg-[#F4EFE6]'
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 5: BUDGET */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                          Budget Investment Range
                        </h2>
                        <p className="text-xs sm:text-sm text-[#78716C]">
                          Realistic guidelines allow us to select room tiers that maximize value without wasting time.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          '$4,000 – $6,000 total',
                          '$6,000 – $10,000 total',
                          '$10,000 – $15,000 total',
                          '$15,000+ total luxury investment',
                        ].map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setFormData({ ...formData, budgetRange: range })}
                            className={`p-4 text-center text-xs font-bold uppercase tracking-wider rounded-sm border transition-colors cursor-pointer ${
                              formData.budgetRange === range
                                ? 'bg-[#9B784A] text-white border-[#9B784A]'
                                : 'bg-[#FAF8F5] text-[#1C1815] border-[#E6DCce] hover:bg-[#F4EFE6]'
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-[#E6DCce]">
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-2">
                          Departure Airport / City (If flight assistance is requested)
                        </label>
                        <input
                          type="text"
                          value={formData.departureCity}
                          onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                          placeholder="e.g. JFK, ORD, MIA, LAX, ATL"
                          className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815]"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 6: CONTACT & NOTES */}
                  {currentStep === 6 && (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                          Where should we send your custom itinerary?
                        </h2>
                        <p className="text-xs sm:text-sm text-[#78716C]">
                          We protect your privacy. Your information is never sold or shared.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Eleanor Vance"
                            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815]"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="eleanor@example.com"
                              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="(555) 000-0000"
                              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-[#1C1815] mb-1">
                            Additional Details or Specific Dreams
                          </label>
                          <textarea
                            rows={3}
                            value={formData.specialRequests}
                            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                            placeholder="Tell us about dietary preferences, favourite resort brands, or must-have features..."
                            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E6DCce] rounded-sm text-sm text-[#1C1815]"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Controls */}
                  <div className="pt-6 border-t border-[#E6DCce] flex items-center justify-between">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#78716C] hover:text-[#1C1815] transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4 mr-1.5" />
                        <span>Back</span>
                      </button>
                    ) : <div />}

                    <button
                      type="button"
                      disabled={!isStepValid()}
                      onClick={handleNext}
                      className={`inline-flex items-center px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                        isStepValid()
                          ? 'bg-[#C5A880] text-[#1C1815] hover:bg-[#1C1815] hover:text-[#FAF8F5] shadow-sm'
                          : 'bg-[#E6DCce] text-[#78716C] cursor-not-allowed'
                      }`}
                    >
                      <span>{currentStep === totalSteps ? 'Submit Travel Inquiry' : 'Continue'}</span>
                      {currentStep === totalSteps ? (
                        <Send className="w-3.5 h-3.5 ml-2" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 ml-2" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Submission Confirmation Screen */
              <div className="p-10 sm:p-14 text-center space-y-6">
                <div className="w-16 h-16 bg-[#F4EFE6] text-[#9B784A] rounded-full flex items-center justify-center mx-auto border border-[#E6DCce]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9B784A] font-semibold">
                    Inquiry Received
                  </span>
                  <h2 className="font-serif-luxury text-3xl font-bold text-[#1C1815]">
                    Thank You, {formData.fullName || 'Traveler'}
                  </h2>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    Our Principal Travel Advisor has received your travel vision. We will review property availability and contact you within 24 business hours with initial concepts.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/packages"
                    className="px-6 py-3 bg-[#1C1815] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#9B784A] transition-colors"
                  >
                    Browse Featured Packages
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-3 bg-white border border-[#E6DCce] text-[#1C1815] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#F4EFE6] transition-colors"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Industry Accreditation & Trust Banner */}
          <div className="mt-8 p-6 bg-white rounded-sm border border-[#E6DCce] flex flex-wrap items-center justify-between gap-4 text-xs text-[#78716C]">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#9B784A]" />
              <span>CLIA &amp; ASTA Certified Luxury Travel Advisory</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#9B784A]" />
              <span>Virtuoso &amp; Preferred Supplier VIP Amenities</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#9B784A]" />
              <span>Guaranteed Response Within 24 Hours</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
