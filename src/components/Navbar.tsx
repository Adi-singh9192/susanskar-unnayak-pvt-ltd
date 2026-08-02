import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  activeSection: string;
  onSelectView?: (view: "home" | "ambassador") => void;
  currentView?: "home" | "ambassador";
}

export default function Navbar({ activeSection, onSelectView, currentView = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Market Impact", href: "#impact" },
    { name: "Ambassador", href: "#ambassador" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === "#ambassador") {
      if (onSelectView) {
        onSelectView("ambassador");
      }
      window.location.hash = "ambassador";
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentView === "ambassador") {
      if (onSelectView) {
        onSelectView("home");
      }
      window.location.hash = href;
      setTimeout(() => {
        const elem = document.querySelector(href);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
      return;
    }

    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#100720]/95 backdrop-blur-lg py-3 border-b border-white/10 shadow-2xl"
            : "bg-[#100720]/60 backdrop-blur-md py-4 sm:py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className="flex items-center group focus:outline-none shrink-0"
          >
            <Logo className="h-9 sm:h-10 md:h-11 lg:h-13 transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden md:flex items-center md:space-x-3 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = currentView === "ambassador" ? item.href === "#ambassador" : activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs lg:text-sm font-medium tracking-wider whitespace-nowrap transition-colors relative py-1 focus:outline-none ${
                    isActive ? "text-[#FF1CF7] font-bold" : "text-[#F0EDE8]/80 hover:text-[#F0EDE8]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF1CF7]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Box */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative overflow-hidden group px-3 py-2 lg:px-5 lg:py-2.5 rounded-none bg-[#1A0B2E] border border-white/20 text-[#F0EDE8] font-bold text-[11px] lg:text-xs uppercase tracking-widest hover:bg-[#FF1CF7] transition-all duration-300 flex items-center space-x-1.5 lg:space-x-2 whitespace-nowrap"
            >
              <span>LET'S TALK</span>
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform text-[#E8FF00]" />
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#F0EDE8]/80 hover:text-[#F0EDE8] focus:outline-none border border-white/10 bg-white/5 rounded-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#FF1CF7]" /> : <Menu className="w-6 h-6 text-[#F0EDE8]" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1A0B2E] flex flex-col justify-center items-center px-8"
          >
            {/* Background elements */}
            <div className="absolute top-[20%] left-[10%] w-[250px] h-[250px] rounded-full bg-[#FF1CF7]/10 blur-[80px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#E8FF00]/5 blur-[100px]" />

            <nav className="flex flex-col space-y-6 text-center z-10">
              {navItems.map((item, i) => {
                const isActive = currentView === "ambassador" ? item.href === "#ambassador" : activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-heading text-2xl font-bold tracking-wider py-2 transition-colors ${
                      isActive ? "text-[#FF1CF7]" : "text-[#F0EDE8] hover:text-[#FF1CF7]"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-6"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="inline-flex items-center space-x-2 px-8 py-3 rounded-none bg-[#FF1CF7] text-[#F0EDE8] font-bold tracking-widest uppercase text-sm hover:bg-[#FF1CF7]/80 transition-all shadow-lg"
                >
                  <span>LET'S TALK</span>
                  <ArrowRight className="w-5 h-5 text-[#E8FF00]" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
