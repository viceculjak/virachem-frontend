'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const REGION_OPTIONS = [
  { value: 'eu', label: 'EU region' },
  { value: 'other', label: 'Other' },
];

const TIER_OPTIONS = [
  { value: 'tier1', label: 'Tier 1 Referral' },
  { value: 'tier2', label: 'Tier 2 Authorized Access' },
  { value: 'tier3', label: 'Tier 3 Authorized Distributor' },
  { value: 'not-sure', label: 'Not sure' },
];

export default function PartnerApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    region: '',
    tierInterest: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/partner-apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit application');
      }

      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to submit application. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-dark">Application Received</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base text-gray-700">
              Thank you for your interest in the ViraChem Partner Program. We have received your
              application and will review it shortly. We will contact you at {formData.email} within
              a few business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  Return to Home
                </Button>
              </Link>
              <Link href="/partners/apply" className="flex-1">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Application
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-3 py-6">
        <Link href="/">
          <Button variant="ghost" className="mb-3">
            ← Back to Home
          </Button>
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              Partner Program Application
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Apply to join the ViraChem Partner Program. Tell us about your organization and the
              tier you are interested in.
            </p>
          </div>

          {/* Partner programs explanation */}
          <Card className="shadow-md hover:shadow-lg transition-all mb-8 border-l-4 border-l-[#0B1F3F]">
            <CardHeader>
              <CardTitle className="text-xl text-[#0B1F3F]">
                Our Partner Programs &amp; the Ecosystem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-base">
                ViraChem works with qualified partners under a <strong className="text-[#0B1F3F]">tiered access framework</strong>.
                Partner capabilities grow over time based on performance, compliance, and demonstrated demand. Everyone in the ecosystem benefits.
              </p>
              <ul className="space-y-2 text-sm md:text-base list-disc list-inside text-gray-700">
                <li><strong className="text-[#0B1F3F]">Partners</strong> gain clear roles, regional reach, and the ability to add value for their clients without taking on product or compliance risk they are not authorized for.</li>
                <li><strong className="text-[#0B1F3F]">End clients</strong> get local support, faster access where distribution exists, and a single quality and compliance standard across the network.</li>
                <li><strong className="text-[#0B1F3F]">ViraChem</strong> scales reach and maintains control over API source, specs, documentation, and compliance — so the whole chain stays reliable and EU-compliant.</li>
              </ul>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-sm font-semibold text-[#0B1F3F] mb-2">The three tiers at a glance</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li><span className="font-medium text-[#5A8A8F]">Tier 1 — Referral:</span> Introduce qualified leads; step back; no inventory, no execution risk.</li>
                  <li><span className="font-medium text-[#E8B341]">Tier 2 — Authorized Access:</span> Regional front-end: manage relationships, coordinate projects, add service value; no stock.</li>
                  <li><span className="font-medium text-[#C9364F]">Tier 3 — Authorized Distributor:</span> For proven partners only; limited stock-holding where demand justifies it; fixed formats and RUO labeling.</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                Specific terms and promotion criteria are defined in partner agreements. Use the form below to express your interest and preferred tier.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                {error && (
                  <div
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    role="alert"
                  >
                    {error}
                  </div>
                )}

                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company / Institution (optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company or institution"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Region or country</Label>
                  <Select
                    value={formData.region}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, region: value }))
                    }
                    required
                  >
                    <SelectTrigger className="mt-2 w-full">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      {REGION_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Tier of interest</Label>
                  <Select
                    value={formData.tierInterest}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, tierInterest: value }))
                    }
                    required
                  >
                    <SelectTrigger className="mt-2 w-full">
                      <SelectValue placeholder="Select tier" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIER_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message (optional)</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any additional information for us"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0B1F3F] text-[#0B1F3F] mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent-red hover:bg-accent-red/90 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  size="lg"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
