import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { regionalImpact } from "../data";
import { Globe, TrendingUp, BarChart3, Radio, ArrowUpRight, Check } from "lucide-react";

export default function MarketImpact() {
  const [selectedRegionIdx, setSelectedRegionIdx] = useState(0);
  const currentRegion = regionalImpact[selectedRegionIdx];

  // Max reach to calculate proportions for SVG chart rendering
  const maxReach = Math.max(...regionalImpact.map((r) => r.reach));

  return (
    <section id="impact" className="py-24 bg-[#1A0B2E] text-[#F0EDE8] relative overflow-hidden">
      {/* Immersive blurs */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-[#FF1CF7]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-[#E8FF00]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center bg-white/5 border-l-4 border-[#E8FF00] px-3 py-1 rounded-none mb-4 shadow-sm">
              <span className="text-[var(--citrus)] text-[11px] font-bold tracking-[0.2em] uppercase font-heading">MARKET IMPACT LABS</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight leading-tight text-[#F0EDE8]">
              Culturally Segmented Reach & Performance
            </h2>
          </div>
          
          <p className="text-[#F0EDE8]/50 font-body text-xs sm:text-sm max-w-sm">
            Live diagnostic summary tracking physical and digital interactions secure across multi-market networks. Select region on dashboard below.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/5 border border-white/10 border-t-4 border-t-[#FF1CF7] rounded-none p-6 sm:p-8 lg:p-10 backdrop-blur-md">
          
          {/* Left column: Regional picker list */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <h3 className="font-heading font-extrabold text-[#E8FF00] text-xs uppercase tracking-widest mb-2 flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              SELECT GLOBAL SECTOR
            </h3>

            {regionalImpact.map((r, idx) => {
              const isSelected = selectedRegionIdx === idx;
              return (
                <button
                  key={r.region}
                  onClick={() => setSelectedRegionIdx(idx)}
                  className={`p-4 rounded-none border text-left transition-all duration-300 relative focus:outline-none flex justify-between items-center group cursor-pointer ${
                    isSelected
                      ? "bg-[#FF1CF7] border-[#FF1CF7] text-[#F0EDE8] shadow-lg shadow-[#FF1CF7]/10"
                      : "bg-white/5 border-white/5 text-[#F0EDE8]/70 hover:bg-white/10 hover:text-[#F0EDE8]"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="font-heading font-bold text-sm sm:text-base">{r.region}</span>
                    <span className="block text-[10px] text-[#F0EDE8]/50 font-body uppercase group-hover:text-[#F0EDE8] transition-colors">
                      {r.campaigns} campaigns deployed
                    </span>
                  </div>

                  <div className={`p-1.5 rounded-none ${
                    isSelected ? "bg-white/20 text-[#F0EDE8]" : "bg-white/5 text-[#F0EDE8]/50 group-hover:text-[#F0EDE8]"
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right column: Interactive telemetry displays */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Top Indicators - Row 1 (Col 6 each) */}
            <div className="md:col-span-6 p-6 rounded-none bg-white/5 border border-white/5 flex flex-col justify-between space-y-4 text-left">
              <div className="flex justify-between items-center">
                <span className="text-[#F0EDE8]/50 font-body text-xs font-bold uppercase tracking-wider">Audience Reach</span>
                <Radio className="w-4 h-4 text-[#00FFD1] animate-pulse" />
              </div>
              <div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRegion.region}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="font-heading font-extrabold text-[#F0EDE8] text-3xl sm:text-4xl tracking-tight block"
                  >
                    {(currentRegion.reach * 1000).toLocaleString()}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs text-[#F0EDE8]/50 font-body">Active digital connections</span>
              </div>
            </div>

            <div className="md:col-span-6 p-6 rounded-none bg-white/5 border border-white/5 flex flex-col justify-between space-y-4 text-left">
              <div className="flex justify-between items-center">
                <span className="text-[#F0EDE8]/50 font-body text-xs font-bold uppercase tracking-wider font-heading">Engagement Rate</span>
                <TrendingUp className="w-4 h-4 text-[#E8FF00]" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRegion.region}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="font-heading font-extrabold text-[#E8FF00] text-3xl sm:text-4xl tracking-tight block"
                    >
                      {currentRegion.engagement}%
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[10px] sm:text-xs text-[#F0EDE8]/50 font-body">Average interaction ratio</span>
                </div>

                {/* Animated Radial SVG Progress circle */}
                <div className="relative w-14 h-14 select-none">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-[#F0EDE8]/10"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className="text-[#E8FF00]"
                      strokeWidth="3.5"
                      strokeDasharray={`${currentRegion.engagement}, 100`}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      animate={{ strokeDasharray: [`0, 100`, `${currentRegion.engagement}, 100`] }}
                      transition={{ duration: 0.8 }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Chart Presentation Box - Row 2 (Col 12) */}
            <div className="md:col-span-12 p-6 rounded-none bg-white/5 border border-white/5 text-left">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-heading font-extrabold text-sm text-[#F0EDE8]/70 uppercase tracking-widest flex items-center">
                  <BarChart3 className="w-4 h-4 mr-1.5 text-[#FF1CF7]" />
                  Comparative Reach (relative mapping)
                </h4>
                <span className="text-[10px] text-[#F0EDE8]/50 font-body">AUDIENCE INDEX X1000</span>
              </div>

              {/* Dynamic SVG / HTML Bar Chart list representation */}
              <div className="space-y-4">
                {regionalImpact.map((r, idx) => {
                  const isCurrent = idx === selectedRegionIdx;
                  const ratio = (r.reach / maxReach) * 100;
                  return (
                    <div
                      key={r.region}
                      onClick={() => setSelectedRegionIdx(idx)}
                      className={`space-y-1 cursor-pointer group`}
                    >
                      <div className="flex justify-between text-xs font-body">
                        <span className={`transition-colors font-semibold ${isCurrent ? "text-[#FF1CF7] font-bold" : "text-[#F0EDE8]/70 group-hover:text-[#F0EDE8]"}`}>
                          {r.region} {isCurrent && "●"}
                        </span>
                        <span className={isCurrent ? "text-[#F0EDE8] font-bold" : "text-[#F0EDE8]/50"}>
                          {r.reach}K Reach
                        </span>
                      </div>

                      {/* Bar indicator channel */}
                      <div className="w-full h-3 bg-white/5 rounded-none overflow-hidden relative border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${ratio}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className={`h-full rounded-none ${
                            isCurrent
                              ? "bg-[#FF1CF7] shadow-[0_0_10px_rgba(255,28,247,0.4)]"
                              : "bg-white/10 group-hover:bg-white/20 transition-colors"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
