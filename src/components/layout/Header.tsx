'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  Palmtree,
  Ship,
  Heart,
  Users,
  Phone
} from 'lucide-react';
import { ADVISOR_PROFILE } from '@/src/data/advisor';
import { EASINGS, DURATIONS } from '@/src/lib/motion';

interface HeaderProps {
  onOpenInquiry?: (prefill?: { destination?: string; tripType?: string }) => void;
}

type DropdownKey = 'about' | 'destinations' | 'packages' | null;

export default function Header({ onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (key: DropdownKey) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleStartPlanning = (e: React.MouseEvent) => {
    if (onOpenInquiry) {
      e.preventDefault();
      onOpenInquiry();
    }
  };

  const isTransparentOnHome = isHome && !isScrolled && !activeDropdown;

  return (
    <>
      <header
        id="main-site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparentOnHome
            ? 'bg-gradient-to-b from-black/75 via-black/35 to-transparent text-white py-5'
            : 'bg-[#FAF8F5]/95 backdrop-blur-md text-[#1C1815] py-3.5 shadow-xs border-b border-[#E6DCce]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* 1. Brand Logo / Wordmark */}
          <div className="flex items-center">
            <Link
              href="/"
              id="brand-logo-link"
              className="flex flex-col group transition-opacity hover:opacity-90 py-0.5"
            >
              <span
                className={`font-serif-luxury tracking-widest uppercase font-bold text-xl sm:text-2xl transition-colors leading-tight ${
                  isTransparentOnHome ? 'text-white' : 'text-[#1C1815]'
                }`}
              >
                Luxe Fantasy
              </span>
              <span
                className={`text-[9px] tracking-[0.28em] uppercase font-sans-clean font-medium transition-colors ${
                  isTransparentOnHome ? 'text-[#C5A880]' : 'text-[#9B784A]'
                }`}
              >
                Vacations · Travel Advisory
              </span>
            </Link>
          </div>

          {/* 2. Desktop Primary Navigation */}
          <nav
            id="desktop-primary-navigation"
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-7 xl:space-x-8"
          >
            {/* 1. Home */}
            <Link
              href="/"
              id="nav-link-home"
              className={`text-xs font-semibold uppercase tracking-wider py-2 transition-colors relative ${
                isHome
                  ? isTransparentOnHome ? 'text-[#C5A880]' : 'text-[#9B784A]'
                  : isTransparentOnHome ? 'text-white/90 hover:text-white' : 'text-[#2C2621]/80 hover:text-[#1C1815]'
              }`}
            >
              <span>Home</span>
              {isHome && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9B784A] rounded-full" />
              )}
            </Link>

            {/* 2. About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                id="nav-trigger-about"
                aria-expanded={activeDropdown === 'about'}
                aria-haspopup="true"
                className={`inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider py-2 transition-colors cursor-pointer ${
                  pathname === '/about' || activeDropdown === 'about'
                    ? isTransparentOnHome ? 'text-[#C5A880]' : 'text-[#9B784A]'
                    : isTransparentOnHome ? 'text-white/90 hover:text-white' : 'text-[#2C2621]/80 hover:text-[#1C1815]'
                }`}
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#9B784A]' : 'opacity-70'}`} aria-hidden="true" />
              </button>

              {/* About Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    id="dropdown-about-panel"
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: DURATIONS.fast, ease: EASINGS.easeOutCubic }}
                    className="absolute top-full left-0 mt-2 w-[340px] bg-[#FAF8F5] border border-[#E6DCce] rounded-sm shadow-xl p-5 text-[#1C1815]"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B784A] font-bold block mb-3">
                      About Our Advisory
                    </span>

                    <ul className="space-y-1">
                      {[
                        { label: 'About Luxe Fantasy', href: '/about', note: 'Our story, founder background & ethos' },
                        { label: 'Certifications & Trust', href: '/about#certifications', note: 'CLIA, ASTA & IATA luxury accreditations' },
                        { label: 'Direct Concierge', href: '/contact', note: 'Speak with an advisor directly' },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="group block p-2 rounded hover:bg-[#F4EFE6] transition-colors"
                          >
                            <div className="text-xs font-semibold text-[#1C1815] group-hover:text-[#9B784A] flex items-center justify-between">
                              <span>{item.label}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#9B784A]" />
                            </div>
                            <span className="text-[11px] text-[#78716C] block leading-tight mt-0.5">{item.note}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Secondary Link for Career / Advisors */}
                    <div className="mt-3.5 pt-3 border-t border-[#E6DCce] flex items-center justify-between">
                      <span className="text-[10px] text-[#78716C] uppercase font-medium">Careers &amp; Network</span>
                      <Link
                        href="/for-travel-advisors"
                        className="inline-flex items-center text-xs font-semibold text-[#9B784A] hover:text-[#1C1815] transition-colors"
                      >
                        <span>Become a Travel Agent</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('destinations')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                id="nav-trigger-destinations"
                aria-expanded={activeDropdown === 'destinations'}
                aria-haspopup="true"
                className={`inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider py-2 transition-colors cursor-pointer ${
                  pathname.startsWith('/destinations') || activeDropdown === 'destinations'
                    ? isTransparentOnHome ? 'text-[#C5A880]' : 'text-[#9B784A]'
                    : isTransparentOnHome ? 'text-white/90 hover:text-white' : 'text-[#2C2621]/80 hover:text-[#1C1815]'
                }`}
              >
                <span>Destinations</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'destinations' ? 'rotate-180 text-[#9B784A]' : 'opacity-70'}`} />
              </button>

              {/* Destinations Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === 'destinations' && (
                  <motion.div
                    id="dropdown-destinations-panel"
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: DURATIONS.fast, ease: EASINGS.easeOutCubic }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[460px] bg-[#FAF8F5] border border-[#E6DCce] rounded-sm shadow-xl p-5 text-[#1C1815]"
                  >
                    <div className="grid grid-cols-2 gap-5">
                      {/* Featured Destinations */}
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B784A] font-bold block mb-2.5">
                          Featured Destinations
                        </span>
                        <ul className="space-y-1.5">
                          {[
                            { name: 'St. Lucia', href: '/destinations/st-lucia', tag: 'Pitons & Rainforest' },
                            { name: 'Riviera Maya', href: '/destinations/riviera-maya', tag: 'Luxury Haciendas' },
                            { name: 'Turks & Caicos', href: '/destinations/turks-and-caicos', tag: 'Grace Bay Villas' },
                            { name: 'Jamaica', href: '/destinations/jamaica', tag: 'Private Villas & Spas' },
                          ].map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="group block p-1.5 -mx-1.5 rounded hover:bg-[#F4EFE6] transition-colors"
                              >
                                <div className="text-xs font-semibold text-[#1C1815] group-hover:text-[#9B784A] flex items-center justify-between">
                                  <span>{item.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#9B784A]" />
                                </div>
                                <span className="text-[11px] text-[#78716C] block leading-tight">{item.tag}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Destination Categories */}
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B784A] font-bold block mb-2.5">
                          Destination Categories
                        </span>
                        <ul className="space-y-1.5">
                          {[
                            { name: 'Caribbean Islands', href: '/destinations?region=caribbean', desc: 'Overwater & cliffside resorts' },
                            { name: 'Mexico & Riviera', href: '/destinations?region=mexico', desc: 'Gourmet all-inclusive escapes' },
                            { name: 'French Polynesia', href: '/destinations/french-polynesia', desc: 'Bora Bora lagoon suites' },
                            { name: 'Central America', href: '/destinations/costa-rica', desc: 'Eco-luxury rainforest lodges' },
                          ].map((cat) => (
                            <li key={cat.name}>
                              <Link
                                href={cat.href}
                                className="group block p-1.5 -mx-1.5 rounded hover:bg-[#F4EFE6] transition-colors"
                              >
                                <div className="text-xs font-semibold text-[#1C1815] group-hover:text-[#9B784A] flex items-center justify-between">
                                  <span>{cat.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#9B784A]" />
                                </div>
                                <span className="text-[11px] text-[#78716C] block leading-tight">{cat.desc}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-[#E6DCce] flex items-center justify-between">
                      <span className="text-[11px] text-[#78716C]">8 Curated Global Regions</span>
                      <Link
                        href="/destinations"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#9B784A] hover:text-[#1C1815] transition-colors"
                      >
                        <span>View All Destinations</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Packages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('packages')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                id="nav-trigger-packages"
                aria-expanded={activeDropdown === 'packages'}
                aria-haspopup="true"
                className={`inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider py-2 transition-colors cursor-pointer ${
                  pathname.startsWith('/packages') || activeDropdown === 'packages'
                    ? isTransparentOnHome ? 'text-[#C5A880]' : 'text-[#9B784A]'
                    : isTransparentOnHome ? 'text-white/90 hover:text-white' : 'text-[#2C2621]/80 hover:text-[#1C1815]'
                }`}
              >
                <span>Packages</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'packages' ? 'rotate-180 text-[#9B784A]' : 'opacity-70'}`} />
              </button>

              {/* Packages Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === 'packages' && (
                  <motion.div
                    id="dropdown-packages-panel"
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: DURATIONS.fast, ease: EASINGS.easeOutCubic }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[440px] bg-[#FAF8F5] border border-[#E6DCce] rounded-sm shadow-xl p-5 text-[#1C1815]"
                  >
                    <div className="grid grid-cols-2 gap-5">
                      {/* Featured Packages */}
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B784A] font-bold block mb-2.5">
                          Featured Packages
                        </span>
                        <ul className="space-y-1.5">
                          {[
                            { title: 'St. Lucia Piton Sanctuary', href: '/packages/st-lucia-romance-sanctuary', tag: 'Open-wall cliffside suite' },
                            { title: 'Riviera Maya Culinary', href: '/packages/riviera-maya-culinary-retreat', tag: '5-star gourmet all-inclusive' },
                            { title: 'Celebrity Eastern Caribbean', href: '/packages/celebrity-retreat-eastern-caribbean', tag: 'The Retreat Suite Class' },
                          ].map((pkg) => (
                            <li key={pkg.href}>
                              <Link
                                href={pkg.href}
                                className="group block p-1.5 -mx-1.5 rounded hover:bg-[#F4EFE6] transition-colors"
                              >
                                <div className="text-xs font-semibold text-[#1C1815] group-hover:text-[#9B784A] flex items-center justify-between">
                                  <span>{pkg.title}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#9B784A]" />
                                </div>
                                <span className="text-[11px] text-[#78716C] block leading-tight">{pkg.tag}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Travel Styles / Categories */}
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B784A] font-bold block mb-2.5">
                          Package Categories
                        </span>
                        <ul className="space-y-1.5">
                          {[
                            { label: 'All-Inclusive', href: '/packages?type=all-inclusive', icon: Palmtree },
                            { label: 'Luxury Cruises', href: '/packages?type=cruises', icon: Ship },
                            { label: 'Romantic Escapes', href: '/packages?type=romantic', icon: Heart },
                            { label: 'Family & Group', href: '/packages?type=family', icon: Users },
                          ].map((style) => {
                            const IconComp = style.icon;
                            return (
                              <li key={style.label}>
                                <Link
                                  href={style.href}
                                  className="group flex items-center space-x-2 p-1.5 -mx-1.5 rounded hover:bg-[#F4EFE6] transition-colors"
                                >
                                  <IconComp className="w-3.5 h-3.5 text-[#9B784A] shrink-0" />
                                  <span className="text-xs font-semibold text-[#1C1815] group-hover:text-[#9B784A]">
                                    {style.label}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-[#E6DCce] flex items-center justify-between">
                      <span className="text-[11px] text-[#78716C]">Customizable sample itineraries</span>
                      <Link
                        href="/packages"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#9B784A] hover:text-[#1C1815] transition-colors"
                      >
                        <span>All Packages</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5. How It Works */}
            <Link
              href="/how-it-works"
              id="nav-link-how-it-works"
              className={`text-xs font-semibold uppercase tracking-wider py-2 transition-colors relative ${
                pathname === '/how-it-works'
                  ? isTransparentOnHome ? 'text-[#C5A880]' : 'text-[#9B784A]'
                  : isTransparentOnHome ? 'text-white/90 hover:text-white' : 'text-[#2C2621]/80 hover:text-[#1C1815]'
              }`}
            >
              <span>How It Works</span>
              {pathname === '/how-it-works' && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9B784A] rounded-full" />
              )}
            </Link>

            {/* 6. Inspiration */}
            <Link
              href="/inspiration"
              id="nav-link-inspiration"
              className={`text-xs font-semibold uppercase tracking-wider py-2 transition-colors relative ${
                pathname.startsWith('/inspiration')
                  ? isTransparentOnHome ? 'text-[#C5A880]' : 'text-[#9B784A]'
                  : isTransparentOnHome ? 'text-white/90 hover:text-white' : 'text-[#2C2621]/80 hover:text-[#1C1815]'
              }`}
            >
              <span>Inspiration</span>
              {pathname.startsWith('/inspiration') && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9B784A] rounded-full" />
              )}
            </Link>
          </nav>

          {/* 3. Primary CTA: [ PLAN YOUR TRIP ] */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/travel-inquiry"
              onClick={handleStartPlanning}
              id="primary-header-cta-button"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#C5A880] text-[#1C1815] hover:bg-[#1C1815] hover:text-[#FAF8F5] text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border border-[#B5956A]"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              <span>PLAN YOUR TRIP</span>
            </Link>
          </div>

          {/* 4. Mobile Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/travel-inquiry"
              onClick={handleStartPlanning}
              id="mobile-header-quick-cta"
              className="inline-flex items-center px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-sm bg-[#C5A880] text-[#1C1815] hover:bg-white shadow-xs"
            >
              Plan Trip
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isTransparentOnHome
                  ? 'text-white hover:bg-white/10'
                  : 'text-[#1C1815] hover:bg-[#F4EFE6]'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* 5. Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATIONS.fast }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: DURATIONS.normal, ease: EASINGS.easeOutCubic }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF8F5] p-6 shadow-2xl overflow-y-auto flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E6DCce]">
                  <div className="flex flex-col">
                    <span className="font-serif-luxury uppercase tracking-widest font-bold text-lg text-[#1C1815]">
                      Luxe Fantasy
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#9B784A] font-medium">
                      Vacations · Travel Advisory
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded text-[#78716C] hover:text-[#1C1815]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="mt-5 space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-2 text-sm font-semibold uppercase tracking-wider border-b border-[#E6DCce]/60 ${
                      isHome ? 'text-[#9B784A]' : 'text-[#1C1815] hover:text-[#9B784A]'
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#1C1815] hover:text-[#9B784A] border-b border-[#E6DCce]/60"
                  >
                    About
                  </Link>

                  <Link
                    href="/destinations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#1C1815] hover:text-[#9B784A] border-b border-[#E6DCce]/60"
                  >
                    Destinations
                  </Link>

                  <Link
                    href="/packages"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#1C1815] hover:text-[#9B784A] border-b border-[#E6DCce]/60"
                  >
                    Packages
                  </Link>

                  <Link
                    href="/how-it-works"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#1C1815] hover:text-[#9B784A] border-b border-[#E6DCce]/60"
                  >
                    How It Works
                  </Link>

                  <Link
                    href="/inspiration"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#1C1815] hover:text-[#9B784A] border-b border-[#E6DCce]/60"
                  >
                    Inspiration
                  </Link>

                  <Link
                    href="/for-travel-advisors"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#78716C] hover:text-[#1C1815] border-b border-[#E6DCce]/60"
                  >
                    Become a Travel Agent
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-2 text-sm font-semibold uppercase tracking-wider text-[#78716C] hover:text-[#1C1815] border-b border-[#E6DCce]/60"
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Bottom Section: Primary Prominent CTA */}
              <div className="pt-6 border-t border-[#E6DCce] space-y-4">
                <Link
                  href="/travel-inquiry"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onOpenInquiry) {
                      e.preventDefault();
                      onOpenInquiry();
                    }
                  }}
                  className="w-full py-4 px-4 bg-[#C5A880] text-[#1C1815] text-center text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#1C1815] hover:text-[#FAF8F5] transition-colors flex items-center justify-center space-x-2 shadow-md border border-[#B5956A]"
                >
                  <Sparkles className="w-4 h-4 text-[#1C1815]" />
                  <span>PLAN YOUR TRIP</span>
                </Link>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-[#78716C] pt-1">
                  <Phone className="w-3 h-3 text-[#9B784A]" />
                  <span>Advisor Desk: {ADVISOR_PROFILE.phoneDisplay}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
