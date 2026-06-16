"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Clock, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const articles = [
  {
    id: "signs-you-need-root-canal",
    title: "Signs You Need a Root Canal",
    category: "Treatment",
    readTime: "5 min read",
    image: "/dentaltips_and_knowledge/k1.png",
    excerpt: "Learn about the common warning signs that indicate you might need root canal therapy to save your tooth.",
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment Explained",
    category: "Treatment",
    readTime: "7 min read",
    image: "/dentaltips_and_knowledge/k2.png",
    excerpt: "A comprehensive guide on what to expect during a root canal procedure at Suma Dental Clinic.",
  },
  {
    id: "crowns-and-bridges",
    title: "Crowns and Bridges: Restoring Your Smile",
    category: "Restorative",
    readTime: "6 min read",
    image: "/dentaltips_and_knowledge/k3.png",
    excerpt: "Discover how dental crowns and bridges can replace missing teeth and restore your chewing function.",
  },
  {
    id: "orthodontics-guide",
    title: "The Ultimate Guide to Orthodontics",
    category: "Orthodontics",
    readTime: "8 min read",
    image: "/dentaltips_and_knowledge/k4.png",
    excerpt: "Everything you need to know about braces, aligners, and achieving a perfectly straight smile.",
  },
  {
    id: "tooth-coloured-fillings",
    title: "Benefits of Tooth-Coloured Fillings",
    category: "Cosmetic",
    readTime: "4 min read",
    image: "/dentaltips_and_knowledge/k5.png",
    excerpt: "Why composite resin fillings are the best choice for treating cavities while maintaining aesthetics.",
  },
  {
    id: "dental-hygiene-tips",
    title: "Daily Dental Hygiene Tips",
    category: "Preventive",
    readTime: "5 min read",
    image: "/dentaltips_and_knowledge/t1.png",
    excerpt: "Simple yet effective practices to keep your teeth and gums healthy between dental visits.",
  },
];

export default function TipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ["All", "Treatment", "Restorative", "Orthodontics", "Cosmetic", "Preventive"];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Dental Tips & Knowledge Hub</h1>
          <p className="text-lg text-slate-600">
            Expert advice, treatment guides, and oral health tips from the professionals at Suma Dental Clinic.
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
                className={`rounded-full transition-all ${
                  selectedCategory === category 
                    ? "bg-brand-primary text-white hover:bg-brand-primary/90" 
                    : "text-slate-600 hover:text-brand-primary border-slate-200"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 rounded-full border-slate-200 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div 
                key={article.id} 
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxImage(article.image)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-slate-500">
              <p className="text-xl">No articles found matching your criteria.</p>
            </div>
          )}
        </div>

      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
        <DialogContent className="max-w-4xl p-1 bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">View Tip Image</DialogTitle>
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
