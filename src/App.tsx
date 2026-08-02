import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import PortfolioShowcase from "./components/PortfolioShowcase";
import Testimonials from "./components/Testimonials";
import MarketImpact from "./components/MarketImpact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbassadorComingSoon from "./components/AmbassadorComingSoon";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [currentView, setCurrentView] = useState<"home" | "ambassador">(() => {
    if (typeof window !== "undefined" && window.location.hash === "#ambassador") {
      return "ambassador";
    }
    return "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#ambassador") {
        setCurrentView("ambassador");
      } else if (currentView === "ambassador") {
        setCurrentView("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [currentView]);

  useEffect(() => {
    if (currentView === "ambassador") return;

    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "impact", "contact"];
      const scrollPos = window.scrollY + 150; // offset threshold

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  return (
    <div className="relative min-h-screen bg-[#100720] text-[#F0EDE8] flex flex-col antialiased">
      {/* Sticky Top-line Progress bar indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#E8FF00] z-50 pointer-events-none transition-all duration-300 shadow-[0_0_10px_rgba(232,255,0,0.5)]"
        style={{
          width: `${
            typeof window !== "undefined" && document.documentElement.scrollHeight > window.innerHeight
              ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
              : 0
          }%`,
        }}
      />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        activeSection={activeSection}
        currentView={currentView}
        onSelectView={(view) => setCurrentView(view)}
      />

      {currentView === "ambassador" ? (
        <AmbassadorComingSoon
          onBackToHome={() => {
            setCurrentView("home");
            window.location.hash = "home";
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ) : (
        <>
          {/* Main flow of sections, each animated into view */}
          <main className="flex-grow">
            {/* Hero Landing */}
            <Hero />

            {/* Corporate Summary & Milestones */}
            <About />

            {/* Core Services Offerings & Process Infographics */}
            <Services />

            {/* Value Proposition Cards & Counter Stats */}
            <WhyChooseUs />

            {/* Projects Gallery */}
            <PortfolioShowcase />

            {/* Interactive Dashboard Analytics */}
            <MarketImpact />

            {/* Testimonial deck carousel & Grayscale Institutional Brand Badges */}
            <Testimonials />

            {/* Form fields & Instant Contact QR placeholder mapping */}
            <Contact />
          </main>

          {/* Elegant Navy Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
