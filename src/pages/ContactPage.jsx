import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO, BUSINESS_DIVISIONS } from '../data/businessesData';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    division: 'all',
    type: 'bulk',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "Is this website an online shopping or e-commerce store?",
      a: "No. This is an informational corporate portal representing CSR Group of Companies. We do not operate online carts, payments, or consumer checkouts. Instead, we coordinate custom bulk deliveries, corporate supply, and doorstep subscriptions through direct institutional consultation."
    },
    {
      q: "How do subscriptions work for daily milk, fruits, or meal boxes?",
      a: "Families and residential associations can register their daily or weekly requirements through our customer desk. Deliveries are executed by our refrigerated vehicles every morning between 5:30 AM and 7:30 AM."
    },
    {
      q: "Can institutional clients order across multiple divisions on a single contract?",
      a: "Yes. Corporate campuses, canteens, and educational institutions frequently combine dairy, vegetables, protein boxes, and meal catering under one single consolidated corporate agreement and monthly billing schedule."
    },
    {
      q: "What regions and cities does CSR Group service?",
      a: "CSR Group's distribution network operates extensively across key metropolitan hubs and tier-1 industrial corridors, with direct cold-chain transport extending from our regional hubs."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFAF4]">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-neutral-200/80">
        <Breadcrumbs items={[{ label: 'Contact Us', path: '/contact' }]} />
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-[#0C2815] to-[#173B20] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5B45E]/20 text-[#D5B45E] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Corporate Touchpoints</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Contact CSR Group of Companies
          </h1>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Connect with our corporate office, request division catalogues, discuss institutional partnerships, or setup daily subscription deliveries.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Corporate Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0C2815] mb-2">
                  Official Communication Channels
                </h2>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our corporate desk is accessible during all standard business hours for fast assistance.
                </p>
              </div>

              {/* Direct Telephone Box */}
              <div className="bg-white rounded-2xl p-6 border border-[#E6D9B6] shadow-sm hover:border-[#D5B45E] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#173B20] text-[#D5B45E] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                      Direct Corporate Phone
                    </p>
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="font-serif text-xl font-bold text-[#0C2815] hover:text-[#173B20] transition-colors"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Mon – Sat: 6:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">Need instant WhatsApp trade support?</span>
                  <a
                    href="https://wa.me/919014737958?text=Hello%20CSR%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20institutional%20supplies."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#173B20] hover:text-[#0C2815] underline flex items-center gap-1"
                  >
                    <span>Chat on WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Direct Email Box */}
              <div className="bg-white rounded-2xl p-6 border border-[#E6D9B6] shadow-sm hover:border-[#D5B45E] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#173B20] text-[#D5B45E] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                      Official Inquiries Email
                    </p>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-sans text-sm sm:text-base font-bold text-[#0C2815] hover:text-[#173B20] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Replies within 24 business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Box */}
              <div className="bg-white rounded-2xl p-6 border border-[#E6D9B6] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#173B20] text-[#D5B45E] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                      Corporate Headquarters
                    </p>
                    <p className="text-sm font-semibold text-[#0C2815] mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Central Dispatch & Quality Inspection Facilities
                    </p>
                  </div>
                </div>
              </div>

              {/* Division Direct List */}
              <div className="bg-[#E6D9B6]/30 rounded-2xl p-6 border border-[#D5B45E]/40">
                <p className="font-serif text-sm font-bold text-[#0C2815] mb-2">
                  Specialized Division Coordination
                </p>
                <div className="space-y-1.5 text-xs text-neutral-700">
                  {BUSINESS_DIVISIONS.map(d => (
                    <div key={d.id} className="flex items-center justify-between py-1 border-b border-[#E6D9B6]/60 last:border-none">
                      <span className="font-medium text-[#0C2815]">{d.name}</span>
                      <span className="text-[10px] font-bold text-[#173B20] uppercase">{d.brandCode}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Corporate Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6D9B6] shadow-lg">
                
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#173B20]/10 border-2 border-[#173B20] flex items-center justify-center text-[#173B20] mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#0C2815] mb-2">
                      Enquiry Successfully Received
                    </h3>
                    <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
                      Thank you for contacting CSR Group of Companies. Our institutional liaison has been notified and will reach out with the requested catalogues and proposal details.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg bg-[#173B20] text-white text-xs font-bold uppercase tracking-wider"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-xs font-bold text-[#D5B45E] uppercase tracking-wider">
                        Online Desk
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#0C2815] mt-1 mb-1">
                        Corporate & Trade Enquiry
                      </h3>
                      <p className="text-xs text-neutral-500">
                        Fill in your requirements for bulk orders, subscriptions, or institutional tenders.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-semibold text-[#0C2815] uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0C2815] uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit mobile number"
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0C2815] uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@organization.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0C2815] uppercase tracking-wider mb-1">
                          Company / Institution Name
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. IT Park, School, Caterer, Household"
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0C2815] uppercase tracking-wider mb-1">
                          Target Division
                        </label>
                        <select
                          value={formData.division}
                          onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none bg-white cursor-pointer"
                        >
                          <option value="all">All Six Divisions / Combined Supply</option>
                          {BUSINESS_DIVISIONS.map(d => (
                            <option key={d.id} value={d.id}>{d.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0C2815] uppercase tracking-wider mb-1">
                          Enquiry Nature
                        </label>
                        <select
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none bg-white cursor-pointer"
                        >
                          <option value="bulk">Bulk / Wholesale Purchase</option>
                          <option value="subscription">Subscription Delivery Schedules</option>
                          <option value="canteen">Canteen / Campus Catering</option>
                          <option value="corporate-gifting">Corporate Wellness & Gifting</option>
                          <option value="partnership">Vendor & Distribution Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0C2815] uppercase tracking-wider mb-1">
                        Specific Requirement Notes
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please detail your approximate quantities, delivery timeline, frequency, or any special specifications..."
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[11px] text-neutral-500">
                        * Purely informational. No payment or cart needed.
                      </p>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#173B20] hover:bg-[#0C2815] text-[#FBFAF4] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4 text-[#D5B45E]" />
                        <span>Send Corporate Enquiry</span>
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

          {/* FAQs Section */}
          <div className="mt-20 pt-16 border-t border-neutral-200">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-[#173B20] text-xs font-bold uppercase tracking-widest mb-2">
                <HelpCircle className="w-4 h-4 text-[#D5B45E]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#0C2815]">
                Corporate Inquiries & Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-[#E6D9B6]/60 shadow-sm">
                  <h4 className="font-serif text-base font-bold text-[#0C2815] mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
