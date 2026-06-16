"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarPlus, PhoneCall, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const treatments = [
  "General Checkup",
  "Root Canal Treatment",
  "Teeth Cleaning & Whitening",
  "Dental Implants",
  "Braces & Aligners",
  "Crowns & Bridges",
  "Tooth Extraction",
  "Pediatric Dentistry",
  "Other",
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
  treatment: z.string().min(1, "Please select a treatment type"),
  message: z.string().optional(),
});

export default function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      treatment: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  const inputClass = "bg-white/80 border-slate-200 h-12 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 shadow-sm";

  return (
    <div
      className="min-h-screen py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F0F4FF 0%, #EFF6FF 40%, #F8FAFC 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/8 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/8 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 pt-4"
          >
            <div>
              <span className="inline-block bg-brand-primary/10 text-brand-primary font-semibold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4">
                Book an Appointment
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Your Smile Deserves the Best Care
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                Fill out the form and our team will confirm your slot. Emergency? Call us directly.
              </p>
            </div>

            {/* Call CTA Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card rounded-3xl p-8 shadow-premium border border-white/60 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/15 to-brand-secondary/15 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
                  <PhoneCall className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Need Immediate Help?</h3>
                <p className="text-slate-500 mb-6 text-sm">Call us directly for emergency dental care or to book over the phone.</p>
                <Button size="lg" className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white h-12 text-base shadow-lg shadow-brand-primary/20 hover-lift" asChild>
                  <Link href="tel:+919870301446">
                    <PhoneCall className="w-4 h-4 mr-2" />
                    +91 98703 01446
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Timings Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card rounded-3xl p-6 shadow-premium border border-white/60"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="font-bold text-slate-800">Clinic Timings</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Mon – Sat</span>
                  <span className="text-slate-800 font-semibold">11 AM – 2 PM &amp; 6 PM – 9 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600 font-medium">Sunday</span>
                  <span className="text-brand-accent font-semibold">By Appointment</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-[2rem] p-8 md:p-12 shadow-premium border border-white/60">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="w-28 h-28 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-200"
                  >
                    <CheckCircle2 className="w-14 h-14 text-green-500" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Request Received! 🎉</h3>
                    <p className="text-lg text-slate-500 mb-8 max-w-md">
                      Thank you, <span className="font-bold text-brand-primary">{form.getValues("name")}</span>. We&apos;ll call you on{" "}
                      <span className="font-bold text-brand-primary">{form.getValues("phone")}</span> to confirm your appointment.
                    </p>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-brand-primary/30 text-brand-primary hover:bg-brand-primary/5 hover-lift"
                      onClick={() => { setIsSubmitted(false); form.reset(); }}
                    >
                      Book Another Appointment
                    </Button>
                  </motion.div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Book an Appointment</h2>
                    <p className="text-slate-500 text-sm">Fill in the details below and we&apos;ll get back to you.</p>
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-semibold">Preferred Date *</FormLabel>
                              <FormControl>
                                <Input type="date" className={inputClass} min={new Date().toISOString().split('T')[0]} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-semibold">Preferred Time *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className={inputClass}>
                                    <SelectValue placeholder="Select Time Slot" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="morning">Morning (11:00 AM – 2:00 PM)</SelectItem>
                                  <SelectItem value="evening">Evening (6:00 PM – 9:00 PM)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="treatment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-semibold">Treatment Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className={inputClass}>
                                  <SelectValue placeholder="Select Treatment" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {treatments.map((t) => (
                                  <SelectItem key={t} value={t}>{t}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-semibold">Additional Notes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any specific dental concerns or symptoms?"
                                className="bg-white/80 border-slate-200 min-h-[110px] resize-none rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 shadow-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex items-start gap-3 p-4 bg-amber-50/80 backdrop-blur-sm text-amber-800 rounded-2xl border border-amber-200/60 shadow-sm">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
                        <p className="text-sm leading-relaxed">
                          Submitting this form does not guarantee an appointment. Our staff will call you to confirm your exact time slot.
                        </p>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white h-14 text-lg rounded-xl shadow-xl shadow-brand-primary/25 hover-lift hover:shadow-brand-primary/40 transition-all duration-300 font-semibold"
                      >
                        <CalendarPlus className="w-5 h-5 mr-2" />
                        Request Appointment
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
