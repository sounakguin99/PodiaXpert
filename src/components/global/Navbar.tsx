"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/book" 
              className="bg-red-600 text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-red-700 transition shadow-sm"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
            >
              About
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
            >
              Services
            </Link>
            <Link 
              href="/doctors" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
            >
              Doctors
            </Link>
            <Link 
              href="/problems" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
            >
              Problems
            </Link>
            <Link 
              href="/blogs" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
            >
              Blogs
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
            >
              Contact
            </Link>
            <Link 
              href="/book" 
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full text-center bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
