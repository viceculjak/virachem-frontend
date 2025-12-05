'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';

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
    <main className="min-h-screen bg-background relative">
      {/* Hero Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none" style={{ background: 'var(--gradient-hero)' }}></div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline */}
          <FadeIn direction="down" delay={0.1}>
            <p className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              EDGE OF RESEARCH
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-xl md:text-2xl text-gray-700 mb-6">
              Contract Manufacturing Intermediation | GMP-Aligned Peptide Synthesis | EU-Registered
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
              ViraChem j.d.o.o. facilitates B2B access to contract-manufactured research peptides and fine chemicals through our Poland-based, GMP-aligned synthesis partner. We provide HPLC-MS verified compounds (≥95–99% purity) with flexible formulation options, full analytical documentation (COA, HPLC, MS), and EU-compliant intermediation for academic and industrial laboratories.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <p className="text-sm text-gray-500 mb-8">
              MBS: 060500406 | OIB: 73782597071 | Trgovački sud u Splitu
            </p>
          </FadeIn>

          {/* Search Bar */}
          <FadeIn direction="up" delay={0.5}>
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder="Search catalog by name or CAS number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-6 py-6 text-lg border-2 border-gray-300 focus:border-accent-red transition-all duration-300"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-accent-red hover:bg-accent-red/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Search
                </Button>
              </div>
            </form>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-dark text-dark hover:bg-dark/10 px-8 py-6 text-lg hover-lift"
                >
                  Browse All Products
                </Button>
              </Link>
              <Link href="/quote">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-dark text-dark hover:bg-dark/10 px-8 py-6 text-lg hover-lift"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Trust Section */}
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-5xl mx-auto mt-20">
            <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-4 gap-6">
              <Card className="border-dark/20 text-center glass-card hover-lift">
                <CardContent className="pt-6">
                  <div className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-dark bg-dark/10 rounded">EU</div>
                  <h3 className="font-semibold text-dark mb-1">EU Registered</h3>
                  <p className="text-sm text-gray-600">Croatian commercial court registration</p>
                </CardContent>
              </Card>
              <Card className="border-dark/20 text-center glass-card hover-lift">
                <CardContent className="pt-6">
                  <div className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-dark bg-dark/10 rounded">LICENSED</div>
                  <h3 className="font-semibold text-dark mb-1">Licensed</h3>
                  <p className="text-sm text-gray-600">Activity Code 46.19.0 certified</p>
                </CardContent>
              </Card>
              <Card className="border-dark/20 text-center glass-card hover-lift">
                <CardContent className="pt-6">
                  <div className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-accent-teal bg-accent-teal/10 rounded">RESEARCH</div>
                  <h3 className="font-semibold text-dark mb-1">Research Grade</h3>
                  <p className="text-sm text-gray-600">Purity ≥95% to ≥99% with CoA</p>
                </CardContent>
              </Card>
              <Card className="border-dark/20 text-center glass-card hover-lift">
                <CardContent className="pt-6">
                  <div className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-dark bg-dark/10 rounded">GLOBAL</div>
                  <h3 className="font-semibold text-dark mb-1">International</h3>
                  <p className="text-sm text-gray-600">Serving EU and worldwide</p>
                </CardContent>
              </Card>
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Services Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-dark text-center mb-12">Our Services</h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
            <Card className="border-accent-teal/30 border-l-4 border-l-accent-teal hover-lift transition-all duration-300 hover:card-glow-teal">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-dark mb-3">
                  GMP-Aligned Manufacturing
                </h3>
                <p className="text-gray-600">
                  Contract synthesis through Poland-based, GMP-aligned facility specializing in peptide production, 
                  lyophilization, and sterile vialing under inert atmosphere. EU-compliant intermediation registered 
                  with Trgovački sud u Splitu (MBS: 060500406).
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent-gold/30 border-l-4 border-l-accent-gold hover-lift transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,179,65,0.15)]">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Analytical Documentation & Traceability
                </h3>
                <p className="text-gray-600">
                  Full analytical documentation including COA, HPLC-MS verification, batch records, and MSDS. 
                  All compounds packaged in Type I borosilicate glass vials with complete traceability from 
                  synthesis through delivery.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent-red/30 border-l-4 border-l-accent-red hover-lift transition-all duration-300 hover:card-glow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Custom Formulation & Batch Scalability
                </h3>
                <p className="text-gray-600">
                  Flexible vial formats (1 mL, 2 mL, 5 mL, 10 mL, or client-specified) with batch production 
                  scalable from milligram to multi-gram quantities. Custom formulation options with rubber 
                  stopper and aluminum crimp seals.
                </p>
              </CardContent>
            </Card>
          </StaggerContainer>
        </div>

        {/* Target Market */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="bg-dark/5 border border-dark/20 rounded-lg p-8 hover-lift">
              <h2 className="text-2xl font-bold text-dark text-center mb-6">Who We Serve</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-3">Research Institutions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-teal mt-1">•</span>
                      <span>Universities & academic research laboratories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-teal mt-1">•</span>
                      <span>Government research facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-teal mt-1">•</span>
                      <span>Non-profit research organizations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-3">Industry</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>Pharmaceutical R&D departments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>Biotechnology companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>Contract research organizations (CROs)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
