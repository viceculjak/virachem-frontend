'use client';

import { useState, useEffect, Suspense } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { FadeIn } from '@/components/animations/FadeIn';

type Product = {
  id: string;
  name: string;
  cas: string;
  mw: string;
  purity_options: string[];
};

function QuotePageContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product_id');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    quantity: '',
    vial_size: '',
    purity: '',
    formulation_requirements: '',
    message: '',
    product_id: productId || '',
  });

  const [product, setProduct] = useState<Product | null>(null);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch product details if product_id is provided
  useEffect(() => {
    async function fetchProduct() {
      if (!productId) return;
      
      setLoadingProduct(true);
      try {
        const { data, error } = await supabase
          .from('products')
          .select('id, name, cas, mw, purity_options')
          .eq('id', productId)
          .single();

        if (error) throw error;
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoadingProduct(false);
      }
    }

    fetchProduct();
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      toast.loading('Submitting your quote request...', { id: 'quote-submit' });
      
      const { error: submitError } = await supabase.from('quote_requests').insert([
        {
          ...formData,
          quantity: parseInt(formData.quantity),
        },
      ]);

      if (submitError) throw submitError;

      toast.success('Quote request submitted successfully! We\'ll contact you within 24-48 hours.', { id: 'quote-submit', duration: 5000 });
      setSubmitted(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit quote request';
      setError(errorMessage);
      toast.error(errorMessage, { id: 'quote-submit' });
      console.error('Error submitting quote:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-accent-teal/20">
            <CardHeader>
              <CardTitle className="text-2xl text-accent-teal">Quote Request Submitted!</CardTitle>
              <CardDescription>
                Thank you for your interest in Virachem research chemicals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We have received your quote request and will contact you at{' '}
                <span className="font-semibold break-all">{formData.email}</span> within 24-48 hours.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Our team will provide you with detailed pricing, availability, and shipping information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="flex-1">
                  <Button variant="outline" className="w-full">Browse More Products</Button>
                </Link>
                <Link href="/" className="flex-1">
                  <Button className="w-full">Return to Home</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-2xl">
        <Link href="/products">
          <Button variant="ghost" className="mb-4">
            ← Back to Products
          </Button>
        </Link>

        {/* Product Information Banner */}
        {product && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-dark mb-2 break-words">
                    Requesting Quote for: {product.name}
                  </h2>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="break-all"><span className="font-medium">CAS:</span> {product.cas}</p>
                    <p className="break-words"><span className="font-medium">Molecular Weight:</span> {product.mw}</p>
                    {product.purity_options && product.purity_options.length > 0 && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-medium">Available Purities:</span>
                        <div className="flex flex-wrap gap-1">
                          {product.purity_options.map((purity, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-accent-teal/20 text-accent-teal px-2 py-0.5 rounded border border-accent-teal/30"
                            >
                              {purity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <Link href={`/products/${product.id}`}>
                  <Button variant="ghost" size="sm">
                    View Details →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-dark">Request a Quote</CardTitle>
            <CardDescription>
              GMP-aligned contract manufacturing with flexible formulation options. Our Poland-based synthesis facility 
              provides custom peptide production with HPLC-MS verification. Specify your requirements below for batch 
              production from milligram to multi-gram scale.
              <br /><br />
              <span className="text-sm break-all">Prefer email? Send your requirements directly to: <strong>quotes@virachemical.com</strong></span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  <p className="font-semibold">Error submitting quote</p>
                  <p className="text-sm mt-1">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. Jane Smith"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane.smith@university.edu"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="institution">Institution / Company *</Label>
                <Input
                  id="institution"
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder="University Research Lab"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Batch Quantity (mg/g) *</Label>
                  <Input
                    id="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g., 100 mg, 1 g, 5 g"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vial_size">Vial Format *</Label>
                  <Select
                    value={formData.vial_size}
                    onValueChange={(value) => setFormData({ ...formData, vial_size: value })}
                    required
                  >
                    <SelectTrigger id="vial_size">
                      <SelectValue placeholder="Select vial format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1ml">1 mL</SelectItem>
                      <SelectItem value="2ml">2 mL</SelectItem>
                      <SelectItem value="5ml">5 mL</SelectItem>
                      <SelectItem value="10ml">10 mL</SelectItem>
                      <SelectItem value="custom">Custom (specify in comments)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purity">Purity Required *</Label>
                <Select
                  value={formData.purity}
                  onValueChange={(value) => setFormData({ ...formData, purity: value })}
                  required
                >
                  <SelectTrigger id="purity">
                    <SelectValue placeholder="Select purity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="≥95%">≥95%</SelectItem>
                    <SelectItem value="≥98%">≥98%</SelectItem>
                    <SelectItem value="≥99%">≥99%</SelectItem>
                    <SelectItem value="≥99.5%">≥99.5%</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="formulation_requirements">Formulation Requirements (Optional)</Label>
                <textarea
                  id="formulation_requirements"
                  value={formData.formulation_requirements}
                  onChange={(e) => setFormData({ ...formData, formulation_requirements: e.target.value })}
                  placeholder="e.g., specific excipients, lyophilization parameters, packaging specifications..."
                  className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Comments (Optional)</Label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any additional requirements, shipping instructions, or questions..."
                  className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-base"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent-red hover:bg-accent-red/90 text-white"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Quote Request'}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted regarding your quote request.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="container mx-auto max-w-2xl">
          <p className="text-gray-600">Loading quote form...</p>
        </div>
      </div>
    }>
      <QuotePageContent />
    </Suspense>
  );
}
