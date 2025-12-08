'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (you can connect to API later)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-dark">Message Sent!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-gray-700">
              Thank you for contacting ViraChem. We have received your message and will respond within 24-48 hours.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  Return to Home
                </Button>
              </Link>
              <Button 
                onClick={() => setSubmitted(false)} 
                className="flex-1 bg-accent-red hover:bg-accent-red/90"
              >
                Send Another Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            ← Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">Get in Touch</h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
              Contact our team for technical support, custom synthesis inquiries, or general questions about ViraChem services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-md hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-dark">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Dr. John Smith"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.smith@university.edu"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Technical Support / General Inquiry"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0B1F3F] text-[#0B1F3F] mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent-red hover:bg-accent-red/90 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    size="lg"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-dark">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent-teal mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark">Email</p>
                      <a href="mailto:info@virachemical.com" className="text-accent-teal hover:underline">
                        info@virachemical.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent-teal mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark">Phone</p>
                      <a href="tel:+385976656030" className="text-accent-teal hover:underline">
                        +385 97 665 6030
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-accent-teal mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark">WhatsApp</p>
                      <a href="https://wa.me/385976656030" target="_blank" rel="noopener noreferrer" className="text-accent-teal hover:underline">
                        +385 97 665 6030
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-teal mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark">Address</p>
                      <p className="text-gray-700">
                        Varaždinska 10<br />
                        40000 Čakovec<br />
                        Croatia, European Union
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-dark">Business Registration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-700">
                  <p><strong>Company:</strong> ViraChem j.d.o.o.</p>
                  <p><strong>MBS:</strong> 060500406</p>
                  <p><strong>OIB:</strong> 73782597071</p>
                  <p><strong>Jurisdiction:</strong> Croatia (EU Member State)</p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-dark">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-700">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM (CET)</p>
                  <p><strong>Saturday - Sunday:</strong> Closed</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Technical support inquiries are typically answered within 24-48 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-dark">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/company/virachem" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-[#0077B5]" />
                    </a>
                    <a 
                      href="https://facebook.com/virachem" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6 text-[#1877F2]" />
                    </a>
                    <a 
                      href="https://instagram.com/virachem" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-[#E4405F]" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
