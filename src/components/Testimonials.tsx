import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials, partners } from "../data";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto scroll testimonials every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIdx];

  // Helper colors for simulated logo badges
  const getPartnerColor = (name: string) => {
    switch (name.toLowerCase()) {
      case "hdfc bank": return "group-hover:text-[#F0EDE8] group-hover:bg-[#100720]";
      case "porsche": return "group-hover:text-[var(--cream)] group-hover:bg-[#E8FF00]";
      case "spotify": return "group-hover:text-emerald-500 group-hover:bg-emerald-50";
      case "samsung": return "group-hover:text-[#FF1CF7]/80 group-hover:bg-blue-50";
      case "redbull": return "group-hover:text-[#F0EDE8] group-hover:bg-[#7B2FFF]";
      case "boilerroom": return "group-hover:text-[#FF1CF7] group-hover:bg-[#1A0B2E] group-hover:text-[#F0EDE8]";
      case "hypebeast": return "group-hover:text-[#F0EDE8] group-hover:bg-[#100720]";
      case "vice": default: return "group-hover:text-pink-600 group-hover:bg-pink-50";
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#100720] relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-[15%] right-[5%] w-[200px] h-[200px] rounded-full bg-[#FF1CF7]/5 blur-[70px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] rounded-full bg-[#E8FF00]/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Testimonials Block */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center bg-[#100720] border-l-4 border-[#E8FF00] px-3 py-1 rounded-none mb-4 shadow-sm">
              <span className="text-[var(--citrus)] text-[11px] font-bold tracking-[0.2em] uppercase font-heading">TESTIMONIALS</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-[var(--cream)] tracking-tight leading-tight">
              Voices of Conviction
            </h2>
          </div>

          {/* Testimonial Active Slider Slider */}
          <div className="relative max-w-4xl mx-auto">
            {/* Background absolute Quotation icon mark styling */}
            <div className="absolute -top-12 -left-12 opacity-[0.04] text-[var(--cream)] select-none pointer-events-none">
              <Quote className="w-48 h-48 fill-current" />
            </div>

            <div className="relative bg-[#100720] border border-[#7B2FFF]/20 border-l-4 border-l-[#E8FF00] rounded-none p-8 sm:p-12 md:p-16">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Stars indicators */}
                  <div className="flex space-x-1 justify-center sm:justify-start">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#E8FF00] text-[#E8FF00]" />
                    ))}
                  </div>

                  {/* Testimonial review speech quotes text */}
                  <p className="font-heading text-lg sm:text-xl md:text-2xl text-[var(--cream)] italic leading-relaxed text-center sm:text-left">
                    "{currentTestimonial.content}"
                  </p>

                  {/* Reviewer author details layout */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 pt-6 border-t border-[#7B2FFF]/20">
                    <div className="space-y-0.5 text-center sm:text-left">
                      <h4 className="font-heading font-extrabold text-[var(--cream)] text-base leading-tight">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-[#F0EDE8]/50 font-body text-xs sm:text-sm font-medium">
                        {currentTestimonial.role}, <span className="text-[#FF1CF7] font-semibold">{currentTestimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controller buttons */}
              <div className="absolute right-6 bottom-6 sm:right-12 sm:bottom-12 flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-none border border-[#7B2FFF]/30 hover:border-[#7B2FFF]/50 bg-[#100720] hover:bg-[#100720] text-[#F0EDE8]/80 hover:text-[#F0EDE8] transition-colors cursor-pointer"
                  aria-label="Previous feedback"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-none border border-[#7B2FFF]/30 hover:border-[#7B2FFF]/50 bg-[#100720] hover:bg-[#100720] text-[#F0EDE8]/80 hover:text-[#F0EDE8] transition-colors cursor-pointer"
                  aria-label="Next feedback"
                >
                  <ChevronRight className="w-4 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Partners & Clients Logo Shelf Banner */}
        <div className="border-t border-[#1A0B2E]/10 pt-16">
          <div className="text-center mb-10">
            <span className="text-[var(--citrus)] text-xs font-bold tracking-[0.2em] uppercase font-body">PARTNERS & AFFILIATES</span>
            <h3 className="font-heading font-extrabold text-2xl tracking-tight text-[var(--cream)] mt-1">Our Trusted Networks</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {partners.map((pt) => {
              const bgClass = getPartnerColor(pt.name);
              return (
                <div
                  key={pt.id}
                  className={`group relative py-6 px-4 rounded-none border border-[#7B2FFF]/20 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer text-[#F0EDE8]/50 bg-[#100720] hover:shadow-sm`}
                >
                  {/* Subtle hover effect to simulate real logos typing color */}
                  <span className={`font-heading font-extrabold text-lg sm:text-xl tracking-widest uppercase transition-all duration-300 ${bgClass} group-hover:scale-105 select-none py-1 px-3.5 rounded-lg`}>
                    {pt.name}
                  </span>
                  
                  {/* Small tag classification */}
                  <span className="text-[9px] uppercase tracking-wider text-[#F0EDE8]/50 font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {pt.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
