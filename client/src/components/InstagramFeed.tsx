import { Button } from "@/components/ui/button";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Cafe Photos
import imgBaklava from "@assets/Baklava_UberEats_2880x2304_1786544856975.jpg";
import imgMenemen from "@assets/Mdnemen_1786637802919.png";
import imgWaffles from "@assets/tRIPLE_wAFFLES_1786544970112.jpg";
import imgBenedict from "@assets/eggbenedict_1786637834011.png";
import imgTurkishSausage from "@assets/Turkish_Sausage_1786545424470.jpg";
import imgTurkey from "@assets/Turkey_sand_3_1786545548991.png";
import imgTartine from "@assets/Tartine_1786637872852.png";
import imgCilbir from "@assets/ChatGPT_Image_Jul_4,_2026,_11_41_45_AM_1786638222613.png";
import imgBrazilianOmelette from "@assets/brazilian_omelette_1786638409212.png";
import imgSucuk from "@assets/sucuk_two_eggs_2.jpg";
import imgCafeInterior from "@assets/IMG_8811_1786632085546.jpg";

const instagramPosts = [
  { id: 1, image: imgBaklava, caption: "Fresh pistachio baklava — a Turkish sweet treat! 🇹🇷 #baklava #turkishdessert #themixercafe" },
  { id: 2, image: imgMenemen, caption: "Turkish scrambled eggs done right 🍳🇹🇷 #menemen #turkishbreakfast #themixercafe", objectPosition: "top" },
  { id: 4, image: imgBenedict, caption: "Dear Benedict — poached eggs, Hollandaise & Canadian bacon on a croissant 🥚🥐 #brunch #themixercafe" },
  { id: 5, image: imgTurkishSausage, caption: "Sucuk & egg fresh from the skillet 🇹🇷🍳 #turkishsausage #sucuk #themixercafe" },
  { id: 6, image: imgTurkey, caption: "Turkey sandwich on multigrain — fresh, clean & delicious 🥪 #sandwich #themixercafe" },
  { id: 8, image: imgTartine, caption: "Croissant Tartine — two eggs, bacon, Swiss cheese, jam & butter 🥐🍳 #croissanttartine #frenchbreakfast #themixercafe" },
  { id: 9, image: imgCilbir, caption: "Çılbır — two poached eggs on garlic yogurt with butter spice sauce 🍳🇹🇷 #cilbir #turkishbreakfast #themixercafe" },
  { id: 10, image: imgBrazilianOmelette, caption: "Brazilian omelette stuffed with ham, cheese & green onion 🇧🇷🍳 #brazilianbreakfast #omelette #themixercafe" },
  { id: 11, image: imgSucuk, caption: "Sucuk Yumurta — Turkish sausage with two eggs cooked in a skillet 🇹🇷🍳 #sucuk #turkishbreakfast #themixercafe" },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute inset-0 bg-secondary/5 -skew-y-3 transform origin-top-left scale-110 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5 rounded-full">
                <div className="bg-white p-1.5 rounded-full">
                  <Instagram className="w-6 h-6 text-[#E1306C]" />
                </div>
             </div>
             <span className="font-serif text-xl font-bold text-primary">@themixercafe</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Follow Our Journey
          </h2>
          
          <Button 
            variant="outline"
            className="rounded-full border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all mb-10"
            onClick={() => window.open('https://www.instagram.com/themixercafe', '_blank')}
          >
            Follow on Instagram
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {instagramPosts.map((post) => (
              <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-xl bg-zinc-900 shadow-lg hover:shadow-xl transition-all duration-300 aspect-square">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={post.objectPosition ? { objectPosition: post.objectPosition } : undefined}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center cursor-pointer"
                       onClick={() => window.open('https://www.instagram.com/themixercafe', '_blank')}
                  >
                    <p className="text-sm font-medium line-clamp-3 mb-4">{post.caption}</p>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-1">
                        <Heart className="w-5 h-5 fill-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
