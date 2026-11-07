import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Compass, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, CORE_VALUES } from '../data/businessesData';
import Breadcrumbs from '../components/Breadcrumbs';
import QualityStandards from '../components/QualityStandards';
import SmartImage from '../components/SmartImage';

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <div className="min-h-screen bg-[#FBFAF4]">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-neutral-200/80">
        <Breadcrumbs items={[{ label: 'About Us', path: '/about' }]} />
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C2815] to-[#173B20] text-[#FBFAF4] py-20 sm:py-28">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80')` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5B45E]/20 text-[#D5B45E] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Legacy & Heritage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#FBFAF4] mb-4">
            About CSR Group of Companies
          </h1>
          <p className="font-serif italic text-xl text-[#E6D9B6] mb-6">
            "Stay Strong, Stay Healthy" — {COMPANY_INFO.brandMessage}
          </p>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            A pioneering multi-sector Indian conglomerate built on the bedrock of ethical farming, uncompromised nutrition, honest trade, and sacred cultural traditions.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 bg-white border-b border-[#E6D9B6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#173B20] text-xs font-bold uppercase tracking-widest">
                <Building2 className="w-4 h-4 text-[#D5B45E]" />
                <span>Our Corporate Foundation</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C2815] leading-snug">
                One Parent Umbrella, Six Pillars of Everyday Well-Being
              </h2>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                CSR Group of Companies was founded with a singular conviction: genuine well-being begins with what we put on our dining plates, fuel our bodies with, and revere in our home shrines. In an age of mass-industrial adulteration and synthetic shortcuts, CSR stands as a bastion of pure, authentic provenance.
              </p>

              <p className="text-neutral-600 text-sm leading-relaxed">
                Rather than treating life's essentials as separate transactions, we bring together pure dairy (Sri Kanakadurgya Dairy), hand-graded orchard fruits (Sri Anjaneya Fruit Box), farm-direct vegetables (Sri Siddhi Vinayaka Vegetables), athletic clean nutrition (Protein Box), homely wholesome dining (Sri Manikanta Meal Box), and pious puja samagri (Vedha Gayathri Pooja Items) into a harmonious ecosystem.
              </p>

              <div className="pt-4 border-t border-neutral-200 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FBFAF4] border border-[#E6D9B6]/60">
                  <p className="font-serif text-2xl font-bold text-[#173B20]">6</p>
                  <p className="text-xs font-semibold text-[#0C2815] uppercase tracking-wider mt-0.5">Specialized Divisions</p>
                  <p className="text-[11px] text-neutral-500 mt-1">Seamless institutional integration</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FBFAF4] border border-[#E6D9B6]/60">
                  <p className="font-serif text-2xl font-bold text-[#173B20]">100%</p>
                  <p className="text-xs font-semibold text-[#0C2815] uppercase tracking-wider mt-0.5">Tested Purity</p>
                  <p className="text-[11px] text-neutral-500 mt-1">Zero chemical tampering</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <SmartImage
                  src="/images/vegetables/hero.jpg"
                  fallback="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                  alt="CSR organic farm produce"
                  className="rounded-2xl shadow-lg h-72 sm:h-80 w-full object-cover object-center"
                />
                <SmartImage
                  src="/images/dairy/hero.jpg"
                  fallback="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80"
                  alt="CSR Dairy cattle"
                  className="rounded-2xl shadow-lg h-72 sm:h-80 w-full object-cover object-center mt-6"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F4EEDF]/40 border-b border-[#E6D9B6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-2xl p-8 border border-[#E6D9B6] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#173B20] text-[#D5B45E] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0C2815] mb-3">
                Our Corporate Mission
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                To establish an unshakeable benchmark of cleanliness, authentic farm freshness, and ethical pricing across daily essentials, ensuring families and institutions never have to compromise on dietary health and cultural sanctity.
              </p>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#173B20]" />
                  <span>Fair compensation for direct partner farmers and herders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#173B20]" />
                  <span>Minimal processing and chemical-free preservation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#173B20]" />
                  <span>Reliable morning-first distribution logistics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E6D9B6] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#173B20] text-[#D5B45E] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0C2815] mb-3">
                Our Long-Term Vision
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                To evolve as India's premier integrated wellness enterprise, known nationally for empowering healthier generations under the ethos of "Stay Strong, Stay Healthy" while safeguarding sacred traditions for modern living.
              </p>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#173B20]" />
                  <span>Expanding sustainable cold-chain technology across rural corridors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#173B20]" />
                  <span>Standardizing macro-nutrient nutrition for schools and athletes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#173B20]" />
                  <span>Preserving ancient Vedic ritual purity and artisanal craftsmanship</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Values Detailed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C2815]">
              The Six Corporate Principles
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Every employee, farmer, delivery driver, and kitchen chef operates in adherence to these pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((v, i) => (
              <div key={v.id} className="p-6 rounded-2xl bg-[#FBFAF4] border border-[#E6D9B6]/60">
                <p className="font-serif font-bold text-[#D5B45E] text-sm mb-1">Principle 0{i+1}</p>
                <h4 className="font-serif text-xl font-bold text-[#0C2815] mb-2">{v.title}</h4>
                <p className="text-xs font-semibold text-[#173B20] mb-2">{v.shortDesc}</p>
                <p className="text-xs text-neutral-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-TIER QUALITY STANDARDS */}
      <QualityStandards />

      {/* Institutional CTA */}
      <section className="py-16 bg-[#0C2815] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h3 className="font-serif text-3xl font-bold mb-4">
            Explore Institutional & Corporate Collaborations
          </h3>
          <p className="text-sm text-[#E6D9B6] mb-8 leading-relaxed">
            We partner with enterprises, residential complexes, hospitality brands, and spiritual organizations for customized daily supply contracts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry("general")}
              className="px-8 py-3.5 rounded-xl bg-[#D5B45E] hover:bg-[#bfa14c] text-[#0C2815] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              Open Institutional Enquiry
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Corporate Contact Details
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
