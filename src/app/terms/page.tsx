import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-dark mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> December 4, 2025 | <strong>Last Updated:</strong> December 4, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-6">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">1. Introduction</h2>
            <p className="text-gray-700">
              These Terms and Conditions ("Terms") govern your use of the ViraChem website and services provided by 
              ViraChem jednostavno društvo s ograničenom odgovornošću ("ViraChem", "we", "us", or "our"). 
              By accessing or using our website, you agree to be bound by these Terms.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="text-sm text-blue-900">
                <strong>Company Information:</strong><br />
                ViraChem j.d.o.o.<br />
                Pujanke 24A, 21000 Split, Croatia<br />
                OIB: 73782597071 | MBS: 060500406<br />
                Court: Trgovački sud u Splitu<br />
                Activity Code: 46.19.0 (Intermediation in wholesale trade)
              </p>
            </div>
          </section>

          {/* Research Use Only */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">2. Research Use Only - Critical Disclaimer</h2>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 my-4">
              <h3 className="text-xl font-bold text-red-900 mb-3">WARNING: MANDATORY DISCLAIMER</h3>
              <p className="text-red-900 font-semibold mb-3">
                ALL PRODUCTS OFFERED BY VIRACHEM ARE STRICTLY FOR RESEARCH AND DEVELOPMENT PURPOSES ONLY.
              </p>
              <ul className="list-disc pl-6 text-red-800 space-y-2">
                <li><strong>NOT FOR HUMAN CONSUMPTION</strong> - Products are not intended for human use, ingestion, or medical treatment</li>
                <li><strong>NOT FOR VETERINARY USE</strong> - Products are not intended for animal use or veterinary applications</li>
                <li><strong>RESEARCH ONLY</strong> - Products are sold exclusively to qualified research institutions and laboratories</li>
                <li><strong>NO WARRANTIES</strong> - No warranty is provided for suitability for any particular purpose</li>
              </ul>
              <p className="text-red-900 mt-4">
                By requesting a quote or purchasing products, you acknowledge and agree that you will use the products solely for 
                legitimate research purposes in accordance with all applicable laws and regulations.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">3. Eligibility</h2>
            <p className="text-gray-700 mb-3">To use our services, you must:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Be a qualified research professional or institution</li>
              <li>Be at least 18 years of age</li>
              <li>Have the legal authority to enter into this agreement</li>
              <li>Comply with all applicable laws regarding research chemicals in your jurisdiction</li>
              <li>Hold necessary licenses or permits if required by local regulations</li>
            </ul>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">4. Services Provided</h2>
            <p className="text-gray-700 mb-3">ViraChem provides:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Intermediation services for research-grade chemicals and biochemicals</li>
              <li>Product information and technical specifications</li>
              <li>Quote request processing</li>
              <li>Customer support for research inquiries</li>
            </ul>
            <p className="text-gray-700 mt-3">
              ViraChem operates as a licensed intermediary (Activity Code: 46.19.0) and does not manufacture chemicals directly.
            </p>
          </section>

          {/* Quote Process */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">5. Quote Request Process</h2>
            <h3 className="text-xl font-semibold text-dark mb-2">5.1 Quote Requests</h3>
            <p className="text-gray-700 mb-3">
              Submitting a quote request does not constitute a binding agreement. Quotes are valid for 30 days unless otherwise stated.
            </p>
            
            <h3 className="text-xl font-semibold text-dark mb-2">5.2 Order Confirmation</h3>
            <p className="text-gray-700 mb-3">
              An order becomes binding only upon written confirmation from ViraChem and acceptance of payment terms.
            </p>
            
            <h3 className="text-xl font-semibold text-dark mb-2">5.3 Pricing</h3>
            <p className="text-gray-700">
              All prices are quoted in EUR and exclude VAT (unless otherwise stated). Prices are subject to change based on 
              market conditions and availability.
            </p>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">6. Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Payment terms will be specified in each quote</li>
              <li>Standard payment methods: Bank transfer, invoice</li>
              <li>Payment must be received before shipping unless credit terms are agreed</li>
              <li>Late payments may incur interest charges as permitted by Croatian law</li>
            </ul>
          </section>

          {/* Shipping & Delivery */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">7. Shipping and Delivery</h2>
            <h3 className="text-xl font-semibold text-dark mb-2">7.1 Shipping</h3>
            <p className="text-gray-700 mb-3">
              ViraChem ships internationally in compliance with applicable regulations. Shipping costs and delivery times 
              vary by destination and will be specified in the quote.
            </p>
            
            <h3 className="text-xl font-semibold text-dark mb-2">7.2 Import Compliance</h3>
            <p className="text-gray-700 mb-3">
              Customers are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Compliance with import regulations in their country</li>
              <li>Obtaining necessary permits or licenses</li>
              <li>Payment of customs duties, taxes, and fees</li>
              <li>Proper storage and handling of chemicals</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-2">7.3 Risk of Loss</h3>
            <p className="text-gray-700">
              Risk of loss passes to the customer upon delivery to the shipping carrier.
            </p>
          </section>

          {/* Product Quality */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">8. Product Quality and Documentation</h2>
            <p className="text-gray-700 mb-3">
              Products are sold with specifications as stated. We provide:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Certificate of Analysis (CoA) when available</li>
              <li>Material Safety Data Sheets (MSDS/SDS)</li>
              <li>Proper labeling in compliance with regulations</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Customers should verify products upon receipt and report any issues within 7 days.
            </p>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">9. Limitation of Liability</h2>
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 my-3">
              <p className="text-gray-800 font-semibold mb-2">IMPORTANT LEGAL NOTICE:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Products are provided "AS IS" without warranties of any kind</li>
                <li>ViraChem is not liable for misuse, improper handling, or unauthorized applications</li>
                <li>Liability is limited to the purchase price of the product</li>
                <li>ViraChem is not liable for consequential, indirect, or special damages</li>
                <li>Customer assumes all risks associated with the use of research chemicals</li>
              </ul>
            </div>
            <p className="text-gray-700 mt-3">
              This limitation applies to the fullest extent permitted by Croatian and EU law.
            </p>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">10. Regulatory Compliance</h2>
            <p className="text-gray-700 mb-3">Customers agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use products only for legitimate research purposes</li>
              <li>Comply with all applicable laws, including controlled substance regulations</li>
              <li>Maintain proper laboratory practices and safety protocols</li>
              <li>Not resell products without proper authorization</li>
              <li>Keep accurate records as required by local regulations</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">11. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on the ViraChem website, including text, graphics, logos, and software, is the property of ViraChem 
              or its licensors and protected by Croatian and international copyright laws.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">12. Termination</h2>
            <p className="text-gray-700">
              ViraChem reserves the right to refuse service or cancel orders at any time, particularly if we suspect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Misuse or illegal use of products</li>
              <li>Violation of these Terms</li>
              <li>Fraudulent activity</li>
              <li>Safety concerns</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">13. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 mb-3">
              These Terms are governed by the laws of the Republic of Croatia. Any disputes shall be resolved in the courts 
              of Split, Croatia.
            </p>
            <p className="text-gray-700">
              For EU customers, EU consumer protection laws may also apply where relevant.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">14. Changes to Terms</h2>
            <p className="text-gray-700">
              ViraChem reserves the right to modify these Terms at any time. Changes will be posted on this page with 
              an updated effective date. Continued use of our services constitutes acceptance of modified Terms.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">15. Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full effect.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">16. Contact Information</h2>
            <p className="text-gray-700 mb-3">
              For questions about these Terms, please contact:
            </p>
            <div className="bg-dark/5 border border-dark/20 rounded-lg p-6">
              <p className="text-gray-800">
                <strong>ViraChem j.d.o.o.</strong><br />
                Pujanke 24A, 21000 Split, Croatia<br />
                Email: info@virachem.com<br />
                OIB: 73782597071<br />
                MBS: 060500406
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section>
            <div className="bg-dark text-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold mb-3">Acknowledgment</h3>
              <p className="mb-3">
                By using ViraChem services, you acknowledge that you have read, understood, and agree to be bound by these 
                Terms and Conditions, including the research use only disclaimer.
              </p>
              <p className="text-sm text-gray-300">
                Last Updated: December 4, 2025
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
