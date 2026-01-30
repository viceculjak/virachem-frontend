import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Model1Page() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-3 py-6">
        <Link href="/services">
          <Button variant="ghost" className="mb-3">
            ← Back to Services
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-accent-red bg-dark/5">
            <CardHeader>
              <p className="text-xs font-bold uppercase tracking-wider text-accent-red mb-1">Model 1</p>
              <CardTitle className="text-xl">Finished RUO Formats</CardTitle>
              <p className="text-gray-900 font-semibold">ViraChem-Sourced & Supplied</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-gray-700 font-semibold">
                Short-term access for early-stage or time-sensitive research programs.
              </p>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Available Formats:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-1">•</span>
                    <span>Vials (lyophilized or liquid)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-1">•</span>
                    <span>Capsules (custom formulations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-1">•</span>
                    <span>Device-based configurations (pre-filled delivery systems)</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Intended use:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Program initiation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Demand stabilization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Interim supply prior to custom manufacturing</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Characteristics:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Fixed specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Limited catalog availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Predefined batch sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Research Use Only (RUO)</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Notes:</p>
                <p className="text-sm text-gray-700">
                  Finished RUO Formats are not designed for sustained high-volume programs. Partners on this model are typically transitioned to Model 2 once specifications and volumes stabilize.
                </p>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Lead Time:</strong> ~1 week
              </p>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Link href="/products">
              <Button className="bg-[#D85A5A] hover:bg-[#D85A5A]/90 text-white">
                Browse Catalog →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
