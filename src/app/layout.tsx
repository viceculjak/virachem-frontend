import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ViraChem | EU-Registered Research Chemical Distribution",
  description: "Licensed intermediation in fine chemicals and biochemicals for research institutions. Based in Split, Croatia. MBS: 060500406",
  keywords: "research chemicals, biochemicals, fine chemicals, laboratory supplies, EU, Croatia, research grade, peptides",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', sizes: '1563x1563', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased flex flex-col min-h-screen`}>
        {/* Header Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <Link href="/" className="flex items-center gap-3">
                <Image 
                  src="/logo.png" 
                  alt="ViraChem Logo" 
                  width={48} 
                  height={48}
                  className="w-12 h-12 object-contain"
                  priority
                />
                <div className="text-2xl font-bold hidden sm:block">
                  <span className="text-dark">VIRA</span>
                  <span className="text-text-secondary">CHEM</span>
                </div>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-gray-700 hover:text-accent-red transition-colors">
                  Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-accent-red transition-colors">
                  Products
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-accent-red transition-colors">
                  About
                </Link>
                <Link href="/quote" className="px-4 py-2 bg-accent-red text-white rounded-md hover:bg-accent-red/90 transition-colors">
                  Request Quote
                </Link>
              </div>

              {/* Mobile Menu Button - Simplified for now */}
              <div className="md:hidden">
                <Link href="/quote" className="px-4 py-2 bg-accent-red text-white rounded-md text-sm">
                  Quote
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
