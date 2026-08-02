import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioItems } from "../data";
import { X, Calendar, MapPin, Eye, Trophy, ArrowUpRight } from "lucide-react";
import { PortfolioItem } from "../types";

const fallbackImages: Record<string, string> = {
  p1: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200", // Sanam Band Tour
  p2: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200", // Live performance
  p3: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200", // Vishal & Sheykhar
  p4: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&q=80&w=1200", // Anshuman Pandey
  p5: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200", // Abhijeet Bhattacharya
  p6: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200", // Triumph Bike Campaign
};

export default function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = ["All", "Events", "Campaigns", "Creators", "Festivals"];

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#100720] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center bg-[#100720] border-l-4 border-[#E8FF00] px-3 py-1 rounded-none mb-4 shadow-sm">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--citrus)] uppercase">PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-[var(--cream)] tracking-tight leading-tight">
              Selected Impact Deliverables
            </h2>
          </div>

          {/* Interactive Filters Panel */}
          <div className="flex flex-wrap gap-2 py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-none font-heading text-xs font-bold uppercase tracking-widest border transition-all duration-300 focus:outline-none cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1A0B2E] text-[#F0EDE8] border-[#1A0B2E]"
                    : "bg-[#100720] text-[#F0EDE8]/50 border-[#7B2FFF]/20 hover:bg-[#100720] hover:text-[#F0EDE8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="relative overflow-hidden rounded-none group border border-[#7B2FFF]/20 shadow-sm aspect-[4/3] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = fallbackImages[item.id] || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200";
                    if (target.src !== fallback) {
                      target.src = fallback;
                    }
                  }}
                />

                {/* Cover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6" />

                {/* Initial Badge (visible before hover) */}
                <div className="absolute top-4 left-4 z-10 text-left">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1 bg-[#100720] border border-[#7B2FFF]/20 rounded-none shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Overlaid Hover details */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-left">
                  {/* Top line of hover details */}
                  <div className="flex justify-between items-start w-full">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1 bg-[#FF1CF7] text-[#F0EDE8] rounded-none">
                      {item.year}
                    </span>
                    <div className="p-2.5 rounded-none bg-white/25 backdrop-blur-md text-[#F0EDE8]">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom line of hover details */}
                  <div className="space-y-1">
                    <span className="text-[#F0EDE8]/70 font-body text-xs font-semibold uppercase tracking-wider">{item.client}</span>
                    <h3 className="font-heading font-extrabold text-[#F0EDE8] text-lg tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    {item.stat && (
                      <div className="flex items-center space-x-1.5 text-[#E8FF00] font-heading text-xs font-bold pt-1">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>{item.stat}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Pop-up Modal Panel */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-[#1A0B2E]/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#100720] rounded-none overflow-hidden max-w-4xl w-full border border-[#7B2FFF]/20 shadow-2xl grid grid-cols-1 md:grid-cols-12"
              >
                {/* Left: Image Side */}
                <div className="md:col-span-7 h-[250px] md:h-full relative shrink-0">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = fallbackImages[activeItem.id] || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200";
                      if (target.src !== fallback) {
                        target.src = fallback;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Right: Info Content */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
                  <div>
                    {/* Top line badges */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest px-3 py-1 bg-[#FF1CF7]/10 text-[#FF1CF7] rounded-none">
                        {activeItem.category}
                      </span>
                      <button
                        onClick={() => setActiveItem(null)}
                        className="p-1.5 rounded-none hover:bg-[#100720] text-[#F0EDE8]/50 hover:text-[#F0EDE8] transition-colors cursor-pointer border border-transparent"
                        aria-label="Close details"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <span className="text-[#F0EDE8]/50 font-body text-xs font-bold uppercase tracking-wider">{activeItem.client}</span>
                    <h3 className="font-heading font-extrabold text-[var(--cream)] text-2xl tracking-tight mt-1 mb-3">
                      {activeItem.title}
                    </h3>
                    <p className="text-[#F0EDE8]/50 font-body text-sm leading-relaxed mb-6">
                      {activeItem.description}
                    </p>

                    {/* Metadata boxes */}
                    <div className="space-y-3 pt-4 border-t border-[#7B2FFF]/10">
                      {activeItem.location && (
                        <div className="flex items-center space-x-3 text-[#F0EDE8]/50 font-body text-xs md:text-sm">
                          <MapPin className="w-4 h-4 text-[#F0EDE8]/50" />
                          <span><strong>Location:</strong> {activeItem.location}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-3 text-[#F0EDE8]/50 font-body text-xs md:text-sm">
                        <Calendar className="w-4 h-4 text-[#F0EDE8]/50" />
                        <span><strong>Year:</strong> {activeItem.year}</span>
                      </div>
                      {activeItem.stat && (
                        <div className="flex items-center space-x-3 text-[#F0EDE8]/50 font-body text-xs md:text-sm">
                          <Trophy className="w-4 h-4 text-[#E8FF00]" />
                          <span><strong>Outcome:</strong> <span className="text-[var(--cream)] font-bold">{activeItem.stat}</span></span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions bottom */}
                  <div className="pt-4 border-t border-[#7B2FFF]/10 flex">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveItem(null);
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full text-center py-3 rounded-none bg-[#1A0B2E] hover:bg-[#FF1CF7] text-[#F0EDE8] font-heading font-bold text-xs uppercase tracking-widest transition-all shadow-sm"
                    >
                      Inquire About This Format
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
