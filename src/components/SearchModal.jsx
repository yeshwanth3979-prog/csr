import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { BUSINESS_DIVISIONS } from '../data/businessesData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
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

  // Search across divisions and categories
  const trimmed = query.trim().toLowerCase();
  const results = [];

  if (trimmed.length > 0) {
    for (const division of BUSINESS_DIVISIONS) {
      // Check division name / tagline
      if (
        division.name.toLowerCase().includes(trimmed) ||
        division.tagline.toLowerCase().includes(trimmed) ||
        division.shortDescription.toLowerCase().includes(trimmed)
      ) {
        results.push({
          type: 'division',
          title: division.name,
          subtitle: division.tagline,
          divisionName: division.name,
          slug: division.slug,
          badge: division.badge,
          path: `/business/${division.slug}`
        });
      }

      // Check categories
      for (const cat of division.categories) {
        if (
          cat.name.toLowerCase().includes(trimmed) ||
          cat.description.toLowerCase().includes(trimmed) ||
          (cat.specs && cat.specs.toLowerCase().includes(trimmed)) ||
          (cat.variants && cat.variants.some(v => v.toLowerCase().includes(trimmed)))
        ) {
          results.push({
            type: 'category',
            title: cat.name,
            subtitle: cat.specs || cat.description,
            divisionName: division.name,
            slug: division.slug,
            badge: division.brandCode,
            path: `/business/${division.slug}#catalogue`
          });
        }
      }
    }
  }

  const handleSelect = (path) => {
    setQuery('');
    onClose();
    navigate(path);
  };

  const handleCloseModal = () => {
    setQuery('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleCloseModal}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FBFAF4] rounded-2xl shadow-2xl border border-[#D5B45E]/40 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-[#E6D9B6] px-4 py-3.5 bg-white">
          <Search className="w-5 h-5 text-[#173B20] shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search divisions, milk, fruit boxes, veggies, protein, meals, pooja items..."
            className="w-full text-sm sm:text-base outline-none text-[#0C2815] placeholder-neutral-400 bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleCloseModal}
            className="px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 text-[11px] font-semibold text-neutral-600 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto">
          {trimmed.length === 0 ? (
            <div className="py-8 text-center text-xs text-neutral-500">
              <p className="font-semibold text-neutral-700 text-sm mb-1">Search the Entire CSR Portfolio</p>
              <p>Type any keyword such as <span className="text-[#173B20] font-bold">"Ghee"</span>, <span className="text-[#173B20] font-bold">"Curd"</span>, <span className="text-[#173B20] font-bold">"Fruit Box"</span>, <span className="text-[#173B20] font-bold">"Sprouts"</span>, or <span className="text-[#173B20] font-bold">"Agarbatti"</span>.</p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4">
                {['Milk', 'Ghee', 'Paneer', 'Dry Fruits', 'Sprouts', 'Pickles', 'Incense', 'Salads'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-full bg-[#E6D9B6]/40 hover:bg-[#E6D9B6] text-[#0C2815] text-[11px] font-medium transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-neutral-500 text-xs">
              <p className="text-sm font-semibold text-[#0C2815] mb-1">No matching offerings found for "{query}"</p>
              <p>Please try a different term or explore our six main divisions on the homepage.</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-2 mb-2">
                Found {results.length} Matching Offering{results.length > 1 ? 's' : ''}
              </p>
              {results.map((res, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelect(res.path)}
                  className="w-full p-3 rounded-xl bg-white hover:bg-[#173B20]/5 border border-[#E6D9B6]/60 hover:border-[#D5B45E] transition-all text-left flex items-center justify-between group"
                >
                  <div className="min-w-0 pr-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#173B20] text-[#D5B45E]">
                        {res.badge}
                      </span>
                      <span className="text-xs text-neutral-500 truncate">
                        {res.divisionName}
                      </span>
                    </div>
                    <p className="font-serif text-sm sm:text-base font-bold text-[#0C2815] group-hover:text-[#173B20] transition-colors truncate">
                      {res.title}
                    </p>
                    <p className="text-xs text-neutral-600 truncate mt-0.5">
                      {res.subtitle}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 group-hover:bg-[#173B20] text-neutral-500 group-hover:text-[#D5B45E] flex items-center justify-center shrink-0 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#E6D9B6]/30 border-t border-[#E6D9B6] text-[11px] text-neutral-500 flex items-center justify-between">
          <span>Tip: Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-neutral-300 font-mono text-[10px]">Ctrl+K</kbd> anytime to open</span>
          <span className="text-[#173B20] font-semibold">CSR Group of Companies</span>
        </div>
      </div>
    </div>
  );
}
