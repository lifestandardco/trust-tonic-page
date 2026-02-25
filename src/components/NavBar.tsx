import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" }, // Renamed from "Services" to reflect the component content
  { label: "Services & Rates", href: "/services" }, // Renamed from "Rates & Insurance"
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (href: string) => {
    setOpen(false);
    
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        // Navigate home then scroll if we are on the /services page
        navigate("/", { state: { scrollTo: href } });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the full /services page
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => handleClick("#")} 
          className="font-display text-xl font-semibold text-foreground hover:opacity-80 transition-opacity"
        >
          Britney Worley Counseling
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            onClick={() => handleClick("#contact")}
          >
            Schedule Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            onClick={() => handleClick("#contact")}
            className="w-full"
          >
            Schedule Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;