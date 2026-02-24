import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we arrived here with a scrollTo state from the NavBar
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        // Small timeout to ensure the DOM is fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
      // Clear the state so it doesn't scroll again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;