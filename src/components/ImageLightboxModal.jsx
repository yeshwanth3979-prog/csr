import React, { useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import SmartImage from './SmartImage';

export default function ImageLightboxModal({ isOpen, onClose, image, fallback, title, subtitle, specs, variants, onEnquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#FBFAF4] rounded-2xl overflow-hidden shadow-2xl border border-[#D5B45E]/50 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#0C2815] to-[#173B20] text-white px-6 py-4 flex items-center justify-between border-b border-[#D5B45E]/30 shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D5B45E] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full High-Resolution Image View</span>
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FBFAF4] mt-0.5">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Image Container - Shows complete uncropped image */}
        <div className="relative flex-1 bg-neutral-950 p-4 sm:p-6 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[58vh]">
          <SmartImage
            src={image}
            fallback={fallback}
            alt={title}
            className="max-h-[54vh] w-auto max-w-full object-contain rounded-lg shadow-2xl mx-auto"
          />
        </div>

        {/* Details & Action Footer */}
        <div className="p-5 sm:p-6 bg-[#FBFAF4] border-t border-neutral-200/80 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="max-w-xl">
            {specs && (
              <p className="text-xs font-bold text-[#D5B45E] uppercase tracking-wider mb-1">
                {specs}
              </p>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {subtitle}
              </p>
            )}
            {variants && variants.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                <span className="text-[10px] uppercase font-bold text-neutral-400 self-center mr-1">
                  Available Formats:
                </span>
                {variants.map((v, i) => (
                  <span key={i} className="text-[11px] font-semibold text-[#0C2815] bg-[#E6D9B6]/40 px-2 py-0.5 rounded border border-[#D5B45E]/30">
                    {v}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onEnquire && (
              <button
                onClick={() => {
                  onClose();
                  onEnquire();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#173B20] hover:bg-[#0C2815] text-[#FBFAF4] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Enquire For This Product</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D5B45E]" />
              </button>
            )}
            <button
              onClick={onClose}
              className="hidden sm:inline-block px-4 py-2.5 rounded-xl border border-neutral-300 text-neutral-700 text-xs font-semibold hover:bg-neutral-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
