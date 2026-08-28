'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Shield, Clock, Heart, Calendar, Users, Compass, DollarSign, Send } from 'lucide-react';
import { InquiryFormData } from '@/src/types';

interface PlanYourTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    destination?: string;
    tripType?: string;
  };
}

export default function PlanYourTripModal({ isOpen, onClose, initialData }: PlanYourTripModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<InquiryFormData>({
    destination: initialData?.destination || '',
    flexibleDates: true,
    travelMonthOrDates: '',
    tripDurationDays: '7 Nights',
    adultsCount: 2,
    childrenCount: 0,
    roomsCount: 1,
    travelerType: 'Couple',
    celebrationOccasion: '',
    travelStyles: initialData?.tripType ? [initialData.tripType] : ['All-Inclusive', 'Romantic Escape'],
    priorities: ['Pristine Beach', 'Fine Dining & Wine'],
    budgetRange: '$5,000 – $10,000',
    flightAssistanceNeeded: true,
    departureCity: '',
    fullName: '',
    email: '',
    phone: '',
    preferredContactMethod: 'Email',
    specialRequests: '',
  });

  if (!isOpen) return null;

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
    <div
      id="plan-trip-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        id="plan-trip-modal-content"
        className="bg-[#FAF8F5] text-[#1C1815] w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden border border-[#E6DCce] relative my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1C1815] text-[#FAF8F5] px-6 py-5 flex items-center justify-between border-b border-[#2C2621]">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-sans-clean font-semibold block">
              Personalized Vacation Planning
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Start Planning Your Journey
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#A8A29E] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="bg-[#F4EFE6] px-6 py-3 border-b border-[#E6DCce] flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-medium text-[#78716C]">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>·</span>
              <span className="text-[#1C1815] font-semibold">
                {currentStep === 1 && 'Destination & Dates'}
                {currentStep === 2 && 'Who is Traveling?'}
                {currentStep === 3 && 'Travel Style'}
                {currentStep === 4 && 'Trip Priorities'}
                {currentStep === 5 && 'Budget & Comfort'}
                {currentStep === 6 && 'Your Details'}
              </span>
            </div>
            <div className="w-32 bg-[#E6DCce] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#9B784A] h-full transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-[#F4EFE6] text-[#9B784A] rounded-full flex items-center justify-center mx-auto border border-[#E6DCce]">
                <CheckCircle2 className="w-8 h-8 text-[#9B784A]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#9B784A] font-semibold">
                  Inquiry Received
                </span>
                <h4 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1815]">
                  Thank You, {formData.fullName || 'Traveler'}
                </h4>
                <p className="text-sm text-[#78716C] max-w-md mx-auto leading-relaxed">
                  Your trip preferences have been sent directly to our Principal Travel Advisor. We will personally review your ideas and reach out to you at <span className="font-semibold text-[#1C1815]">{formData.email}</span>.
                </p>
              </div>

              {/* What Happens Next Box */}
              <div className="bg-[#F4EFE6] p-5 rounded-sm border border-[#E6DCce] text-left max-w-lg mx-auto space-y-3">
                <h5 className="text-xs uppercase tracking-widest font-bold text-[#1C1815] flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-[#9B784A]" />
                  What Happens Next?
                </h5>
                <ul className="text-xs text-[#57534E] space-y-2">
                  <li className="flex items-start">
                    <span className="font-semibold text-[#1C1815] mr-2">1.</span>
                    <span>Advisor Review: We research options matching your vibe, party, and preferences within 24–48 hours.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#1C1815] mr-2">2.</span>
                    <span>Curated Proposal: We present 2–3 hand-picked resort, cruise, or sanctuary options.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#1C1815] mr-2">3.</span>
                    <span>Seamless Booking: Once you love the plan, we lock in reservations and handle all details.</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center px-6 py-3 bg-[#1C1815] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#9B784A] transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            /* Step-by-Step Questionnaire */
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
              {/* STEP 1: Destination & Dates */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                      Where are you dreaming of going?
                    </h4>
                    <p className="text-xs text-[#78716C]">
                      Tell us a specific island, region, or general vibe (e.g., &ldquo;Warm Caribbean Beach&rdquo; or &ldquo;St. Lucia&rdquo;).
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1.5">
                        Target Destination or Region
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. St. Lucia, Riviera Maya, Eastern Caribbean, Turks & Caicos, or Undecided"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#D3C4AF] rounded-sm text-sm focus:outline-hidden focus:border-[#9B784A] transition-colors"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1.5">
                          Approximate Travel Dates / Month
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. November 2026, Spring Break, or Specific Dates"
                          value={formData.travelMonthOrDates}
                          onChange={(e) => setFormData({ ...formData, travelMonthOrDates: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-[#D3C4AF] rounded-sm text-sm focus:outline-hidden focus:border-[#9B784A] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1.5">
                          Ideal Trip Duration
                        </label>
                        <select
                          value={formData.tripDurationDays}
                          onChange={(e) => setFormData({ ...formData, tripDurationDays: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-[#D3C4AF] rounded-sm text-sm focus:outline-hidden focus:border-[#9B784A] transition-colors"
                        >
                          <option value="4–5 Nights (Long Weekend)">4–5 Nights (Long Weekend)</option>
                          <option value="7 Nights (Standard Week)">7 Nights (Standard Week)</option>
                          <option value="10–14 Nights (Extended Escape)">10–14 Nights (Extended Escape)</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Travelers */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                      Who is traveling with you?
                    </h4>
                    <p className="text-xs text-[#78716C]">
                      This helps us recommend adult-only vs family-friendly luxury properties.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { type: 'Couple', label: 'Couples / Romantic', desc: 'Honeymoon, Anniversary, or Romantic Escape' },
                      { type: 'Family', label: 'Family with Kids', desc: 'Calm beaches & family suites' },
                      { type: 'Friends/Group', label: 'Friends & Group', desc: 'Milestone birthday, reunion, or celebration' },
                      { type: 'Solo', label: 'Solo Traveler', desc: 'Restorative personal wellness retreat' },
                    ].map((item) => (
                      <button
                        key={item.type}
                        type="button"
                        onClick={() => setFormData({ ...formData, travelerType: item.type as any })}
                        className={`p-4 text-left rounded-sm border transition-all ${
                          formData.travelerType === item.type
                            ? 'bg-[#F4EFE6] border-[#9B784A] text-[#1C1815] shadow-xs'
                            : 'bg-white border-[#E6DCce] hover:border-[#D3C4AF] text-[#2C2621]'
                        }`}
                      >
                        <div className="text-sm font-bold">{item.label}</div>
                        <div className="text-xs text-[#78716C] mt-1">{item.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1.5">
                        Adults (18+)
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={30}
                        value={formData.adultsCount}
                        onChange={(e) => setFormData({ ...formData, adultsCount: parseInt(e.target.value) || 1 })}
                        className="w-full px-3 py-2 bg-white border border-[#D3C4AF] rounded-sm text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1.5">
                        Children
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={15}
                        value={formData.childrenCount}
                        onChange={(e) => setFormData({ ...formData, childrenCount: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 bg-white border border-[#D3C4AF] rounded-sm text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1.5">
                        Rooms
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={15}
                        value={formData.roomsCount}
                        onChange={(e) => setFormData({ ...formData, roomsCount: parseInt(e.target.value) || 1 })}
                        className="w-full px-3 py-2 bg-white border border-[#D3C4AF] rounded-sm text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1.5">
                      Are you celebrating a special occasion? (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Honeymoon, 10th Anniversary, 40th Birthday, Retirement"
                      value={formData.celebrationOccasion}
                      onChange={(e) => setFormData({ ...formData, celebrationOccasion: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#D3C4AF] rounded-sm text-sm"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Travel Style */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                      What type of experience are you drawn to?
                    </h4>
                    <p className="text-xs text-[#78716C]">
                      Select all that apply — we tailor the balance of your trip.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Five-Star All-Inclusive Resort',
                      'Luxury Cruise / Suite Class',
                      'Boutique Island Sanctuary',
                      'Over-the-Water Bungalow',
                      'Adults-Only Relaxation',
                      'Multi-Destination Island Hopper',
                    ].map((style) => {
                      const isSelected = formData.travelStyles.includes(style);
                      return (
                        <button
                          key={style}
                          type="button"
                          onClick={() => toggleStyle(style)}
                          className={`p-3.5 text-left rounded-sm border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#1C1815] text-white border-[#1C1815]'
                              : 'bg-white border-[#E6DCce] text-[#2C2621] hover:border-[#D3C4AF]'
                          }`}
                        >
                          <span>{style}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: What Matters Most */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                      What matters most on this vacation?
                    </h4>
                    <p className="text-xs text-[#78716C]">
                      Select your top vacation priorities so we can target the right property strengths.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      'Pristine Beach & Calm Water',
                      'Gourmet Dining & Wine',
                      'Spa & Hydrotherapy',
                      'Private Plunge Pool / Swim-Up',
                      'Private Yacht & Excursions',
                      'Total Seclusion & Quiet',
                      'Oceanfront Golf',
                      'Lively Nightlife & Socializing',
                      'VIP Airport Fast-Track',
                    ].map((priority) => {
                      const isSelected = formData.priorities.includes(priority);
                      return (
                        <button
                          key={priority}
                          type="button"
                          onClick={() => togglePriority(priority)}
                          className={`p-3 text-left rounded-sm border text-xs font-medium transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#F4EFE6] border-[#9B784A] text-[#1C1815] font-semibold'
                              : 'bg-white border-[#E6DCce] text-[#2C2621] hover:border-[#D3C4AF]'
                          }`}
                        >
                          <span>{priority}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#9B784A] shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Budget & Preferences */}
              {currentStep === 5 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                      Estimated Budget & Flights
                    </h4>
                    <p className="text-xs text-[#78716C]">
                      A realistic range allows us to recommend the highest quality accommodations within your target.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider">
                      Target Vacation Budget (Total for party, excluding or including flights)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        '$3,500 – $5,000',
                        '$5,000 – $8,000',
                        '$8,000 – $12,000',
                        '$12,000 – $20,000+',
                        'Luxury Ultra ($25,000+)',
                        'Flexible / Open to advisor recommendation',
                      ].map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: budget })}
                          className={`p-3 text-left rounded-sm border text-xs sm:text-sm font-medium transition-all ${
                            formData.budgetRange === budget
                              ? 'bg-[#F4EFE6] border-[#9B784A] text-[#1C1815] font-bold'
                              : 'bg-white border-[#E6DCce] text-[#2C2621] hover:border-[#D3C4AF]'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#E6DCce]">
                      <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1.5">
                        Departure City / Airport (If flight assistance is desired)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. New York (JFK), Atlanta (ATL), Chicago (ORD), Miami (MIA)"
                        value={formData.departureCity}
                        onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#D3C4AF] rounded-sm text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: Contact & Notes */}
              {currentStep === 6 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-bold text-[#1C1815]">
                      Where should we send your travel plan?
                    </h4>
                    <p className="text-xs text-[#78716C]">
                      Your details are kept strictly private and used only for your personalized itinerary consultation.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="First and Last Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#D3C4AF] rounded-sm text-sm focus:outline-hidden focus:border-[#9B784A]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-[#D3C4AF] rounded-sm text-sm focus:outline-hidden focus:border-[#9B784A]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-[#D3C4AF] rounded-sm text-sm focus:outline-hidden focus:border-[#9B784A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1815] uppercase tracking-wider mb-1">
                        Special Requests, Dream Resorts, or Specific Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us anything else: dietary requirements, favorite past resorts, surprise anniversary ideas..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#D3C4AF] rounded-sm text-sm focus:outline-hidden focus:border-[#9B784A]"
                      />
                    </div>

                    <div className="flex items-center space-x-2 text-[11px] text-[#78716C] pt-1">
                      <Shield className="w-3.5 h-3.5 text-[#9B784A]" />
                      <span>Zero spam guarantee. Handled personally by Luxe Fantasy Travel Advisory.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Navigation Buttons */}
              <div className="mt-8 pt-5 border-t border-[#E6DCce] flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center px-4 py-2.5 text-xs font-semibold text-[#57534E] hover:text-[#1C1815] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className={`inline-flex items-center px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-200 ${
                    isStepValid()
                      ? 'bg-[#1C1815] text-[#FAF8F5] hover:bg-[#9B784A] shadow-xs cursor-pointer'
                      : 'bg-[#D3C4AF] text-[#78716C] cursor-not-allowed'
                  }`}
                >
                  {currentStep === totalSteps ? (
                    <>
                      <span>Submit My Travel Inquiry</span>
                      <Send className="w-3.5 h-3.5 ml-2" />
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
