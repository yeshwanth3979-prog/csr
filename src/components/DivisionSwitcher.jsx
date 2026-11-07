import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_DIVISIONS } from '../data/businessesData';
import SmartImage from './SmartImage';

export default function DivisionSwitcher({ currentSlug }) {
  const otherDivisions = BUSINESS_DIVISIONS.filter(d => d.slug !== currentSlug);

  return (
    <section className="py-14 bg-[#F4EEDF]/60 border-t border-b border-[#E6D9B6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-[#D5B45E] text-xs font-bold uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore More Under CSR Group</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C2815]">
              Other Business Divisions
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm mt-1">
              Explore the remaining pillars of our corporate conglomerate
            </p>
          </div>

          <Link
            to="/"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-[#173B20] hover:text-[#0C2815] uppercase tracking-wider underline underline-offset-4"
          >
            <span>Back to All 6 Divisions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid of Other Divisions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {otherDivisions.map((division) => (
            <Link
              key={division.id}
              to={`/business/${division.slug}`}
              className="bg-white rounded-xl p-4 border border-[#E6D9B6]/60 hover:border-[#D5B45E] hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-24 rounded-lg overflow-hidden mb-3 bg-neutral-100">
                  <SmartImage
                    src={division.cardImage}
                    fallback={division.cardFallback}
                    alt={division.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-serif text-sm font-bold text-[#0C2815] group-hover:text-[#173B20] transition-colors line-clamp-1">
                  {division.name}
                </h4>
                <p className="text-[11px] text-[#D5B45E] font-medium tracking-wide mt-0.5 uppercase line-clamp-1">
                  {division.tagline}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-[#173B20]">
                <span>View Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D5B45E] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
