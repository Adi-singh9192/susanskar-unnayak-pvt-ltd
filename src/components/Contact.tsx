import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, Phone, Globe, Instagram, Linkedin, Twitter, Smile, CheckSquare, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate API pipeline delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#100720] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Grid Container Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Branding Message & Inquiries Details */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-[#100720] border-l-4 border-[#E8FF00] px-3 py-1 rounded-none mb-2 shadow-sm">
                <span className="text-[var(--citrus)] text-[11px] font-bold tracking-[0.2em] uppercase font-heading">LET'S COLLABORATE</span>
              </div>
              
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-[var(--cream)] tracking-tight leading-none">
                Let's Create Experiences That Inspire.
              </h2>
              
              <p className="text-[#F0EDE8]/50 font-body text-base leading-relaxed">
                Ready to speak youth culture fluently? Whether you want to book a physical activation space, design a festival stage dome, or launch an integrated creator campaign, our team of strategists and engineers is ready.
              </p>
            </div>

            {/* Structured Contact Lines */}
            <div className="space-y-4 pt-6 border-t border-[#7B2FFF]/10">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#FF1CF7]/5 text-[#FF1CF7] rounded-none border border-[#7B2FFF]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[#F0EDE8]/50 font-body text-[10px] uppercase font-extrabold tracking-wider">OFFICIAL MAILBOX</span>
                  <a href="mailto:info@ssnupl.com" className="text-[#F0EDE8] font-heading font-extrabold text-sm sm:text-base hover:text-[#FF1CF7] transition-colors">
                    info@ssnupl.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#E8FF00]/5 text-[#E8FF00] rounded-none border border-[#7B2FFF]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[#F0EDE8]/50 font-body text-[10px] uppercase font-extrabold tracking-wider">TALK DIRECTLY</span>
                  <a href="tel:+91 7300021160" className="text-[#F0EDE8] font-heading font-extrabold text-sm sm:text-base hover:text-[#FF1CF7] transition-colors">
                    +91 7300021160
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#1A0B2E]/5 text-[var(--cream)] rounded-none border border-[#7B2FFF]/20">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[#F0EDE8]/50 font-body text-[10px] uppercase font-extrabold tracking-wider">OFFICE CORE</span>
                  <span className="text-[#F0EDE8] font-heading font-extrabold text-sm sm:text-base">
                    Ved Heights-19, Mansarovar, Jaipur – 302020
                  </span>
                </div>
              </div>
            </div>

            {/* QR Code and Social connections */}
            <div className="pt-6 border-t border-[#7B2FFF]/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Social Channels row */}
              <div className="space-y-2">
                <span className="block text-[#F0EDE8]/50 font-body text-[10px] uppercase font-extrabold tracking-wider">
                  DIRECT CONNECTIONS
                </span>
                <div className="flex space-x-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-none bg-[#100720] text-[#F0EDE8]/50 hover:text-[#FF1CF7] hover:bg-[#100720] transition-colors border border-[#7B2FFF]/20" aria-label="Susanskar Unnayak Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-none bg-[#100720] text-[#F0EDE8]/50 hover:text-[#FF1CF7] hover:bg-[#100720] transition-colors border border-[#7B2FFF]/20" aria-label="Susanskar Unnayak Linkedin">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-none bg-[#100720] text-[#F0EDE8]/50 hover:text-[#FF1CF7] hover:bg-[#100720] transition-colors border border-[#7B2FFF]/20" aria-label="Susanskar Unnayak Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Converting Interactive Form Card */}
          <div className="lg:col-span-7 relative">
            <div className="p-8 md:p-10 rounded-none bg-[#100720] border border-[#7B2FFF]/20 border-t-4 border-t-[#FF1CF7] shadow-md relative">

              {submitSuccess ? (
                /* Success feedback overlay screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 space-y-6"
                >
                  <div className="p-6 rounded-none bg-emerald-100 text-emerald-600 border border-emerald-200">
                    <CheckSquare className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-[var(--cream)] text-2xl tracking-tight flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#E8FF00] mr-2" />
                      Project Initiative Logged!
                    </h3>
                    <p className="text-[#F0EDE8]/50 font-body text-sm max-w-sm">
                      We've queued your campaign brief safely. A Susanskar Unnayak cultural strategist will review your requirements and reach out within 4 business hours.
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-none bg-[#1A0B2E] hover:bg-[#FF1CF7] text-[#F0EDE8] font-heading font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                /* Main Interactive Input Fields Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div className="space-y-1 text-left">
                      <label htmlFor="name" className="block text-[10px] font-heading font-extrabold text-[#F0EDE8]/50 uppercase tracking-widest">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Aniket Jindal"
                        className="w-full px-4 py-3 rounded-none bg-[#100720] border border-[#7B2FFF]/20 text-[#F0EDE8] placeholder-[#F0EDE8]/30 focus:outline-none focus:border-[#FF1CF7] focus:ring-1 focus:ring-[#FF1CF7] transition-all font-body text-sm"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label htmlFor="email" className="block text-[10px] font-heading font-extrabold text-[#F0EDE8]/50 uppercase tracking-widest">
                        Business Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="info@ssnupl.com"
                        className="w-full px-4 py-3 rounded-none bg-[#100720] border border-[#7B2FFF]/20 text-[#F0EDE8] placeholder-[#F0EDE8]/30 focus:outline-none focus:border-[#FF1CF7] focus:ring-1 focus:ring-[#FF1CF7] transition-all font-body text-sm"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div className="space-y-1 text-left">
                      <label htmlFor="company" className="block text-[10px] font-heading font-extrabold text-[#F0EDE8]/50 uppercase tracking-widest">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="E.g., HDFC Bank, BookMyShow"
                        className="w-full px-4 py-3 rounded-none bg-[#100720] border border-[#7B2FFF]/20 text-[#F0EDE8] placeholder-[#F0EDE8]/30 focus:outline-none focus:border-[#FF1CF7] transition-all font-body text-sm"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label htmlFor="phone" className="block text-[10px] font-heading font-extrabold text-[#F0EDE8]/50 uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9322843235"
                        className="w-full px-4 py-3 rounded-none bg-[#100720] border border-[#7B2FFF]/20 text-[#F0EDE8] placeholder-[#F0EDE8]/30 focus:outline-none focus:border-[#FF1CF7] transition-all font-body text-sm"
                      />
                    </div>

                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="message" className="block text-[10px] font-heading font-extrabold text-[#F0EDE8]/50 uppercase tracking-widest">
                      How Can We Help Inspire Your Audience? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Give us a brief overview of your experiential target model, scale, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-none bg-[#100720] border border-[#7B2FFF]/20 text-[#F0EDE8] placeholder-[#F0EDE8]/30 focus:outline-none focus:border-[#FF1CF7] focus:ring-1 focus:ring-[#FF1CF7] transition-all font-body text-sm resize-none"
                    />
                  </div>

                  {/* Submission CTA submit button with hover glow */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-none bg-[#1A0B2E] hover:bg-[#FF1CF7] text-[#F0EDE8] font-heading font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm disabled:opacity-75 relative overflow-hidden flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          <span>Queueing Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Start Your Project</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
