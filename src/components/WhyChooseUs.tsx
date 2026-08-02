import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { chooseUsPoints, impactStats } from "../data";
import { Flame, Layers, Users, BarChart3, Maximize2 } from "lucide-react";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  inView: boolean;
  key?: string;
}

// Individual counters component to animate counts securely when in view
function StatCounter({ value, suffix, label, description, inView }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = value;
    // Adapt duration to the magnitude of the number
    const duration = end > 1000 ? 1500 : 1000; 
    const stepTime = Math.max(Math.floor(duration / 30), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil((end - start) / 10);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, inView]);

  // Generate a unique phase shift delay for the floating animation so they don't sync up perfectly
  const floatDelay = (label.length % 4) * 0.6;

  return (
    <div className="p-6 sm:p-8 rounded-none bg-[#1A0B2E]/85 border border-white/10 border-l-4 border-l-[#FF1CF7] hover:border-white/30 transition-colors flex flex-col justify-between h-full relative overflow-hidden group text-left">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF1CF7]/5 rounded-none group-hover:scale-125 transition-transform duration-300" />
      <div>
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            textShadow: [
              "0px 0px 0px rgba(255, 28, 247, 0)",
              "0px 4px 16px rgba(255, 28, 247, 0.45)",
              "0px 0px 0px rgba(255, 28, 247, 0)"
            ]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: floatDelay
          }}
          className="font-heading font-extrabold text-[#F0EDE8] text-4xl sm:text-5xl tracking-tight mb-2 inline-block select-none"
        >
          {count.toLocaleString()}{suffix}
        </motion.div>
        <div className="font-heading font-bold text-[#F0EDE8]/80 text-sm md:text-base tracking-wide mb-2">
          {label}
        </div>
      </div>
      <p className="text-[#F0EDE8]/50 font-body text-xs md:text-sm leading-normal">
        {description}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const getStrengthIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Flame className="w-5 h-5 text-[#E8FF00]" />;
      case 1: return <Layers className="w-5 h-5 text-[#FF1CF7]" />;
      case 2: return <Users className="w-5 h-5 text-[#00FFD1]" />;
      case 3: return <BarChart3 className="w-5 h-5 text-[#FF1CF7]" />;
      case 4: default: return <Maximize2 className="w-5 h-5 text-[#FF1CF7]" />;
    }
  };

  return (
    <section
      id="why"
      ref={sectionRef}
      className="py-24 bg-[#1A0B2E] text-[#F0EDE8] relative overflow-hidden"
    >
      {/* Dynamic graphic lines and sphere backdrops */}
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] rounded-full bg-[#FF1CF7]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[250px] h-[250px] rounded-full bg-[#E8FF00]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Why Choose Us Intro & Strength list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left description */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center bg-white/5 border-l-4 border-[#E8FF00] px-3 py-1 rounded-none w-fit">
              <span className="text-[#E8FF00] text-xs font-bold tracking-[0.15em] uppercase">WHY SUSANSKAR UNNAYAK</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              A Direct Conduit To The Next Generation
            </h2>

            <p className="text-[#F0EDE8]/50 font-body text-base leading-relaxed">
              We replace guesswork with cultural telemetry. Youth culture does not conform to focus groups; it acts on friction, sub-group identity, and digital creative collaboration. Susanskar Unnayak is built specifically to deploy these complex levers for forward-thinking brands.
            </p>

            <div className="pt-4 border-t border-white/5 flex items-center space-x-6">
              <div className="text-left">
                <span className="block font-heading font-extrabold text-3xl text-[#F0EDE8]">98%</span>
                <span className="text-xs text-[#F0EDE8]/50 font-semibold uppercase tracking-wider font-body">Retention Rate</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="text-left">
                <span className="block font-heading font-extrabold text-3xl text-[#F0EDE8]">12M+</span>
                <span className="text-xs text-[#F0EDE8]/50 font-semibold uppercase tracking-wider font-body">Network Reach</span>
              </div>
            </div>
          </div>

          {/* Right strength cards */}
          <div className="lg:col-span-7 flex flex-col space-y-4 text-left">
            {chooseUsPoints.map((pt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-none bg-white/5 border border-white/5 border-l-4 border-l-[#FF1CF7] hover:bg-white/10 transition-colors flex items-start space-x-4 group"
              >
                <div className="p-3 bg-white/5 rounded-none border border-white/5 shrink-0 select-none">
                  {getStrengthIcon(idx)}
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-extrabold text-[#F0EDE8] text-base md:text-lg group-hover:text-[#FF1CF7] transition-colors">
                    {pt.title}
                  </h4>
                  <p className="text-[#F0EDE8]/50 font-body text-xs md:text-sm leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
