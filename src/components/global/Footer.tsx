import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0]`);

export default async function Footer() {
  const data = await client.fetch<SanityDocument>(FOOTER_QUERY, {}, { next: { revalidate: 30 } });
  
  const brandInfo = data?.brandInfo || {};
  const quickLinks = data?.quickLinks || [
    { label: "About Us", url: "/about" },
    { label: "Our Services", url: "/services" },
    { label: "Our Doctors", url: "/doctors" },
    { label: "Problems", url: "/problems" },
    { label: "Contact Us", url: "/contact-us" }
  ];
  const topTreatments = data?.topTreatments || [
    { label: "Heel Pain", url: "/problems/heel-pain" },
    { label: "Plantar Fasciitis", url: "/problems/plantar-fasciitis" },
    { label: "Diabetic Foot", url: "/services/diabetic-foot-care" },
    { label: "Custom Insoles", url: "/services/custom-insoles" },
    { label: "Custom Footwear", url: "/services/custom-footwear" }
  ];
  const contactInfo = data?.contactInfo || {};
  const bottomBar = data?.bottomBar || {};

  const location = contactInfo.location || "Block BA47, 1929, Rajdanga Main Road, Sarat Park, Naskarhat, East Kolkata Twp, Kolkata, West Bengal 700107";
  const phone = contactInfo.phone || "+91 92303 74058";
  const phoneSubtitle = contactInfo.phoneSubtitle || "Available for emergency calls.";
  const email = contactInfo.email || "support@podiaxpert.com";
  const workingHours = contactInfo.workingHours || "Mon - Sat: 11:00 AM - 7:00 PM\nSunday: Closed (by prior appointment)";

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/Logo/logoblack.png"
                alt="PodiaXpert Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {brandInfo.description || "Expert foot care in Kolkata. We provide advanced diagnosis and treatments for all types of foot problems, ensuring you get back on your feet quickly and safely."}
            </p>
            <div className="flex gap-4">
              {brandInfo.facebookUrl && (
                <Link
                  href={brandInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition group"
                >
                  <svg
                    className="w-5 h-5 text-emerald-500 group-hover:text-white transition"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              )}
              {brandInfo.instagramUrl && (
                <Link
                  href={brandInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition group"
                >
                  <svg
                    className="w-5 h-5 text-emerald-500 group-hover:text-white transition"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              )}
              {brandInfo.youtubeUrl && (
                <Link
                  href={brandInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition group"
              >
                <svg
                  className="w-5 h-5 text-emerald-500 group-hover:text-white transition"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link: any, index: number) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-400 hover:text-white transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Treatments */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Top Treatments</h3>
            <ul className="space-y-4">
              {topTreatments.map((link: any, index: number) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-400 hover:text-white transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {location}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-sm block">{phone}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{phoneSubtitle}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm whitespace-pre-line">
                  {workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {bottomBar.copyrightText || "PodiaXpert. All rights reserved."}
          </p>
          <div className="flex gap-6">
            {(bottomBar.links || [
              { label: "Privacy Policy", url: "/privacy" },
              { label: "Terms of Service", url: "/terms" }
            ]).map((link: any, index: number) => (
              <Link
                key={index}
                href={link.url}
                className="text-gray-500 hover:text-white transition text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
