'use client';

import React, { useState } from 'react';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import { Mail, Phone, Clock, MapPin, CheckCircle2, Send } from 'lucide-react';
import Link from 'next/link';
import MotionFadeIn from '@/src/components/motion/MotionFadeIn';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Vacation Planning Consultation',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <MotionFadeIn direction="up" distance={20} className="max-w-3xl space-y-4 mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9B784A] font-semibold font-sans-clean">
              Direct Advisory Communication
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1815]">
              Contact Our Advisory
            </h1>
            <p className="text-base sm:text-lg text-[#78716C] leading-relaxed">
              Have questions about our process, a specific luxury resort, or need immediate assistance with an upcoming journey? We are here to help.
            </p>
          </MotionFadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Info & Hours */}
            <MotionFadeIn direction="up" distance={20} className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-sm border border-[#E6DCce] shadow-xs space-y-6">
                <h2 className="font-serif-luxury text-2xl font-bold text-[#1C1815] pb-3 border-b border-[#F4EFE6]">
                  Advisory Channels
                </h2>

                <div className="space-y-4 text-sm text-[#57534E]">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[#9B784A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#1C1815] uppercase tracking-wider block">Email</span>
                      <a href="mailto:inquiries@luxefantasyvacations.com" className="hover:text-[#9B784A] transition-colors">
                        inquiries@luxefantasyvacations.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#9B784A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#1C1815] uppercase tracking-wider block">Direct Concierge</span>
                      <a href="tel:+18005558920" className="hover:text-[#9B784A] transition-colors">
                        (800) 555-LUXE (5893)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#9B784A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#1C1815] uppercase tracking-wider block">Hours of Operation</span>
                      <p className="text-xs text-[#78716C]">
                        Monday – Friday: 9:00 AM – 6:00 PM EST<br />
                        Saturday: By appointment for booked travelers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#9B784A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#1C1815] uppercase tracking-wider block">Advisory Headquarters</span>
                      <p className="text-xs text-[#78716C]">
                        Luxe Fantasy Vacations Advisory<br />
                        Boutique Luxury Travel Consultation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F4EFE6]">
                  <p className="text-xs text-[#78716C] leading-relaxed">
                    Ready to start planning your specific vacation right now? Use our full 6-step consultation planner.
                  </p>
                  <Link
                    href="/travel-inquiry"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#9B784A] hover:text-[#1C1815] transition-colors mt-2"
                  >
                    Launch Interactive Trip Planner →
                  </Link>
                </div>
              </div>
            </MotionFadeIn>

            {/* Right: Direct Message Form */}
            <MotionFadeIn direction="up" distance={20} delay={0.15} className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-[#E6DCce] shadow-xs">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#F4EFE6] text-[#9B784A] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#57534E] max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Our team will reply to {formData.email} within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1815] mb-1">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-[#78716C]">
                      We respond to all inquiries within 24 business hours.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                    >
                      <option value="Vacation Planning Consultation">Vacation Planning Consultation</option>
                      <option value="Destination or Resort Question">Destination or Resort Question</option>
                      <option value="Group / Milestone Celebration Inquiry">Group / Milestone Celebration Inquiry</option>
                      <option value="General Inquiry / Other">General Inquiry / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1815] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="How can we help make your next escape exceptional?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D3C4AF] rounded-sm text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1C1815] text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#9B784A] transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </MotionFadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
