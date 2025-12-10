import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm">
          <Link href="/products" className="text-[#798996] hover:text-[#0B1F3F] transition-colors">
            Products
          </Link>
          <Link href="/services" className="text-[#798996] hover:text-[#0B1F3F] transition-colors">
            Services
          </Link>
          <Link href="/quality" className="text-[#798996] hover:text-[#0B1F3F] transition-colors">
            Quality
          </Link>
          <Link href="/about" className="text-[#798996] hover:text-[#0B1F3F] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[#798996] hover:text-[#0B1F3F] transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="text-[#798996] hover:text-[#0B1F3F] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[#798996] hover:text-[#0B1F3F] transition-colors">
            Terms of Service
          </Link>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://www.instagram.com/virachemical/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#798996] hover:text-[#0B1F3F] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/virachemical"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#798996] hover:text-[#0B1F3F] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-[#798996] text-sm space-y-1">
          <p>© 2025 ViraChem j.d.o.o. All rights reserved.</p>
          <p className="text-xs">For research use only. Not for human or veterinary use.</p>
        </div>
      </div>
    </footer>
  );
}

