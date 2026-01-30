import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function QualityPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-3 py-6">
        <Link href="/">
          <Button variant="ghost" className="mb-3">
            ← Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-dark mb-4">Quality Assurance & Regulatory Compliance</h1>
          <p className="text-base md:text-xl text-gray-700">
            Rigorous quality control and full EU regulatory compliance for research-grade peptides and fine chemicals
          </p>
        </div>

        {/* Quality Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">Quality Control Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Every batch undergoes comprehensive analytical testing to ensure purity, identity, and consistency 
                before shipment to your laboratory.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Identity Verification:</strong> Mass spectrometry (MS) confirms molecular weight and structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Purity Analysis:</strong> High-performance liquid chromatography (HPLC) quantifies purity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Visual Inspection:</strong> Appearance, color, and physical form assessed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Documentation:</strong> Full analytical report with each shipment</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">Certificate of Analysis (COA)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Each product shipment includes a comprehensive Certificate of Analysis with full analytical data.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-dark mb-3">COA Includes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Batch number and production date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>HPLC chromatogram with purity percentage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Mass spectrometry data (calculated vs. found molecular weight)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Physical appearance description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Storage and handling recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Expiry date and stability data</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">GMP Alignment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our manufacturing partner maintains GMP-aligned processes to ensure consistent quality and full traceability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Standard Operating Procedures:</strong> Documented processes for all manufacturing steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Batch Records:</strong> Complete documentation for each production run</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Equipment Qualification:</strong> Calibrated and validated instruments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Personnel Training:</strong> Qualified staff with documented training</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">EU Regulatory Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                ViraChem j.d.o.o. is registered in Croatia as an EU-compliant business entity facilitating research chemical intermediation.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-dark mb-3">Registration Details:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span><strong>Company:</strong> ViraChem j.d.o.o.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span><strong>Registration Number (MBS):</strong> 060500406</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span><strong>Tax ID (OIB):</strong> 73782597071</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span><strong>Location:</strong> Pujanke 24A, 21000 Split, Croatia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span><strong>Jurisdiction:</strong> European Union member state</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">Storage & Handling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Proper storage and handling guidelines to maintain product integrity and stability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Storage Temperature:</strong> -20°C, desiccated conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Light Protection:</strong> Store protected from light</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Reconstitution:</strong> Follow product-specific protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Shipping:</strong> Cold chain maintained during transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span><strong>Shelf Life:</strong> Typically 2-3 years when stored properly</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer CTA */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-gray-600 mb-4">Questions about our quality standards or compliance?</p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
