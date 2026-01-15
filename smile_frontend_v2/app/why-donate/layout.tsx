import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Donate to Smile Organization? | Reasons to Give | African Charity',
  description: 'Discover why Smile Organization is the best choice for your charitable giving. 100% transparency, direct impact in Cameroon, and measurable results.',
  keywords: 'why donate to charity, reasons to donate, best african charity, transparent charity, charity impact, donate cameroon, effective giving',
  openGraph: {
    title: 'Why Donate to Smile Organization? | Reasons to Give',
    description: 'Discover why Smile Organization is the best choice for your charitable giving. 100% transparency and direct impact in Cameroon.',
    url: 'https://smileorganization.org/why-donate',
    siteName: 'Smile Organization',
    images: [
      {
        url: '/gallery/smile-organization.jpg',
        width: 1200,
        height: 630,
        alt: 'Why Donate to Smile Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Donate to Smile Organization? | Reasons to Give',
    description: 'Discover why Smile Organization is the best choice for your charitable giving. 100% transparency and direct impact in Cameroon.',
    images: ['/gallery/smile-organization.jpg'],
  },
  alternates: {
    canonical: 'https://smileorganization.org/why-donate',
  },
};

export default function WhyDonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
