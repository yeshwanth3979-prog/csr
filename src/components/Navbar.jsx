import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, ArrowUpRight, Search } from 'lucide-react';
import CSRLogo from './CSRLogo';
import { BUSINESS_DIVISIONS, COMPANY_INFO } from '../data/businessesData';

export default function Navbar({ onOpenEnquiry, onOpenSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change when pathname changes
  const currentPath = location.pathname;
  useEffect(() => {
    // When path changes, close mobile menu
    const timer = setTimeout(() => {
      setIsOpen(false);
      setBusinessesOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [currentPath]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { 
      label: 'Our Businesses', 
      path: '/#businesses', 
      hasDropdown: true 
    },
    { label: 'Our Values', path: '/#values' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Corporate Bar */}
      <div className="bg-[#0C2815] text-[#E6D9B6] text-xs py-2 px-4 border-b border-[#D5B45E]/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-[#D5B45E] font-medium tracking-wider">
              {COMPANY_INFO.brandMessage}
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">
              Six Specialized Divisions Under One Trusted Corporate Umbrella
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#D5B45E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D5B45E]" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
            <span className="text-white/30">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-[#D5B45E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D5B45E]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#FBFAF4]/95 backdrop-blur-md shadow-md border-b border-[#D5B45E]/30 py-3' 
            : 'bg-[#FBFAF4] border-b border-neutral-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <CSRLogo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.label}
                      className="relative group"
                      onMouseEnter={() => setBusinessesOpen(true)}
                      onMouseLeave={() => setBusinessesOpen(false)}
                    >
                      <button 
                        className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors py-2 ${
                          location.pathname.startsWith('/business') 
                            ? 'text-[#173B20] font-bold' 
                            : 'text-neutral-700 hover:text-[#173B20]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-4 h-4 text-[#D5B45E] group-hover:rotate-180 transition-transform duration-200" />
                      </button>

                      {/* Dropdown Menu */}
                      <div className={`absolute top-full -left-20 w-80 bg-white rounded-xl shadow-xl border border-[#D5B45E]/30 p-2 transition-all duration-200 ${
                        businessesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        <div className="px-3 py-2 border-b border-neutral-100 mb-1">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-[#D5B45E]">
                            CSR Business Divisions
                          </p>
                          <p className="text-xs text-neutral-500 font-medium">Explore all 6 corporate verticals</p>
                        </div>
                        <div className="space-y-1">
                          {BUSINESS_DIVISIONS.map((division) => (
                            <Link
                              key={division.id}
                              to={`/business/${division.slug}`}
                              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FBFAF4] group/item transition-colors"
                            >
                              <div>
                                <p className="text-xs font-bold text-[#0C2815] group-hover/item:text-[#173B20]">
                                  {division.name}
                                </p>
                                <p className="text-[11px] text-neutral-500">
                                  {division.tagline}
                                </p>
                              </div>
                              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/item:text-[#D5B45E] transition-colors" />
                            </Link>
                          ))}
                        </div>
                        <div className="pt-2 mt-1 border-t border-neutral-100 px-2 pb-1">
                          <Link 
                            to="/#businesses" 
                            className="block text-center text-xs font-semibold text-[#173B20] hover:text-[#0C2815] py-1 bg-[#E6D9B6]/30 rounded-md"
                          >
                            View All Divisions Overview →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`text-sm font-semibold tracking-wide transition-colors ${
                      isActive 
                        ? 'text-[#173B20] font-bold relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-[#D5B45E]' 
                        : 'text-neutral-700 hover:text-[#173B20]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenSearch}
                className="px-3 py-2 rounded-lg border border-neutral-200 hover:border-[#173B20] text-neutral-600 hover:text-[#173B20] bg-white transition-colors flex items-center gap-2 text-xs font-medium shadow-xs"
                title="Search divisions and products (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#173B20]" />
                <span className="text-neutral-400">Search</span>
                <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded text-[10px] font-mono text-neutral-500 border border-neutral-200">⌘K</kbd>
              </button>

              <button
                onClick={() => onOpenEnquiry()}
                className="px-5 py-2.5 rounded-lg bg-[#173B20] hover:bg-[#0C2815] text-[#FBFAF4] text-xs font-bold tracking-wider uppercase transition-all duration-200 border border-[#D5B45E]/40 shadow-sm hover:shadow-md flex items-center gap-2 group"
              >
                <span>Corporate Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D5B45E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Action Buttons */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={onOpenSearch}
                className="min-w-[42px] min-h-[42px] p-2.5 rounded-lg border border-neutral-200 text-[#0C2815] bg-white flex items-center justify-center shadow-2xs hover:border-[#173B20] transition-colors"
                aria-label="Search divisions and products"
              >
                <Search className="w-4 h-4 text-[#173B20]" />
              </button>
              <button
                onClick={() => onOpenEnquiry()}
                className="hidden sm:inline-flex min-h-[42px] px-3.5 py-2 rounded-lg bg-[#173B20] hover:bg-[#0C2815] text-[#FBFAF4] text-xs font-bold uppercase tracking-wider border border-[#D5B45E]/30 items-center justify-center transition-colors"
              >
                Enquiry
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-[#0C2815] hover:bg-neutral-100 flex items-center justify-center transition-colors"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#FBFAF4] border-t border-neutral-200 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Primary Mobile CTA Button */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEnquiry();
              }}
              className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-[#173B20] text-[#FBFAF4] text-xs font-bold uppercase tracking-wider border border-[#D5B45E]/40 shadow-sm flex items-center justify-center gap-2 hover:bg-[#0C2815] transition-colors"
            >
              <span>Initiate Corporate Enquiry</span>
              <ArrowUpRight className="w-4 h-4 text-[#D5B45E]" />
            </button>

            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                className="min-h-[44px] flex items-center px-3 py-2 text-sm font-semibold text-[#0C2815] hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="min-h-[44px] flex items-center px-3 py-2 text-sm font-semibold text-[#0C2815] hover:bg-neutral-100 rounded-lg transition-colors"
              >
                About Us
              </Link>

              {/* Mobile Division Links */}
              <div className="px-3 py-2.5 bg-neutral-100/70 rounded-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-[#173B20] mb-2">
                  Our 6 Business Divisions
                </p>
                <div className="space-y-0.5 pl-2">
                  {BUSINESS_DIVISIONS.map((division) => (
                    <Link
                      key={division.id}
                      to={`/business/${division.slug}`}
                      className="min-h-[36px] flex items-center py-1.5 text-xs font-medium text-neutral-700 hover:text-[#173B20] transition-colors"
                    >
                      • {division.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/#values"
                className="min-h-[44px] flex items-center px-3 py-2 text-sm font-semibold text-[#0C2815] hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Our Values
              </Link>
              <Link
                to="/contact"
                className="min-h-[44px] flex items-center px-3 py-2 text-sm font-semibold text-[#0C2815] hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            <div className="pt-3 border-t border-neutral-200 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="min-h-[44px] flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-[#0C2815] bg-white rounded-lg border border-neutral-200 hover:border-[#173B20] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D5B45E] shrink-0" />
                <span>Call: {COMPANY_INFO.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="min-h-[44px] flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-[#0C2815] bg-white rounded-lg border border-neutral-200 hover:border-[#173B20] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D5B45E] shrink-0" />
                <span className="truncate">Email: {COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
