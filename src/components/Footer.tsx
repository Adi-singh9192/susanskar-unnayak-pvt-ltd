import React from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090e1c] text-[#F0EDE8] pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & description column */}
          <div className="space-y-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
              className="flex items-center group focus:outline-none"
            >
              <Logo className="h-14 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <p className="text-[#F0EDE8]/50 font-body text-sm leading-relaxed">
              We design physical-digital emotional hubs that speak youth culture natively, transitioning passive consumers into passionate self-identified sub-communities.
            </p>

            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-none bg-white/5 hover:bg-[#FF1CF7] hover:text-[#F0EDE8] text-[#F0EDE8]/50 transition-colors border border-white/5" aria-label="Susanskar Unnayak Instagram Link">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-none bg-white/5 hover:bg-[#FF1CF7] hover:text-[#F0EDE8] text-[#F0EDE8]/50 transition-colors border border-white/5" aria-label="Susanskar Unnayak LinkedIn Link">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-none bg-white/5 hover:bg-[#FF1CF7] hover:text-[#F0EDE8] text-[#F0EDE8]/50 transition-colors border border-white/5" aria-label="Susanskar Unnayak Twitter Link">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6 text-left">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-[#E8FF00]">
              Quick Links
            </h4>
            <ul className="space-y-3 font-body text-sm text-[#F0EDE8]/50">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-[#F0EDE8] transition-colors">
                  Home Baseline
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-[#F0EDE8] transition-colors">
                  About Cult
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#F0EDE8] transition-colors">
                  Expert Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, "#portfolio")} className="hover:text-[#F0EDE8] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#cases" onClick={(e) => handleNavClick(e, "#cases")} className="hover:text-[#F0EDE8] transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Services Offered Column */}
          <div className="space-y-6 text-left">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-[#FF1CF7]">
              Solutions
            </h4>
            <ul className="space-y-3 font-body text-sm text-[#F0EDE8]/50">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#F0EDE8] transition-colors">
                  Experiential Events
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#F0EDE8] transition-colors">
                  Brand Activations
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#F0EDE8] transition-colors">
                  Music Festivals
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#F0EDE8] transition-colors">
                  Influencer Marketing
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#F0EDE8] transition-colors">
                  Digital Campaigns
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-6 text-left">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-[#00FFD1]">
              Contact Core
            </h4>
            
            <div className="space-y-4 font-body text-xs sm:text-sm text-[#F0EDE8]/50">
              <div className="flex items-center space-x-3.5">
                <MapPin className="w-4 h-4 text-[#F0EDE8]/50 shrink-0" />
                <span>Ved Heights-19, Mansarovar, Jaipur – 302020</span>
              </div>
              <div className="flex items-center space-x-3.5">
                <Mail className="w-4 h-4 text-[#F0EDE8]/50 shrink-0" />
                <a href="mailto:info@ssnupl.com" className="hover:text-[#F0EDE8] transition-colors">
                  info@ssnupl.com
                </a>
              </div>
              <div className="flex items-center space-x-3.5">
                <Phone className="w-4 h-4 text-[#F0EDE8]/50 shrink-0" />
                <a href="tel:+917300021160" className="hover:text-[#F0EDE8] transition-colors">
                  +91 7300021160
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row copyright & up scroll */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-[#F0EDE8]/50">
            &copy; {new Date().getFullYear()} SUSANSKAR UNNAYAK PVT LTD. All rights reserved. Designed to inspire youth culture natively.
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white/5 border border-white/10 hover:border-white/30 text-[#F0EDE8]/50 hover:text-[#F0EDE8] rounded-none transition-all duration-300 flex items-center justify-center cursor-pointer group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
