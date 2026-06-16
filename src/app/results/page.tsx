import { Metadata } from "next";
import Image from "next/image";
import { ComparisonSlider } from "@/components/ui/ComparisonSlider";

export const metadata: Metadata = {
  title: "Our Results",
  description: "View the life-changing dental transformations at Suma Dental Clinic.",
};

const resultsData = [
  { id: 1, before: "/results/before1.png", after: "/results/after1.png", tag: "Orthodontics" },
  { id: 2, before: "/results/before2.png", after: "/results/after2.png", tag: "Cosmetic Dentistry" },
  { id: 3, before: "/results/before3.png", after: "/results/after3.png", tag: "Dental Implants" },
  { id: 4, before: "/results/before4.png", after: "/results/after4.png", tag: "Teeth Whitening" },
  { id: 5, before: "/results/before5.png", after: "/results/after5.png", tag: "Restoration" },
];

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Real Results, Real Smiles</h1>
          <p className="text-lg text-slate-600 mb-4">
            Explore the transformative dental work we've performed for our patients. Drag the slider to compare the before and after states.
          </p>
          <p className="text-sm text-slate-500 italic bg-brand-primary/5 inline-block px-4 py-2 rounded-full">
            Disclaimer: Results may vary from patient to patient depending on individual conditions.
          </p>
        </div>

        {/* Poster & Composite Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video relative">
             <Image src="/results/results.png" alt="Suma Dental Clinic Results" fill className="object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video relative">
             <Image src="/results/beforeandafter.png" alt="Before and After Composite" fill className="object-cover" />
          </div>
        </div>

        {/* Comparison Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resultsData.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
              <ComparisonSlider beforeImage={item.before} afterImage={item.after} />
              <div className="mt-4 px-2">
                <span className="inline-block bg-brand-primary/10 text-brand-primary text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900">Patient Transformation</h3>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
