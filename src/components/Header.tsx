'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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
      if (e.key === 'Escape') {
        closeMenu();
        setIsServicesOpen(false);
      }
    };
    if (isOpen || isServicesOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, isServicesOpen]);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen]);

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
          
          {/* Services Dropdown */}
          <div 
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors flex items-center gap-1"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-[#0B1F3F] hover:bg-gray-50 hover:text-[#C9364F] transition-colors"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/services/model-0"
                    className="block px-4 py-2 text-sm text-[#0B1F3F] hover:bg-gray-50 hover:text-[#C9364F] transition-colors"
                  >
                    Model 0 - Research API Access
                  </Link>
                  <Link
                    href="/services/model-1"
                    className="block px-4 py-2 text-sm text-[#0B1F3F] hover:bg-gray-50 hover:text-[#C9364F] transition-colors"
                  >
                    Model 1 - Finished RUO Formats
                  </Link>
                  <Link
                    href="/services/model-2"
                    className="block px-4 py-2 text-sm text-[#0B1F3F] hover:bg-gray-50 hover:text-[#C9364F] transition-colors"
                  >
                    Model 2 - Custom Manufacturing
                  </Link>
                  <Link
                    href="/services/model-3"
                    className="block px-4 py-2 text-sm text-[#0B1F3F] hover:bg-gray-50 hover:text-[#C9364F] transition-colors"
                  >
                    Model 3 - Fill & Finish Service
                  </Link>
                  <Link
                    href="/services/model-4"
                    className="block px-4 py-2 text-sm text-[#0B1F3F] hover:bg-gray-50 hover:text-[#C9364F] transition-colors"
                  >
                    Model 4 - Cosmetic White-Label Formats
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
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
                    <div className="border-b border-gray-100">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-[#0B1F3F] hover:text-[#C9364F] transition-colors text-lg py-2 w-full flex items-center justify-between"
                      >
                        Services
                        <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 pb-2 space-y-2"
                          >
                            <Link
                              href="/services"
                              onClick={closeMenu}
                              className="text-[#798996] hover:text-[#C9364F] transition-colors text-base py-1 block"
                            >
                              Overview
                            </Link>
                            <Link
                              href="/services/model-0"
                              onClick={closeMenu}
                              className="text-[#798996] hover:text-[#C9364F] transition-colors text-base py-1 block"
                            >
                              Model 0 - Research API Access
                            </Link>
                            <Link
                              href="/services/model-1"
                              onClick={closeMenu}
                              className="text-[#798996] hover:text-[#C9364F] transition-colors text-base py-1 block"
                            >
                              Model 1 - Finished RUO Formats
                            </Link>
                            <Link
                              href="/services/model-2"
                              onClick={closeMenu}
                              className="text-[#798996] hover:text-[#C9364F] transition-colors text-base py-1 block"
                            >
                              Model 2 - Custom Manufacturing
                            </Link>
                            <Link
                              href="/services/model-3"
                              onClick={closeMenu}
                              className="text-[#798996] hover:text-[#C9364F] transition-colors text-base py-1 block"
                            >
                              Model 3 - Fill & Finish Service
                            </Link>
                            <Link
                              href="/services/model-4"
                              onClick={closeMenu}
                              className="text-[#798996] hover:text-[#C9364F] transition-colors text-base py-1 block"
                            >
                              Model 4 - Cosmetic White-Label Formats
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
