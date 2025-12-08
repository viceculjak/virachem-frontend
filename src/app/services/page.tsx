import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            ← Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">Contract Manufacturing Services</h1>
          <p className="text-base md:text-xl text-gray-700">
            GMP-aligned peptide synthesis and custom formulation services for research applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto space-y-8 mb-12">
          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">Custom Peptide Synthesis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our Polish manufacturing partner specializes in custom peptide synthesis with full analytical verification. 
                We facilitate access to high-purity research peptides tailored to your specifications.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Purity Levels:</strong> ≥95–99% (HPLC-MS verified)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Sequence Length:</strong> Short to medium peptides (typically 5-50 amino acids)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Modifications:</strong> Standard modifications available upon request</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Scale:</strong> Milligram to multi-gram quantities</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">Formulation & Lyophilization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Professional lyophilization services under inert atmosphere (N₂) to ensure product stability and extended shelf life.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Process:</strong> Controlled freeze-drying under nitrogen atmosphere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Buffer Systems:</strong> Custom buffer formulations available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Stability:</strong> Optimized for long-term storage at -20°C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Appearance:</strong> White to off-white lyophilized powder</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">Custom Vialing Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Flexible packaging solutions to meet your laboratory requirements. Any vial size from 1 mL to 10 mL, or custom specifications.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Vial Sizes:</strong> 1 mL, 2 mL, 5 mL, 10 mL, or client-specified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Material:</strong> Type I borosilicate glass vials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Closure:</strong> Rubber stoppers with aluminum crimp seals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Environment:</strong> Sealed under inert atmosphere</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">GMP-Aligned Manufacturing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our manufacturing partner operates a GMP-aligned facility in Poland, ensuring consistent quality and traceability for research applications.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Quality Standards:</strong> GMP-aligned processes and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Traceability:</strong> Full batch records and chain of custody</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Location:</strong> EU-based facility in Poland</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Compliance:</strong> Research-grade materials, not for human use</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">Lead Times & Capacity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Typical production timelines for custom orders. Contact us for rush orders or bulk quantities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Standard Lead Time:</strong> 4-6 weeks from order confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Quote Response:</strong> 24-48 hours for feasibility and pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Minimum Order:</strong> Project-dependent, contact for details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Capacity:</strong> Multiple parallel projects supported</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-[#FAFAFA] p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Request a custom quote for your peptide synthesis or manufacturing project. Our team will respond within 24-48 hours.
          </p>
          <Link href="/quote">
            <Button size="lg" className="bg-accent-red hover:bg-accent-red/90 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Request Custom Quote →
            </Button>
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-gray-100 rounded-lg border border-gray-300">
          <p className="text-sm text-gray-600 text-center">
            <strong>Research Use Only:</strong> All products and services are strictly for research applications. 
            Not intended for human or veterinary diagnostic or therapeutic use.
          </p>
        </div>
      </div>
    </div>
  );
}
