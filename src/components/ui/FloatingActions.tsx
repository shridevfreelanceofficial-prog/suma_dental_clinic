"use client";

import { MessageCircle, PhoneCall, CalendarPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/20 transition-transform hover:-translate-y-1"
      >
        <Link href="https://wa.me/919870301446" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="sr-only">WhatsApp Us</span>
        </Link>
      </Button>
      
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-brand-primary hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20 transition-transform hover:-translate-y-1"
      >
        <Link href="tel:+919870301446">
          <PhoneCall className="w-6 h-6 text-white" />
          <span className="sr-only">Call Us</span>
        </Link>
      </Button>

      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-brand-accent hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/20 transition-transform hover:-translate-y-1 md:hidden"
      >
        <Link href="/appointment">
          <CalendarPlus className="w-6 h-6 text-white" />
          <span className="sr-only">Book Appointment</span>
        </Link>
      </Button>
    </div>
  );
}
