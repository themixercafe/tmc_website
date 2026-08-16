import { useState, useEffect } from "react";

// Toggle to show/hide prices across the entire menu
const SHOW_PRICES = false;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import menuData from "../data/menu.json";
import coxinhaImage from "@assets/coxinha_1786458102598.jpg";
import queijoQuenteImage from "@assets/queijo_quente_clean.jpg";
import mistoQuenteImage from "@assets/misto_quente_clean.jpg";
import paodeQueijoImage from "@assets/craveiro6-bread-4968502_1920_1786541762162.jpg";
import empanadaImage from "@assets/IMG-20260520-WA0007_1786542338164.jpg";
import espirraImage from "@assets/pexels-andre-tomaz-101600289-15899519_1786543240514.jpg";
import menemenImage from "@assets/menemen_clean.jpg";
import baconEggCheeseImage from "@assets/Bacon,_Egg_&_Cheese_1786545320586.jpg";
import turkishTeaImage from "@assets/Turkish_Tea_1786545372363.jpg";
import dearBenedictImage from "@assets/Dear_Benedict_(2)_1786545390662.jpg";
import turkishSausageImage from "@assets/Turkish_Sausage_1786545424470.jpg";
import spinachBorekImage from "@assets/Spinach_Borek_1786633055227.avif";
import cappadociaBg from "@assets/bg_cappadocia.jpg";
import mixerArtwork from "@assets/IMG-20260804-WA0008(1)_1786720518928.jpg";
import eiffelBg from "@assets/bg_eiffel.jpg";
import brazilBg from "@assets/bg_brazil.jpg";
import americanBg from "@assets/cafe_left_noflower.jpg";
import classicsBg from "@assets/classics_collage.jpg";
import teapotBg from "@assets/teapot_full.png";
import beveragesBg from "@assets/beverages_collage.jpg";
import turkeySandImage from "@assets/Turkey_sand_3_1786545548991.png";

// Type definition for Menu Item
type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular: boolean;
  checkAvailability?: boolean;
};

// Type definition for Menu Data
type MenuData = {
  brazilian: MenuItem[];
  turkish: MenuItem[];
  french: MenuItem[];
  american: Record<string, MenuItem[]>;
  desserts: Record<string, MenuItem[]>;
  beverages: Record<string, MenuItem[]>;
  smoothies: Record<string, MenuItem[]>;
};

const menuItems: MenuData = menuData as unknown as MenuData;

const imageMap: Record<string, string> = {
  // Photos hidden from menu — available to restore anytime
  // "Coxinha": coxinhaImage,
  // "Queijo Quente - Combo": queijoQuenteImage,
  // "Misto Quente": mistoQuenteImage,
  // "Pão de Queijo": paodeQueijoImage,
  // "Empanada": empanadaImage,
  // "Espirra": espirraImage,
  // "Menemen": menemenImage,
  // "Bacon, Egg & Cheese": baconEggCheeseImage,
  // "Turkish Tea": turkishTeaImage,
  // "Dear Benedict*": dearBenedictImage,
  // "Sucuk Yumurta": turkishSausageImage,
  // "Spinach Feta Börek": spinachBorekImage,
  // "Turkey": turkeySandImage,
};

