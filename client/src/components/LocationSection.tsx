import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationSection() {
  return (
    <section id="visit" className="bg-primary text-primary-foreground py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            Find <span className="text-secondary italic">Us</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-80 lg:h-full min-h-[320px]">
            <iframe
              title="The Mixer Cafe location"
              src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=312+N+Federal+Hwy%2C+Boynton+Beach%2C+FL+33435&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-lg font-bold text-white mb-1">Address</p>
                <p className="text-primary-foreground/80 text-lg">
                  312 N Federal Hwy<br />Boynton Beach, FL 33435
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=312+N+Federal+Hwy+Boynton+Beach+FL+33435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-secondary hover:underline text-sm font-medium"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-lg font-bold text-white mb-1">Phone</p>
                <a href="tel:5615365386" className="text-primary-foreground/80 text-lg hover:text-secondary transition-colors">
                  (561) 536-5386
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div className="w-full">
                <p className="text-lg font-bold text-white mb-3">Hours</p>
                <ul className="space-y-2 text-primary-foreground/80">
                  {[
                    { day: "Monday", hours: "Closed" },
                    { day: "Tue – Thu", hours: "7:30 AM – 2:00 PM" },
                    { day: "Fri – Sat", hours: "7:30 AM – 3:00 PM" },
                    { day: "Sunday", hours: "8:00 AM – 2:00 PM" },
                  ].map(({ day, hours }) => (
                    <li key={day} className="flex justify-between border-b border-white/10 pb-2">
                      <span className="font-medium">{day}</span>
                      <span className={hours === "Closed" ? "text-red-400" : "text-secondary font-semibold"}>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-12 rounded-full text-lg mt-2"
              onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=312+N+Federal+Hwy+Boynton+Beach+FL+33435", "_blank")}
            >
              <Navigation className="w-5 h-5 mr-2" /> Take Me There
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
