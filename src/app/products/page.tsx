'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { PurityBadge } from '@/components/product/PurityBadge';
import { CopyButton } from '@/components/product/CopyButton';

type Product = {
  id: string;
  name: string;
  cas: string;
  mw: string;
  purity_options: string[];
  image_url: string;
};

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get('search') || '';
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(urlSearch);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let query = supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: true });

        // If there's a search query, filter by name or CAS number
        if (searchQuery.trim()) {
          query = query.or(`name.ilike.%${searchQuery}%,cas.ilike.%${searchQuery}%`);
        }

        const { data, error } = await query;

        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-dark mb-6">Research Chemicals</h1>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-dark mb-6">Research Chemicals</h1>
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            <p className="font-semibold">Error loading products</p>
            <p className="text-sm mt-1">{error}</p>
            <p className="text-sm mt-2">
              Please ensure you have configured your Supabase credentials in .env.local
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        {/* Research Use Only Disclaimer */}
        <FadeIn direction="down" delay={0.1}>
          <div className="mb-6 bg-accent-red/10 border-2 border-accent-red/30 rounded-lg p-4">
            <p className="text-sm text-gray-900 font-semibold">
              <strong>WARNING: RESEARCH USE ONLY</strong> — All products are intended for research and development purposes only. 
              Not for human or veterinary use. By accessing this catalog, you confirm you are a qualified research professional.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4 hover-lift">
                ← Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-dark mb-2">Research Chemicals</h1>
            <p className="text-gray-600 text-lg mb-6">
              High-purity compounds for advanced research applications
            </p>
            
            {/* Search Input */}
            <div className="max-w-md">
              <Input
                type="text"
                placeholder="Search by name or CAS number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full transition-all duration-300 focus:shadow-md"
              />
              {searchQuery && (
                <p className="text-sm text-gray-500 mt-2">
                  {products.length} result{products.length !== 1 ? 's' : ''} found
                </p>
              )}
            </div>
          </div>
        </FadeIn>

        {products.length === 0 ? (
          <FadeIn direction="up">
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                No products available yet.
              </p>
              <p className="text-gray-500 text-sm">
                Please run the database-schema.sql file in your Supabase SQL editor to add sample products.
              </p>
            </div>
          </FadeIn>
        ) : (
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border-gray-200 hover-lift group overflow-hidden relative">
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-red/0 via-accent-teal/0 to-accent-gold/0 group-hover:from-accent-red/10 group-hover:via-accent-teal/10 group-hover:to-accent-gold/10 transition-all duration-500 pointer-events-none"></div>
                  
                  <CardHeader className="relative">
                    <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-md mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain p-4"
                        />
                      ) : (
                        <div className="text-gray-400 text-sm">No structure available</div>
                      )}
                    </div>
                    <CardTitle className="text-xl text-dark group-hover:gradient-text transition-all duration-300">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-3">
                      {/* CAS Number Badge */}
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">CAS Number</span>
                        <div className="mt-1 flex items-center gap-1">
                          <span className="inline-flex items-center px-3 py-1 rounded-md bg-accent-gold/20 border border-accent-gold/40 text-dark font-mono text-sm">
                            {product.cas}
                          </span>
                          <CopyButton text={product.cas} label="Copy CAS" />
                        </div>
                      </div>
                      
                      {/* Molecular Weight */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-700">Molecular Weight:</span>
                        <span className="text-sm text-gray-600 font-mono">{product.mw}</span>
                      </div>
                      
                      {/* Purity Options */}
                      {product.purity_options && product.purity_options.length > 0 && (
                        <div>
                          <span className="text-sm font-semibold text-gray-700">Available Purity:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {product.purity_options.map((purity, idx) => (
                              <PurityBadge key={idx} purity={purity} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="relative">
                    <Button className="w-full bg-accent-red hover:bg-accent-red/90 text-white transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </StaggerContainer>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-dark mb-6">Research Chemicals</h1>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsPageContent />
    </Suspense>
  );
}

