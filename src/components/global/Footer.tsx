import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2">
              <Image 
                src="/Logo/logoblack.png" 
                alt="PodiaXpert Logo" 
                width={110} 
                height={40} 
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Expert foot care in Kolkata. We provide advanced diagnosis and treatments for all types of foot problems, ensuring you get back on your feet quickly and safely.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition group">
                <svg className="w-5 h-5 text-emerald-500 group-hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition group">
                <svg className="w-5 h-5 text-emerald-500 group-hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition group">
                <svg className="w-5 h-5 text-emerald-500 group-hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition group">
                <svg className="w-5 h-5 text-emerald-500 group-hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition text-sm">Our Services</Link></li>
              <li><Link href="/doctors" className="text-gray-400 hover:text-white transition text-sm">Our Doctors</Link></li>
              <li><Link href="/problems" className="text-gray-400 hover:text-white transition text-sm">Problems</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Treatments */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Top Treatments</h3>
            <ul className="space-y-4">
              <li><Link href="/problems" className="text-gray-400 hover:text-white transition text-sm">Heel Pain</Link></li>
              <li><Link href="/problems" className="text-gray-400 hover:text-white transition text-sm">Plantar Fasciitis</Link></li>
              <li><Link href="/problems" className="text-gray-400 hover:text-white transition text-sm">Diabetic Foot</Link></li>
              <li><Link href="/problems" className="text-gray-400 hover:text-white transition text-sm">Flat Foot Correction</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition text-sm">Custom Insoles</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Health Avenue, Salt Lake City, Kolkata, WB 700091</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">hello@podiaxpert.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PodiaXpert. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
