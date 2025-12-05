import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-[#0B1F3F] font-bold tracking-tighter text-2xl">VIRA</span>
          <span className="text-[#798996] font-bold tracking-tighter text-2xl">CHEM</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
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
      </div>
    </header>
  );
}
