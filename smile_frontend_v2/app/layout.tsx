import Script from "next/script";
import type { Metadata } from "next";
import { Josefin_Sans, Open_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Topbar from "@/components/layout/topbar";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BootstrapClient from "@/components/BootstrapClient";
import BackToTop from "@/components/layout/back-to-top";
import WowInit from "@/components/WowInit";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateLocalBusinessSchema,
  generateDonateActionSchema,
  SITE_CONFIG
} from "@/lib/seo-config";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

// Enhanced Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://smileorganization.org'),
  title: {
    default: "Smile Organization | Best African Charity Helping Children in Cameroon",
    template: "%s | Smile Organization"
  },
  description: "Smile Organization is a trusted African charity based in Bamenda, Cameroon. Donate to help children access education, clean water, food, and healthcare. 100% transparent nonprofit.",
  keywords: [
    "african charity", "donate to africa", "cameroon charity", "help children in africa",
    "african charities to donate to", "best african charities", "nonprofit cameroon",
    "donate to african charity", "children in africa", "volunteer in africa",
    "hunger in africa", "clean water africa", "education africa", "NGO cameroon"
  ],
  authors: [{ name: "Smile Organization", url: "https://smileorganization.org" }],
  creator: "Smile Organization",
  publisher: "Smile Organization",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://smileorganization.org",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smileorganization.org",
    siteName: "Smile Organization",
    title: "Smile Organization | Best African Charity Helping Children in Cameroon",
    description: "Donate to Smile Organization, a trusted African charity in Bamenda, Cameroon. Help children access education, clean water, food, and healthcare.",
    images: [
      {
        url: "/gallery/smile-organization.jpg",
        width: 1200,
        height: 630,
        alt: "Smile Organization - Helping Children in Cameroon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Organization | African Charity for Children in Cameroon",
    description: "Donate to help children in Cameroon access education, food, clean water, and healthcare.",
    images: ["/gallery/smile-organization.jpg"],
    creator: "@smileorg",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Charity",
};

// Global Structured Data
const globalSchemas = [
  generateOrganizationSchema(),
  generateWebsiteSchema(),
  generateLocalBusinessSchema(),
  generateDonateActionSchema(),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${openSans.variable}`}>
      <head>
        {/* Global Structured Data for SEO */}
        {globalSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      </head>
      <body>
        <Topbar />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <BackToTop />
        <BootstrapClient />
        <WowInit />

        {/* Scripts */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="/lib/wow/wow.min.js" strategy="beforeInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="lazyOnload" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/lib/counterup/counterup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
