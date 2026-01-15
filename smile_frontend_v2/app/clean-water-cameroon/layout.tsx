import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clean Water in Cameroon | Water for Africa Charity | Smile Organization',
  description: 'Help provide clean water in Cameroon. Our water projects bring safe drinking water to communities across Cameroon, improving health and enabling children to attend school instead of fetching water.',
  keywords: 'clean water cameroon, water for africa, water charity, access to clean water africa, water well donation, clean water projects africa, water crisis cameroon',
  openGraph: {
    title: 'Clean Water in Cameroon | Water for Africa Charity',
    description: 'Help provide clean water in Cameroon. Our water projects bring safe drinking water to communities, improving health and education.',
    url: 'https://smileorganization.org/clean-water-cameroon',
    siteName: 'Smile Organization',
    images: [
      {
        url: '/gallery/smile-organization.jpg',
        width: 1200,
        height: 630,
        alt: 'Clean Water in Cameroon - Smile Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Water in Cameroon | Water for Africa Charity',
    description: 'Help provide clean water in Cameroon. Our water projects bring safe drinking water to communities.',
    images: ['/gallery/smile-organization.jpg'],
  },
  alternates: {
    canonical: 'https://smileorganization.org/clean-water-cameroon',
  },
};

export default function CleanWaterCameroonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
