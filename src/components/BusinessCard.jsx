import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SmartImage from './SmartImage';

export default function BusinessCard({ division, index = 0 }) {
  return (
    <Link
      to={`/business/${division.slug}`}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E6D9B6]/60 hover:border-[#D5B45E] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#D5B45E]"
    >
      {/* Top Image Container - Taller and showing full imagery */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
        <SmartImage
          src={division.cardImage}
          fallback={division.cardFallback}
          alt={division.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Division Badge / Seal */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C2815]/85 backdrop-blur-md border border-[#D5B45E]/50 text-[#D5B45E] text-[10px] font-bold tracking-widest uppercase">
          <Sparkles className="w-3 h-3 text-[#D5B45E]" />
          <span>Division 0{index + 1}</span>
        </div>

        {/* Sub-badge */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <span className="text-[11px] font-bold text-white tracking-wide uppercase px-2.5 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-white/20">
            {division.badge}
          </span>
          <span className="text-xs text-[#E6D9B6] font-medium tracking-wider">
            {division.categories.length} Core Categories
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Business Name */}
          <h3 className="font-serif text-xl font-bold text-[#0C2815] group-hover:text-[#173B20] transition-colors leading-snug">
            {division.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs font-semibold text-[#D5B45E] tracking-wide mt-1 uppercase">
            "{division.tagline}"
          </p>

          {/* Short Description */}
          <p className="text-neutral-600 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
            {division.shortDescription}
          </p>

          {/* Sample Product Chips */}
          <div className="mt-4 pt-3 border-t border-neutral-100">
            <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-2">
              Featured Offerings:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {division.categories.slice(0, 4).map((cat, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-[11px] font-medium text-neutral-700 bg-[#FBFAF4] border border-neutral-200/80 px-2 py-0.5 rounded-md"
                >
                  {cat.name}
                </span>
              ))}
              {division.categories.length > 4 && (
                <span className="text-[10px] text-neutral-400 self-center font-semibold">
                  +{division.categories.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-xs font-bold text-[#173B20] tracking-wider uppercase group-hover:text-[#0C2815]">
            Explore Business Division
          </span>
          <div className="w-8 h-8 rounded-full bg-[#173B20] group-hover:bg-[#0C2815] text-[#D5B45E] flex items-center justify-center transition-all duration-200 group-hover:translate-x-1 shadow-sm">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
