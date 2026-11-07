import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Truck, 
  Layers, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { BUSINESS_DIVISIONS, COMPANY_INFO } from '../data/businessesData';
import Breadcrumbs from '../components/Breadcrumbs';
import DivisionSwitcher from '../components/DivisionSwitcher';
import SmartImage from '../components/SmartImage';
import ImageLightboxModal from '../components/ImageLightboxModal';

export default function BusinessDivisionPage({ onOpenEnquiry }) {
  const { slug } = useParams();
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    image: '',
    fallback: '',
    title: '',
    subtitle: '',
    specs: '',
    variants: []
  });

  const division = BUSINESS_DIVISIONS.find((d) => d.slug === slug);

  if (!division) {
    return <Navigate to="/" replace />;
  }

  const handleOpenLightbox = (item) => {
    setLightboxData({
      isOpen: true,
      image: item.image || item.cardImage,
      fallback: item.fallback || item.cardFallback,
      title: item.name,
      subtitle: item.description || item.shortDescription,
      specs: item.specs || item.tagline,
      variants: item.variants || []
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#FBFAF4]">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-neutral-200/80">
        <Breadcrumbs 
          items={[
            { label: 'Our Businesses', path: '/#businesses' },
            { label: division.name, path: `/business/${division.slug}` }
          ]} 
        />
      </div>

      {/* 1. BUSINESS SPECIFIC HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C2815] via-[#173B20] to-[#0C2815] text-[#FBFAF4] py-16 sm:py-24">
        {/* Division Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: `url('${division.heroImage}')` }}
        />
        
        {/* Radial Ambient Lighting (Clipped) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D5B45E]/15 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Back link & CSR Parent Tag */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link 
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E6D9B6] hover:text-[#D5B45E] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>CSR Group Main</span>
              </Link>
              <span className="text-white/40">•</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D5B45E]/20 text-[#D5B45E] text-[10px] font-bold tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                {division.badge}
              </span>
            </div>

            {/* Business Name */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FBFAF4] leading-tight mb-4">
              {division.name}
            </h1>

            {/* Tagline */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#D5B45E] mb-6">
              "{division.tagline}"
            </p>

            {/* Summary */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-8">
              {division.shortDescription}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry(division.id)}
                className="px-7 py-3.5 rounded-xl bg-[#D5B45E] hover:bg-[#bfa14c] text-[#0C2815] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center gap-2"
              >
                <span>Enquire For This Division</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#catalogue"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FBFAF4] font-semibold text-xs uppercase tracking-wider transition-all duration-200 border border-white/25 backdrop-blur-sm"
              >
                View Product Catalogue ({division.categories.length})
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIVISION INTRODUCTION & CORPORATE STORY */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6D9B6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[#173B20] text-xs font-bold uppercase tracking-widest mb-3">
                <ShieldCheck className="w-4 h-4 text-[#D5B45E]" />
                <span>Division Standards & Sourcing</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C2815] tracking-tight leading-snug mb-6">
                Pure, Authentic & Conscientiously Managed
              </h2>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                {division.fullDescription}
              </p>

              {/* Business Highlights List */}
              <div className="space-y-3 pt-2 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0C2815]">
                  Key Operational Pillars:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {division.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 bg-[#FBFAF4] p-3 rounded-lg border border-[#E6D9B6]/40">
                      <CheckCircle2 className="w-4 h-4 text-[#173B20] shrink-0 mt-0.5" />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Quick Helpline */}
              <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-[#E6D9B6]/20 border border-[#D5B45E]/40 text-xs">
                <div>
                  <p className="text-neutral-500 font-medium">Division Relationship Manager</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-[#0C2815] text-sm hover:text-[#173B20]">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>
                <div className="h-8 w-px bg-neutral-300 hidden sm:block"></div>
                <div>
                  <p className="text-neutral-500 font-medium">Division Official Desk</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-[#0C2815] text-sm hover:text-[#173B20]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Division Imagery Showcase */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => handleOpenLightbox(division)}
                className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FBFAF4] group cursor-pointer"
                title="Click to view full image"
              >
                <SmartImage
                  src={division.cardImage}
                  fallback={division.cardFallback}
                  alt={division.name}
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2815]/85 via-transparent to-transparent"></div>

                {/* View Full Image Hover Indicator */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-[#FBFAF4] text-xs font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-[#173B20] transition-all border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D5B45E]" />
                  <span>View Full Photo</span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D5B45E]">
                    CSR Group Standards
                  </span>
                  <p className="font-serif text-lg font-bold">
                    {division.name}
                  </p>
                  <p className="text-xs text-[#E6D9B6] mt-1">
                    Every batch undergoes multi-tier hygiene inspections
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORY CATALOGUE WITH PHOTOGRAPHS */}
      <section id="catalogue" className="py-20 sm:py-28 bg-[#FBFAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173B20]/10 text-[#173B20] text-xs font-bold uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-[#D5B45E]" />
              <span>Full Offerings Directory</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C2815] tracking-tight">
              {division.name} Catalogue
            </h2>
            
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Explore our core categories below. Pack sizes and custom institutional specifications are available upon corporate enquiry.
            </p>
          </div>

          {/* Product Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {division.categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[#E6D9B6]/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Image - Generous height & Click to View Full Image */}
                  <div 
                    onClick={() => handleOpenLightbox(category)}
                    className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900 cursor-pointer group/img"
                    title="Click to view full photo"
                  >
                    <SmartImage
                      src={category.image}
                      fallback={category.fallback}
                      alt={category.name}
                      className="w-full h-full object-cover object-center group-hover/img:scale-108 transition-transform duration-500"
                    />
                    
                    {/* Dark gradient for badge readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    <div className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded bg-[#0C2815]/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      Category 0{index + 1}
                    </div>

                    {/* Hover Prompt to View Full Image */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#173B20]/90 backdrop-blur-md text-[#FBFAF4] text-xs font-semibold flex items-center gap-2 border border-[#D5B45E]/40 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5 text-[#D5B45E]" />
                        <span>View Full Image</span>
                      </span>
                    </div>
                  </div>

                  {/* Category Information */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#0C2815] group-hover:text-[#173B20] transition-colors mb-1">
                      {category.name}
                    </h3>
                    
                    {category.specs && (
                      <p className="text-xs font-semibold text-[#D5B45E] uppercase tracking-wider mb-3">
                        {category.specs}
                      </p>
                    )}

                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>

                    {/* Available Variants */}
                    {category.variants && (
                      <div className="pt-3 border-t border-neutral-100">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                          Available Packaging / Profiles:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {category.variants.map((v, idx) => (
                            <span 
                              key={idx}
                              className="text-[11px] font-medium text-neutral-700 bg-[#FBFAF4] px-2 py-0.5 rounded border border-neutral-200"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenEnquiry(division.id)}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#FBFAF4] hover:bg-[#173B20] text-[#173B20] hover:text-[#FBFAF4] border border-[#E6D9B6] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Details / Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D5B45E] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SUBSCRIPTION & BULK ENQUIRY BANNER */}
      <section className="py-16 bg-[#173B20] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5B45E]/20 text-[#D5B45E] text-xs font-bold uppercase tracking-widest mb-3">
                <Truck className="w-3.5 h-3.5" />
                <span>Supply & Delivery Capabilities</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBFAF4] mb-3">
                Bulk Institution Contracts & Doorstep Subscriptions
              </h3>
              <p className="text-sm text-[#E6D9B6] leading-relaxed max-w-2xl">
                Whether you need daily morning supplies for an apartment community, bulk contracts for an industrial canteen, or customized gift boxes for corporate employees, CSR Group accommodates your exact dispatch schedule.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenEnquiry(division.id)}
                className="w-full py-3.5 px-6 rounded-xl bg-[#D5B45E] hover:bg-[#bfa14c] text-[#0C2815] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Initiate Business Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-[#FBFAF4] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D5B45E]" />
                <span>Speak with Coordinator</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DIVISION QUICK SWITCHER (Links to other 5 divisions) */}
      <DivisionSwitcher currentSlug={division.slug} />

      {/* Full High-Resolution Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxData.isOpen}
        onClose={handleCloseLightbox}
        image={lightboxData.image}
        fallback={lightboxData.fallback}
        title={lightboxData.title}
        subtitle={lightboxData.subtitle}
        specs={lightboxData.specs}
        variants={lightboxData.variants}
        onEnquire={() => onOpenEnquiry(division.id)}
      />

    </div>
  );
}
