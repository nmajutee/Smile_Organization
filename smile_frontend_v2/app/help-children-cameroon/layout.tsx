import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Children in Cameroon | Support African Children | Smile Organization',
  description: 'Help children in Cameroon access education, food, clean water, and healthcare. Smile Organization works directly with communities in Bamenda and across Cameroon to support vulnerable children.',
  keywords: 'help children cameroon, children in africa, kids in africa, poor kids in africa, starving children cameroon, african children, support african children, cameroon charity',
  openGraph: {
    title: 'Help Children in Cameroon | Support African Children',
    description: 'Help children in Cameroon access education, food, clean water, and healthcare. Support vulnerable children through Smile Organization.',
    url: 'https://smileorganization.org/help-children-cameroon',
    siteName: 'Smile Organization',
    images: [
      {
        url: '/gallery/smile-organization.jpg',
        width: 1200,
        height: 630,
        alt: 'Help Children in Cameroon - Smile Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help Children in Cameroon | Support African Children',
    description: 'Help children in Cameroon access education, food, clean water, and healthcare.',
    images: ['/gallery/smile-organization.jpg'],
  },
  alternates: {
    canonical: 'https://smileorganization.org/help-children-cameroon',
  },
};

export default function HelpChildrenCameroonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
