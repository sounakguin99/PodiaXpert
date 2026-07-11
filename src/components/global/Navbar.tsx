"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { client } from '@/sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function Navbar({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = data?.links || [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Doctors', url: '/doctors' },
    { label: 'Problems', url: '/problems' },
    { label: 'Blogs', url: '/blogs' },
    { label: 'Contact', url: '/contact-us' },
  ];

  const ctaButton = data?.ctaButton || {
    label: 'Book Free Consultation',
    url: '/book-appointment'
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {data?.logo ? (
                <Image 
                  src={urlFor(data.logo).url()} 
                  alt="PodiaXpert Logo" 
                  width={120} 
                  height={40} 
                  className="object-contain"
                  priority
                />
              ) : (
                <span className="text-2xl font-bold text-gray-900">PodiaXpert</span>
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item: any) => (
              <Link 
                key={item.label}
                href={item.url} 
                className={`${pathname === item.url ? 'text-red-600' : 'text-gray-600'} font-medium text-sm hover:text-red-600 transition`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link 
              href={ctaButton.url} 
              className="bg-red-600 text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-red-700 transition shadow-sm"
            >
              {ctaButton.label}
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
            {navItems.map((item: any) => (
              <Link 
                key={item.label}
                href={item.url} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-md ${pathname === item.url ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href={ctaButton.url} 
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full text-center bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition"
            >
              {ctaButton.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
