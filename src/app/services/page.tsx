'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ServicesPage() {
  const router = useRouter();

  const handleModelSelect = (value: string) => {
    router.push(`/services/${value}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 py-6">
        <Link href="/">
          <Button variant="ghost" className="mb-3">
            ← Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">Services & Business Models</h1>
          <p className="text-sm md:text-base text-gray-700">
            Coordinated EU-based sourcing, manufacturing, and processing for advanced research compounds. Engagement models are assigned based on partner profile, project maturity, and compliance requirements.
          </p>
        </div>

        {/* Business Models Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-dark mb-2 text-center">How We Work: Engagement Models</h2>
          <p className="text-sm italic text-gray-600 text-center mb-4">(Assigned based on partner profile, use case, and operational maturity)</p>
          
          {/* Model Selection Dropdown */}
          <div className="flex justify-center mb-6">
            <Select onValueChange={handleModelSelect}>
              <SelectTrigger className="w-full max-w-md">
                <SelectValue placeholder="Select a model to learn more..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="model-0">Model 0 - Research API Access</SelectItem>
                <SelectItem value="model-1">Model 1 - Finished RUO Formats</SelectItem>
                <SelectItem value="model-2">Model 2 - Custom Manufacturing</SelectItem>
                <SelectItem value="model-3">Model 3 - Fill & Finish Service</SelectItem>
                <SelectItem value="model-4">Model 4 - Cosmetic White-Label Formats</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Comparison Table */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-dark mb-4 text-center">Quick Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left p-3 font-semibold text-dark">Feature</th>
                    <th className="text-center p-3 font-semibold text-[#D85A5A]">Model 1</th>
                    <th className="text-center p-3 font-semibold text-[#5a8a8f]">Model 2</th>
                    <th className="text-center p-3 font-semibold text-[#E8B741]">Model 3</th>
                    <th className="text-center p-3 font-semibold text-[#C9364F]">Model 4</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Raw Material Source</td>
                    <td className="p-3 text-center">ViraChem</td>
                    <td className="p-3 text-center">ViraChem</td>
                    <td className="p-3 text-center">Client</td>
                    <td className="p-3 text-center">ViraChem</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-3 font-medium">Lead Time</td>
                    <td className="p-3 text-center">~1 week</td>
                    <td className="p-3 text-center">4–6 weeks</td>
                    <td className="p-3 text-center">2–3 weeks</td>
                    <td className="p-3 text-center">4–6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Customization</td>
                    <td className="p-3 text-center">Limited (catalog)</td>
                    <td className="p-3 text-center">Full</td>
                    <td className="p-3 text-center">Full (processing only)</td>
                    <td className="p-3 text-center">Full (white-label)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-3 font-medium">Batch Size</td>
                    <td className="p-3 text-center">Fixed</td>
                    <td className="p-3 text-center">Custom</td>
                    <td className="p-3 text-center">Client-defined</td>
                    <td className="p-3 text-center">Flexible</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Responsibility</td>
                    <td className="p-3 text-center">ViraChem</td>
                    <td className="p-3 text-center">ViraChem</td>
                    <td className="p-3 text-center text-xs">Client (material)<br/>ViraChem (processing)</td>
                    <td className="p-3 text-center">ViraChem</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Divider/Transition */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">Technical Capabilities Across All Models</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All engagement models leverage the same EU-based manufacturing infrastructure and analytical framework.
            </p>
          </div>
        </div>

        {/* Technical Services Grid (Existing Content) */}
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
                  <span><strong>Vial Sizes:</strong> 1 mL, 2 mL, 5 mL, 10 mL, or partner-specified</span>
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
                  <span><strong>Environment:</strong> Sealed under inert atmosphere (N₂)</span>
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
        <div className="max-w-4xl mx-auto text-center bg-[#FAFAFA] p-8 rounded-lg border border-gray-200 mb-12">
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
      </div>
    </div>
  );
}
