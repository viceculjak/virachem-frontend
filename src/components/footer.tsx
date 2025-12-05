import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">ViraChem j.d.o.o.</h3>
            <p className="text-gray-300 mb-2">
              Contract Manufacturing Intermediation | GMP-Aligned Peptide Synthesis
            </p>
            <p className="text-gray-400 text-sm mb-4">
              B2B intermediary for contract-manufactured research peptides and fine chemicals through Poland-based, 
              GMP-aligned synthesis facilities. Providing HPLC-MS verified compounds with full analytical documentation 
              and traceable manufacturing for academic and industrial laboratories.
            </p>
            <div className="space-y-1 text-sm text-gray-300">
              <p><strong>Address:</strong> Pujanke 24A, 21000 Split, Croatia</p>
              <p><strong>Court:</strong> Trgovački sud u Splitu</p>
              <p><strong>MBS:</strong> 060500406</p>
              <p><strong>OIB:</strong> 73782597071</p>
              <p><strong>EUID:</strong> HRSR.060500406</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/products" className="hover:text-accent-red transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-accent-red transition-colors">
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/privacy" className="hover:text-accent-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent-red transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-400">
              <p><strong>Contact:</strong></p>
              <p>info@virachem.com</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-4">
            <p className="text-sm text-gray-200">
              <strong className="text-accent-red">WARNING: Research Use Only</strong> — All products are intended for research and development purposes only. 
              Not for human or veterinary use. ViraChem operates in full compliance with Croatian and EU regulations 
              for the distribution of fine chemicals (Activity Code: 46.19.0).
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 ViraChem j.d.o.o. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Registered in Croatia | EU Member State
          </p>
        </div>
      </div>
    </footer>
  );
}
