import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowLeft, Send, CheckCircle2, Award, Users, Zap, ShieldCheck } from "lucide-react";

interface AmbassadorComingSoonProps {
  onBackToHome: () => void;
}

export default function AmbassadorComingSoon({ onBackToHome }: AmbassadorComingSoonProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#100720] text-[#F0EDE8] flex flex-col justify-between relative overflow-hidden pt-28 pb-16 px-6 sm:px-8 lg:px-12">
      {/* Dynamic Background Glow FX */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-tr from-[#FF1CF7]/20 via-[#7B2FFF]/15 to-[#E8FF00]/10 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#00FFD1]/10 blur-[120px] pointer-events-none" />

      {/* Top Bar with Back Button */}
      <div className="max-w-5xl mx-auto w-full z-10 flex justify-between items-center mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-[#FF1CF7] text-[#F0EDE8]/80 hover:text-[#F0EDE8] text-xs font-bold uppercase tracking-wider transition-all duration-300 group rounded-none cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#FF1CF7] group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center space-x-2 text-xs font-heading font-extrabold tracking-widest text-[#E8FF00] uppercase bg-[#E8FF00]/10 px-3 py-1.5 border border-[#E8FF00]/30">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Exclusive Access</span>
        </div>
      </div>

      {/* Main Coming Soon Card */}
      <div className="max-w-4xl mx-auto w-full z-10 text-center flex-grow flex flex-col justify-center items-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Tag */}
          <div className="inline-block px-4 py-1.5 bg-[#FF1CF7]/10 border border-[#FF1CF7]/40 text-[#FF1CF7] font-heading font-extrabold text-xs tracking-widest uppercase mb-2">
            Susanskar Unnayak Youth Network
          </div>

          {/* Heading */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F0EDE8] uppercase leading-none">
            Ambassador <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1CF7] via-[#00FFD1] to-[#E8FF00] animate-pulse">
              Coming Soon
            </span>
          </h1>

          <p className="max-w-2xl mx-auto font-body text-base sm:text-lg text-[#F0EDE8]/70 leading-relaxed pt-2">
            We are curating India’s most influential student & creator ambassador initiative. Get VIP access to backstage festival passes, brand sponsorships, campus leadership roles, and creative grants.
          </p>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-3xl mx-auto text-left">
            <div className="p-4 bg-[#1A0B2E]/80 border border-white/10 flex items-start space-x-3">
              <Award className="w-5 h-5 text-[#FF1CF7] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#F0EDE8]">VIP Festival Passes</h3>
                <p className="text-[11px] text-[#F0EDE8]/50 mt-1">Exclusive entry to live concerts and premier brand activations.</p>
              </div>
            </div>

            <div className="p-4 bg-[#1A0B2E]/80 border border-white/10 flex items-start space-x-3">
              <Users className="w-5 h-5 text-[#00FFD1] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#F0EDE8]">Youth Leadership</h3>
                <p className="text-[11px] text-[#F0EDE8]/50 mt-1">Lead experiential campus drives & represent global partner brands.</p>
              </div>
            </div>

            <div className="p-4 bg-[#1A0B2E]/80 border border-white/10 flex items-start space-x-3">
              <Zap className="w-5 h-5 text-[#E8FF00] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#F0EDE8]">Stipends & Grants</h3>
                <p className="text-[11px] text-[#F0EDE8]/50 mt-1">Monthly stipends, performance perks, and creator equipment funds.</p>
              </div>
            </div>
          </div>

          {/* Waitlist Subscription Form */}
          <div className="pt-8 max-w-md mx-auto w-full">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-[#00FFD1]/10 border border-[#00FFD1]/40 text-[#00FFD1] flex flex-col items-center space-y-2 text-center"
              >
                <CheckCircle2 className="w-8 h-8 text-[#00FFD1]" />
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider">You're On The VIP Priority List!</h4>
                <p className="text-xs text-[#F0EDE8]/70">We will send your early ambassador application link directly to <span className="text-[#F0EDE8] font-mono">{email}</span> prior to public launch.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your student or personal email..."
                  required
                  className="flex-grow px-4 py-3 bg-[#1A0B2E] border border-white/20 text-[#F0EDE8] text-sm placeholder:text-[#F0EDE8]/40 focus:outline-none focus:border-[#FF1CF7] transition-colors rounded-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FF1CF7] hover:bg-[#FF1CF7]/90 text-[#F0EDE8] font-heading font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shrink-0 rounded-none cursor-pointer"
                >
                  <span>Notify Me</span>
                  <Send className="w-4 h-4 text-[#E8FF00]" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="max-w-5xl mx-auto w-full z-10 text-center pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-[#F0EDE8]/40 gap-4">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-[#00FFD1]" />
          <span>Susanskar Unnayak Pvt Ltd &bull; Ambassador Core 2026</span>
        </div>
        <div>
          Launching across Delhi, Mumbai, Jaipur, Bengaluru &amp; Kolkata campuses soon.
        </div>
      </div>
    </div>
  );
}
