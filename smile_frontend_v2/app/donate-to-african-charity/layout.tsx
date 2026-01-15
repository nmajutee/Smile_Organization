import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate to African Charity | Best African Charities to Donate To | Smile Organization',
  description: 'Looking for the best African charities to donate to? Smile Organization is a trusted Cameroon-based charity helping children with education, food, clean water, and healthcare. Your donation makes a real difference.',
  keywords: 'donate to african charity, african charities to donate to, best african charities, african charity organizations, charitable organizations africa, donations to african charities, african nonprofits',
  openGraph: {
    title: 'Donate to African Charity | Best African Charities to Donate To',
    description: 'Looking for the best African charities to donate to? Smile Organization is a trusted Cameroon-based charity helping children with education, food, clean water, and healthcare.',
    url: 'https://smileorganization.org/donate-to-african-charity',
    siteName: 'Smile Organization',
    images: [
      {
        url: '/gallery/smile-organization.jpg',
        width: 1200,
        height: 630,
        alt: 'Donate to African Charity - Smile Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donate to African Charity | Best African Charities',
    description: 'Looking for the best African charities to donate to? Support children in Cameroon with education, food, water, and healthcare.',
    images: ['/gallery/smile-organization.jpg'],
  },
  alternates: {
    canonical: 'https://smileorganization.org/donate-to-african-charity',
  },
};

export default function DonateToAfricanCharityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
