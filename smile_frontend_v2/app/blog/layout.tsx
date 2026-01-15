import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Smile Organization | African Charity News & Stories',
  description: 'Read inspiring stories, charity news, and updates from Smile Organization. Learn about hunger relief, clean water projects, education programs, and community development in Cameroon.',
  keywords: 'charity blog, african charity news, cameroon charity stories, hunger relief news, clean water africa, education africa, humanitarian stories',
  openGraph: {
    title: 'Blog | Smile Organization | African Charity News & Stories',
    description: 'Read inspiring stories, charity news, and updates from Smile Organization. Learn about hunger relief, clean water, and education in Cameroon.',
    url: 'https://smileorganization.org/blog',
    siteName: 'Smile Organization',
    images: [
      {
        url: '/gallery/smile-organization.jpg',
        width: 1200,
        height: 630,
        alt: 'Smile Organization Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Smile Organization | African Charity News & Stories',
    description: 'Read inspiring stories, charity news, and updates from Smile Organization.',
    images: ['/gallery/smile-organization.jpg'],
  },
  alternates: {
    canonical: 'https://smileorganization.org/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
