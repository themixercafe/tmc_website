import { useState, useEffect, useRef } from "react";
import OrderOnlineDialog from "./OrderOnlineDialog";

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
import smoothiesBg from "@assets/smoothies_bg.jpg";
import smoothieBerry from "@assets/mixed-berry-smoothie-2-min_1787066623486.jpg";
import smoothieMango from "@assets/Mango-Pineapple-Smoothie-3_1787066623486.webp";
import smoothieSunrise from "@assets/strawberry-mango-smoothie-1_1787074399873.jpg";
import smoothieStrawberry from "@assets/smoothie_strawberry_white.jpg";
import cappuccinoImage from "@assets/Cappuccino_with_latte_art_and_sugar(1)_1786888289473.png";
import matchaImage from "@assets/Iced_matcha_latte_and_accessories(1)_1786888381418.png";
import turkishTeaDrinkImage from "@assets/turkish_tea_4_1786888400190.webp";
import turkeySandImage from "@assets/Turkey_sand_3_1786545548991.png";

// Type definition for Menu Item
type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular: boolean;
  checkAvailability?: boolean;
  nameColor?: string;
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

  // Beverages
  "Cappuccino": cappuccinoImage,
  "Iced Matcha Latte": matchaImage,
  "Matcha Latte": matchaImage,
  "Turkish Tea": turkishTeaDrinkImage,

  // Smoothies
  "Sunrise Tropic": smoothieSunrise,
  "Mango Madness": smoothieMango,
  "Berry Blast": smoothieBerry,
  "Strawberry Banana": smoothieStrawberry,
};

const AvailabilityBadge = () => (
  <Popover>
    <PopoverTrigger asChild>
      <button type="button" className="inline-flex shrink-0 items-center gap-1 rounded-full border border-orange-400 bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
        <AlertCircle className="w-3 h-3" />
        Check Availability
      </button>
    </PopoverTrigger>
    <PopoverContent className="bg-primary text-primary-foreground border-none w-auto p-2 text-sm">
      <p>Please contact the store for availability.</p>
    </PopoverContent>
  </Popover>
);

