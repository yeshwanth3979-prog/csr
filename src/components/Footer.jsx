import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import CSRLogo from './CSRLogo';
import { BUSINESS_DIVISIONS, COMPANY_INFO } from '../data/businessesData';

export default function Footer({ onOpenEnquiry }) {
  const currentYear = 2026;
  return (
    <footer className="bg-[#0C2815] text-[#FBFAF4] border-t-4 border-[#D5B45E]">
      {/* Top Banner / Corporate Promise */}
      <div className="border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8 bg-[#173B20]/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#D5B45E]/20 border border-[#D5B45E]/40 flex items-center justify-center text-[#D5B45E] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#FBFAF4]">
                The CSR Corporate Commitment
              </h4>
              <p className="text-xs text-[#E6D9B6] max-w-xl">
                Uncompromising freshness, pure ingredients, and timeless integrity across dairy, fresh produce, protein wellness, homely meals, and pooja essentials.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry()}
              className="min-h-[44px] px-6 py-2.5 rounded-lg bg-[#D5B45E] hover:bg-[#bfa14c] text-[#0C2815] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2"
            >
              <span>Corporate Bulk Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand & Introduction */}
          <div className="lg:col-span-2 space-y-4">
            <CSRLogo variant="footer" />
            <p className="text-xs text-white/70 leading-relaxed max-w-md pt-2">
              CSR Group of Companies operates six distinctive verticals united by a singular promise: <span className="text-[#D5B45E] italic">"Goodness in Every Box..."</span>. Delivering pure dairy, farm produce, tailored nutrition, homely dining, and sacred traditions directly to families and institutions.
            </p>
            <div className="pt-2 text-xs text-[#E6D9B6]/90 space-y-1.5">
              <p className="font-semibold text-[#D5B45E] uppercase tracking-wider text-[11px]">Corporate Headquarters:</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D5B45E] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D5B45E] shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 3: The Six Business Divisions */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D5B45E] pb-1 border-b border-white/10">
              Our 6 Divisions
            </h5>
            <ul className="space-y-1 text-xs">
              {BUSINESS_DIVISIONS.map((division) => (
                <li key={division.id}>
                  <Link
                    to={`/business/${division.slug}`}
                    className="text-white/80 hover:text-[#D5B45E] transition-colors block py-2 sm:py-1 group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                      {division.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D5B45E] pb-1 border-b border-white/10">
              Quick Links
            </h5>
            <ul className="space-y-1 text-xs">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#D5B45E] transition-colors block py-2 sm:py-1">
                  Corporate Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#D5B45E] transition-colors block py-2 sm:py-1">
                  About CSR Group
                </Link>
              </li>
              <li>
                <Link to="/#businesses" className="text-white/80 hover:text-[#D5B45E] transition-colors block py-2 sm:py-1">
                  Business Divisions Overview
                </Link>
              </li>
              <li>
                <Link to="/#values" className="text-white/80 hover:text-[#D5B45E] transition-colors block py-2 sm:py-1">
                  Core Company Values
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#D5B45E] transition-colors block py-2 sm:py-1">
                  Contact & Institutional Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D5B45E] pb-1 border-b border-white/10">
              Direct Contact
            </h5>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-white/50 text-[10px] uppercase font-bold tracking-wider mb-1">
                  General & Bulk Inquiries
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-white font-bold text-sm hover:text-[#D5B45E] transition-colors py-1.5"
                >
                  <Phone className="w-4 h-4 text-[#D5B45E]" />
                  <span>{COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
              <div>
                <p className="text-white/50 text-[10px] uppercase font-bold tracking-wider mb-1">
                  Official Corporate Email
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-white/90 hover:text-[#D5B45E] transition-colors break-all py-1.5"
                >
                  <Mail className="w-4 h-4 text-[#D5B45E] shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="w-full min-h-[44px] py-3 px-3 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-[#FBFAF4] text-xs font-semibold tracking-wider transition-colors text-center"
                >
                  Request Division Brochure
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="border-t border-white/10 py-6 px-4 bg-[#081B0E] text-[11px] text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>
            © {currentYear} <span className="text-[#D5B45E] font-medium">CSR Group of Companies</span>. All Rights Reserved. Stay Strong, Stay Healthy.
          </p>
          <p className="text-white/40">
            Official Corporate & Institutional Portal. Product catalogues are for informational & trade enquiry purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
