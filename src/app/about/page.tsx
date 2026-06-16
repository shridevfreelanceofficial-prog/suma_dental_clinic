import Image from "next/image";
import { Metadata } from "next";
import { CheckCircle2, HeartPulse, Award, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Suma Dental Clinic, our experienced doctor Dr. Trupti Talekar, and our commitment to premium dental care.",
};

const philosophyPoints = [
  { icon: HeartPulse, title: "Patient-First Approach", desc: "Your comfort and well-being are at the core of everything we do." },
  { icon: Award, title: "Excellence in Care", desc: "Delivering the highest standard of dental treatments using modern techniques." },
  { icon: ShieldCheck, title: "Uncompromising Hygiene", desc: "Strict adherence to international sterilization protocols." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* Banner Section — full image, no overlay text, no cropping */}
      <section className="w-full">
        <div className="relative w-full" style={{ aspectRatio: "705/194" }}>
          <Image
            src="/about_us/banner.png"
            alt="Suma Dental Clinic Banner"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </section>

      {/* Clinic Overview */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-primary font-semibold tracking-wider uppercase mb-3">Welcome to Suma Dental Clinic</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Your Trusted Destination for Preventive, Restorative, and Cosmetic Dentistry
            </h3>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                At Suma Dental Clinic, we believe that a healthy smile is the foundation of overall well-being. Located in the heart of the city, our clinic is designed to offer a relaxing and stress-free environment for all our patients.
              </p>
              <p>
                Our state-of-the-art facility is equipped with the latest dental technology, ensuring accurate diagnoses and highly effective treatments. Whether you need a routine checkup or complex dental surgery, our multi-speciality approach ensures you receive comprehensive care under one roof.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {["Advanced Technology", "Experienced Professionals", "Hygienic Environment", "Affordable Pricing"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/about_us/clinic_outerlook.png"
              alt="Suma Dental Clinic Exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Doctor Image — egg/oval shape with decorative background */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Outer decorative glow blobs */}
                  <div className="absolute w-72 h-80 bg-brand-primary/20 rounded-[60%_40%_40%_60%/50%_50%_50%_50%] blur-2xl" />
                  <div className="absolute w-64 h-72 bg-brand-secondary/15 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] blur-xl translate-x-4 translate-y-4" />

                  {/* Egg-shaped color fill container */}
                  <div
                    className="relative overflow-hidden shadow-2xl"
                    style={{
                      width: "280px",
                      height: "340px",
                      borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
                      background: "linear-gradient(160deg, #2563EB 0%, #1E3A8A 100%)",
                      padding: "6px",
                    }}
                  >
                    <div
                      className="w-full h-full overflow-hidden relative"
                      style={{ borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%" }}
                    >
                      <Image
                        src="/Dr_and_Founder/trupti_talekar.png"
                        alt="Dr. Trupti Talekar"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Floating credential badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-5 py-3 text-center border border-slate-100 w-56">
                    <p className="text-brand-primary font-bold text-sm">B.D.S — Dental Surgeon</p>
                    <p className="text-slate-500 text-xs mt-0.5">Reg No: A-15923</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 pt-8 lg:pt-0">
                <h2 className="text-brand-primary font-semibold tracking-wider uppercase mb-2">Meet Our Founder</h2>
                <h3 className="text-4xl font-bold text-slate-900 mb-6">Dr. Trupti Talekar (Naik)</h3>
                
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                  <p>
                    Dr. Trupti Talekar is a highly skilled and compassionate dental surgeon with years of clinical experience. Her vision for Suma Dental Clinic was to create a space where patients feel heard, understood, and comfortable during their dental treatments.
                  </p>
                  <p>
                    She specializes in a wide array of dental procedures, from painless root canals to advanced cosmetic restorations. Her commitment to continuous learning ensures that she stays abreast of the latest advancements in dentistry, bringing the best possible outcomes to her patients.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {philosophyPoints.map((point, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <point.icon className="w-8 h-8 text-brand-primary mb-4" />
                      <h4 className="text-slate-900 font-semibold mb-2">{point.title}</h4>
                      <p className="text-sm text-slate-600">{point.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
