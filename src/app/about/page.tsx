import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
          <h1 className="text-5xl font-bold text-dark mb-4">About ViraChem</h1>
          <p className="text-2xl text-accent-red font-semibold mb-4">
            EDGE OF RESEARCH
          </p>
          <p className="text-xl text-gray-700">
            EU-Registered Research Chemical Distribution | Split, Croatia
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-semibold text-dark mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              ViraChem is a Croatian-based intermediary specializing in the distribution of high-purity research chemicals 
              and biochemicals to qualified research institutions across Europe and internationally. We are committed to 
              advancing scientific discovery by providing researchers with access to premium-grade compounds for legitimate 
              research and development purposes.
            </p>
            <p className="text-lg text-gray-700">
              Operating at the "Edge of Research," we bridge the gap between cutting-edge chemical suppliers and pioneering 
              research laboratories, ensuring that scientists have the tools they need to push the boundaries of knowledge 
              in biotechnology, pharmaceuticals, and longevity research.
            </p>
          </section>

          {/* Company Registration */}
          <section>
            <h2 className="text-3xl font-semibold text-dark mb-6">Company Registration</h2>
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
            <h2 className="text-3xl font-semibold text-dark mb-6">Our Location</h2>
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
                        <p className="text-gray-900">info@virachem.com</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Business Hours</p>
                        <p className="text-gray-700">Monday - Friday: 9:00 - 17:00 CET</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Response Time</p>
                        <p className="text-gray-700">Quote requests: 24-48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-3xl font-semibold text-dark mb-6">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-accent-red/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-accent-red text-2xl">🧪</span>
                    Research Grade Compounds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We source and distribute high-purity research chemicals (≥95% to ≥99%) with comprehensive analytical 
                    documentation including CoAs and MSDS.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent-teal/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-accent-teal text-2xl">🔬</span>
                    Scientific Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our team provides technical guidance on product specifications, handling procedures, and compliance 
                    requirements for research applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent-gold/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-accent-gold text-2xl">🌍</span>
                    International Shipping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We facilitate secure international shipping with full compliance to EU and international regulations 
                    for chemical distribution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="text-3xl font-semibold text-dark mb-6">Regulatory Compliance</h2>
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
                  ⚠️ Research Use Only: All products are strictly for research and development purposes. 
                  Not for human or veterinary use.
                </p>
              </div>
            </div>
          </section>

          {/* Target Market */}
          <section>
            <h2 className="text-3xl font-semibold text-dark mb-6">Who We Serve</h2>
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
            <h2 className="text-3xl font-semibold text-dark mb-6">Leadership</h2>
            <Card className="border-dark/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-dark text-white flex items-center justify-center text-2xl font-bold">
                    VC
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark">Vice Čuljak</h3>
                    <p className="text-accent-red font-semibold mb-2">Founder & Director</p>
                    <p className="text-gray-700 mb-3">
                      With expertise in finance, biotechnology, and pharmaceutical research, Vice founded ViraChem to 
                      provide European researchers with reliable access to cutting-edge research compounds.
                    </p>
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
            <h2 className="text-3xl font-semibold text-dark mb-4">Ready to Start Your Research?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Request a quote for high-purity research compounds or contact us for more information.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/products">
                <Button className="bg-accent-red hover:bg-accent-red/90 text-white px-8 py-6 text-lg">
                  Browse Products
                </Button>
              </Link>
              <Link href="/quote">
                <Button variant="outline" className="border-dark text-dark hover:bg-dark/10 px-8 py-6 text-lg">
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
