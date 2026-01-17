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
            Contract Manufacturing Intermediation | GMP-Aligned Peptide Synthesis | EU-Registered
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto space-y-6">
          <section>
            <p className="text-base text-gray-700 mb-2">
              ViraChem j.d.o.o. is an EU-registered intermediary and <strong>access layer connecting Central European peptide manufacturing capacity</strong> with research and industrial laboratories across Europe. We <strong>coordinate</strong> sourcing, synthesis, and processing of high-purity research peptides and fine chemicals, providing fully traceable, GMP-aligned solutions while ensuring regulatory clarity for our <strong>partners</strong>.
            </p>
            <p className="text-base text-gray-700 mb-2">
              All compounds are strictly for research use and are <strong>not intended for human or veterinary diagnostic or therapeutic applications</strong>. Our core offerings include custom and catalog peptides synthesized to ≥95–99% purity (HPLC-MS verified), with flexible formulation and packaging options.
            </p>
          </section>

          {/* Engagement Models */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">How We Work: Engagement Models (assigned based on partner profile)</h2>
            
            <div className="space-y-6">
              {/* Model 1 */}
              <Card className="border-l-4 border-l-accent-red bg-dark/5">
                <CardHeader>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-red mb-1">Model 1</p>
                  <CardTitle className="text-xl">Finished RUO Vials</CardTitle>
                  <p className="text-gray-900 font-semibold">ViraChem-Sourced & Supplied</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-base text-gray-700 font-semibold">
                    Short-term access for early-stage or time-sensitive research programs.
                  </p>
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
                      Finished RUO Vials are not designed for sustained high-volume programs. Partners on this model are typically transitioned to Model 2 once specifications and volumes stabilize.
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
                    <span>Type I borosilicate glass with rubber stoppers and aluminum crimp seals under inert atmosphere</span>
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
                    <span>Batch sizes from milligram to multi-gram quantities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Full analytical documentation including COA, HPLC-MS chromatograms, and mass spectra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>GMP-aligned production under EU standards</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark mb-3">EU-Compliant Intermediation</h3>
                <ul className="space-y-1 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Centralized coordination between raw material sourcing, Poland-based GMP-aligned manufacturing, and institutional research partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Facilitates secure B2B access while maintaining supply chain traceability and documentation integrity</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why ViraChem Is Different */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-6">Why ViraChem Is Different</h2>
            <p className="text-base text-gray-700 mb-4">
              ViraChem is <strong>more than a supplier</strong>. We provide structured access to peptide research compounds and processing services designed to ensure:
            </p>
            <ul className="space-y-2 text-base text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Continuity of supply:</strong> Institutional partners rely on us for secure, repeatable access to critical compounds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Traceability:</strong> Full batch records, analytical verification, and chain of custody from synthesis through delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Regulatory alignment:</strong> Compliant with EU chemical distribution law, REACH, CLP, and international shipping regulations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Ecosystem integration:</strong> Partner laboratories and research institutions benefit from our network and coordination, ensuring long-term operational stability</span>
              </li>
            </ul>
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
                      Vice founded ViraChem to facilitate European researchers and companies' access to GMP-aligned peptide manufacturing and high-purity research compounds.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/vice-culjak/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0077B5] hover:text-[#0077B5]/80 transition-colors mb-3"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">Connect on LinkedIn</span>
                    </a>
                    <p className="text-sm text-gray-600">
                      OIB: 27422906923 | Split, Croatia
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
