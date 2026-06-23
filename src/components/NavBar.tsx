import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Services & Rates", href: "/services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: href } });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/95 backdrop-blur-md h-16 border-border/50 shadow-sm" 
          : "bg-background/60 backdrop-blur-sm h-28 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand Button with maximized logo space */}
        <button 
          onClick={() => handleClick("#")} 
          className="hover:opacity-80 transition-all duration-300 shrink-0 flex items-center h-full py-2"
        >
          <img 
            src="/full-logo.png" 
            alt="Britney Worley Counseling" 
            className={cn(
              "w-auto object-contain transition-all duration-300 max-w-[280px] md:max-w-none",
              // Adjusted height to use almost the entire header height
              scrolled ? "h-12 md:h-14" : "h-20 md:h-24"
            )} 
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            onClick={() => handleClick("#contact")}
            className="whitespace-nowrap shadow-md"
          >
            Schedule Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden ml-4" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left py-2"
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