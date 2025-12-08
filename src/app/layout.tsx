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
  title: "ViraChem | EU-Registered Research Chemical Distribution",
  description: "Licensed intermediation in fine chemicals and biochemicals for research institutions. Based in Split, Croatia. MBS: 060500406",
  keywords: "research chemicals, biochemicals, fine chemicals, laboratory supplies, EU, Croatia, research grade, peptides",
  manifest: '/site.webmanifest',
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
    <html lang="en">
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
