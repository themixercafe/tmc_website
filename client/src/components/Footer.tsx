import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-10 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif font-bold mb-6 text-secondary">The Mixer Cafe</h3>
            <p className="text-primary-foreground/70 mb-8 max-w-sm mx-auto md:mx-0">
              A unique fusion of Brazilian, Turkish, and French cuisines in the heart of Boynton Beach. 
              Made with love by two mothers.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://www.instagram.com/themixercafe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:shadow-[0_0_15px_rgba(225,48,108,0.5)] transition-all group"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} className="text-[#E1306C] group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.facebook.com/TheMixerCafe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-serif font-bold mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start justify-center md:justify-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=312+N+Federal+Hwy+Boynton+Beach+FL+33435" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-secondary transition-colors"
                >
                  312 N Federal Hwy<br />
                  Boynton Beach, FL 33435
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:5615365386" className="hover:text-secondary transition-colors">(561) 536-5386</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-serif font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex justify-between md:justify-start md:gap-8 border-b border-white/10 pb-2">
                <span>Monday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between md:justify-start md:gap-8 border-b border-white/10 pb-2">
                <span>Tue - Sat</span>
                <span>7:30 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between md:justify-start md:gap-8 border-b border-white/10 pb-2">
                <span>Sunday</span>
                <span>8:00 AM - 3:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} The Mixer Cafe. All rights reserved..</p>
        </div>
      </div>
    </footer>
  );
}
