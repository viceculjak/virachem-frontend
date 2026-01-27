import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Instagram } from 'lucide-react';

export default function AboutPage() {
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
          <h1 className="text-xl md:text-2xl font-bold text-dark mb-2">About ViraChem</h1>
          <p className="text-sm md:text-base text-gray-700 break-words">
            Contract Manufacturing Intermediation | Research API Access | GMP-Aligned Peptide Manufacturing | EU-Registered
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto space-y-6">
          <section>
            <p className="text-base text-gray-700 mb-2">
              ViraChem j.d.o.o. is an <strong>EU-registered contract manufacturing intermediary and access platform</strong> that connects <strong>qualified European research and industrial partners</strong> with <strong>vetted Central European peptide manufacturing capacity</strong>.
            </p>
            <p className="text-base text-gray-700 mb-2">
              We operate as a <strong>coordination and qualification layer</strong> across the peptide supply chain — from <strong>research-grade active ingredients (APIs)</strong> to <strong>custom manufacturing, formulation, and fill & finish services</strong> — while maintaining <strong>clear regulatory boundaries</strong>, full traceability, and partner accountability.
            </p>
            <p className="text-base text-gray-700 mb-2">
              ViraChem does <strong>not</strong> operate as a retail seller, compounding pharmacy, or direct manufacturer. Our role is to <strong>structure access</strong>, <strong>coordinate execution</strong>, and <strong>de-risk sourcing</strong> for institutional partners who require consistency, documentation, and long-term supply continuity.
            </p>
            <p className="text-base text-gray-700 mb-2">
              All compounds are supplied <strong>strictly for research use only (RUO)</strong> and are <strong>not intended for human or veterinary diagnostic or therapeutic applications</strong>.
            </p>
          </section>

          {/* Our Position in the Industry Ecosystem */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">Our Position in the Industry Ecosystem</h2>
            <p className="text-base text-gray-700 mb-4">
              ViraChem sits <strong>between upstream manufacturers and downstream users</strong>, enabling:
            </p>
            <ul className="space-y-2 text-base text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span>Secure access to qualified peptide APIs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span>Coordinated EU-based synthesis and processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span>Structured transition from early-stage research to repeat-volume programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span>Documentation-driven, GMP-aligned workflows without assuming clinical liability</span>
              </li>
            </ul>
            <p className="text-base text-gray-700">
              This positioning allows partners to scale <strong>without supply chain fragmentation or regulatory ambiguity</strong>.
            </p>
          </section>

          {/* Engagement Models */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-2">How We Work: Engagement Models</h2>
            <p className="text-sm italic text-gray-600 mb-6">(Assigned based on partner profile, use case, and operational maturity)</p>
            
            <div className="space-y-6">
              {/* Model 0 */}
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

              {/* Model 1 */}
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

              {/* Model 2 */}
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
                  <p className="text-base text-gray-700">
                    This model forms the <strong>backbone of ViraChem's supply ecosystem</strong>.
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Lead Time:</strong> 4–6 weeks
                  </p>
                </CardContent>
              </Card>

              {/* Model 3 */}
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
                  <p className="text-sm text-gray-700">
                    <strong>Lead Time:</strong> 2–3 weeks
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Company Registration */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">Company Registration</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-dark/20">
                <CardHeader>
                  <CardTitle className="text-xl">Legal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Company Name</p>
                    <p className="text-gray-900">ViraChem jednostavno društvo s ograničenom odgovornošću</p>
                    <p className="text-gray-700">ViraChem j.d.o.o.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Registration Court</p>
                    <p className="text-gray-900">Trgovački sud u Splitu</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Company Registration Number</p>
                    <p className="text-gray-900">MBS: 060500406</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Tax Identification Number</p>
                    <p className="text-gray-900">OIB: 73782597071</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">EUID</p>
                    <p className="text-gray-900">HRSR.060500406</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Status</p>
                    <p className="text-green-600 font-semibold">Active (Bez postupka)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dark/20">
                <CardHeader>
                  <CardTitle className="text-xl">Business Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Primary Activity</p>
                    <p className="text-gray-900">46.19.0 - Posredovanje u nespecijaliziranoj trgovini na veliko</p>
                    <p className="text-sm text-gray-600">(Intermediation in non-specialized wholesale trade)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Licensed Activities</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Intermediation in fine chemicals and biochemicals for R&D</li>
                      <li>Preliminary research activities</li>
                      <li>Trade intermediation (domestic and international)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Founded</p>
                    <p className="text-gray-900">June 27, 2025</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Location */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">Our Location</h2>
            <Card className="border-dark/20">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-3">Headquarters</h3>
                    <p className="text-gray-900 font-semibold">ViraChem j.d.o.o.</p>
                    <p className="text-gray-700">Pujanke 24A</p>
                    <p className="text-gray-700">21000 Split</p>
                    <p className="text-gray-700">Croatia (Hrvatska)</p>
                    <p className="text-gray-700 mt-3">European Union Member State</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-3">Contact</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Email</p>
                        <p className="text-gray-900 break-words">info@virachemical.com</p>
                        <p className="text-sm text-gray-600 mt-3">Specialized contacts:</p>
                        <p className="text-gray-700 text-sm break-words">Quotes: quotes@virachemical.com</p>
                        <p className="text-gray-700 text-sm break-words">Technical: tech@virachemical.com</p>
                        <p className="text-gray-700 text-sm break-words">Compliance: compliance@virachemical.com</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Business Hours</p>
                        <p className="text-gray-700">Monday - Friday: 9:00 - 17:00 CET</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Response Time</p>
                        <p className="text-gray-700">Quote requests: 24-48 hours</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-2">Connect With Us</p>
                        <div className="space-y-2">
                          <a
                            href="https://www.instagram.com/virachemical/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-[#0B1F3F] transition-colors"
                          >
                            <Instagram className="w-5 h-5" />
                            <span className="text-sm">Follow us on Instagram</span>
                          </a>
                          <a
                            href="https://www.linkedin.com/company/virachemical"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-[#0B1F3F] transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                            <span className="text-sm">Follow us on LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Manufacturing & Processing Capabilities */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">Our Manufacturing & Processing Capabilities</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark mb-3">Flexible Vialing & Formulation</h3>
                <ul className="space-y-1 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Lyophilized peptide powders in 1 mL, 2 mL, 5 mL, 10 mL, or partner-specified formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Type I borosilicate glass vials with rubber stoppers and aluminum crimp seals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Sealed under inert atmosphere (N₂)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Custom buffer systems available</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark mb-3">Scalable Production</h3>
                <ul className="space-y-1 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Milligram to multi-gram batch sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Full analytical documentation per batch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>HPLC-MS verification and COA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>GMP-aligned EU manufacturing environment</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark mb-3">EU-Compliant Intermediation</h3>
                <ul className="space-y-1 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Centralized coordination between upstream API sourcing and Poland-based GMP-aligned manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Maintains traceability, documentation integrity, and partner accountability</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why ViraChem Exists */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">Why ViraChem Exists</h2>
            <p className="text-base text-gray-700 mb-4">
              ViraChem was built to solve three structural problems in the peptide industry:
            </p>
            <ul className="space-y-2 text-base text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Fragmented sourcing</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Inconsistent quality and documentation</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Regulatory ambiguity between suppliers and users</strong></span>
              </li>
            </ul>
            <p className="text-base text-gray-700">
              We address these by acting as a <strong>neutral, documentation-driven access layer</strong> that enables partners to focus on research and development — not supply chain risk.
            </p>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">Regulatory Compliance</h2>
            <div className="bg-dark/5 border border-dark/20 rounded-lg p-6">
              <p className="text-gray-800 mb-4">
                ViraChem operates in strict adherence to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Croatian commercial law</li>
                <li>European Union chemical distribution directives</li>
                <li>REACH (Registration, Evaluation, Authorization and Restriction of Chemicals)</li>
                <li>CLP (Classification, Labelling and Packaging) regulations</li>
                <li>GDPR (General Data Protection Regulation)</li>
                <li>International shipping and customs requirements</li>
              </ul>
              <div className="mt-6 p-4 bg-accent-red/10 border border-accent-red/30 rounded">
                <p className="text-sm text-gray-900 font-semibold">
                  <strong>WARNING: Research Use Only</strong> — All products are strictly for research and development purposes. 
                  Not for human or veterinary use.
                </p>
              </div>
            </div>
          </section>

          {/* Target Market */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-dark mb-3">Research Institutions</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Universities and academic research labs</li>
                  <li>Government research facilities</li>
                  <li>Non-profit research organizations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-3">Industry Partners</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Pharmaceutical R&D departments</li>
                  <li>Biotechnology companies</li>
                  <li>Contract research organizations (CROs)</li>
                  <li>CDMOs and GMP-adjacent laboratories</li>
                </ul>
              </div>
            </div>
            <p className="text-base text-gray-700">
              ViraChem is <strong>partner-focused</strong>, ensuring that research programs, laboratories, and industrial operations have reliable access to high-purity, traceable compounds without exposing them to supply risk or regulatory uncertainty.
            </p>
          </section>

          {/* Leadership */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">Leadership</h2>
            <Card className="border-dark/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    {/* Place founder image at public/team/vice-culjak.jpg */}
                    <img
                      src="/team/vice-culjak.jpg"
                      alt="Vice Čuljak"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark">Vice Čuljak</h3>
                    <p className="text-accent-red font-semibold mb-2">Founder & Director</p>
                    <p className="text-gray-700 mb-3">
                      Vice founded ViraChem to provide European laboratories and industrial partners with <strong>structured, compliant access to GMP-aligned peptide manufacturing and research-grade APIs</strong>, without exposing them to supply chain instability or regulatory uncertainty.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/vice-culjak/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0077B5] hover:text-[#0077B5]/80 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dark/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <img
                      src="/team/Radoslav.png"
                      alt="Radoslav Atanasov"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark">Radoslav Atanasov</h3>
                    <p className="text-accent-red font-semibold mb-2">Partnerships & Manufacturing Manager</p>
                    <p className="text-gray-700 mb-3">
                      Radoslav leads partner acquisition and manufacturing coordination across ViraChem's EU-based network. He works directly with clinics, laboratories, and institutional clients to structure supply relationships while overseeing technical feasibility, production alignment, and delivery execution with manufacturing partners.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <section className="text-center py-12">
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-4">Ready to Start Your Research?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Request a quote for high-purity research compounds or contact us to discuss your <strong>partnership needs and access requirements</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button className="bg-accent-red hover:bg-accent-red/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto">
                  Browse Products
                </Button>
              </Link>
              <Link href="/quote">
                <Button variant="outline" className="border-dark text-dark hover:bg-dark/10 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto">
                  Request Quote
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
