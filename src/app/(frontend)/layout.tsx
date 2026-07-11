import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const NAVBAR_QUERY = defineQuery(`*[_type == "navbar"][0]`);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.podiaxpert.com";

export async function generateMetadata(): Promise<Metadata> {
  const navbarData = await client.fetch<SanityDocument>(NAVBAR_QUERY, {}, { next: { revalidate: 30 } });
  const logoUrl = navbarData?.logo ? urlFor(navbarData.logo).url() : "";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions in Kolkata",
      template: "%s | PodiaXpert Kolkata",
    },
    description:
      "PodiaXpert is Kolkata's leading advanced foot clinic offering custom insoles, custom footwear, diabetic foot care, gait analysis, foot assessment & mobility solutions. Book your free consultation today.",
    keywords: [
      "foot clinic Kolkata",
      "podiatrist Kolkata",
      "custom insoles Kolkata",
      "custom footwear Kolkata",
      "heel pain treatment Kolkata",
      "plantar fasciitis treatment",
      "flat feet treatment Kolkata",
      "diabetic foot care Kolkata",
      "gait analysis Kolkata",
      "foot assessment Kolkata",
      "orthotics Kolkata",
      "ankle pain treatment",
      "foot specialist near me",
      "PodiaXpert",
      "foot pain doctor Kolkata",
      "custom orthotics Kolkata",
      "bunion treatment Kolkata",
      "metatarsalgia treatment",
      "achilles tendinitis treatment",
      "ingrown toenail treatment Kolkata",
      "foot doctor East Kolkata",
      "podiatry clinic Rajdanga",
    ],
    authors: [{ name: "PodiaXpert" }],
    creator: "PodiaXpert",
    publisher: "PodiaXpert",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: logoUrl ? {
      icon: logoUrl,
      apple: logoUrl,
    } : undefined,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: SITE_URL,
      siteName: "PodiaXpert – Advanced Foot Clinic",
      title: "PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions in Kolkata",
      description:
        "Kolkata's leading advanced foot clinic. Expert diagnosis & treatment for heel pain, plantar fasciitis, flat feet, diabetic foot care. Custom insoles, orthotics & footwear solutions.",
      images: logoUrl ? [
        {
          url: logoUrl,
          width: 800,
          height: 600,
          alt: "PodiaXpert – Advanced Foot Clinic Kolkata",
        },
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: "PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions",
      description:
        "Kolkata's leading foot clinic offering custom insoles, diabetic foot care, gait analysis & mobility solutions. Book a free consultation.",
      images: logoUrl ? [logoUrl] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
    verification: {
      // Add your Google Search Console verification code here when available
      // google: "your-verification-code",
    },
  };
}



export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarData = await client.fetch<SanityDocument>(NAVBAR_QUERY, {}, { next: { revalidate: 30 } });

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}>
      {/* JSON-LD Structured Data: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions",
            "alternateName": "PodiaXpert",
            "url": SITE_URL,
            "logo": navbarData?.logo ? urlFor(navbarData.logo).url() : "",
            "image": navbarData?.logo ? urlFor(navbarData.logo).url() : "",
            "description": "Kolkata's leading advanced foot clinic offering custom insoles, custom footwear, diabetic foot care, computerised gait analysis, foot assessment & mobility solutions.",
            "telephone": "+91-9230374058",
            "email": "support@podiaxpert.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Block BA47, 1929, Rajdanga Main Road, Sarat Park, Naskarhat",
              "addressLocality": "Kolkata",
              "addressRegion": "West Bengal",
              "postalCode": "700107",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 22.5146109,
              "longitude": 88.3967749
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "20:00"
              }
            ],
            "priceRange": "$$",
            "sameAs": [],
            "medicalSpecialty": "Podiatry",
            "availableService": [
              { "@type": "MedicalProcedure", "name": "Custom Insoles" },
              { "@type": "MedicalProcedure", "name": "Custom Footwear" },
              { "@type": "MedicalProcedure", "name": "Diabetic Foot Care" },
              { "@type": "MedicalProcedure", "name": "Foot Assessment" },
              { "@type": "MedicalProcedure", "name": "Computerised Gait Analysis" }
            ],
            "areaServed": {
              "@type": "City",
              "name": "Kolkata"
            }
          }),
        }}
      />
      <Navbar data={navbarData} />
      {children}
      <Footer />
    </div>
  );
}
