import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Back Navigation */}
        <Link href="/tips" className="inline-flex items-center text-brand-primary font-medium hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Knowledge Hub
        </Link>

        {/* Article Header */}
        <header className="mb-10 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-500 text-sm mb-4">
            <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
              Treatment
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>Oct 12, 2023</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Detailed Article Placeholder View
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            This is a placeholder page for individual articles. In a complete application, this would fetch data based on the route ID.
          </p>
        </header>

        {/* Article Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-md border border-slate-100">
          <Image
            src="/dentaltips_and_knowledge/k1.png"
            alt="Article Feature Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content Area */}
        <article className="prose prose-lg prose-slate max-w-none mb-16">
          <p>
            This is where the main body of the article would go. The content would be dynamically loaded based on the selected article's ID.
          </p>
          <h2>Understanding the Procedure</h2>
          <p>
            Detailed explanation of the dental procedure or tips, broken down into easily digestible paragraphs and bullet points.
          </p>
          <ul>
            <li>Important point one</li>
            <li>Important point two</li>
            <li>Important point three</li>
          </ul>
        </article>

        {/* Article Footer & Actions */}
        <footer className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/Dr_and_Founder/trupti_talekar.png"
              alt="Author"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-slate-900">Dr. Trupti Talekar</p>
              <p className="text-sm text-slate-500">Chief Dental Surgeon</p>
            </div>
          </div>
          
          <Button variant="outline" className="gap-2 rounded-full px-6">
            <Share2 className="w-4 h-4" />
            Share Article
          </Button>
        </footer>

      </div>
    </div>
  );
}
