'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

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
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-[#0B1F3F] mb-6">Research Chemicals</h1>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-[#0B1F3F] mb-6">Research Chemicals</h1>
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            <p className="font-semibold">Error loading products</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6 bg-accent-red/10 border-2 border-accent-red/30 rounded-lg p-4">
          <p className="text-sm text-gray-900 font-semibold">
            <strong>WARNING: RESEARCH USE ONLY</strong> — All products are intended for research and development purposes only. 
            Not for human or veterinary use.
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0B1F3F] mb-2">Research Chemicals</h1>
          <p className="text-gray-600 text-lg mb-6">
            High-purity compounds for advanced research applications
          </p>
          
          <div className="max-w-md">
            <Input
              type="text"
              placeholder="Search by name or CAS number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full placeholder:text-sm md:placeholder:text-base"
            />
            {searchQuery && (
              <p className="text-sm text-gray-500 mt-2">
                {products.length} result{products.length !== 1 ? 's' : ''} found
              </p>
            )}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              No products available yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="h-full hover:border-gray-300 transition-colors cursor-pointer border-gray-200 bg-white">
                  {/* Desktop view with image */}
                  <CardHeader className="hidden md:block">
                    <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-md mb-4">
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
                    <CardTitle className="text-xl text-[#0B1F3F] break-words">{product.name}</CardTitle>
                  </CardHeader>
                  
                  {/* Mobile view without image */}
                  <CardHeader className="md:hidden pb-3">
                    <CardTitle className="text-sm text-[#0B1F3F] break-words leading-tight">{product.name}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Desktop view - full details */}
                    <div className="hidden md:block space-y-3">
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">CAS Number</span>
                        <div className="mt-1">
                          <span className="inline-flex items-center px-3 py-1 rounded-md bg-gray-100 border border-gray-200 text-[#0B1F3F] font-mono text-sm break-words">
                            {product.cas}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-700">MW:</span>
                        <span className="text-sm text-gray-600 font-mono">{product.mw}</span>
                      </div>
                      
                      {product.purity_options && product.purity_options.length > 0 && (
                        <div>
                          <span className="text-sm font-semibold text-gray-700">Purity:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {product.purity_options.map((purity, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-200"
                              >
                                {purity}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Mobile view - simple CAS only */}
                    <div className="md:hidden">
                      <div className="text-xs text-gray-500 mb-1">CAS: <span className="font-mono text-[#0B1F3F] break-words">{product.cas}</span></div>
                    </div>
                    
                    <div className="mt-3 md:mt-4 text-right">
                      <span className="text-xs md:text-sm text-[#C9364F] hover:underline">
                        View →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-[#0B1F3F] mb-6">Research Chemicals</h1>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsPageContent />
    </Suspense>
  );
}
