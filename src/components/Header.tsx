'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0">
          <Image
            src="/molecule.png"
            alt="ViraChem"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <div className="font-bold tracking-tighter text-2xl">
            <span className="text-[#0B1F3F]">VIRA</span><span className="text-[#798996]">CHEM</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Google Translate Widget */}
          <div id="google_translate_element" className="inline-block"></div>
          
          {/* Navigation Links */}
          <Link href="/about" className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors">
            About
          </Link>
          <Link href="/products" className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors">
            Catalog
          </Link>
          <Link href="/quote" className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#0B1F3F] hover:text-[#C9364F] transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl md:hidden transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-4 border-b border-gray-100">
                <button
                  onClick={closeMenu}
                  className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col p-6 space-y-4">
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors text-lg py-2 border-b border-gray-100"
                >
                  About
                </Link>
                <Link
                  href="/products"
                  onClick={closeMenu}
                  className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors text-lg py-2 border-b border-gray-100"
                >
                  Catalog
                </Link>
                <Link
                  href="/quote"
                  onClick={closeMenu}
                  className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors text-lg py-2 border-b border-gray-100"
                >
                  Contact
                </Link>
                
                {/* Google Translate Widget - Mobile */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-[#798996] mb-2 uppercase tracking-wider">Language</p>
                  <div id="google_translate_element_mobile"></div>
                </div>
              </nav>

              {/* Request Quote Button */}
              <div className="p-6 border-t border-gray-100">
                <Link
                  href="/quote"
                  onClick={closeMenu}
                  className="block w-full bg-[#C9364F] text-white text-center py-3 rounded-md hover:bg-[#C9364F]/90 transition-colors font-medium"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
