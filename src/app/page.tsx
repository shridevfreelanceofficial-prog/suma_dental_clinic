"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Stethoscope, 
  Syringe, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Activity, 
  HeartPulse, 
  Baby, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const heroSlides = [
  {
    image: "/hero/h1.png",
    title: "Healthy Smiles, Trusted Dental Care",
    subtitle: "Comprehensive dental treatments with advanced technology and compassionate care by experienced dental professionals.",
  },
  {
    image: "/hero/h2.png",
    title: "Advanced Technology, Gentle Care",
    subtitle: "Experience painless dentistry with our state-of-the-art equipment and personalized treatment plans.",
  }
];

const services = [
  { title: "Oral Health Checkup", icon: Stethoscope, desc: "Comprehensive examination of your teeth, gums, and mouth." },
  { title: "Root Canal Treatment", icon: Activity, desc: "Painless RCT to save your severely decayed or infected tooth." },
  { title: "Teeth Cleaning", icon: Sparkles, desc: "Professional scaling and polishing for a brighter smile." },
  { title: "Teeth Whitening", icon: Smile, desc: "Advanced whitening procedures for instant bright results." },
  { title: "Composite Filling", icon: Syringe, desc: "Tooth-colored restorations for cavities and minor fractures." },
  { title: "Dental Implants", icon: ShieldCheck, desc: "Permanent solution for missing teeth that look and feel natural." },
  { title: "Braces N Aligners", icon: HeartPulse, desc: "Straighten your teeth with modern orthodontic treatments." },
  { title: "Pediatric Dentistry", icon: Baby, desc: "Specialized, gentle dental care for infants and children." },
];

const whyChooseUs = [
  "Experienced Dental Surgeon",
  "Multi-Speciality Dental Care",
  "Modern Equipment",
  "Personalized Treatment",
  "Comfortable Environment",
  "Transparent Pricing"
];

const equipment = [
  "/equipment/e1.png",
  "/equipment/e2.png",
  "/equipment/e3.png",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] lg:min-h-[600px] w-full bg-slate-900 pt-28 pb-12 lg:pt-32 lg:pb-20 overflow-hidden flex items-center">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
            
            {/* Left Content */}
            <div className="text-white order-2 lg:order-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-lg h-14 px-8 shadow-xl shadow-brand-primary/30 hover-lift hover:shadow-brand-primary/50 hover:scale-[1.03] transition-all duration-300" asChild>
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:border-white hover:bg-white/20 text-lg h-14 px-8 shadow-lg transition-all duration-300 hover:scale-[1.03]" asChild>
                  <Link href="tel:+919870301446">Call Now</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right Image Slider */}
            <div className="order-1 lg:order-2 w-full h-[350px] sm:h-[450px] lg:h-[550px] relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/5 rounded-[2.5rem] md:rounded-[3rem] border border-slate-700/50 backdrop-blur-sm overflow-hidden p-6 flex items-center justify-center shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-full -translate-y-4 sm:-translate-y-8 lg:-translate-y-10"
                  >
                    <Image
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].title}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === idx ? "bg-brand-primary w-6" : "bg-white/50 w-2 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden" style={{background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)"}}>
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[60px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block bg-brand-primary/10 text-brand-primary font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Comprehensive Dental Care</h2>
            <p className="text-slate-600 text-lg">
              We offer a wide range of dental services to ensure your oral health is in perfect condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group"
              >
                <div className="h-full glass-card rounded-3xl p-8 flex flex-col shadow-premium cursor-pointer transition-all duration-300 group-hover:shadow-premium-hover group-hover:border-brand-primary/20">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white transition-all duration-300 shadow-inner">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors duration-300">{service.title}</h4>
                  <p className="text-slate-500 flex-1 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Doctor Profile */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-brand-primary to-slate-900 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/30 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Doctor Image with glassmorphic frame */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-brand-secondary/40 to-transparent blur-2xl" />
              <div className="relative glass-panel rounded-[3rem] p-4 shadow-2xl border border-white/20 inline-block">
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] w-[280px] sm:w-[340px] shadow-xl">
                  <Image
                    src="/Dr_and_Founder/trupti_talekar.png"
                    alt="Dr. Trupti Talekar"
                    fill
                    sizes="(max-width: 640px) 280px, 340px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                </div>
                {/* Floating credential badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-heavy rounded-2xl shadow-xl px-6 py-3 text-center w-60 border border-white/50">
                  <p className="text-brand-primary font-bold text-sm">Dr. Trupti Talekar (Naik)</p>
                  <p className="text-slate-600 text-xs mt-0.5">B.D.S — Reg No: A-15923</p>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white pt-8 lg:pt-0"
            >
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white/80 font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Smile is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Top Priority</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                At Suma Dental Clinic, we combine extensive experience with advanced modern technology to provide you with the best possible dental care in a comfortable and hygienic environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {whyChooseUs.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 shadow-sm hover:bg-white/20 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" />
                    <span className="text-slate-200 font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Equipment Mini Gallery */}
              <div className="mb-10">
                <h4 className="text-lg font-semibold text-white/80 mb-4">Our Advanced Equipment</h4>
                <div className="flex gap-4">
                  {equipment.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.08, y: -4 }}
                      className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`Advanced Equipment ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-brand-primary/20 hover:bg-transparent transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <Button size="lg" className="bg-white text-brand-primary font-bold h-14 px-10 shadow-xl hover:bg-blue-50 hover:shadow-2xl hover-lift text-base" asChild>
                <Link href="/about">More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
