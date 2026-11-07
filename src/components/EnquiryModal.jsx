import React, { useState, useEffect } from 'react';
import { X, Send, Phone, Mail, CheckCircle2, Sparkles } from 'lucide-react';
import { BUSINESS_DIVISIONS, COMPANY_INFO } from '../data/businessesData';

export default function EnquiryModal({ isOpen, onClose, initialDivision = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    division: initialDivision || "general",
    enquiryType: "bulk",
    organization: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const activeDivision = formData.division || initialDivision || "general";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FBFAF4] rounded-2xl shadow-2xl border border-[#D5B45E]/40 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0C2815] to-[#173B20] text-white p-6 relative border-b border-[#D5B45E]/30">
          <button 
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-[#D5B45E] text-xs font-semibold tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4" />
            <span>CSR Group Corporate Enquiry</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#FBFAF4]">
            Business & Institutional Enquiry
          </h3>
          <p className="text-[#E6D9B6] text-xs mt-1">
            Bulk orders, subscription arrangements, and commercial partnerships across all 6 divisions.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#173B20]/10 border-2 border-[#173B20] flex items-center justify-center text-[#173B20] mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0C2815] mb-2">
                Enquiry Recorded Successfully
              </h4>
              <p className="text-neutral-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
                Thank you for reaching out to <span className="font-semibold text-[#173B20]">CSR Group of Companies</span>. Our executive relationship team will review your requirement and connect with you promptly.
              </p>
              
              <div className="bg-[#E6D9B6]/30 border border-[#D5B45E]/40 rounded-xl p-4 max-w-md w-full mb-6 text-left text-xs text-[#0C2815] space-y-2">
                <p className="font-bold text-sm text-[#173B20]">Direct Corporate Access:</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D5B45E]" />
                  <span>Call: </span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-semibold underline hover:text-[#173B20]">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D5B45E]" />
                  <span>Email: </span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold underline hover:text-[#173B20]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-lg bg-[#173B20] text-white font-medium hover:bg-[#0C2815] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0C2815] mb-1.5 uppercase tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0C2815] mb-1.5 uppercase tracking-wider">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0C2815] mb-1.5 uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0C2815] mb-1.5 uppercase tracking-wider">
                    Organization / Company / Household
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or community name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0C2815] mb-1.5 uppercase tracking-wider">
                    Business Division
                  </label>
                  <select
                    value={activeDivision}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none transition cursor-pointer"
                  >
                    <option value="general">All Divisions / General Corporate Enquiry</option>
                    {BUSINESS_DIVISIONS.map(d => (
                      <option key={d.id} value={d.id}>{d.name} ({d.tagline})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0C2815] mb-1.5 uppercase tracking-wider">
                    Nature of Enquiry
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none transition cursor-pointer"
                  >
                    <option value="bulk">Bulk / Institutional Purchase</option>
                    <option value="subscription">Subscription Delivery Information</option>
                    <option value="corporate-gifting">Corporate Wellness & Gifting</option>
                    <option value="distribution">Distribution / Partnership</option>
                    <option value="general">General Information</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0C2815] mb-1.5 uppercase tracking-wider">
                  Requirement Details / Message
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your requirements, expected quantity, delivery frequency, or institutional query..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#173B20] focus:ring-1 focus:ring-[#173B20] text-sm outline-none transition resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-neutral-200">
                <p className="text-[11px] text-neutral-500">
                  * This is an informational corporate portal. No payment is processed.
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 text-xs font-semibold hover:bg-neutral-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-initial px-6 py-2.5 rounded-lg bg-[#173B20] hover:bg-[#0C2815] text-[#FBFAF4] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D5B45E]" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
