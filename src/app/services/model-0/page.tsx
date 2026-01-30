import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Model0Page() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-3 py-6">
        <Link href="/services">
          <Button variant="ghost" className="mb-3">
            ← Back to Services
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-dark bg-dark/5">
            <CardHeader>
              <p className="text-xs font-bold uppercase tracking-wider text-dark mb-1">Model 0</p>
              <CardTitle className="text-xl">Research API Access (Qualified Partners Only)</CardTitle>
              <p className="text-gray-900 font-semibold">ViraChem-Sourced Raw Materials</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-gray-700">
                This model provides <strong>upstream access to high-purity research peptide APIs</strong> supplied in bulk powder form, without formulation, vialing, or downstream processing.
              </p>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Intended for:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>CDMOs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>GMP / GMP-adjacent laboratories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Compounding pharmacies (jurisdiction-dependent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Institutional research organizations with internal processing capabilities</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Characteristics:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>ViraChem-qualified API sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Bulk powder presentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Full analytical documentation (COA, HPLC-MS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>No formulation or packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Clear transfer of responsibility at delivery</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-dark/5 border-l-4 border-l-dark rounded">
                <p className="text-sm text-gray-700 italic">
                  API access is provided as part of a structured supply relationship and is <strong>not offered as a general commercial product</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-[#0B1F3F] hover:bg-[#0B1F3F]/90 text-white">
                Contact Us →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
