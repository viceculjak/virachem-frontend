import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-dark mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> December 4, 2025 | <strong>Last Updated:</strong> December 4, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-6">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">1. Introduction</h2>
            <p className="text-gray-700">
              ViraChem j.d.o.o. ("ViraChem", "we", "us", or "our") is committed to protecting your privacy and personal data. 
              This Privacy Policy explains how we collect, use, store, and protect your personal information in compliance with 
              the General Data Protection Regulation (GDPR) (EU) 2016/679 and Croatian data protection laws.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="text-sm text-blue-900">
                <strong>Company Details:</strong><br />
                ViraChem jednostavno društvo s ograničenom odgovornošću<br />
                Pujanke 24A, 21000 Split, Croatia<br />
                OIB: 73782597071 | MBS: 060500406<br />
                Court: Trgovački sud u Splitu
              </p>
            </div>
          </section>

          {/* Data Controller */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">2. Data Controller</h2>
            <p className="text-gray-700">
              ViraChem j.d.o.o. is the data controller responsible for your personal data. For any privacy-related inquiries, 
              please contact us at:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Email: info@virachemical.com</li>
              <li>Address: Pujanke 24A, 21000 Split, Croatia</li>
            </ul>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">3. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-dark mb-2">3.1 Information You Provide</h3>
            <p className="text-gray-700 mb-3">When you use our services, we may collect:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Contact Information:</strong> Name, email address, phone number, institution/company name</li>
              <li><strong>Quote Requests:</strong> Product inquiries, quantity, purity requirements, research purposes</li>
              <li><strong>Business Information:</strong> Institution affiliation, research lab details</li>
              <li><strong>Communication Data:</strong> Messages, correspondence, support requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-2 mt-4">3.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Usage Data:</strong> Pages visited, time spent, navigation patterns</li>
              <li><strong>Device Information:</strong> IP address, browser type, device type, operating system</li>
              <li><strong>Cookies:</strong> See Section 7 for detailed cookie information</li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">4. Legal Basis for Processing</h2>
            <p className="text-gray-700 mb-3">We process your personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Contract Performance:</strong> Processing quote requests and business inquiries</li>
              <li><strong>Legitimate Interest:</strong> Improving our services, website functionality, and customer support</li>
              <li><strong>Legal Obligation:</strong> Compliance with Croatian and EU chemical distribution regulations</li>
              <li><strong>Consent:</strong> When you provide explicit consent for specific purposes</li>
            </ul>
          </section>

          {/* How We Use Your Data */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">5. How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">We use your personal data to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Process and respond to quote requests</li>
              <li>Provide customer support and technical assistance</li>
              <li>Maintain and improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Prevent fraud and ensure security</li>
              <li>Send service-related communications (with your consent for marketing)</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">6. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-3">We do not sell your personal data. We may share data with:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Hosting, email, analytics (Vercel, Supabase) - all GDPR-compliant</li>
              <li><strong>Legal Authorities:</strong> When required by Croatian or EU law</li>
              <li><strong>Business Partners:</strong> With your explicit consent only</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">7. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-3">
              We use cookies and similar technologies to enhance your experience. You can control cookie preferences through 
              your browser settings.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
              <li><strong>Preference Cookies:</strong> Remember your settings</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">8. Data Retention</h2>
            <p className="text-gray-700">
              We retain personal data only as long as necessary for the purposes stated in this policy or as required by law. 
              Quote requests are typically retained for 3 years for business records and compliance purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">9. Your Rights Under GDPR</h2>
            <p className="text-gray-700 mb-3">As a data subject in the EU, you have the following rights:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to Restriction:</strong> Limit processing of your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-700 mt-3">
              To exercise these rights, contact us at <strong>info@virachemical.com</strong>. We will respond within 30 days.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">10. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal data, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Encryption of data in transit (SSL/TLS)</li>
              <li>Secure hosting infrastructure (EU-based servers)</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
            </ul>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">11. International Data Transfers</h2>
            <p className="text-gray-700">
              Your data is primarily stored within the EU (Croatia and EU-based servers). Any transfers outside the EU 
              are protected by appropriate safeguards such as Standard Contractual Clauses (SCCs) or adequacy decisions.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">12. Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are intended for business and research professionals only. We do not knowingly collect data from 
              individuals under 18 years of age.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">13. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. 
              Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Supervisory Authority */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">14. Supervisory Authority</h2>
            <p className="text-gray-700">
              If you believe your data protection rights have been violated, you have the right to lodge a complaint with 
              the Croatian Data Protection Authority (Agencija za zaštitu osobnih podataka - AZOP):
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-3">
              <p className="text-sm text-gray-800">
                <strong>Agencija za zaštitu osobnih podataka (AZOP)</strong><br />
                Selska cesta 136, 10000 Zagreb, Croatia<br />
                Website: azop.hr<br />
                Email: azop@azop.hr
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-dark mb-3">15. Contact Us</h2>
            <p className="text-gray-700 mb-3">
              For any questions about this Privacy Policy or our data practices, please contact:
            </p>
            <div className="bg-dark/5 border border-dark/20 rounded-lg p-6">
              <p className="text-gray-800">
                <strong>ViraChem j.d.o.o.</strong><br />
                Data Protection Officer<br />
                Pujanke 24A, 21000 Split, Croatia<br />
                Email: info@virachemical.com<br />
                OIB: 73782597071
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
