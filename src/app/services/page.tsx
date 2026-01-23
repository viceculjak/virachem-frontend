'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ServicesPage() {
  const [allExpanded, setAllExpanded] = useState<boolean>(false);

  const toggleAllModels = () => {
    setAllExpanded(!allExpanded);
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
          
          {/* Model Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {/* Model 0 */}
            <Card className="border-2 border-[#0B1F3F] shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105" onClick={toggleAllModels}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-[#0B1F3F] mb-1">MODEL 0</div>
                    <CardTitle className="text-lg text-dark">Research API Access (Qualified Partners Only)</CardTitle>
                    <p className="text-xs text-gray-600 mt-1">ViraChem-Sourced Raw Materials</p>
                  </div>
                  {allExpanded ? <ChevronUp className="w-4 h-4 text-[#0B1F3F]" /> : <ChevronDown className="w-4 h-4 text-[#0B1F3F]" />}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700 font-medium border-t pt-4">
                  Upstream access to high-purity research peptide APIs in bulk powder form.
                </div>
                
                {allExpanded && (
                  <div className="space-y-4 border-t pt-4 animate-in slide-in-from-top">
                    <p className="text-sm text-gray-700">
                      This model provides <strong>upstream access to high-purity research peptide APIs</strong> supplied in bulk powder form, without formulation, vialing, or downstream processing.
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Intended for:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#0B1F3F] mt-1">•</span>
                          <span>CDMOs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0B1F3F] mt-1">•</span>
                          <span>GMP / GMP-adjacent laboratories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0B1F3F] mt-1">•</span>
                          <span>Compounding pharmacies (jurisdiction-dependent)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0B1F3F] mt-1">•</span>
                          <span>Institutional research organizations with internal processing capabilities</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Characteristics:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#0B1F3F] mt-1">•</span>
                          <span>ViraChem-qualified API sources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0B1F3F] mt-1">•</span>
                          <span>Bulk powder presentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0B1F3F] mt-1">•</span>
                          <span>Full analytical documentation (COA, HPLC-MS)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0B1F3F] mt-1">•</span>
                          <span>No formulation or packaging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0B1F3F] mt-1">•</span>
                          <span>Clear transfer of responsibility at delivery</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#0B1F3F]/5 border border-[#0B1F3F]/30 p-3 rounded-lg">
                      <p className="text-xs text-gray-700 italic">
                        API access is provided as part of a structured supply relationship and is <strong>not offered as a general commercial product</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Model 1 */}
            <Card className="border-2 border-[#D85A5A] shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105" onClick={toggleAllModels}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-[#D85A5A] mb-1">MODEL 1</div>
                    <CardTitle className="text-lg text-dark">Finished RUO Formats</CardTitle>
                    <p className="text-xs text-gray-600 mt-1">ViraChem-Sourced & Supplied</p>
                  </div>
                  {allExpanded ? <ChevronUp className="w-4 h-4 text-[#D85A5A]" /> : <ChevronDown className="w-4 h-4 text-[#D85A5A]" />}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700 font-medium border-t pt-4">
                  Short-term access for early-stage or time-sensitive research programs.
                </div>
                
                {allExpanded && (
                  <div className="space-y-4 border-t pt-4 animate-in slide-in-from-top">
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Available Formats:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Vials (lyophilized or liquid)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Capsules (custom formulations)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Device-based configurations (pre-filled delivery systems)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Intended use:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Program initiation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Demand stabilization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Interim supply prior to custom manufacturing</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Characteristics:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Fixed specifications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Limited catalog availability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Predefined batch sizes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D85A5A] mt-1">•</span>
                          <span>Research Use Only (RUO)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Notes:</h4>
                      <p className="text-sm text-gray-700">
                        Finished RUO Formats are not designed for sustained high-volume programs. Partners on this model are typically transitioned to Model 2 once specifications and volumes stabilize.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 italic">Lead Time: ~1 week</p>
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
            <Card className="border-2 border-[#5a8a8f] shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105" onClick={toggleAllModels}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-[#5a8a8f] mb-1">MODEL 2</div>
                    <CardTitle className="text-lg text-dark">Custom Manufacturing</CardTitle>
                    <p className="text-xs text-gray-600 mt-1">ViraChem-Sourced Raw Materials</p>
                  </div>
                  {allExpanded ? <ChevronUp className="w-4 h-4 text-[#5a8a8f]" /> : <ChevronDown className="w-4 h-4 text-[#5a8a8f]" />}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700 font-medium border-t pt-4">
                  Core engagement model for institutional partners.
                </div>
                
                {allExpanded && (
                  <div className="space-y-4 border-t pt-4 animate-in slide-in-from-top">
                    <p className="text-sm text-gray-700">
                      This model provides full access to ViraChem-sourced peptide APIs and coordinated EU-based manufacturing. It is the primary pathway for long-term, repeat-volume research programs requiring traceability and supply continuity.
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Characteristics:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>ViraChem-sourced raw materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Custom specifications and batch sizes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>End-to-end batch traceability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Extended production timelines aligned with GMP-adjacent workflows</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Partner Profile:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Compounding pharmacies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>GMP-adjacent laboratories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>CDMOs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5a8a8f] mt-1">•</span>
                          <span>Institutional research organizations</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-sm text-gray-700">
                      This model forms the <strong>backbone of ViraChem's supply ecosystem</strong>.
                    </p>
                    
                    <div>
                      <p className="text-sm text-gray-600 italic">Lead Time: 4–6 weeks</p>
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
            <Card className="border-2 border-[#E8B741] shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105" onClick={toggleAllModels}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-[#E8B741] mb-1">MODEL 3</div>
                    <CardTitle className="text-lg text-dark">Fill & Finish Service</CardTitle>
                    <p className="text-xs text-gray-600 mt-1">Client-Supplied Material</p>
                  </div>
                  {allExpanded ? <ChevronUp className="w-4 h-4 text-[#E8B741]" /> : <ChevronDown className="w-4 h-4 text-[#E8B741]" />}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-700 font-medium border-t pt-4">
                  Processing access for partners supplying their own material.
                </div>
                
                {allExpanded && (
                  <div className="space-y-4 border-t pt-4 animate-in slide-in-from-top">
                    <p className="text-sm text-gray-700">
                      This model provides sterile processing, formulation, and lyophilization services using client-supplied raw material. Clear responsibility boundaries are maintained regarding material origin and quality.
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Characteristics:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>Client-supplied API</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>ViraChem-managed processing and documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>Defined scope of responsibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E8B741] mt-1">•</span>
                          <span>Suitable for regulatory or internal sourcing constraints</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-dark mb-2 text-sm">Important Clarification:</h4>
                      <p className="text-xs text-gray-700">
                        ViraChem does not manufacture, certify, or assume responsibility for the quality, purity, or suitability 
                        of client-supplied raw materials. Clear responsibility boundaries are maintained regarding material origin and quality.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 italic">Lead Time: 2–3 weeks</p>
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
                    <td className="p-3 text-center">~1 week</td>
                    <td className="p-3 text-center">4–6 weeks</td>
                    <td className="p-3 text-center">2–3 weeks</td>
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
              and legal responsibility, and provide structured access to speed, customization, or cost-efficiency based on partner profile and project requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
