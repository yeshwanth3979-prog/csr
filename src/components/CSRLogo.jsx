import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CSRLogo({ variant = "default", className = "" }) {
  // variant can be 'light' (for dark background) or 'dark' (for light background) or 'footer'
  const isDarkBg = variant === "light" || variant === "footer";
  const [imgError, setImgError] = useState(false);

  return (
    <Link to="/" className={`inline-flex items-center gap-2 sm:gap-3.5 group text-left min-w-0 ${className}`}>
      {/* Premium Seal / Crest Icon */}
      {!imgError ? (
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-[#D5B45E]/40 shadow-md group-hover:border-[#D5B45E] transition-all duration-300 bg-white flex items-center justify-center p-0.5">
          <img
            src="/images/logo.svg?v=3"
            alt="CSR Group Logo"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Fallback Pure CSS/Tailwind Badge */
        <div className="relative flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#173B20] to-[#0C2815] border border-[#D5B45E]/40 shadow-md group-hover:border-[#D5B45E] transition-all duration-300 shrink-0">
          <div className="absolute inset-0.5 rounded-[10px] border border-[#D5B45E]/20"></div>
          <div className="flex flex-col items-center justify-center leading-none">
            <span className="font-serif font-black text-base sm:text-xl tracking-wider text-[#D5B45E] group-hover:scale-105 transition-transform duration-200">
              CSR
            </span>
            <span className="text-[6px] sm:text-[7px] tracking-widest uppercase text-[#FBFAF4]/80 font-bold mt-0.5">
              EST. 1919
            </span>
          </div>
        </div>
      )}

      {/* Brand Text */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1 sm:gap-2">
          <span className={`font-serif text-lg sm:text-2xl font-bold tracking-tight leading-none ${isDarkBg ? 'text-[#FBFAF4]' : 'text-[#0C2815]'}`}>
            CSR
          </span>
          <span className="hidden min-[380px]:inline text-[#D5B45E] font-serif font-light text-base sm:text-2xl leading-none">|</span>
          <span className={`text-[10px] sm:text-sm font-semibold tracking-wider uppercase leading-none truncate ${isDarkBg ? 'text-[#E6D9B6]' : 'text-[#173B20]'}`}>
            <span className="hidden min-[380px]:inline">Group of Companies</span>
            <span className="min-[380px]:hidden">Group</span>
          </span>
        </div>
        <p className="text-[10px] sm:text-[11px] tracking-wider sm:tracking-widest uppercase text-[#D5B45E] font-medium mt-0.5 sm:mt-1 hidden sm:block">
          Stay Strong, Stay Healthy
        </p>
      </div>
    </Link>
  );
}
