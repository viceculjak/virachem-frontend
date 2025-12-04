import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6 tracking-tight">
            Virachem
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            High-purity research chemicals for advanced laboratories
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Premium quality compounds with comprehensive analytical data. 
            Trusted by research institutions worldwide for cutting-edge scientific discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              >
                Browse Catalog
              </Button>
            </Link>
            <Link href="/quote">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-dark mb-2">
              Research Grade
            </h3>
            <p className="text-gray-600">
              Purity levels from ≥95% to ≥99% with full analytical documentation
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-dark mb-2">
              Fast Turnaround
            </h3>
            <p className="text-gray-600">
              Quick quote response and reliable shipping for your research needs
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-dark mb-2">
              Custom Solutions
            </h3>
            <p className="text-gray-600">
              Flexible quantities and custom synthesis for specialized projects
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
