import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 text-center bg-white">
      <div className="container mx-auto px-4 text-[#798996] text-sm space-y-3">
        <p>ViraChem j.d.o.o. | Pujanke 24A, 21000 Split, Croatia</p>
        <p>info@virachemical.com</p>
        <p>MBS: 060500406 | OIB: 73782597071 | EU-Registered Intermediary</p>
        
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#798996] hover:text-[#0B1F3F] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#798996] hover:text-[#0B1F3F] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vice-culjak/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#798996] hover:text-[#0B1F3F] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <p className="mt-2">© 2025 ViraChem. For research use only.</p>
      </div>
    </footer>
  );
}
