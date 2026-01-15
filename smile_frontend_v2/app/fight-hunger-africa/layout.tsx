import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fight Hunger in Africa | Donate to End Starvation | Smile Organization',
  description: 'Help fight hunger in Africa. Our feeding programs provide nutritious meals to starving children in Cameroon. Donate to end hunger and malnutrition in Africa today.',
  keywords: 'fight hunger africa, starving african children, hunger in africa, food poverty africa, africa hunger crisis, donate to africa starvation, hunger charity organizations, world hunger africa',
  openGraph: {
    title: 'Fight Hunger in Africa | Donate to End Starvation',
    description: 'Help fight hunger in Africa. Our feeding programs provide nutritious meals to starving children in Cameroon.',
    url: 'https://smileorganization.org/fight-hunger-africa',
    siteName: 'Smile Organization',
    images: [
      {
        url: '/gallery/smile-organization.jpg',
        width: 1200,
        height: 630,
        alt: 'Fight Hunger in Africa - Smile Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fight Hunger in Africa | Donate to End Starvation',
    description: 'Help fight hunger in Africa. Our feeding programs provide nutritious meals to starving children in Cameroon.',
    images: ['/gallery/smile-organization.jpg'],
  },
  alternates: {
    canonical: 'https://smileorganization.org/fight-hunger-africa',
  },
};

export default function FightHungerAfricaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
