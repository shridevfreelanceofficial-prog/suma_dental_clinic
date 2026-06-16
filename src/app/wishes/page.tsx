"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const wishesData = [
  { id: 1, title: "Children's Day", category: "Event", image: "/wishes/childrens_day.png" },
  { id: 2, title: "Gudi Padwa", category: "Festival", image: "/wishes/gudi_padwa.png" },
  { id: 3, title: "Holi", category: "Festival", image: "/wishes/holi.png" },
  { id: 4, title: "Maha Shivratri", category: "Festival", image: "/wishes/maha_shivratri.png" },
  { id: 5, title: "Makar Sankranti", category: "Festival", image: "/wishes/makar_sankranti.png" },
  { id: 6, title: "Merry Christmas", category: "Festival", image: "/wishes/merry_christmas.png" },
  { id: 7, title: "New Year", category: "Event", image: "/wishes/newyear.png" },
  { id: 8, title: "Republic Day", category: "National", image: "/wishes/republic_day.png" },
  { id: 9, title: "Women's Day", category: "Event", image: "/wishes/womens_day.png" },
  { id: 10, title: "Youth Day", category: "Event", image: "/wishes/youth_day.png" },
];

const categories = ["All", "Festival", "Event", "National"];

export default function WishesEventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredWishes = wishesData.filter((wish) => {
    const matchesCategory = selectedCategory === "All" || wish.category === selectedCategory;
    const matchesSearch = wish.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Wishes & Events</h1>
          <p className="text-lg text-slate-600">
            Celebrating moments, festivals, and milestones with our wonderful patient community at Suma Dental Clinic.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full transition-all",
                  selectedCategory === category 
                    ? "bg-brand-primary text-white" 
                    : "text-slate-600 hover:text-brand-primary border-slate-200"
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search wishes..."
              className="pl-10 rounded-full border-slate-200 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWishes.length > 0 ? (
            filteredWishes.map((wish) => (
              <div 
                key={wish.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxImage(wish.image)}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={wish.image}
                    alt={wish.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-bold text-xl">{wish.title}</h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-slate-500">
              <p className="text-xl">No wishes found matching your criteria.</p>
            </div>
          )}
        </div>

      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
        <DialogContent className="max-w-4xl p-1 bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">View Image</DialogTitle>
          <div className="relative w-full h-[80vh]">

            {lightboxImage && (
              <Image
                src={lightboxImage}
                alt="Enlarged View"
                fill
                className="object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
