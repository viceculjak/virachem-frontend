import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

export default function AboutPage() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">About ViraChem</h1>
          <p className="text-base md:text-xl text-gray-700 break-words">
            Contract Manufacturing Intermediation | GMP-Aligned Peptide Synthesis | EU-Registered
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Contract Manufacturing Intermediation</h2>
            <p className="text-lg text-gray-700 mb-4">
              ViraChem j.d.o.o. is an EU-registered intermediary specializing in contract manufacturing of high-purity 
              research peptides and fine chemicals for academic and industrial laboratories across Europe. We partner with 
              a GMP-aligned, Poland-based synthesis facility experienced in custom peptide production, lyophilization, and 
              sterile vialing under inert atmosphere.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              All compounds are provided strictly for research use and are not intended for human or veterinary diagnostic 
              or therapeutic applications. Our core offering includes custom and catalog peptides synthesized to ≥95–99% 
              purity (HPLC-MS verified) with flexible formulation options.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-dark mb-3 mt-6">Manufacturing Capabilities</h3>
            <ul className="space-y-2 text-lg text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Flexible Vial Formats:</strong> Lyophilized powder in any vial size (1 mL, 2 mL, 5 mL, 10 mL, or client-specified)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Type I Borosilicate Glass:</strong> Standard packaging with rubber stoppers and aluminum crimp seals under inert atmosphere</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>Batch Scalability:</strong> Production from milligram to multi-gram quantities with full analytical documentation (COA, HPLC-MS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-teal mt-1">•</span>
                <span><strong>EU-Compliant Intermediation:</strong> Registered under Croatian commercial law (MBS: 060500406, OIB: 73782597071)</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700">
              ViraChem does not engage in direct retail sales. We facilitate B2B access to reliable, traceable, and 
              consistently manufactured research substances—bridging European laboratories with trusted Central European 
              production capacity.
            </p>
          </section>

          {/* Company Registration */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Company Registration</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-dark/20">
                <CardHeader>
                  <CardTitle className="text-xl">Legal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
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
                <CardContent className="space-y-3">
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
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Our Location</h2>
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
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-[#0B1F3F] transition-colors"
                          >
                            <Facebook className="w-5 h-5" />
                            <span className="text-sm">Follow us on Facebook</span>
                          </a>
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

          {/* What We Do */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Our Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-accent-red/20 border-l-4 border-l-accent-red">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Contract Peptide Synthesis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Custom and catalog peptides synthesized to ≥95–99% purity via Poland-based, GMP-aligned facility. 
                    HPLC-MS verification with full COA, batch records, and analytical documentation for each production run.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent-teal/20 border-l-4 border-l-accent-teal">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Analytical & Regulatory Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Complete traceability from synthesis through delivery with COA, HPLC-MS chromatograms, mass spectra, 
                    MSDS, and storage protocols. Type I borosilicate glass packaging with batch-specific quality documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent-gold/20 border-l-4 border-l-accent-gold">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Batch Scalability & Custom Formulation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Flexible vial formats (1 mL, 2 mL, 5 mL, 10 mL, or client-specified) with lyophilized powder presentation. 
                    Scalable production from milligram to multi-gram quantities with rubber stopper and aluminum crimp sealing 
                    for chemical distribution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Regulatory Compliance</h2>
            <div className="bg-dark/5 border border-dark/20 rounded-lg p-6">
              <p className="text-gray-800 mb-4">
                ViraChem operates in strict compliance with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Croatian commercial law and regulations</li>
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
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-dark mb-3">Research Institutions</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Universities and academic research labs</li>
                  <li>Government research facilities</li>
                  <li>Non-profit research organizations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-3">Industry</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Pharmaceutical R&D departments</li>
                  <li>Biotechnology companies</li>
                  <li>Contract research organizations (CROs)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Leadership</h2>
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
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Ready to Start Your Research?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Request a quote for high-purity research compounds or contact us for more information.
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
