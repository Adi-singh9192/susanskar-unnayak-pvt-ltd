import { motion } from "motion/react";
import { ArrowDown, Flame, Award, Users, HeartCrack, ChevronRight } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingMetrics = [
    {
      id: "hm1",
      number: "50+",
      label: "Campaigns",
      icon: <Award className="w-5 h-5 text-[#E8FF00]" />,
      style: "animate-float-slow top-12 left-4 md:-left-8 lg:-left-12 pl-[20px] ml-[20px]",
    },
    {
      id: "hm2",
      number: "250K+",
      label: "Attendees",
      icon: <Users className="w-5 h-5 text-[#FF1CF7]" />,
      style: "animate-float-medium top-1/3 right-4 md:-right-8 lg:-right-16",
    },
    {
      id: "hm3",
      number: "1000+",
      label: "Creators",
      icon: <Flame className="w-5 h-5 text-[#FF1CF7]" />,
      style: "animate-float-fast bottom-1/4 left-10 md:-left-4 lg:-left-8 ml-[2px]",
    },
    {
      id: "hm4",
      number: "10M+",
      label: "Impressions",
      icon: <ChevronRight className="w-5 h-5 text-[#00FFD1]" />,
      style: "animate-float-slow bottom-12 right-12 lg:-right-6 pl-[16px] ml-0 -mr-[15px] mt-[100px] -mb-[30px]",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#1A0B2E] pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="src/assets/images/hero.png"
          alt="Immersive youth environment"
          className="w-full h-full object-cover opacity-35"
          referrerPolicy="no-referrer"
        />
        {/* Deep Gradient Navy Overlay for Premium Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/80 to-[#1A0B2E]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B2E] via-[#1A0B2E]/70 to-transparent" />
      </div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#FF1CF7]/15 blur-[120px] pointer-events-none z-1" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#E8FF00]/10 blur-[130px] pointer-events-none z-1" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-16 md:py-24">
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-white/5 border-l-4 border-[#E8FF00] px-4 py-1.5 rounded-none w-fit"
          >
            <span className="text-[#E8FF00] text-xs font-bold tracking-[0.2em] uppercase">
              WELCOME TO SUSANSKAR UNNAYAK
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-extrabold text-[#F0EDE8] tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl"
          >
            Building Youth Culture <br />
            Through <span className="text-[#FF1CF7]">Experiences</span> &{" "}
            <span className="text-[#E8FF00]">Innovation</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#F0EDE8]/70 font-body text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
          >
            We create unforgettable experiences through events, brand
            activations, creator collaborations, community building and digital engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo("#portfolio")}
              className="px-8 py-4 rounded-none bg-[#FF1CF7] text-[#F0EDE8] font-bold tracking-widest uppercase text-sm hover:bg-[#FF1CF7]/80 transition-all shadow-lg shadow-[#FF1CF7]/10 flex justify-center items-center group cursor-pointer"
            >
              <span>EXPLORE WORK</span>
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform text-[#E8FF00]" />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="px-8 py-4 rounded-none bg-transparent hover:bg-white/5 text-[#F0EDE8] font-bold tracking-widest uppercase text-sm transition-all border border-white/20 hover:border-white/45 flex justify-center items-center cursor-pointer"
            >
              BOOK CONSULTATION
            </button>
          </motion.div>
        </div>

        {/* Right Side Visual Grid & Floating Widgets Column */}
        <div className="lg:col-span-5 relative h-[380px] md:h-[450px] w-full mt-8 lg:mt-0 flex items-center justify-center">
          {/* Animated Central Brand Ring */}
          <div className="absolute w-[240px] h-[240px] rounded-full border-2 border-dashed border-white/5 animate-[spin_50s_linear_infinite] flex items-center justify-center">
            <div className="absolute w-[180px] h-[180px] rounded-full border border-white/10 animate-[spin_30s_linear_infinite]" />
          </div>

          <div className="relative w-full h-full">
            {floatingMetrics.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + idx * 0.1,
                  type: "spring",
                }}
                className={`absolute p-4 md:p-5 rounded-none bg-[#1A0B2E]/85 backdrop-blur-lg border border-white/10 border-l-4 ${idx % 2 === 0 ? "border-l-[#E8FF00]" : "border-l-[#FF1CF7]"} shadow-xl flex items-center space-x-4 max-w-[190px] md:max-w-[210px] ${card.style}`}
              >
                <div className="p-3 bg-white/5 rounded-none border border-white/5">
                  {card.icon}
                </div>
                <div>
                  <div className="font-heading font-extrabold text-[#F0EDE8] text-base md:text-xl tracking-tight">
                    {card.number}
                  </div>
                  <div className="font-body text-[#F0EDE8]/50 text-xs md:text-sm font-medium">
                    {card.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <button
          onClick={() => handleScrollTo("#about")}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center animate-bounce cursor-pointer group"
          role="button"
          aria-label="Scroll down to About"
        >
          <ArrowDown className="w-5 h-5 text-[#F0EDE8]/50 group-hover:text-[#F0EDE8] transition-colors" />
        </button>
      </div>
    </section>
  );
}
