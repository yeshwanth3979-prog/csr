import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <ol className="flex items-center space-x-2 text-xs text-neutral-500 flex-wrap">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1.5 text-[#173B20] hover:text-[#0C2815] font-semibold transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>CSR Group</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              {isLast ? (
                <span className="text-[#0C2815] font-bold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-[#173B20] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

