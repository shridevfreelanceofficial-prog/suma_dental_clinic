"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 5000);
  }

  const inputClass = "bg-white/80 border-slate-200 h-12 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 shadow-sm";

  return (
    <div
      className="min-h-screen py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F0F4FF 0%, #EFF6FF 40%, #F8FAFC 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-secondary/8 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-primary/8 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 pt-4"
        >
          <span className="inline-block bg-brand-primary/10 text-brand-primary font-semibold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            We're Here to Help
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Whether you have a question about our treatments, pricing, or want to book an appointment, our team is ready to answer all your questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card rounded-3xl p-8 shadow-premium border border-white/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Contact Information</h2>
              
              <div className="space-y-8 relative z-10">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white text-brand-primary transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-500 text-sm mb-2">Mon-Sat: 11am–2pm & 6pm–9pm.</p>
                    <Link href="tel:+919870301446" className="text-brand-primary font-bold hover:underline text-lg">
                      +91 98703 01446
                    </Link>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:from-[#25D366] group-hover:to-[#128C7E] group-hover:text-white text-[#25D366] transition-all duration-300">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">WhatsApp</h3>
                    <p className="text-slate-500 text-sm mb-2">Message us anytime.</p>
                    <Link href="https://wa.me/919870301446" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline text-lg">
                      Chat with us
                    </Link>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white text-brand-primary transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Shop No. 7, Plot No. 319/320, K.S. Vindhyagiri, <br />
                      Sector 6, Darshan Darbar Marg, Nerul West, <br />
                      Navi Mumbai, Maharashtra 400706
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Clinic Timings */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card bg-brand-primary/95 text-white rounded-3xl p-8 shadow-premium border border-white/20 bg-[url('/hero/h1.png')] bg-cover bg-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-primary/95 backdrop-blur-sm" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                    <Clock className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">Clinic Timings</h2>
                </div>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between border-b border-white/20 pb-4">
                    <span className="text-white/80">Mon - Sat</span>
                    <span className="font-bold text-right tracking-wide">
                      11:00 AM - 02:00 PM <br/>
                      06:00 PM - 09:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-white/80">Sunday</span>
                    <span className="font-bold text-brand-accent tracking-wide">By Appointment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-[2rem] p-8 md:p-12 shadow-premium border border-white/60">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="w-28 h-28 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-200"
                  >
                    <CheckCircle2 className="w-14 h-14 text-green-500" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent! 🎉</h3>
                    <p className="text-lg text-slate-500 max-w-md mx-auto">
                      Thank you for reaching out to us, <span className="font-bold text-brand-primary">{form.getValues("name")}</span>. Our team will get back to you shortly.
                    </p>
                  </motion.div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                    <p className="text-slate-500 text-sm">Fill out the form below and we will respond as soon as possible.</p>
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-semibold">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" className={inputClass} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-semibold">Mobile Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your mobile number" type="tel" className={inputClass} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-semibold">Email Address (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your email address" type="email" className={inputClass} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-semibold">Subject *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter the subject" className={inputClass} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-semibold">Your Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your inquiry or concern..." 
                                className="bg-white/80 border-slate-200 min-h-[140px] resize-none rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 shadow-sm" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white h-14 text-lg rounded-xl shadow-xl shadow-brand-primary/25 hover-lift hover:shadow-brand-primary/40 transition-all duration-300 font-semibold mt-4"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </motion.div>

        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-brand-primary/10 text-brand-primary font-semibold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-3">
              Our Location
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Find Us on the Map</h2>
          </div>
          <div className="w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-premium border-4 border-white/60 relative">
            <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1781591033911!6m8!1m7!1s5eLLs78QU0TFc97lOn_3YQ!2m2!1d19.04212383156422!2d73.01113963966598!3f66.91977790039307!4f4.2189372221615855!5f0.7820865974627469" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Suma Dental Clinic"
              className="relative z-0"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
