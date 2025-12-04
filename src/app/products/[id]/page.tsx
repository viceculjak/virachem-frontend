'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Product = {
  id: string;
  name: string;
  cas: string;
  smiles: string;
  mw: string;
  purity_options: string[];
  image_url: string;
  created_at: string;
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', productId)
          .single();

        if (error) throw error;
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    }

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto">
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto">
          <Link href="/products">
            <Button variant="ghost" className="mb-4">
              ← Back to Products
            </Button>
          </Link>
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            <p className="font-semibold">Error loading product</p>
            <p className="text-sm mt-1">{error || 'Product not found'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-5xl">
        <Link href="/products">
          <Button variant="ghost" className="mb-6">
            ← Back to Products
          </Button>
        </Link>

        {/* Research Use Only Disclaimer */}
        <div className="mb-6 bg-accent-red/10 border-2 border-accent-red/30 rounded-lg p-4">
          <p className="text-sm text-gray-900 font-semibold">
            <strong>WARNING: RESEARCH USE ONLY</strong> — This product is intended for research and development purposes only. 
            Not for human or veterinary use. Proper laboratory safety protocols must be followed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Structure Image */}
          <Card>
            <CardHeader>
              <CardTitle>Chemical Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 flex items-center justify-center bg-gray-50 rounded-md">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={`Structure of ${product.name}`}
                    className="max-w-full max-h-full object-contain p-8"
                  />
                ) : (
                  <div className="text-gray-400">No structure image available</div>
                )}
              </div>
              {product.smiles && (
                <div className="mt-4 p-3 bg-gray-100 rounded">
                  <p className="text-xs font-semibold text-gray-700 mb-1">SMILES:</p>
                  <p className="text-sm font-mono text-gray-800 break-all">{product.smiles}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-dark mb-2">{product.name}</h1>
              <p className="text-gray-500">Research Grade Chemical</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold text-gray-700">CAS Number:</span>
                  <span className="font-mono text-gray-900">{product.cas}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold text-gray-700">Molecular Weight:</span>
                  <span className="text-gray-900">{product.mw}</span>
                </div>
                {product.purity_options && product.purity_options.length > 0 && (
                  <div className="py-2">
                    <p className="font-semibold text-gray-700 mb-2">Available Purities:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.purity_options.map((purity, idx) => (
                        <span
                          key={idx}
                          className="bg-accent-teal/20 text-accent-teal px-3 py-1 rounded font-medium border border-accent-teal/30"
                        >
                          {purity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-accent-red/5 border-accent-red/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-dark mb-3">Request a Custom Quote</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get pricing and availability for {product.name}. Our team will respond with detailed 
                  information including analytical data, shipping options, and bulk pricing.
                </p>
                <Link href={`/quote?product_id=${product.id}`}>
                  <Button className="w-full bg-accent-red hover:bg-accent-red/90 text-white" size="lg">
                    Request Quote for {product.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Product Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>High purity with comprehensive analytical data (NMR, HPLC, MS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Available in multiple vial sizes for flexibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Proper storage and handling documentation included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Fast turnaround and secure shipping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

