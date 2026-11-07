import React from 'react';
import { ShieldCheck, CheckCircle2, Microscope } from 'lucide-react';

const standards = [
  {
    division: "Sri Kanakadurgya Dairy",
    standard: "Antibiotic & Hormone Free",
    desc: "100% farm milk flash-chilled to 4°C within 120 minutes of milking with rigorous lactometer and purity testing.",
    tag: "Dairy Purity"
  },
  {
    division: "Sri Anjaneya Fruit Box",
    standard: "Zero Artificial Carbide Ripening",
    desc: "Ethylene and natural ambient humidity ripening only. Hand-graded for sugar brix, color, and natural aroma.",
    tag: "Orchard Fresh"
  },
  {
    division: "Sri Siddhi Vinayaka Vegetables",
    standard: "Ozonated Water Sanitation",
    desc: "Multi-stage ozonated water washing removing surface mud, bacteria, and agricultural residue while locking in crispness.",
    tag: "Farm Direct"
  },
  {
    division: "Protein Box",
    standard: "Nutritionist Verified Macros",
    desc: "Calculated protein-to-carb ratios with zero processed fillers, zero trans fats, and zero refined white sugars.",
    tag: "Clean Nutrition"
  },
  {
    division: "Sri Manikanta Meal Box",
    standard: "Cold-Pressed Cooking Oils Only",
    desc: "Prepared with 100% cold-pressed groundnut & sesame oils, rock salt, and authentic stone-ground spices without MSG.",
    tag: "Homely Satvik"
  },
  {
    division: "Vedha Gayathri Pooja Items",
    standard: "100% Charcoal-Free Herbal Agarbatti",
    desc: "Sacred water coconuts hand-inspected for unbroken kalash eyes, paired with pure cow ghee and natural floral extracts.",
    tag: "Sacred Sanctity"
  }
];

export default function QualityStandards() {
  return (
    <section className="py-20 bg-white border-t border-b border-[#E6D9B6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173B20]/10 text-[#173B20] text-xs font-bold uppercase tracking-widest mb-3">
            <Microscope className="w-3.5 h-3.5 text-[#D5B45E]" />
            <span>Rigorous Quality Assurance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C2815]">
            The CSR Multi-Tier Purity Charter
          </h2>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Every division enforces measurable food safety and ritual purity benchmarks before any crate or box is dispatched.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((s, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#FBFAF4] border border-[#E6D9B6]/60 hover:border-[#D5B45E] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D5B45E] bg-[#0C2815] px-2.5 py-0.5 rounded">
                    {s.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#173B20]" />
                </div>
                <p className="text-xs font-semibold text-[#173B20] mb-1">
                  {s.division}
                </p>
                <h4 className="font-serif text-lg font-bold text-[#0C2815] mb-2">
                  {s.standard}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center gap-2 text-[11px] text-neutral-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D5B45E]" />
                <span>Certified Daily Batch Protocol</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
