import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nixon Dino B | Professional Portfolio',
  description:
    'Explore the portfolio of Nixon Dino B, an Information Technology student, Software Developer, Data Analyst, and Cloud Computing Enthusiast. View featured projects, technical skills, and achievements.',
  keywords: [
    'Nixon Dino B',
    'Nixon Dino',
    'Portfolio',
    'Software Developer',
    'Data Analyst',
    'Cloud Computing Enthusiast',
    'Python Developer',
    'SQL Developer',
    'IT Student Portfolio',
  ],
  authors: [{ name: 'Nixon Dino B' }],
  creator: 'Nixon Dino B',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nixondino.dev',
    title: 'Nixon Dino B | Professional Portfolio',
    description:
      'Information Technology student specializing in Software Development, Data Analytics, and Cloud Computing.',
    siteName: 'Nixon Dino B Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nixon Dino B | Professional Portfolio',
    description:
      'Information Technology student specializing in Software Development, Data Analytics, and Cloud Computing.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
