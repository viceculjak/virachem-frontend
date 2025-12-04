'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/products');
    }
  };
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-bold text-accent-red mb-4">
            EDGE OF RESEARCH
          </p>
          
          <h1 className="text-xl md:text-2xl text-gray-700 mb-6">
            EU-Registered Research Chemical Distribution | Split, Croatia
          </h1>
          
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            Licensed intermediation in fine chemicals and biochemicals for research and development purposes. 
            Serving European research institutions with premium-grade compounds.
          </p>
          
          <p className="text-sm text-gray-500 mb-8">
            MBS: 060500406 | OIB: 73782597071 | Trgovački sud u Splitu
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Search catalog by name or CAS number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-6 text-lg border-2 border-gray-300 focus:border-accent-red"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-accent-red hover:bg-accent-red/90 text-white px-8 py-6 text-lg"
              >
                Search
              </Button>
            </div>
          </form>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button 
                size="lg" 
                variant="outline"
                className="border-dark text-dark hover:bg-dark/10 px-8 py-6 text-lg"
              >
                Browse All Products
              </Button>
            </Link>
            <Link href="/quote">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-dark text-dark hover:bg-dark/10 px-8 py-6 text-lg"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust Section */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-dark/20 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">🇪🇺</div>
                <h3 className="font-semibold text-dark mb-1">EU Registered</h3>
                <p className="text-sm text-gray-600">Croatian commercial court registration</p>
              </CardContent>
            </Card>
            <Card className="border-dark/20 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">⚖️</div>
                <h3 className="font-semibold text-dark mb-1">Licensed</h3>
                <p className="text-sm text-gray-600">Activity Code 46.19.0 certified</p>
              </CardContent>
            </Card>
            <Card className="border-dark/20 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-semibold text-dark mb-1">Research Grade</h3>
                <p className="text-sm text-gray-600">Purity ≥95% to ≥99% with CoA</p>
              </CardContent>
            </Card>
            <Card className="border-dark/20 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-semibold text-dark mb-1">International</h3>
                <p className="text-sm text-gray-600">Serving EU and worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-accent-teal/30">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4 text-accent-teal">🧪</div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  EU Compliance
                </h3>
                <p className="text-gray-600">
                  Registered with Trgovački sud u Splitu. Full compliance with Croatian and EU regulations 
                  for chemical distribution (REACH, CLP).
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent-gold/30">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4 text-accent-gold">🎯</div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Research Grade Quality
                </h3>
                <p className="text-gray-600">
                  High-purity compounds (≥95% to ≥99%) with comprehensive analytical data including 
                  CoA and MSDS documentation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent-red/30">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4 text-accent-red">🌐</div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Expert Support
                </h3>
                <p className="text-gray-600">
                  Technical guidance on product specifications, handling procedures, and compliance 
                  for international research institutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Target Market */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="bg-dark/5 border border-dark/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-dark text-center mb-6">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-dark mb-3">Research Institutions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">✓</span>
                    <span>Universities & academic research laboratories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">✓</span>
                    <span>Government research facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">✓</span>
                    <span>Non-profit research organizations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-3">Industry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold mt-1">✓</span>
                    <span>Pharmaceutical R&D departments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold mt-1">✓</span>
                    <span>Biotechnology companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold mt-1">✓</span>
                    <span>Contract research organizations (CROs)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
