'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  PRICING_TIERS, 
  calculatePricePerUnit, 
  calculateTotalPrice,
  getTierForQuantity,
  calculateSavingsPercentage
} from '@/lib/pricing';

type Product = {
  id: string;
  name: string;
  cas: string;
  smiles: string;
  mw: string;
  purity_options: string[];
  image_url: string;
  created_at: string;
  cost_per_vial: number;
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number | ''>(1);

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
        <div className="container mx-auto datasheet-max">
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto datasheet-max">
          <Link href="/products" className="text-[#C9364F] hover:underline text-sm">
            ← Back to Catalog
          </Link>
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            <p className="font-semibold">Error loading product</p>
            <p className="text-sm mt-1">{error || 'Product not found'}</p>
          </div>
        </div>
      </div>
    );
  }

  const effectiveQuantity = quantity === '' ? 1 : quantity;
  const currentTier = getTierForQuantity(effectiveQuantity);
  const pricePerUnit = calculatePricePerUnit(product.cost_per_vial, effectiveQuantity);
  const totalPrice = calculateTotalPrice(product.cost_per_vial, effectiveQuantity);
  const savings = calculateSavingsPercentage(product.cost_per_vial, effectiveQuantity);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto datasheet-max">
        <Link href="/products" className="text-[#C9364F] hover:underline text-sm inline-block mb-6">
          ← Back to Catalog
        </Link>

        <div className="mb-6 bg-accent-red/10 border-2 border-accent-red/30 rounded-lg p-4">
          <p className="text-sm text-gray-900 font-semibold">
            <strong>WARNING: RESEARCH USE ONLY</strong> — This product is intended for research purposes only. 
            Not for human or veterinary use.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#0B1F3F] mb-2">{product.name}</h1>
            <p className="text-gray-500">Research Grade Chemical</p>
          </div>

          {product.image_url && (
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded-md">
                  <img
                    src={product.image_url}
                    alt={`Structure of ${product.name}`}
                    className="max-w-full max-h-full object-contain p-6"
                  />
                </div>
                {product.smiles && (
                  <>
                    {/* Desktop - always show SMILES */}
                    <div className="hidden md:block mt-4 p-3 bg-gray-100 rounded">
                      <p className="text-xs font-semibold text-gray-700 mb-1">SMILES:</p>
                      <p className="text-sm font-mono text-gray-800 break-words">{product.smiles}</p>
                    </div>
                    
                    {/* Mobile - show SMILES button */}
                    <div className="md:hidden mt-4">
                      <details className="group">
                        <summary className="cursor-pointer list-none">
                          <div className="p-3 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                            <p className="text-xs font-semibold text-gray-700">
                              Show SMILES <span className="group-open:rotate-180 inline-block transition-transform">▼</span>
                            </p>
                          </div>
                        </summary>
                        <div className="mt-2 p-3 bg-gray-100 rounded">
                          <p className="text-sm font-mono text-gray-800 break-words">{product.smiles}</p>
                        </div>
                      </details>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {/* Pricing Section */}
          {product.cost_per_vial && (
            <Card className="shadow-md border-2 border-[#C9364F]/20">
              <CardHeader>
                <CardTitle className="text-2xl">Pricing & Order</CardTitle>
                <CardDescription>Volume-based pricing for research use. Prices decrease with higher quantities.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pricing Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left p-3 font-semibold text-dark">Quantity</th>
                        <th className="text-center p-3 font-semibold text-dark">Price/Unit</th>
                        <th className="text-center p-3 font-semibold text-dark">Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRICING_TIERS.map((tier) => {
                        const tierPricePerUnit = product.cost_per_vial / tier.margin;
                        const tierSavings = tier.min === 1 ? 0 : calculateSavingsPercentage(product.cost_per_vial, tier.min);
                        const isSelected = currentTier?.label === tier.label;
                        const isBestValue = tier.label === '500+';
                        
                        return (
                          <tr 
                            key={tier.label} 
                            className={`border-b border-gray-200 transition-colors ${
                              isSelected ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
                            } ${isBestValue ? 'bg-green-50' : ''}`}
                          >
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{tier.label} units</span>
                                {isBestValue && (
                                  <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full font-semibold">
                                    Best Value
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="p-3 text-center font-semibold text-[#C9364F]">
                              €{tierPricePerUnit.toFixed(2)}
                            </td>
                            <td className="p-3 text-center">
                              {tierSavings > 0 ? (
                                <span className="text-green-600 font-semibold">
                                  {tierSavings}% off
                                </span>
                              ) : (
                                <span className="text-gray-400">—</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Quantity Selector and Price Display */}
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-base font-semibold">
                      Select Quantity (units)
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === '') {
                          setQuantity('');
                        } else {
                          const num = parseInt(val);
                          if (!isNaN(num) && num > 0) {
                            setQuantity(num);
                          }
                        }
                      }}
                      className="text-lg font-semibold"
                    />
                    <p className="text-xs text-gray-500">
                      Current tier: <span className="font-semibold text-gray-700">{currentTier?.label}</span>
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Your Price</p>
                    <p className="text-3xl font-bold text-[#0B1F3F] mb-2">
                      €{pricePerUnit.toFixed(2)}
                      <span className="text-base font-normal text-gray-600"> / unit</span>
                    </p>
                    <div className="flex justify-between items-center pt-3 border-t border-blue-200">
                      <span className="text-sm text-gray-600">Total for {effectiveQuantity} units:</span>
                      <span className="text-xl font-bold text-[#C9364F]">€{totalPrice.toFixed(2)}</span>
                    </div>
                    {savings > 0 && (
                      <p className="text-xs text-green-600 font-semibold mt-2">
                        You save {savings}% vs small quantity pricing
                      </p>
                    )}
                  </div>
                </div>

                {/* Request Quote Button */}
                <Link 
                  href={`/quote?product_id=${product.id}&quantity=${effectiveQuantity}&price=${pricePerUnit.toFixed(2)}&total=${totalPrice.toFixed(2)}&tier=${currentTier?.label || '1-5'}`}
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-[#C9364F] hover:bg-[#C9364F]/90 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Request Quote for {effectiveQuantity} Unit{effectiveQuantity !== 1 ? 's' : ''} →
                  </Button>
                </Link>

                {/* Pricing Disclaimer */}
                <p className="text-xs text-gray-500 italic text-center pt-2">
                  Prices shown are estimates. Final pricing will be confirmed in your quote response.
                </p>
              </CardContent>
            </Card>
          )}

          <Card className="shadow-md">
            <CardContent className="pt-6">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview" className="text-xs md:text-sm">Overview</TabsTrigger>
                  <TabsTrigger value="specifications" className="text-xs md:text-sm">Specs</TabsTrigger>
                  <TabsTrigger value="documentation" className="text-xs md:text-sm">Docs</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="text-xs font-semibold text-gray-600 mb-1">CAS Number</p>
                      <p className="text-base font-mono text-[#0B1F3F]">{product.cas}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="text-xs font-semibold text-gray-600 mb-1">Molecular Weight</p>
                      <p className="text-base font-mono text-[#0B1F3F]">{product.mw}</p>
                    </div>
                  </div>

                  {product.purity_options && product.purity_options.length > 0 && (
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Available Purities</p>
                      <div className="flex flex-wrap gap-2">
                        {product.purity_options.map((purity, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-white text-gray-700 px-3 py-1 rounded border border-gray-200"
                          >
                            {purity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-3 bg-gray-50 rounded">
                    <p className="text-sm font-semibold text-[#0B1F3F] mb-2">Key Features</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• HPLC-MS verified purity ≥95–99%</li>
                      <li>• GMP-aligned manufacturing facility</li>
                      <li>• Custom batch production available</li>
                      <li>• Full analytical documentation included</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="space-y-4 mt-6">
                  <div className="border rounded overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody className="divide-y">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-700">Purity</td>
                          <td className="px-4 py-3 text-gray-900">≥95–99% (HPLC-MS verified)</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-700">Vial Formats</td>
                          <td className="px-4 py-3 text-gray-900">1 mL, 2 mL, 5 mL, 10 mL, or custom</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-700">Container Type</td>
                          <td className="px-4 py-3 text-gray-900">Type I borosilicate glass</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-700">Sealing</td>
                          <td className="px-4 py-3 text-gray-900">Rubber stopper + aluminum crimp (inert atmosphere)</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-700">Storage</td>
                          <td className="px-4 py-3 text-gray-900">–20°C, desiccated, light-protected</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-700">Batch Scale</td>
                          <td className="px-4 py-3 text-gray-900">Milligram to multi-gram quantities</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="documentation" className="space-y-3 mt-6">
                  <div className="p-4 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                    <p className="font-semibold text-[#0B1F3F] mb-1">Certificate of Analysis (COA)</p>
                    <p className="text-sm text-gray-600">Complete analytical data including HPLC and MS results</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                    <p className="font-semibold text-[#0B1F3F] mb-1">HPLC Chromatogram</p>
                    <p className="text-sm text-gray-600">Detailed purity analysis with retention times</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                    <p className="font-semibold text-[#0B1F3F] mb-1">Mass Spectrometry Data</p>
                    <p className="text-sm text-gray-600">Molecular weight confirmation and validation</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                    <p className="font-semibold text-[#0B1F3F] mb-1">Material Safety Data Sheet (MSDS)</p>
                    <p className="text-sm text-gray-600">Safety information and handling protocols</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
