import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Model4Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 py-6">
        <Link href="/services">
          <Button variant="ghost" className="mb-3">
            ← Back to Services
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-[#C9364F] bg-dark/5">
            <CardHeader>
              <p className="text-xs font-bold uppercase tracking-wider text-[#C9364F] mb-1">Model 4</p>
              <CardTitle className="text-xl">Cosmetic White-Label Formats</CardTitle>
              <p className="text-gray-900 font-semibold">Licensed Cosmetic Products</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-gray-700 font-semibold">
                Fully licensed peptide-based cosmetic products for clinics, brands, or labs.
              </p>
              <p className="text-base text-gray-700">
                This model provides <strong>fully licensed peptide-based cosmetic products</strong> (creams, serums, gels) to clinics, brands, or labs. Products are manufactured with ViraChem-sourced ingredients and optional white-label branding.
              </p>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Features:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9364F] mt-1">•</span>
                    <span>ViraChem-sourced or partner-specific cosmetic-grade formulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9364F] mt-1">•</span>
                    <span>Optional partner/project labeling (white-label) for branding and traceability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9364F] mt-1">•</span>
                    <span>Fully EU-licensed cosmetic production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9364F] mt-1">•</span>
                    <span>Analytical support (COA, stability testing) per batch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9364F] mt-1">•</span>
                    <span>Flexible batch sizes to support development or commercial integration</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Product Types:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9364F] mt-1">•</span>
                    <span>Creams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9364F] mt-1">•</span>
                    <span>Serums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9364F] mt-1">•</span>
                    <span>Gels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9364F] mt-1">•</span>
                    <span>Peptide-based formulations</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-[#C9364F]/5 border-l-4 border-l-[#C9364F] rounded">
                <p className="text-sm text-gray-700 italic">
                  <strong>Important:</strong> These products are cosmetics, fully compliant with EU cosmetic regulations. Not for therapeutic, diagnostic, or pharmaceutical use.
                </p>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Lead Time:</strong> 4–6 weeks
              </p>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-[#C9364F] hover:bg-[#C9364F]/90 text-white">
                Discuss Your Project →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
