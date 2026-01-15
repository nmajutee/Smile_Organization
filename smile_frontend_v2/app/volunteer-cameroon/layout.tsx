import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Volunteer in Cameroon | Africa Volunteer Programs | Smile Organization',
  description: 'Volunteer in Cameroon with Smile Organization. Join our volunteer programs to help children with education, feeding programs, healthcare, and community development projects.',
  keywords: 'volunteer cameroon, volunteer in africa, africa volunteer programs, volunteer work africa, volunteer opportunities africa, charity work africa, volunteer with kids africa',
  openGraph: {
    title: 'Volunteer in Cameroon | Africa Volunteer Programs',
    description: 'Volunteer in Cameroon with Smile Organization. Join our volunteer programs to help children with education, feeding programs, and healthcare.',
    url: 'https://smileorganization.org/volunteer-cameroon',
    siteName: 'Smile Organization',
    images: [
      {
        url: '/gallery/about-smile-alwayz-organization.jpg',
        width: 1200,
        height: 630,
        alt: 'Volunteer in Cameroon - Smile Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volunteer in Cameroon | Africa Volunteer Programs',
    description: 'Volunteer in Cameroon with Smile Organization. Help children with education, feeding programs, and healthcare.',
    images: ['/gallery/about-smile-alwayz-organization.jpg'],
  },
  alternates: {
    canonical: 'https://smileorganization.org/volunteer-cameroon',
  },
};

export default function VolunteerCameroonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
