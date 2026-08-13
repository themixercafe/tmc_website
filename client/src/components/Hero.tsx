import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/IMG-20260804-WA0008_1786628257330.jpg";
import OrderOnlineDialog from "./OrderOnlineDialog";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Table spread with Brazilian, Turkish and French food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl">
        <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium tracking-wider uppercase mb-6 text-secondary">
            Boynton Beach, FL
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Where Cultures Meet <br />
            <span className="text-secondary italic">& Flavors Blend</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed px-4 font-bold">
            Experience the warmth of Brazil, the delight of Turkey, and the elegance of France. 
            A culinary journey curated by two mothers, made with love for our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <OrderOnlineDialog>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-12 rounded-full text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-1"
              >
                Order Online
              </Button>
            </OrderOnlineDialog>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-12 rounded-full text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-1"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/70">
        <ArrowRight className="rotate-90 w-6 h-6" />
      </div>
    </section>
  );
}
