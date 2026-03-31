import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LUXE Salon | Premium Hair & Beauty",
    template: "%s | LUXE Salon",
  },
  description:
    "Experience premium hair and beauty services in an atmosphere of sophistication and luxury. Award-winning stylists, eco-friendly products, personalized service.",
  keywords: [
    "salon",
    "hair",
    "beauty",
    "luxury",
    "premium",
    "hairdresser",
    "styling",
    "makeup",
  ],
  authors: [{ name: "LUXE Salon" }],
  creator: "LUXE Salon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxesalon.com",
    title: "LUXE Salon | Premium Hair & Beauty",
    description: "Where Beauty Meets Excellence",
    siteName: "LUXE Salon",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUXE Salon | Premium Hair & Beauty",
    description: "Where Beauty Meets Excellence",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { MotionProvider } from '@/components/motion-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "LUXE Salon",
    description: "Premium hair and beauty services",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Elegant Avenue",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    telephone: "(555) 123-4567",
    url: "https://luxesalon.com",
    openingHours: [
      "Mo-Fr 09:00-19:00",
      "Sa 09:00-18:00",
      "Su 10:00-17:00",
    ],
    priceRange: "$$$",
  };

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen antialiased bg-background text-foreground transition-colors duration-300">
        <MotionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
