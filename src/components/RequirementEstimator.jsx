import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_DIVISIONS } from '../data/businessesData';

export default function RequirementEstimator({ onOpenEnquiry }) {
  const [clientType, setClientType] = useState('corporate');
  const [selectedDivisions, setSelectedDivisions] = useState(['dairy', 'meal-box']);
  const [frequency, setFrequency] = useState('daily');
  const [volume, setVolume] = useState('medium');

  const toggleDivision = (id) => {
    setSelectedDivisions(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const selectedDivisionNames = BUSINESS_DIVISIONS
    .filter(d => selectedDivisions.includes(d.id))
    .map(d => d.name)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    `Hello CSR Group of Companies,\n\nI would like an institutional trade quotation for:\n` +
    `• Client Type: ${clientType.toUpperCase()}\n` +
    `• Divisions Required: ${selectedDivisionNames || 'All Divisions'}\n` +
    `• Delivery Schedule: ${frequency.toUpperCase()}\n` +
    `• Estimated Headcount / Scale: ${volume.toUpperCase()}\n\nPlease connect with catalogue & delivery parameters.`
  );

  return (
    <section className="py-20 bg-[#F4EEDF]/50 border-t border-b border-[#E6D9B6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-12 border border-[#E6D9B6] shadow-xl">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173B20]/10 text-[#173B20] text-xs font-bold uppercase tracking-widest mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#D5B45E]" />
              <span>Interactive Trade Planner</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C2815]">
              Estimate Your Corporate or Community Supply
            </h2>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Configure your multi-division requirements below to generate a tailored corporate inquiry proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Config Panel */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Client Category */}
              <div>
                <label className="block text-xs font-bold text-[#0C2815] uppercase tracking-wider mb-2">
                  1. Organization Profile
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'corporate', label: 'Corporate Office' },
                    { id: 'residential', label: 'Gated Society' },
                    { id: 'institution', label: 'Hostel / College' },
                    { id: 'events', label: 'Event / Catering' },
                  ].map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setClientType(item.id)}
                      className={`min-h-[44px] px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center text-center ${
                        clientType === item.id
                          ? 'bg-[#173B20] text-[#FBFAF4] border-[#173B20] shadow-sm'
                          : 'bg-[#FBFAF4] text-neutral-700 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Divisions Selection */}
              <div>
                <label className="block text-xs font-bold text-[#0C2815] uppercase tracking-wider mb-2">
                  2. Select Divisions of Interest (Choose all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BUSINESS_DIVISIONS.map(d => {
                    const isChecked = selectedDivisions.includes(d.id);
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => toggleDivision(d.id)}
                        className={`min-h-[48px] p-3 rounded-xl text-left border flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-[#173B20]/5 border-[#173B20] text-[#0C2815]'
                            : 'bg-[#FBFAF4] border-neutral-200 text-neutral-600 hover:border-neutral-300'
                        }`}
                      >
                        <div className="pr-2">
                          <p className="text-xs font-bold leading-tight">{d.name}</p>
                          <p className="text-[11px] text-neutral-500 leading-tight mt-0.5">{d.tagline}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center border ${
                          isChecked ? 'bg-[#173B20] border-[#173B20] text-white' : 'border-neutral-300'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Frequency & Scale */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0C2815] uppercase tracking-wider mb-2">
                    3. Dispatch Frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-[#FBFAF4] text-xs font-semibold text-[#0C2815] outline-none"
                  >
                    <option value="daily">Daily Morning Supply (6:00 AM)</option>
                    <option value="alternate">Alternate Days / 3 Days Week</option>
                    <option value="weekly">Weekly Consolidated Crates</option>
                    <option value="monthly">Monthly Standing Agreement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0C2815] uppercase tracking-wider mb-2">
                    4. Scale / Headcount
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-[#FBFAF4] text-xs font-semibold text-[#0C2815] outline-none"
                  >
                    <option value="small">Small Scale (10 – 30 Persons / Households)</option>
                    <option value="medium">Medium Scale (30 – 100 Persons)</option>
                    <option value="large">Large Institutional (100 – 500+ Persons)</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#173B20] to-[#0C2815] rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-lg border border-[#D5B45E]/40">
              <div>
                <div className="flex items-center gap-2 text-[#D5B45E] text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Configured Requirement Summary</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-[#FBFAF4] mb-4">
                  CSR Consolidated Agreement
                </h3>

                <div className="space-y-3 text-xs text-neutral-200 border-t border-b border-white/15 py-4 my-4">
                  <div className="flex justify-between">
                    <span className="text-white/60">Organization Type:</span>
                    <span className="font-bold text-white uppercase">{clientType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Selected Divisions:</span>
                    <span className="font-bold text-[#D5B45E] text-right max-w-[200px] truncate">
                      {selectedDivisions.length} Active ({selectedDivisionNames || 'None'})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Supply Rhythm:</span>
                    <span className="font-bold text-white capitalize">{frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Estimated Scale:</span>
                    <span className="font-bold text-white capitalize">{volume}</span>
                  </div>
                </div>

                <p className="text-[11px] text-white/70 leading-relaxed mb-6">
                  Single invoice consolidation across all selected divisions with dedicated temperature-controlled morning dispatch.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/919014737958?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-[#D5B45E] hover:bg-[#bfa14c] text-[#0C2815] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Requirements on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry('general')}
                  className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-[#FBFAF4] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit as Corporate Enquiry Form</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D5B45E]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
