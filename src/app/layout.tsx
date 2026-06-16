import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Suma Dental Clinic | Healthy Smiles, Trusted Care",
    template: "%s | Suma Dental Clinic",
  },
  description: "Premium multi-speciality dental clinic providing comprehensive dental treatments with advanced technology and compassionate care by Dr. Trupti Talekar.",
  keywords: ["Dental Clinic", "Dentist Near Me", "Root Canal Treatment", "Teeth Cleaning", "Dental Implants", "Braces and Aligners", "Pediatric Dentist"],
  authors: [{ name: "Dr. Trupti Talekar" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sumadentalclinic.com",
    title: "Suma Dental Clinic | Premium Dental Care",
    description: "Comprehensive dental treatments with advanced technology.",
    siteName: "Suma Dental Clinic",
    images: [{ url: "/logo/sumadentalcliniclogo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suma Dental Clinic | Premium Dental Care",
    description: "Comprehensive dental treatments with advanced technology.",
    images: ["/logo/sumadentalcliniclogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Suma Dental Clinic",
    "image": "https://sumadentalclinic.com/logo/sumadentalcliniclogo.png",
    "@id": "https://sumadentalclinic.com",
    "url": "https://sumadentalclinic.com",
    "telephone": "+919870301446",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 7, Plot No. 319/320, K.S. Vindhyagiri, Sector 6, Darshan Darbar Marg, Nerul West",
      "addressLocality": "Navi Mumbai",
      "postalCode": "400706",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0421238,
      "longitude": 73.0111396
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "18:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/sumadentalclinic",
      "https://www.instagram.com/sumadentalclinic"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-brand-primary/20">
        <Header />
        <main className="flex-1 pt-[72px] md:pt-[88px]">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
