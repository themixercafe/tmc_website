import { Button } from "@/components/ui/button";
import aboutImage from "@assets/IMG-20260412-WA0054_1787076966829.jpg";
import partnerImage from "@assets/IMG-20260412-WA0047_1787077132285.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {[{ src: aboutImage, name: "Regina" }, { src: partnerImage, name: "Ayşe" }].map(({ src, name }) => (
                <div key={name} className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={src}
                    alt={name}
                    className="w-full object-cover object-[center_20%] aspect-[3/4]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-secondary font-serif font-bold text-lg tracking-wide">{name}</p>
                    <p className="text-white/80 text-xs font-bold tracking-widest uppercase mt-0.5">Co-Founder</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Decorative frames */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-secondary/30 rounded-2xl -z-10 hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/10 rounded-2xl -z-10 hidden md:block" />
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Two Mothers, <br />
              <span className="text-secondary">Three Cultures,</span> <br />
              One Heart.
            </h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed font-bold">
              <p>
                The Mixer Cafe was born from a simple idea: that the best way to share love is through food. 
                Founded by Regina and Ayşe, two mothers who found themselves neighbors in Boynton Beach, 
                our cafe is a celebration of our heritage.
              </p>
              <p>
                Regina brings the vibrant, cheesy warmth of her Brazilian home, while Ayşe infuses 
                the menu with the aromatic spices and delicate pastries of her Turkish roots. 
                Together, inspired by their shared love for French culinary techniques, they created a menu 
                that knows no borders.
              </p>
              <p>
                "We wanted to create a place where everyone feels like they're sitting at our kitchen table. 
                Whether you're here for a quick espresso or a long brunch with friends, you're family here."
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl font-bold text-white mb-1">Boynton Beach</h4>
                  <p className="text-sm text-white/70 font-bold">Our Home & Community</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-white mb-1">Est. 2025</h4>
                  <p className="text-sm text-white/70 font-bold">Serving with Love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
