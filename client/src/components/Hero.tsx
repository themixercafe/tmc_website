import heroImage from "@assets/IMG_8811_1786632258425.jpg";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Table spread with Brazilian, Turkish and French food"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft fog over background — light enough to see the evil eye */}
        <div className="absolute inset-x-0 top-0 h-[60%]" style={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', background: 'rgba(255,255,255,0.04)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl">
        <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Where Cultures Meet <br />
            <span className="text-secondary italic">& Flavors Blend</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed px-4 font-bold">
            Experience the warmth of Brazil, the delight of Turkey, and the elegance of France. 
            A culinary journey curated by two mothers, made with love for our community.
          </p>
        </div>
      </div>
      
    </section>
  );
}
