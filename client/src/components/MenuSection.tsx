import { useState } from "react";
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

const MenuItem = ({ item }: { item: MenuItem }) => {
  const image =
    item.name === "Coxinha"
      ? coxinhaImage
      : item.name === "Queijo Quente - Combo"
        ? queijoQuenteImage
        : item.name === "Misto Quente"
          ? mistoQuenteImage
          : item.name === "Pão de Queijo"
            ? paodeQueijoImage
            : undefined;

  return (
    <Card className="border-none shadow-none bg-white/50 hover:bg-white transition-colors duration-300 group h-full">
      <div className="flex gap-4 p-4">
        {image && (
          <img
            src={image}
            alt={item.name}
            className="w-24 h-24 rounded-lg object-cover shrink-0"
          />
        )}
        <div className="flex-1 min-w-0">
          <CardHeader className="flex flex-row items-baseline justify-between p-0 pb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-lg font-serif text-primary group-hover:text-accent transition-colors">
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
            <span className="font-bold text-accent whitespace-nowrap ml-2">{item.price}</span>
          </CardHeader>
          <CardContent className="p-0">
            <CardDescription className="text-muted-foreground leading-relaxed">
              {item.description}
            </CardDescription>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

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

  const renderCategoryWithSubsections = (categoryItems: Record<string, MenuItem[]>) => (
    <div className="space-y-10">
      {Object.entries(categoryItems).map(([category, items]) => (
        <div key={category}>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-serif font-bold text-primary">{category}</h3>
            <div className="h-px bg-border flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <MenuItem key={idx} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="menu" className="py-20 bg-background relative overflow-hidden scroll-mt-24">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">Our Kitchen</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Explore Our Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A carefully curated selection of our favorite recipes passed down through generations.
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
            <TabsList className="bg-transparent h-auto gap-3 flex-wrap justify-center">
              <TabsTrigger 
                value="brazilian" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Brazilian
              </TabsTrigger>
              <TabsTrigger 
                value="turkish" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Turkish
              </TabsTrigger>
              <TabsTrigger 
                value="french" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                French
              </TabsTrigger>
              <TabsTrigger 
                value="american" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Cafe Classics
              </TabsTrigger>
              <TabsTrigger 
                value="desserts" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Pastries & Savories
              </TabsTrigger>
              <TabsTrigger 
                value="beverages" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Beverages
              </TabsTrigger>
              <TabsTrigger 
                value="smoothies" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Smoothies
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="brazilian" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.brazilian.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="turkish" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.turkish.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="french" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.french.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="american" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
             {renderCategoryWithSubsections(menuItems.american)}
          </TabsContent>

          <TabsContent value="desserts" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
             {renderCategoryWithSubsections(menuItems.desserts)}
          </TabsContent>

          <TabsContent value="beverages" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
             {renderCategoryWithSubsections(menuItems.beverages)}
          </TabsContent>

          <TabsContent value="smoothies" className="mt-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
             {renderCategoryWithSubsections(menuItems.smoothies)}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-[10px] text-muted-foreground uppercase leading-relaxed">
            *CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH, OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS, ESPECIALLY IF YOU HAVE CERTAIN MEDICAL CONDITIONS.
          </p>
        </div>
      </div>
    </section>
  );
}