const MenuItem = ({ item, transparent, hideDescription, showAvailability = false }: { item: MenuItem; transparent?: boolean; hideDescription?: boolean; showAvailability?: boolean }) => {
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
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Text below */}
        <div className="p-4">
          <CardHeader className="flex flex-row items-baseline justify-between p-0 pb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className={`text-lg font-serif font-bold transition-colors ${!item.nameColor ? 'text-secondary' : ''}`} style={item.nameColor ? { color: item.nameColor } : {}}>
                {item.name}
              </CardTitle>
              {item.popular && (
                <Badge variant="secondary" className="text-[10px] h-5 px-1.5 bg-secondary text-black font-bold hover:bg-secondary/80">
                  ★ Favorite
                </Badge>
              )}
              {showAvailability && <AvailabilityBadge />}
            </div>
            {SHOW_PRICES && <span className="font-bold text-secondary whitespace-nowrap ml-2">{item.price}</span>}
          </CardHeader>
          <CardContent className="p-0">
            {!hideDescription && (
              <CardDescription className="text-white leading-relaxed font-bold">
                {item.description}
              </CardDescription>
            )}
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
                <Badge variant="secondary" className="text-[10px] h-5 px-1.5 bg-secondary text-black font-bold hover:bg-secondary/80">
                  ★ Favorite
                </Badge>
              )}
            </div>
            {SHOW_PRICES && <span className="font-bold text-secondary whitespace-nowrap">{item.price}</span>}
          </div>
          <p className="text-white mt-1 text-lg leading-relaxed font-bold">{item.description}</p>
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
  const tabScrollRef = useRef<HTMLDivElement>(null);

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

  const renderSmoothiesLayout = (categoryItems: Record<string, MenuItem[]>) => {
    const sections = Object.entries(categoryItems);
    return (
      <div className="space-y-10">
        {sections.map(([category, items]) => {
          const withPhoto = items.filter(i => imageMap[i.name]);
          const withoutPhoto = items.filter(i => !imageMap[i.name]);
          const isAddons = withPhoto.length === 0;

          if (isAddons) {
            return (
              <div key={category} className="text-center">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-1">{category}</h3>
                <div className="w-16 h-px bg-secondary/50 mx-auto mb-4" />
                <div className="flex flex-col items-center gap-2">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex flex-wrap items-center justify-center gap-2">
                      <span className="text-white font-semibold text-base">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          const topTwo = withPhoto.slice(0, 2);
          const rest = [...withPhoto.slice(2), ...withoutPhoto];

          return (
            <div key={category}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-1">{category}</h3>
                <div className="w-16 h-px bg-secondary/50 mx-auto" />
              </div>
              {/* All smoothie photos side by side with names below */}
              <div className="grid grid-cols-4 gap-4">
                {withPhoto.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="relative rounded-2xl overflow-hidden group w-full">
                      <img src={imageMap[item.name]} alt={item.name} className="w-full h-80 object-cover object-bottom group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <p className="text-secondary font-serif font-bold text-center text-base">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderBeveragesLayout = (categoryItems: Record<string, MenuItem[]>) => (
    <div className="space-y-12">
      {Object.entries(categoryItems).map(([category, items]) => (
        <div key={category} className="text-center">
          <h3 className="text-3xl font-serif font-bold text-secondary mb-1">{category}</h3>
          <div className="w-24 h-px bg-secondary/50 mx-auto mb-6" />
          <div className="flex flex-col items-center gap-2">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-wrap justify-center items-center gap-3">
                <span className="text-white font-semibold text-lg">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCategoryWithSubsections = (categoryItems: Record<string, MenuItem[]>, transparent?: boolean, hideHeaders?: boolean, hideDescriptions?: boolean, centerHeaders?: boolean, showAvailability = false, columns = false) => (
    <div className={columns ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start" : "space-y-10"}>
      {Object.entries(categoryItems).map(([category, items]) => (
        <div key={category}>
          {!hideHeaders && (
            centerHeaders ? (
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-1">{category}</h3>
                <div className="w-16 h-px bg-secondary/50 mx-auto" />
              </div>
            ) : (
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-serif font-bold text-secondary">{category}</h3>
              <div className="h-px bg-white/20 flex-1" />
            </div>
            )
          )}
          <div className={columns ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
            {items.map((item, idx) => (
              <MenuItem key={idx} item={item} transparent={transparent} hideDescription={hideDescriptions} showAvailability={showAvailability} />
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
    beverages: { image: beveragesBg, position: "center" },
    smoothies: { image: smoothiesBg, position: "center", filter: "brightness(0.85) saturate(1.1)" },
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
          <span className="text-secondary font-bold tracking-widest uppercase text-2xl mb-2 block">Our Kitchen</span>
          <p className="text-white/60 text-xl md:text-2xl font-sans font-bold mb-4">
            A carefully curated selection of our favorite recipes passed down through generations.
          </p>
          <div className="mt-4">
            <OrderOnlineDialog>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-secondary text-black font-bold px-8 py-3 rounded-full text-lg hover:bg-secondary/80 transition-colors shadow-lg"
            >
              🛒 Order Online
            </button>
            </OrderOnlineDialog>
          </div>
        </div>

        <Tabs 
          defaultValue="brazilian" 
          className="w-full max-w-4xl mx-auto" 
          id="menu-tabs"
          onValueChange={handleTabChange}
          value={activeTab}
        >
          <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Three Cultures, One Delicious Menu:
          </h2>
          <p className="mx-auto mb-4 max-w-4xl text-center text-base sm:text-lg text-white leading-relaxed">
            <span className="block">Our items are made fresh and are available in limited quantities.</span>
            <span className="block sm:whitespace-nowrap">Please check availability when ordering online.</span>
          </p>
          <div className="text-center mb-6">
            <AvailabilityBadge />
          </div>
          <div className="mb-10 flex items-center justify-center gap-2">
            {/* Left arrow */}
            <button
              onClick={() => { const el = tabScrollRef.current; if (el) el.scrollBy({ left: -150, behavior: 'smooth' }); }}
              className="flex-shrink-0 text-secondary bg-black/40 hover:bg-black/60 rounded-full w-7 h-7 flex items-center justify-center shadow transition-all"
              aria-label="Scroll left"
            >‹</button>

            {/* Scrollable tabs */}
            <div ref={tabScrollRef} className="overflow-x-auto scrollbar-hide max-w-full">
              <TabsList className="!bg-transparent !shadow-none !p-0 h-auto gap-1 flex-nowrap inline-flex min-w-max">
                {[
                  { value: "brazilian", label: "Brazilian" },
                  { value: "turkish", label: "Turkish" },
                  { value: "french", label: "French" },
                  { value: "american", label: "Cafe Classics" },
                  { value: "desserts", label: "Pastries & Savories" },
                  { value: "beverages", label: "Beverages" },
                  { value: "smoothies", label: "Smoothies" },
                ].map(({ value, label }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="rounded-full border border-transparent px-3 py-2 text-base text-white bg-transparent hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:border-white/80 data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:shadow-lg transition-all whitespace-nowrap overflow-visible"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Right arrow */}
            <button
              onClick={() => { const el = tabScrollRef.current; if (el) el.scrollBy({ left: 150, behavior: 'smooth' }); }}
              className="flex-shrink-0 text-secondary bg-black/40 hover:bg-black/60 rounded-full w-7 h-7 flex items-center justify-center shadow transition-all"
              aria-label="Scroll right"
            >›</button>
          </div>

          {[
            { value: "brazilian", content: renderMenuWithPhotos(menuItems.brazilian) },
            { value: "turkish", content: renderMenuWithPhotos(menuItems.turkish) },
            { value: "french", content: renderMenuWithPhotos(menuItems.french) },
            { value: "american", content: renderCategoryWithSubsections(menuItems.american, true, false, false, true) },
            { value: "desserts", content: renderCategoryWithSubsections(menuItems.desserts, true, false, false, true, false, true) },
            { value: "beverages", content: renderBeveragesLayout(menuItems.beverages) },
            { value: "smoothies", content: renderSmoothiesLayout(menuItems.smoothies) },
          ].map(({ value, content }) => (
            <TabsContent key={value} value={value} className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
              {content}
            </TabsContent>
          ))}
        </Tabs>

        {["turkish", "french", "american"].includes(activeTab) && (
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-base text-red-500 uppercase leading-relaxed font-bold">
            *CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH, OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS, ESPECIALLY IF YOU HAVE CERTAIN MEDICAL CONDITIONS.
          </p>
        </div>
        )}
      </div>
    </section>
  );
}
