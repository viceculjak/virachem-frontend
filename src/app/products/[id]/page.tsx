'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FadeIn } from '@/components/animations/FadeIn';
import { CopyButton } from '@/components/product/CopyButton';
import { PurityBadge } from '@/components/product/PurityBadge';
import { CertificationBadges } from '@/components/trust/CertificationBadges';

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
      <div className="container mx-auto max-w-6xl">
        <FadeIn direction="right">
          <Link href="/products">
            <Button variant="ghost" className="mb-6 hover-lift">
              ← Back to Products
            </Button>
          </Link>
        </FadeIn>

        {/* Research Use Only Disclaimer */}
        <FadeIn direction="down" delay={0.1}>
          <div className="mb-6 bg-accent-red/10 border-2 border-accent-red/30 rounded-lg p-4">
            <p className="text-sm text-gray-900 font-semibold">
              <strong>WARNING: RESEARCH USE ONLY</strong> — This product is intended for research and development purposes only. 
              Not for human or veterinary use. Proper laboratory safety protocols must be followed.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Structure and Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <FadeIn direction="left" delay={0.2}>
              <Card className="sticky top-8 hover-lift">
                <CardHeader>
                  <CardTitle>Chemical Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-md">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={`Structure of ${product.name}`}
                        className="max-w-full max-h-full object-contain p-6"
                      />
                    ) : (
                      <div className="text-gray-400">No structure image available</div>
                    )}
                  </div>
                  {product.smiles && (
                    <div className="mt-4 p-3 bg-gray-100 rounded group hover:bg-gray-200 transition-colors">
                      <div className="flex items-start justify-between">
                        <p className="text-xs font-semibold text-gray-700 mb-1">SMILES:</p>
                        <CopyButton text={product.smiles} label="Copy SMILES" />
                      </div>
                      <p className="text-sm font-mono text-gray-800 break-all">{product.smiles}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <Card className="bg-gradient-to-br from-accent-red/5 to-accent-red/10 border-accent-red/20 hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-dark mb-3">Request a Custom Quote</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Get pricing and availability for {product.name}. Our team will respond with detailed 
                    information including analytical data, shipping options, and bulk pricing.
                  </p>
                  <Link href={`/quote?product_id=${product.id}`}>
                    <Button className="w-full bg-accent-red hover:bg-accent-red/90 text-white hover:scale-105 transition-all duration-300" size="lg">
                      Request Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Main Content - Product Details with Tabs */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn direction="up" delay={0.2}>
              <div>
                <h1 className="text-4xl font-bold text-dark mb-2 gradient-text">{product.name}</h1>
                <p className="text-gray-500 text-lg">Research Grade Chemical</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="specifications">Specifications</TabsTrigger>
                      <TabsTrigger value="documentation">Documentation</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6 mt-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold text-gray-600 mb-1">CAS Number</p>
                              <CopyButton text={product.cas} label="Copy CAS" />
                            </div>
                            <p className="text-lg font-mono text-gray-900">{product.cas}</p>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm font-semibold text-gray-600 mb-1">Molecular Weight</p>
                            <p className="text-lg font-mono text-gray-900">{product.mw}</p>
                          </div>
                        </div>

                        {product.purity_options && product.purity_options.length > 0 && (
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm font-semibold text-gray-600 mb-3">Available Purities</p>
                            <div className="flex flex-wrap gap-2">
                              {product.purity_options.map((purity, idx) => (
                                <PurityBadge key={idx} purity={purity} />
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="p-4 bg-gradient-to-br from-accent-teal/5 to-accent-teal/10 border border-accent-teal/20 rounded-lg">
                          <h3 className="font-semibold text-dark mb-3">Key Features</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-accent-teal mt-1">•</span>
                              <span>HPLC-MS verified purity ≥95–99%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-teal mt-1">•</span>
                              <span>GMP-aligned manufacturing facility</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-teal mt-1">•</span>
                              <span>Custom batch production available</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent-teal mt-1">•</span>
                              <span>Full analytical documentation included</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="specifications" className="space-y-6 mt-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-dark">Product Specifications</h3>
                        <div className="border rounded-lg overflow-hidden">
                          <table className="w-full">
                            <tbody className="divide-y">
                              <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-semibold text-gray-700">Purity</td>
                                <td className="px-4 py-3 text-gray-900">≥95–99% (HPLC-MS verified)</td>
                              </tr>
                              <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-semibold text-gray-700">Vial Formats</td>
                                <td className="px-4 py-3 text-gray-900">1 mL, 2 mL, 5 mL, 10 mL, or custom</td>
                              </tr>
                              <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-semibold text-gray-700">Container Type</td>
                                <td className="px-4 py-3 text-gray-900">Type I borosilicate glass</td>
                              </tr>
                              <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-semibold text-gray-700">Sealing</td>
                                <td className="px-4 py-3 text-gray-900">Rubber stopper + aluminum crimp (inert atmosphere)</td>
                              </tr>
                              <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-semibold text-gray-700">Storage</td>
                                <td className="px-4 py-3 text-gray-900">–20°C, desiccated, light-protected</td>
                              </tr>
                              <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-semibold text-gray-700">Batch Scale</td>
                                <td className="px-4 py-3 text-gray-900">Milligram to multi-gram quantities</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="documentation" className="space-y-6 mt-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-dark">Included Documentation</h3>
                        <div className="grid gap-4">
                          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                            <h4 className="font-semibold text-dark mb-2">Certificate of Analysis (COA)</h4>
                            <p className="text-sm text-gray-600">Complete analytical data including HPLC and MS results for batch verification</p>
                          </div>
                          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                            <h4 className="font-semibold text-dark mb-2">HPLC Chromatogram</h4>
                            <p className="text-sm text-gray-600">Detailed purity analysis with retention times and peak integration</p>
                          </div>
                          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                            <h4 className="font-semibold text-dark mb-2">Mass Spectrometry Data</h4>
                            <p className="text-sm text-gray-600">Molecular weight confirmation and structural validation</p>
                          </div>
                          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                            <h4 className="font-semibold text-dark mb-2">Material Safety Data Sheet (MSDS)</h4>
                            <p className="text-sm text-gray-600">Safety information and handling protocols</p>
                          </div>
                          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                            <h4 className="font-semibold text-dark mb-2">Batch Records</h4>
                            <p className="text-sm text-gray-600">Complete traceability from synthesis through packaging</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-4">Quality Certifications</h3>
                <CertificationBadges />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

