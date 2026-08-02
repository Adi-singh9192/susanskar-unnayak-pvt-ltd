import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { milestones } from "../data";
import { Award, Compass, Eye, Landmark, MapPin, Users, Target } from "lucide-react";

import content1 from "../assets/images/content1.png";
import content2 from "../assets/images/content2.png";
import content3 from "../assets/images/content3.png";
import content4 from "../assets/images/content4.png";

export default function About() {
  const [selectedMilestone, setSelectedMilestone] = useState(milestones[2]); // Default 2023

  const collageImages = [
    {
      url: content1,
      alt: "Bharat Mandapam Style Premium Summit Stage",
      span: "col-span-6 h-48 sm:h-56",
    },
    {
      url: content2,
      alt: "Grand Indian Palace Ballroom and Heritage Hall",
      span: "col-span-6 h-48 sm:h-56 mt-4",
    },
    {
      url: content3,
      alt: "Traditional Premium Indian Celebration Venue",
      span: "col-span-6 h-48 sm:h-56 -mt-4",
    },
    {
      url: content4,
      alt: "Massive Youth Concert Arena Production",
      span: "col-span-6 h-48 sm:h-56",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#100720] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Block with Motion */}
        <div className="text-center md:text-left max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#100720] border-l-4 border-[#E8FF00] px-3 py-1 rounded-none mb-4 shadow-sm"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] text-[var(--citrus)] uppercase">ABOUT SUSANSKAR UNNAYAK</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl text-[var(--cream)] tracking-tight leading-tight"
          >
            Who We Are & What We Empower
          </motion.h2>
        </div>

        {/* About Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* LEFT: Image Collage Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF1CF7]/5 to-transparent rounded-none -z-10" />
              {collageImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-none shadow-sm border border-[#7B2FFF]/20 group ${img.span}`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A0B2E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Text content and details */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[var(--cream)] tracking-tight">
              We design physical-digital emotional hubs that speak youth culture natively.
            </h3>
            
            <p className="text-[#F0EDE8]/50 font-body text-base leading-relaxed">
              Founded at the intersection of media acceleration and spatial experience design, Susanskar Unnayak bridges the gap between traditional brand statements and the raw energy of modern youth networks. We reject static advertising in favor of dynamic interactions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-5 rounded-none bg-[#100720] border border-[#7B2FFF]/20 border-l-4 border-l-[#FF1CF7] flex flex-col space-y-3">
                <div className="p-2.5 rounded-none bg-[#FF1CF7]/10 w-fit text-[#FF1CF7]">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-[#F0EDE8] text-sm">Industries Served</h4>
                <p className="text-[#F0EDE8]/50 font-body text-xs leading-normal">
                  Lifestyle fashion, global technology innovators, youth entertainment, premium wedding design, and sub-cultural music divisions.
                </p>
              </div>

              <div className="p-5 rounded-none bg-[#100720] border border-[#7B2FFF]/20 border-l-4 border-l-[#E8FF00] flex flex-col space-y-3">
                <div className="p-2.5 rounded-none bg-[#E8FF00]/10 w-fit text-[#E8FF00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-[#F0EDE8] text-sm">Geographic Presence</h4>
                <p className="text-[#F0EDE8]/50 font-body text-xs leading-normal">
                  Active headquarters in New Delhi & Mumbai, deploying premium pop-ups, custom lounges, and full-scale stadium fests across India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Mission Card */}
          <div className="relative group p-8 rounded-none bg-[#100720] border border-[#7B2FFF]/20 border-l-4 border-l-[#FF1CF7] shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden text-left">
            <div className="p-4 bg-[#FF1CF7]/10 rounded-none w-fit text-[#FF1CF7] mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[var(--cream)] mb-4">Our Mission</h3>
            <p className="text-[#F0EDE8]/50 font-body text-base leading-relaxed">
              To build genuine cultural vehicles that transition passive consumers into passionate, self-identified sub-communities. We connect organizations to modern youth through co-authored physical technology and shared multi-sensory experiences.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative group p-8 rounded-none bg-[#100720] border border-[#7B2FFF]/20 border-l-4 border-l-[#E8FF00] shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden text-left">
            <div className="p-4 bg-[#E8FF00]/10 rounded-none w-fit text-[#E8FF00] mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[var(--cream)] mb-4">Our Aspirational Vision</h3>
            <p className="text-[#F0EDE8]/50 font-body text-base leading-relaxed">
              To define the next decade of agency models by fusing spatial computing, underground festival curations, and localized creator content labs into a unified experiential ecosystem that makes standard digital advertising obsolete.
            </p>
          </div>
        </div>

        {/* Milestones Horizontal interactive Timeline Section */}
        <div className="p-8 md:p-12 rounded-none bg-[#1A0B2E] text-[#F0EDE8] overflow-hidden relative border-l-4 border-l-[#FF1CF7]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF1CF7]/15 to-transparent pointer-events-none" />
          <div className="relative z-10 text-left">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <span className="text-[#E8FF00] text-xs font-bold tracking-[0.2em] uppercase">TIMELINE IN MOTION</span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight mt-1">Our Milestones</h3>
              </div>
              <p className="text-[#F0EDE8]/50 font-body text-xs md:text-sm max-w-sm">
                Explore the tactical timeline of our scaling. Click on any year node below to reveal campaign highlights.
              </p>
            </div>

            {/* Interactive Timeline Rail */}
            <div className="relative py-8 mb-8">
              {/* Horizontal connecting line bar */}
              <div className="absolute top-[52px] left-0 w-full h-1 bg-white/10" />
              <div
                className="absolute top-[52px] left-0 h-1 bg-[#FF1CF7] transition-all duration-500"
                style={{
                  width: `${
                    (milestones.findIndex((m) => m.id === selectedMilestone.id) /
                      (milestones.length - 1)) *
                    100
                  }%`,
                }}
              />

              {/* Milestones Circles Picker Grid */}
              <div className="relative flex justify-between items-center w-full">
                {milestones.map((m, idx) => {
                  const isSelected = selectedMilestone.id === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMilestone(m)}
                      className="flex flex-col items-center group relative focus:outline-none cursor-pointer"
                    >
                      <span
                        className={`text-sm md:text-base font-semibold font-heading mb-3 transition-colors ${
                          isSelected ? "text-[#FF1CF7]" : "text-[#F0EDE8]/50 group-hover:text-[#F0EDE8]"
                        }`}
                      >
                        {m.year}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          isSelected
                            ? "bg-[#FF1CF7] border-[#FF1CF7] scale-125 shadow-[0_0_15px_rgba(255,28,247,0.6)]"
                            : "bg-[#1A0B2E] border-[#F0EDE8]/20 group-hover:border-white"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-[#100720] transition-opacity duration-300 ${
                            isSelected ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>
                      <span className="hidden md:block absolute -bottom-6 text-[10px] text-[#F0EDE8]/50 font-body w-20 text-center truncate">
                        {m.highlight}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Highlighted Selected Milestone Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMilestone.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8 rounded-none bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold px-3 py-1 bg-[#FF1CF7]/20 text-[#FF1CF7] border border-[#FF1CF7]/10 rounded-none font-heading">
                      YEAR {selectedMilestone.year}
                    </span>
                    <span className="text-xs font-bold text-[#E8FF00] tracking-wider uppercase font-body">
                      {selectedMilestone.highlight}
                    </span>
                  </div>
                  <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-[#F0EDE8]">
                    {selectedMilestone.title}
                  </h4>
                  <p className="text-[#F0EDE8]/70 font-body text-sm sm:text-base leading-relaxed">
                    {selectedMilestone.description}
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-none border border-white/5 flex items-center justify-center text-[#F0EDE8] shrink-0 self-center md:self-auto">
                  <Award className="w-10 h-10 text-[#E8FF00]" />
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
