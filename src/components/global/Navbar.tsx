import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/Logo/logoblack.png" 
                alt="PodiaXpert Logo" 
                width={120} 
                height={40} 
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-red-600 font-medium text-sm hover:text-red-700 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 font-medium text-sm hover:text-red-600 transition">
              About
            </Link>
            <Link href="/services" className="text-gray-600 font-medium text-sm hover:text-red-600 transition">
              Services
            </Link>
            <Link href="/doctors" className="text-gray-600 font-medium text-sm hover:text-red-600 transition">
              Doctors
            </Link>
            <Link href="/problems" className="text-gray-600 font-medium text-sm hover:text-red-600 transition">
              Problems
            </Link>
            <Link href="/blogs" className="text-gray-600 font-medium text-sm hover:text-red-600 transition">
              Blogs
            </Link>
            <Link href="/contact" className="text-gray-600 font-medium text-sm hover:text-red-600 transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/book" 
              className="bg-red-600 text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-red-700 transition shadow-sm"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
