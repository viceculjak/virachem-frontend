import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Model3Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 py-6">
        <Link href="/services">
          <Button variant="ghost" className="mb-3">
            ← Back to Services
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-accent-gold bg-dark/5">
            <CardHeader>
              <p className="text-xs font-bold uppercase tracking-wider text-accent-gold mb-1">Model 3</p>
              <CardTitle className="text-xl">Fill & Finish Service</CardTitle>
              <p className="text-gray-900 font-semibold">Client-Supplied Material</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-gray-700 font-semibold">
                Processing access for partners supplying their own material.
              </p>
              <p className="text-base text-gray-700">
                This model provides sterile processing, formulation, and lyophilization services using client-supplied raw material. Clear responsibility boundaries are maintained regarding material origin and quality.
              </p>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Characteristics:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Client-supplied API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>ViraChem-managed processing and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Defined scope of responsibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Suitable for regulatory or internal sourcing constraints</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark mb-1">Custom Labeling:</p>
                <p className="text-sm text-gray-700">
                  Custom labeling options available for fill & finish services. Partner branding and custom specifications can be incorporated into the final product packaging.
                </p>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Lead Time:</strong> 2–3 weeks
              </p>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-[#E8B741] hover:bg-[#E8B741]/90 text-white">
                Discuss Your Project →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
