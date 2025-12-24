'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ServicesPage() {
  const [expandedModel, setExpandedModel] = useState<number | null>(null);

  const toggleModel = (modelId: number) => {
    setExpandedModel(expandedModel === modelId ? null : modelId);
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
            Three flexible models for research supply and processing — from ready inventory to custom manufacturing to client-supplied fill & finish
          </p>
        </div>

        {/* Business Models Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-dark mb-4 text-center">How We Work: Choose Your Model</h2>
          
          {/* Model Cards Grid */}
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            {/* Model 1 */}
            <Card className="border-2 border-[#D85A5A] shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105" onClick={() => toggleModel(1)}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-[#D85A5A] mb-1">MODEL 1</div>
                    <CardTitle className="text-lg text-dark">Finished RUO Vials</CardTitle>
                    <p className="text-xs text-gray-600 mt-1">ViraChem-Sourced & Supplied</p>
                  </div>
                  {expandedModel === 1 ? <ChevronUp className="w-4 h-4 text-[#D85A5A]" /> : <ChevronDown className="w-4 h-4 text-[#D85A5A]" />}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700 font-medium border-t pt-4">
                  Fast availability | Fixed specs | Ready inventory
                </div>
                
                {expandedModel === 1 && (
                  <div className="space-y-4 border-t pt-4 animate-in slide-in-from-top">
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Key Characteristics:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Raw materials sourced by ViraChem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Manufacturing, filling, and packaging by partner facilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Each batch with analytical documentation (COA, HPLC, MS)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Inventory held and distributed by ViraChem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Fixed lead times and predefined specifications</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Best Suited For:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Laboratories requiring fast availability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Standardized experimental workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Repeated or recurring research use</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 italic">Lead Time: 1 week</p>
                    </div>
                    
                    <Link href="/products">
                      <Button className="w-full bg-[#D85A5A] hover:bg-[#D85A5A]/90 text-white shadow-lg hover:shadow-xl transition-all">
                        Browse Catalog →
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Model 2 */}
            <Card className="border-2 border-[#5a8a8f] shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105" onClick={() => toggleModel(2)}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-[#5a8a8f] mb-1">MODEL 2</div>
                    <CardTitle className="text-lg text-dark">Custom Manufacturing</CardTitle>
                    <p className="text-xs text-gray-600 mt-1">ViraChem-Sourced Raw Materials</p>
                  </div>
                  {expandedModel === 2 ? <ChevronUp className="w-4 h-4 text-[#5a8a8f]" /> : <ChevronDown className="w-4 h-4 text-[#5a8a8f]" />}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700 font-medium border-t pt-4">
                  Your specs | Extended timeline | Full traceability
                </div>
                
                {expandedModel === 2 && (
                  <div className="space-y-4 border-t pt-4 animate-in slide-in-from-top">
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Key Characteristics:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Raw materials sourced and qualified by ViraChem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Batch manufactured on-demand</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Custom vial count, fill volume, or concentration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Extended lead times due to batch setup and validation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Documentation per client-defined requirements (RUO scope)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Best Suited For:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Specialized research programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>CROs and institutional labs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Projects requiring batch traceability or non-standard configurations</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 italic">Lead Time: 4-6 weeks</p>
                    </div>
                    
                    <Link href="/quote">
                      <Button className="w-full bg-[#5a8a8f] hover:bg-[#5a8a8f]/90 text-white">
                        Request Quote →
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Model 3 */}
            <Card className="border-2 border-[#E8B741] shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105" onClick={() => toggleModel(3)}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-[#E8B741] mb-1">MODEL 3</div>
                    <CardTitle className="text-lg text-dark">Fill & Finish Service</CardTitle>
                    <p className="text-xs text-gray-600 mt-1">Client-Supplied Material</p>
                  </div>
                  {expandedModel === 3 ? <ChevronUp className="w-4 h-4 text-[#E8B741]" /> : <ChevronDown className="w-4 h-4 text-[#E8B741]" />}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700 font-medium border-t pt-4">
                  Your material | Our processing | Clear boundaries
                </div>
                
                {expandedModel === 3 && (
                  <div className="space-y-4 border-t pt-4 animate-in slide-in-from-top">
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Key Characteristics:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>Raw material provided directly by the client</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>ViraChem performs vial filling, packaging, and labeling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>No sourcing or quality representation of raw material by ViraChem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>Processing conducted strictly per RUO handling standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>Separate contractual framework applies</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-dark mb-2 text-sm">Important Clarification:</h4>
                      <p className="text-xs text-gray-700">
                        ViraChem does not manufacture, certify, or assume responsibility for the quality, purity, or suitability 
                        of client-supplied raw materials. Responsibility for raw material identity and integrity remains entirely with the client.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Best Suited For:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>Laboratories with existing raw inventories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>Research groups seeking cost-efficient vial preparation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>Institutions requiring internal material control</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 italic">Lead Time: 2-3 weeks</p>
                    </div>
                    
                    <Link href="/contact">
                      <Button className="w-full bg-[#E8B741] hover:bg-[#E8B741]/90 text-white shadow-lg hover:shadow-xl transition-all">
                        Discuss Your Project →
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
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
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Raw Material Source</td>
                    <td className="p-3 text-center">ViraChem</td>
                    <td className="p-3 text-center">ViraChem</td>
                    <td className="p-3 text-center">Client</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-3 font-medium">Lead Time</td>
                    <td className="p-3 text-center">1 week</td>
                    <td className="p-3 text-center">4-6 weeks</td>
                    <td className="p-3 text-center">2-3 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Customization</td>
                    <td className="p-3 text-center">Limited (catalog)</td>
                    <td className="p-3 text-center">Full</td>
                    <td className="p-3 text-center">Full (processing only)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-3 font-medium">Batch Size</td>
                    <td className="p-3 text-center">Fixed</td>
                    <td className="p-3 text-center">Custom</td>
                    <td className="p-3 text-center">Client-defined</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Responsibility</td>
                    <td className="p-3 text-center">ViraChem</td>
                    <td className="p-3 text-center">ViraChem</td>
                    <td className="p-3 text-center text-xs">Client (material)<br/>ViraChem (processing)</td>
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
              Regardless of which model you choose, all services benefit from our partner's GMP-aligned manufacturing 
              capabilities and comprehensive analytical verification.
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

        {/* Critical Boundaries - Enhanced */}
        <div className="max-w-4xl mx-auto mt-12 p-8 bg-amber-50 rounded-lg border-2 border-amber-400">
          <h3 className="text-xl font-bold text-dark mb-4 text-center">Critical Boundaries (Non-Negotiable)</h3>
          <div className="space-y-4 text-gray-700">
            <p className="text-center font-semibold text-lg">
              Across all three models:
            </p>
            <ul className="space-y-2 max-w-2xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1 font-bold">•</span>
                <span><strong>Research Use Only:</strong> All products and services are supplied strictly for research applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1 font-bold">•</span>
                <span><strong>Not for human or veterinary use:</strong> Not intended for diagnostic or therapeutic applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1 font-bold">•</span>
                <span><strong>Governed by written agreements:</strong> Activities are defined by contracts specifying scope and liability</span>
              </li>
            </ul>
            <p className="text-center text-sm italic mt-6 text-gray-600">
              These three models are intentionally separated to preserve regulatory clarity, correctly allocate technical 
              and legal responsibility, and allow clients to choose speed, customization, or cost-efficiency without ambiguity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
