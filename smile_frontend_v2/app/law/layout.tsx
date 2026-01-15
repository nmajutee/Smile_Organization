import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal | Smile Organization',
  description: 'Legal information, terms of service, and privacy policy for Smile Organization.',
};

export default function LawPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
