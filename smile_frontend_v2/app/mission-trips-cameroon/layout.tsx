import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mission Trips to Cameroon | Africa Mission Work | Smile Organization',
  description: 'Join mission trips to Cameroon with Smile Organization. Serve communities through education, healthcare, construction, and evangelism while experiencing African culture.',
  keywords: 'mission trips cameroon, mission work africa, africa mission trips, service trips africa, church mission trips, christian missions africa, short term missions',
  openGraph: {
    title: 'Mission Trips to Cameroon | Africa Mission Work',
    description: 'Join mission trips to Cameroon with Smile Organization. Serve communities through education, healthcare, and construction.',
    url: 'https://smileorganization.org/mission-trips-cameroon',
    siteName: 'Smile Organization',
    images: [
      {
        url: '/gallery/smile-organization.jpg',
        width: 1200,
        height: 630,
        alt: 'Mission Trips to Cameroon - Smile Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission Trips to Cameroon | Africa Mission Work',
    description: 'Join mission trips to Cameroon with Smile Organization. Serve communities through education, healthcare, and construction.',
    images: ['/gallery/smile-organization.jpg'],
  },
  alternates: {
    canonical: 'https://smileorganization.org/mission-trips-cameroon',
  },
};

export default function MissionTripsCameroonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
