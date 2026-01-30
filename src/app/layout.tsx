import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "sonner";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ViraChem | Contract Manufacturing Intermediation & Research API Access | EU-Registered",
  description: "EU-registered contract manufacturing intermediary and access platform connecting qualified European research partners with vetted Central European peptide manufacturing capacity. GMP-aligned coordination layer for research API access, custom manufacturing, and fill & finish services. Based in Split, Croatia.",
  keywords: "contract manufacturing intermediation, research API access, access platform, coordination layer, peptide manufacturing access, engagement models, CDMO, GMP-aligned, manufacturing intermediary, research chemicals, biochemicals, fine chemicals, laboratory supplies, EU, Croatia, research grade, peptides",
  manifest: '/site.webmanifest',
  openGraph: {
    title: "ViraChem | Contract Manufacturing Intermediation & Research API Access",
    description: "EU-registered access platform for GMP-aligned peptide manufacturing and research-grade APIs. Coordination and qualification layer for institutional partners.",
    url: "https://virachemical.com",
    siteName: "ViraChem",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ViraChem - EU-Registered Research Chemical Distribution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViraChem | Contract Manufacturing Intermediation & Research API Access",
    description: "EU-registered access platform for GMP-aligned peptide manufacturing and research-grade APIs.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1F3F',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} antialiased`}>
        <LayoutWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </LayoutWrapper>
        <Toaster position="top-right" />
        <WhatsAppButton />
      </body>
    </html>
  );
}
