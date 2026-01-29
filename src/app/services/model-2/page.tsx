import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Model2Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 py-6">
        <Link href="/services">
          <Button variant="ghost" className="mb-3">
            ← Back to Services
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-accent-teal bg-dark/5">
            <CardHeader>
              <p className="text-xs font-bold uppercase tracking-wider text-accent-teal mb-1">Model 2</p>
              <CardTitle className="text-xl">Custom Manufacturing</CardTitle>
              <p className="text-gray-900 font-semibold">ViraChem-Sourced Raw Materials</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-gray-700 font-semibold">
                Core engagement model for institutional partners.
              </p>
              <p className="text-base text-gray-700">
                This model provides full access to ViraChem-sourced peptide APIs and coordinated EU-based manufacturing. It is the primary pathway for long-term, repeat-volume research programs requiring traceability and supply continuity.
              </p>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Characteristics:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>ViraChem-sourced raw materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Custom specifications and batch sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>End-to-end batch traceability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Extended production timelines aligned with GMP-adjacent workflows</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Partner Profile:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Compounding pharmacies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>GMP-adjacent laboratories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>CDMOs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Institutional research organizations</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Custom Labeling:</p>
                <p className="text-sm text-gray-700">
                  Custom labeling options available for long-term manufacturing partnerships. Partner branding, custom specifications, and regulatory-compliant labeling can be arranged to meet your requirements.
                </p>
              </div>
              <p className="text-base text-gray-700">
                This model forms the <strong>backbone of ViraChem's supply ecosystem</strong>.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Lead Time:</strong> 4–6 weeks
              </p>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Link href="/quote">
              <Button className="bg-[#5a8a8f] hover:bg-[#5a8a8f]/90 text-white">
                Request Quote →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
