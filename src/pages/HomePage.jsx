import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Truck, 
  Award, 
  Boxes,
  Compass,
  Target,
  Sun
} from 'lucide-react';
import { 
  BUSINESS_DIVISIONS, 
  CORE_VALUES, 
  COMPANY_INFO, 
  COMPANY_STRENGTHS 
} from '../data/businessesData';
import BusinessCard from '../components/BusinessCard';
import ValueCard from '../components/ValueCard';
import RequirementEstimator from '../components/RequirementEstimator';
import SmartImage from '../components/SmartImage';

export default function HomePage({ onOpenEnquiry }) {
  return (
    <div className="min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C2815] via-[#173B20] to-[#0C2815] text-[#FBFAF4] py-24 sm:py-32 lg:py-36">
        {/* Subtle Nature Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        {/* Decorative Radial Lighting (Clipped to prevent mobile overflow) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#D5B45E]/15 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#173B20]/60 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Top Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D5B45E]/15 border border-[#D5B45E]/40 text-[#E6D9B6] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#D5B45E]" />
              <span>Corporate Conglomerate • Est. 1919</span>
            </div>

            {/* Corporate Name */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                CSR
              </span>
              <span className="text-[#D5B45E] font-serif text-3xl sm:text-4xl md:text-5xl font-light">|</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-[#E6D9B6] uppercase">
                Group of Companies
              </span>
            </div>

            {/* Primary Tagline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#FBFAF4] tracking-tight leading-[1.15] mb-6">
              "Stay Strong, <br />
              <span className="bg-gradient-to-r from-[#EAD386] via-[#D5B45E] to-[#9C7820] bg-clip-text text-transparent">Stay Healthy"</span>
            </h1>

            {/* Brand Message */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#E6D9B6] mb-4">
              "{COMPANY_INFO.brandMessage}"
            </p>

            {/* Concise Introduction */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-10">
              Uniting six premier business divisions covering dairy purity, orchard-fresh fruits, farm vegetables, high-protein nutrition, wholesome homely meal boxes, and sacred pooja essentials.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#businesses"
                className="px-8 py-4 rounded-xl bg-[#D5B45E] hover:bg-[#bfa14c] text-[#0C2815] font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4 text-[#0C2815] group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#FBFAF4] font-semibold text-sm tracking-wider uppercase transition-all duration-200 border border-white/25 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D5B45E]" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mini Trust Highlights */}
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <Boxes className="w-4 h-4 text-[#D5B45E] shrink-0" />
                <span>6 Independent Divisions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#D5B45E] shrink-0" />
                <span>Bulk & Doorstep Logistics</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-[#D5B45E] shrink-0" />
                <span>Uncompromising Purity</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. ABOUT CSR GROUP */}
      <section className="py-20 sm:py-28 bg-[#FBFAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Heritage Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <SmartImage
                  src="/images/hero/banner.jpg"
                  fallback="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                  alt="CSR Group heritage farmlands"
                  className="w-full h-[480px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2815]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#D5B45E] font-bold mb-1">
                    Corporate Foundation
                  </p>
                  <p className="font-serif text-xl font-bold">
                    A Legacy of Integrity, Purity & Community Care
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-[#173B20] text-white p-4 rounded-xl shadow-xl border border-[#D5B45E]/40">
                <div className="w-10 h-10 rounded-lg bg-[#D5B45E] text-[#0C2815] flex items-center justify-center font-serif font-black text-lg">
                  6
                </div>
                <div>
                  <p className="text-xs font-bold text-[#E6D9B6] uppercase tracking-wider">
                    Divisions
                  </p>
                  <p className="text-xs text-white/80">
                    One Unified Standard
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-[#173B20] text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#D5B45E]" />
                <span>Parent Company Overview</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C2815] tracking-tight leading-snug mb-6">
                Rooted in Tradition, Driven by Wholesome Wellness
              </h2>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                <strong className="text-[#173B20]">CSR Group of Companies</strong> unites six distinct, specialized business verticals under a unified corporate leadership. Operating across the agricultural, dairy, culinary nutrition, and traditional devotional spectrums, we bring farm-direct goodness to every household and institution.
              </p>

              <p className="text-neutral-600 text-sm leading-relaxed mb-8">
                By maintaining comprehensive stewardship over our supply chains—from grass-fed dairy farms and curated fruit orchards to cloud kitchens and sacred ritual essentials—we eliminate middle tiers to guarantee verified quality, honest weights, and unmatched freshness.
              </p>

              {/* Mission & Vision Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#E6D9B6]/20 border border-[#E6D9B6]/60">
                  <div className="flex items-center gap-2 text-[#173B20] font-serif font-bold text-base mb-1.5">
                    <Target className="w-4 h-4 text-[#D5B45E]" />
                    <span>Our Corporate Mission</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    To deliver unadulterated, wholesome food, nutrition, and devotional products that foster long-term health, vitality, and family happiness.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#E6D9B6]/20 border border-[#E6D9B6]/60">
                  <div className="flex items-center gap-2 text-[#173B20] font-serif font-bold text-base mb-1.5">
                    <Compass className="w-4 h-4 text-[#D5B45E]" />
                    <span>Our Strategic Vision</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    To be India's most respected multi-sector conglomerate known for farm freshness, transparent corporate ethics, and timeless cultural reverence.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#173B20] hover:text-[#0C2815] uppercase tracking-wider underline underline-offset-4"
                >
                  <span>Read Full Corporate Profile & Heritage</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 3. OUR BUSINESSES – MAIN CATALOGUE */}
      <section id="businesses" className="py-20 sm:py-28 bg-[#F4EEDF]/40 border-t border-b border-[#E6D9B6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173B20]/10 text-[#173B20] text-xs font-bold uppercase tracking-widest mb-3">
              <Boxes className="w-3.5 h-3.5 text-[#D5B45E]" />
              <span>Corporate Portfolio</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C2815] tracking-tight">
              Our Six Business Divisions
            </h2>
            
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Every CSR division represents a specialized centre of excellence. Click any business card to explore its detailed product catalogue, specifications, and supply models.
            </p>
          </div>

          {/* 3-Column Desktop Grid / 2-Column Tablet / 1-Column Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_DIVISIONS.map((division, index) => (
              <BusinessCard
                key={division.id}
                division={division}
                index={index}
              />
            ))}
          </div>

          {/* Catalogue Footer Note */}
          <div className="mt-14 p-6 rounded-2xl bg-white border border-[#E6D9B6] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#173B20] text-[#D5B45E] flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#0C2815]">
                  Need Multi-Division Supply for Your Institution or Household?
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Combine daily milk, fresh fruits, vegetables, protein boxes, meals, and pooja items under one single corporate invoice.
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenEnquiry()}
              className="px-6 py-3 rounded-xl bg-[#173B20] hover:bg-[#0C2815] text-[#FBFAF4] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Enquire for Consolidated Supply</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D5B45E]" />
            </button>
          </div>

        </div>
      </section>


      {/* 4. COMPANY HIGHLIGHTS */}
      <section className="py-20 sm:py-28 bg-[#FBFAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173B20]/10 text-[#173B20] text-xs font-bold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 text-[#D5B45E]" />
              <span>Corporate Reliability</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C2815] tracking-tight">
              Company Highlights & Infrastructure
            </h2>
            
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Transparent operations, verified processes, and dependable service capabilities designed for discerning clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_STRENGTHS.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E6D9B6]/60 shadow-sm flex flex-col justify-between hover:border-[#D5B45E] transition-colors"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-md bg-[#173B20]/10 text-[#173B20] font-serif font-bold text-xs tracking-wider mb-4">
                    {item.metric}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0C2815] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D5B45E] uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-[#173B20]">
                  <CheckCircle2 className="w-4 h-4 text-[#D5B45E]" />
                  <span>Verified Operational Standard</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE REQUIREMENT ESTIMATOR */}
      <RequirementEstimator onOpenEnquiry={onOpenEnquiry} />

      {/* 5. OUR VALUES */}
      <section id="values" className="py-20 sm:py-28 bg-[#0C2815] text-[#FBFAF4] relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#173B20] blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5B45E]/15 border border-[#D5B45E]/30 text-[#D5B45E] text-xs font-bold uppercase tracking-widest mb-3">
              <Sun className="w-3.5 h-3.5" />
              <span>Ethical Pillars</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FBFAF4] tracking-tight">
              Our Core Company Values
            </h2>
            
            <p className="mt-4 text-sm sm:text-base text-[#E6D9B6] leading-relaxed">
              Every decision across all six business divisions is guided by six enduring principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <ValueCard
                key={val.id}
                value={val}
                index={idx}
              />
            ))}
          </div>

        </div>
      </section>


      {/* 6. CONTACT SECTION & GENERAL BUSINESS ENQUIRY */}
      <section className="py-20 sm:py-28 bg-[#FBFAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-[#173B20] to-[#0C2815] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-[#D5B45E]/30 relative overflow-hidden">
            
            {/* Background Accent (Clipped) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#D5B45E]/10 blur-3xl"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5B45E]/20 text-[#D5B45E] text-xs font-bold uppercase tracking-widest mb-4">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Corporate Channels</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FBFAF4] tracking-tight mb-4 leading-tight">
                  Connect with CSR Group of Companies
                </h2>

                <p className="text-sm sm:text-base text-[#E6D9B6] leading-relaxed mb-8 max-w-xl">
                  For bulk institutional orders, regular family subscriptions, corporate employee wellness programs, or general trade partnerships, reach out directly to our central desk.
                </p>

                {/* Direct Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Phone Link */}
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="p-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 block group"
                  >
                    <p className="text-[11px] font-bold text-[#D5B45E] uppercase tracking-wider mb-1">
                      Direct Telephone
                    </p>
                    <p className="font-serif text-xl font-bold text-white group-hover:text-[#D5B45E] transition-colors">
                      {COMPANY_INFO.phoneFormatted}
                    </p>
                    <p className="text-xs text-white/60 mt-1">
                      Click to call direct corporate desk
                    </p>
                  </a>

                  {/* Email Link */}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="p-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 block group"
                  >
                    <p className="text-[11px] font-bold text-[#D5B45E] uppercase tracking-wider mb-1">
                      Official Email
                    </p>
                    <p className="font-sans text-sm font-bold text-white group-hover:text-[#D5B45E] transition-colors break-all">
                      {COMPANY_INFO.email}
                    </p>
                    <p className="text-xs text-white/60 mt-1">
                      Click to send corporate message
                    </p>
                  </a>

                </div>

                {/* Instant WhatsApp Trade Channel */}
                <div className="mt-4 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs text-[#E6D9B6]">
                  <span>Immediate institutional query or subscription assistance?</span>
                  <a
                    href="https://wa.me/919014737958?text=Hello%20CSR%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20business%20divisions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[#D5B45E] hover:underline"
                  >
                    <span>Message Directly on WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 text-[#0C2815] shadow-xl border border-[#D5B45E]/40">
                <h3 className="font-serif text-xl font-bold text-[#0C2815] mb-2">
                  Submit Institutional Enquiry
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  Are you managing a corporate campus, catering establishment, school hostel, or family community? Send a quick query.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenEnquiry("general")}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#173B20] hover:bg-[#0C2815] text-[#FBFAF4] text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Open Enquiry Form</span>
                    <ArrowRight className="w-4 h-4 text-[#D5B45E]" />
                  </button>

                  <Link
                    to="/contact"
                    className="w-full py-3 px-4 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-xs font-semibold tracking-wider uppercase transition-colors text-center block"
                  >
                    View All Contact Details & Office Hours
                  </Link>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 text-center">
                  <p className="text-[11px] text-neutral-500">
                    Prompt response during operating hours: 6:00 AM – 8:00 PM (Mon – Sat)
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
