import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#006B6B",
};

export const metadata: Metadata = {
  title: "Smile Organization - Empowering Children, Transforming Lives",
  description: "Join us in creating lasting change for vulnerable children in Cameroon. Every donation brings hope, education, and a brighter future.",
  keywords: ["charity", "children", "Cameroon", "education", "donation", "humanitarian", "nonprofit"],
  authors: [{ name: "Smile Organization" }],
  openGraph: {
    title: "Smile Organization - Empowering Children, Transforming Lives",
    description: "Join us in creating lasting change for vulnerable children in Cameroon.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Organization",
    description: "Empowering Children, Transforming Lives",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="antialiased bg-white text-gray-800 font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
