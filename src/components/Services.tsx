import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services, processSteps } from "../data";
import * as Icons from "lucide-react";

export default function Services() {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  // Helper to safely render dynamic icons
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Sparkles className={className} />;
  };

  return (
    <section id="services" className="py-24 bg-[#100720] relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-[#FF1CF7]/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-[#E8FF00]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#100720] border-l-4 border-[#E8FF00] px-3 py-1 rounded-none mb-4 shadow-sm"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--citrus)] uppercase">SERVICES & SOLUTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl text-[var(--cream)] tracking-tight leading-tight mb-4"
          >
            Experiences That Drive Action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#F0EDE8]/50 font-body text-base sm:text-lg max-w-2xl mx-auto"
          >
            We deploy multi-sensory physical environments, localized creator marketing, and proprietary engagement code that convert passive audience pools.
          </motion.p>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {services.map((service, index) => {
            const isHovered = hoveredServiceId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                className={`relative p-8 rounded-none bg-[#100720] border border-[#7B2FFF]/20 border-t-4 ${index % 2 === 0 ? "border-t-[#FF1CF7]" : "border-t-[#E8FF00]"} hover:shadow-lg transition-all duration-500 flex flex-col justify-between overflow-hidden group h-full cursor-pointer text-left`}
              >
                {/* Accent glow corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-[#FF1CF7]/1 w-0 h-0 group-hover:w-32 group-hover:h-32 transition-all duration-500 rounded-none pointer-events-none -z-1`} />

                <div>
                  {/* Icon Block with background change on hover */}
                  <div className={`p-4 rounded-none w-fit transition-all duration-500 mb-6 ${
                    isHovered 
                      ? "bg-[#FF1CF7] text-[#F0EDE8] shadow-md shadow-[#FF1CF7]/10" 
                      : "bg-[#1A0B2E]/5 text-[var(--cream)]"
                  }`}>
                    {renderIcon(service.iconName, "w-6 h-6")}
                  </div>

                  <h3 className="font-heading font-extrabold text-[var(--cream)] text-xl mb-3 tracking-tight group-hover:text-[#FF1CF7] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#F0EDE8]/50 font-body text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Sub-deliverables bullet list */}
                <div className="border-t border-[#1A0B2E]/5 pt-5 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {service.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 bg-[#100720] text-[#F0EDE8]/50 rounded-none font-body"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
