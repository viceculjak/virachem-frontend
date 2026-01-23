'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50 mx-4 mt-4 rounded-2xl shadow-lg">
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
          <Link href="/products" className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors">
            Products
          </Link>
          <Link href="/services" className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors">
            Services
          </Link>
          <Link href="/quality" className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors">
            Quality
          </Link>
          <Link href="/about" className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors">
            Contact
          </Link>
          <Link href="/quote">
            <button className="bg-[#C9364F] text-white px-4 py-2 rounded-md hover:bg-[#C9364F]/90 transition-colors font-medium">
              Request Quote
            </button>
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
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with fade animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
              aria-hidden="true"
            />

            {/* Drawer with slide animation and rounded corners */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-64 bg-white z-[9999] shadow-xl md:hidden rounded-l-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex justify-end p-4 border-b border-gray-100"
                >
                  <button
                    onClick={closeMenu}
                    className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </motion.div>

                {/* Navigation Links with stagger animation */}
                <motion.nav
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.15 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                  className="flex-1 flex flex-col p-6 space-y-4"
                >
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    <Link
                      href="/products"
                      onClick={closeMenu}
                      className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors text-lg py-2 border-b border-gray-100 block"
                    >
                      Products
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    <Link
                      href="/services"
                      onClick={closeMenu}
                      className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors text-lg py-2 border-b border-gray-100 block"
                    >
                      Services
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    <Link
                      href="/quality"
                      onClick={closeMenu}
                      className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors text-lg py-2 border-b border-gray-100 block"
                    >
                      Quality
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    <Link
                      href="/about"
                      onClick={closeMenu}
                      className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors text-lg py-2 border-b border-gray-100 block"
                    >
                      About
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors text-lg py-2 border-b border-gray-100 block"
                    >
                      Contact
                    </Link>
                  </motion.div>
                </motion.nav>

                {/* Request Quote Button with animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 border-t border-gray-100"
                >
                  <Link
                    href="/quote"
                    onClick={closeMenu}
                    className="block w-full bg-[#C9364F] text-white text-center py-3 rounded-md hover:bg-[#C9364F]/90 transition-colors font-medium"
                  >
                    Request Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