const MenuItem = ({ item, transparent }: { item: MenuItem; transparent?: boolean }) => {
  const image = imageMap[item.name];
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setLightboxOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [lightboxOpen]);

  return (
    <>
      {/* Lightbox overlay */}
      {lightboxOpen && image && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={image}
            alt={item.name}
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}

      <Card className={`border-none shadow-sm transition-colors duration-300 group h-full overflow-hidden ${transparent ? "bg-transparent hover:bg-white/10" : "bg-black/70 hover:bg-black/85"}`}>
        {/* Photo on top */}
        {image && (
          <div
            className="w-full h-48 overflow-hidden cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Text below */}
        <div className="p-4">
          <CardHeader className="flex flex-row items-baseline justify-between p-0 pb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-lg font-serif font-bold text-secondary group-hover:text-secondary/80 transition-colors">
                {item.name}
              </CardTitle>
              {item.popular && (
                <Badge variant="secondary" className="text-[10px] h-5 px-1.5 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
                  Favorite
                </Badge>
              )}
              {item.checkAvailability && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-orange-400 text-orange-600 bg-orange-50 hover:bg-orange-100 cursor-help flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Check Availability
                    </Badge>
                  </PopoverTrigger>
                  <PopoverContent className="bg-primary text-primary-foreground border-none w-auto p-2 text-sm">
                    <p>Please contact the store for availability.</p>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            {SHOW_PRICES && <span className="font-bold text-secondary whitespace-nowrap ml-2">{item.price}</span>}
          </CardHeader>
          <CardContent className="p-0">
            <CardDescription className="text-white/80 leading-relaxed font-bold">
              {item.description}
            </CardDescription>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

const MenuListRow = ({ item }: { item: MenuItem }) => {
  const image = imageMap[item.name];
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setLightboxOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [lightboxOpen]);

  return (
    <>
      {lightboxOpen && image && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setLightboxOpen(false)}>
          <img src={image} alt={item.name} className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain" />
        </div>
      )}
      <div className={`border-b border-white/10 py-4 last:border-0 grid gap-4 items-start ${image ? "grid-cols-3 sm:grid-cols-4" : "grid-cols-1"}`}>
        {/* Text */}
        <div className={image ? "col-span-2 sm:col-span-3" : "col-span-1"}>
          <div className="flex justify-between items-baseline gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-secondary font-bold text-lg font-serif">{item.name}</span>
              {item.popular && (
                <Badge variant="secondary" className="text-[10px] h-5 px-1.5 bg-secondary/20 text-secondary-foreground">
                  Favorite
                </Badge>
              )}
              {item.checkAvailability && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-orange-400 text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 cursor-help flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Check Availability
                    </Badge>
                  </PopoverTrigger>
                  <PopoverContent className="bg-primary text-primary-foreground border-none w-auto p-2 text-sm">
                    <p>Please contact the store for availability.</p>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            {SHOW_PRICES && <span className="font-bold text-secondary whitespace-nowrap">{item.price}</span>}
          </div>
          <p className="text-white/80 mt-1 text-lg leading-relaxed font-bold">{item.description}</p>
        </div>
        {/* Photo aligned to this item */}
        {image && (
          <div className="col-span-1 relative rounded-xl overflow-hidden h-28 cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
            <img src={image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1">
              <span className="text-white font-bold text-[10px] uppercase tracking-wider">{item.name}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const renderMenuWithPhotos = (items: MenuItem[]) => (
  <div className="space-y-0">
    {items.map((item, idx) => <MenuListRow key={idx} item={item} />)}
  </div>
);

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("brazilian");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Use setTimeout to allow DOM to update before scrolling
    setTimeout(() => {
      const tabsElement = document.getElementById('menu-tabs');
      if (tabsElement) {
        const yOffset = -80; // Adjusted offset
        const y = tabsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'instant'}); // Use instant to prevent jumpiness
      }
    }, 0);
  };

  const renderCategoryWithSubsections = (categoryItems: Record<string, MenuItem[]>, transparent?: boolean, hideHeaders?: boolean) => (
    <div className="space-y-10">
      {Object.entries(categoryItems).map(([category, items]) => (
        <div key={category}>
          {!hideHeaders && (
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-serif font-bold text-secondary">{category}</h3>
              <div className="h-px bg-white/20 flex-1" />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <MenuItem key={idx} item={item} transparent={transparent} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const tabBgMap: Record<string, { image: string; filter?: string; position?: string; size?: string; opacity?: number }> = {
    brazilian: { image: brazilBg, filter: "brightness(1.2) saturate(1.1)", position: "center" },
    turkish:   { image: cappadociaBg, position: "center 30%" },
    french:    { image: eiffelBg, filter: "brightness(2.0) saturate(0.4) hue-rotate(-40deg) contrast(0.85) grayscale(0.15)", position: "center" },
    american:  { image: classicsBg, position: "center" },
    desserts:  { image: teapotBg, position: "center", filter: "brightness(1.3) saturate(1.1)", opacity: 0.35 },
    beverages: { image: beveragesBg, position: "center", filter: "brightness(1.0) saturate(1.1)" },
    smoothies: { image: beveragesBg, position: "center", filter: "brightness(1.0) saturate(1.1)" },
  };
  const currentBg = tabBgMap[activeTab] ?? tabBgMap.french;

  return (
    <section id="menu" className="py-20 relative overflow-hidden scroll-mt-24" style={{ backgroundColor: "#1e0e05" }}>
      {/* Dynamic background per tab */}
      <div
        key={activeTab}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${currentBg.image})`,
          backgroundSize: currentBg.size ?? "cover",
          backgroundPosition: currentBg.position ?? "center",
          filter: currentBg.filter,
          ['--bg-target-opacity' as string]: currentBg.opacity ?? 0.42,
          animation: "bgFadeIn 0.8s ease forwards",
        }}
      />
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Kitchen</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            "Explore Our Menu"<br />
            <span className="text-white/60 text-xl md:text-2xl font-sans font-bold">A carefully curated selection of our favorite recipes passed down through generations.</span>
          </h2>
          <p className="max-w-2xl mx-auto font-bold text-lg mt-2">
            <span className="text-white bg-secondary/80 px-2 py-0.5 rounded">See even more options when you order online.</span>
          </p>
        </div>

        <Tabs 
          defaultValue="brazilian" 
          className="w-full max-w-4xl mx-auto" 
          id="menu-tabs"
          onValueChange={handleTabChange}
          value={activeTab}
        >
          <div className="flex justify-center mb-10 pb-2 px-2">
            <TabsList className="!bg-transparent !shadow-none !p-0 h-auto gap-3 flex-wrap justify-center">
              <TabsTrigger 
                value="brazilian" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base text-white/70 data-[state=active]:bg-secondary data-[state=active]:text-black data-[state=active]:shadow-lg transition-all !bg-transparent !shadow-none"
              >
                Brazilian
              </TabsTrigger>
              <TabsTrigger 
                value="turkish" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base text-white/70 data-[state=active]:bg-secondary data-[state=active]:text-black data-[state=active]:shadow-lg transition-all !bg-transparent !shadow-none"
              >
                Turkish
              </TabsTrigger>
              <TabsTrigger 
                value="french" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base text-white/70 data-[state=active]:bg-secondary data-[state=active]:text-black data-[state=active]:shadow-lg transition-all !bg-transparent !shadow-none"
              >
                French
              </TabsTrigger>
              <TabsTrigger 
                value="american" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base text-white/70 data-[state=active]:bg-secondary data-[state=active]:text-black data-[state=active]:shadow-lg transition-all !bg-transparent !shadow-none"
              >
                Cafe Classics
              </TabsTrigger>
              <TabsTrigger 
                value="desserts" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base text-white/70 data-[state=active]:bg-secondary data-[state=active]:text-black data-[state=active]:shadow-lg transition-all !bg-transparent !shadow-none"
              >
                Pastries
              </TabsTrigger>
              <TabsTrigger 
                value="beverages" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base text-white/70 data-[state=active]:bg-secondary data-[state=active]:text-black data-[state=active]:shadow-lg transition-all !bg-transparent !shadow-none"
              >
                Beverages
              </TabsTrigger>
              <TabsTrigger 
                value="smoothies" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base text-white/70 data-[state=active]:bg-secondary data-[state=active]:text-black data-[state=active]:shadow-lg transition-all !bg-transparent !shadow-none"
              >
                Smoothies
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="brazilian" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
            {renderMenuWithPhotos(menuItems.brazilian)}
          </TabsContent>

          <TabsContent value="turkish" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
            {renderMenuWithPhotos(menuItems.turkish)}
          </TabsContent>

          <TabsContent value="french" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
            {renderMenuWithPhotos(menuItems.french)}
          </TabsContent>

          <TabsContent value="american" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
            {renderCategoryWithSubsections(menuItems.american, true)}
          </TabsContent>

          <TabsContent value="desserts" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
            {renderCategoryWithSubsections(menuItems.desserts, true, true)}
          </TabsContent>

          <TabsContent value="beverages" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
             {renderCategoryWithSubsections(menuItems.beverages, true)}
          </TabsContent>

          <TabsContent value="smoothies" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
             {renderCategoryWithSubsections(menuItems.smoothies, true)}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-base text-red-500 uppercase leading-relaxed font-bold">
            *CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH, OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS, ESPECIALLY IF YOU HAVE CERTAIN MEDICAL CONDITIONS.
          </p>
        </div>
      </div>
    </section>
  );
}
