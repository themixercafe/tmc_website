import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Instagram } from "lucide-react";
import OrderOnlineDialog from "./OrderOnlineDialog";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors cursor-pointer ${
            isScrolled ? "text-primary" : "text-white"
          }`}>
            The Mixer <span className={isScrolled ? "text-secondary" : "text-secondary"}>Cafe</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#menu"
            className={`transition-colors font-medium ${
              isScrolled 
                ? "text-foreground/80 hover:text-primary" 
                : "text-white/90 hover:text-white"
            }`}
          >
            Menu
          </a>
          <a 
            href="#about"
            className={`transition-colors font-medium ${
              isScrolled 
                ? "text-foreground/80 hover:text-primary" 
                : "text-white/90 hover:text-white"
            }`}
          >
            Our Story
          </a>
          <a 
            href="#contact"
            className={`transition-colors font-medium ${
              isScrolled 
                ? "text-foreground/80 hover:text-primary" 
                : "text-white/90 hover:text-white"
            }`}
          >
            Visit Us
          </a>

          <a
            href="https://www.instagram.com/themixercafe"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors font-medium hover:scale-110 transform duration-200 ${
              isScrolled 
                ? "text-[#E1306C] hover:text-[#C13584]" 
                : "text-white/90 hover:text-white"
            }`}
            aria-label="Follow us on Instagram"
          >
            <Instagram size={22} className={isScrolled ? "" : "text-[#E1306C] md:text-white"} />
          </a>

          <OrderOnlineDialog>
            <Button 
              className={`font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-white hover:bg-white/90 text-primary"
              }`}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Order Online
            </Button>
          </OrderOnlineDialog>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          <a 
            href="#menu"
            className="text-lg font-medium text-foreground py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Menu
          </a>
          <a 
            href="#about"
            className="text-lg font-medium text-foreground py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Story
          </a>
          <a 
            href="#contact"
            className="text-lg font-medium text-foreground py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Visit Us
          </a>
          
          <a 
            href="https://www.instagram.com/themixercafe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-foreground py-2 flex items-center gap-2 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Instagram size={20} className="text-[#E1306C] group-hover:scale-110 transition-transform" />
            Follow us on Instagram
          </a>

          <OrderOnlineDialog>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Order Online
            </Button>
          </OrderOnlineDialog>
        </div>
      )}
    </nav>
  );
}
