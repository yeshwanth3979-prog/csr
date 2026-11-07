import React from 'react';
import { 
  ShieldCheck, 
  Sprout, 
  HeartPulse, 
  Award, 
  Smile, 
  Flame 
} from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sprout: Sprout,
  HeartPulse: HeartPulse,
  Award: Award,
  Smile: Smile,
  Flame: Flame
};

export default function ValueCard({ value, index }) {
  const IconComponent = iconMap[value.icon] || ShieldCheck;

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E6D9B6]/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D5B45E] flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#173B20]/10 border border-[#173B20]/20 flex items-center justify-center text-[#173B20] group-hover:bg-[#173B20] group-hover:text-[#D5B45E] transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-serif font-bold text-[#D5B45E]">
            0{index + 1}
          </span>
        </div>

        <h3 className="font-serif text-lg font-bold text-[#0C2815] mb-1 group-hover:text-[#173B20] transition-colors">
          {value.title}
        </h3>
        
        <p className="text-xs font-semibold text-[#D5B45E] uppercase tracking-wider mb-2">
          {value.shortDesc}
        </p>

        <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
          {value.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#173B20]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#D5B45E]"></div>
        <span>CSR Group Standard</span>
      </div>
    </div>
  );
}

