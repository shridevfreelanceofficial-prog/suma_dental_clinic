"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, PhoneCall, CalendarPlus, Home, Info, ImageIcon, Gift, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Results", href: "/results", icon: ImageIcon },
  { name: "Wishes & Events", href: "/wishes", icon: Gift },
  { name: "Tips & Knowledge", href: "/tips", icon: BookOpen },
  { name: "Contact Us", href: "/contact", icon: Phone },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sheet on route change
  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  function handleNavClick(href: string) {
    setSheetOpen(false);
    router.push(href);
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass-heavy shadow-premium py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="w-full px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0">
            <Image
              src="/logo/sumadentalcliniclogo.png"
              alt="Suma Dental Clinic Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-extrabold text-base sm:text-xl md:text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary drop-shadow-sm transition-transform hover:scale-105 duration-300 whitespace-nowrap">
            Suma Dental Clinic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-brand-primary after:transition-all after:duration-300",
                pathname === link.href
                  ? "text-brand-primary after:w-full"
                  : "text-slate-700 after:w-0 hover:after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Button variant="outline" className="gap-2 text-brand-primary border-brand-primary/50 bg-white/50 backdrop-blur-sm hover-lift" asChild>
            <Link href="tel:+919870301446">
              <PhoneCall className="w-4 h-4" />
              Call Now
            </Link>
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-0 shadow-lg shadow-brand-primary/20 hover-lift" asChild>
            <Link href="/appointment">
              <CalendarPlus className="w-4 h-4" />
              Book Appointment
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-2 shrink-0">
          <Button size="sm" className="bg-brand-primary hover:bg-brand-primary/90 text-white text-xs px-2.5 sm:px-3 shrink-0" asChild>
            <Link href="/appointment">
              <CalendarPlus className="w-3.5 h-3.5 mr-1 shrink-0" />
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </Link>
          </Button>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="shrink-0" />}>
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[340px] p-0 flex flex-col">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              {/* Sheet Header */}
              <div className="bg-brand-primary px-6 py-5 flex items-center gap-3">
                <div className="relative w-32 h-10">
                  <Image
                    src="/logo/sumadentalcliniclogo.png"
                    alt="Suma Dental Clinic"
                    fill
                    className="object-contain object-left brightness-0 invert"
                  />
                </div>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 flex flex-col py-4 overflow-y-auto">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "flex items-center gap-4 px-6 py-4 text-left w-full transition-all border-l-4",
                        isActive
                          ? "border-brand-primary bg-brand-primary/5 text-brand-primary font-semibold"
                          : "border-transparent text-slate-700 hover:bg-slate-50 hover:border-slate-200 hover:text-brand-primary"
                      )}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="text-base">{link.name}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Sheet Footer CTAs */}
              <div className="border-t border-slate-100 p-5 flex flex-col gap-3">
                <Button variant="outline" className="w-full gap-2 text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white h-12" asChild>
                  <Link href="tel:+919870301446">
                    <PhoneCall className="w-4 h-4" />
                    +91 98703 01446
                  </Link>
                </Button>
                <Button className="w-full gap-2 bg-brand-primary text-white hover:bg-brand-primary/90 h-12" asChild>
                  <Link href="/appointment" onClick={() => setSheetOpen(false)}>
                    <CalendarPlus className="w-4 h-4" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
