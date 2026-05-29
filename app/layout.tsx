import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Header } from "@/components/header";

const siteUrl = "https://sefaoruc.com";
const shareImage = "/social/sefa-oruc.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sefa Oruc - London-based Marketing Engineer",
    template: "%s | Sefa Oruc",
  },
  description:
    "Sefa Oruc is a London-based Marketing Engineer and founder of Wubbie Studio, working with startups on marketing, growth, and digital experiences.",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Sefa Oruc",
    "Sefa Oruc Marketing Engineer",
    "Wubbie Studio",
    "Londonmaxxing",
    "Marketing Engineer",
    "Growth Marketing",
    "Digital Experiences",
    "London Tech Community",
    "AI Tools",
    "Internet Culture",
  ],
  authors: [{ name: "Sefa Oruc", url: siteUrl }],
  creator: "Sefa Oruc",
  publisher: "Sefa Oruc",
  openGraph: {
    title: "Sefa Oruc - London-based Marketing Engineer",
    description:
      "Sefa Oruc is a London-based Marketing Engineer and founder of Wubbie Studio, working with startups on marketing, growth, and digital experiences.",
    url: siteUrl,
    siteName: "Sefa Oruc - Marketing Engineer",
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: "Sefa Oruc",
      },
    ],
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/profile/sefa-oruc.png",
    shortcut: "/profile/sefa-oruc.png",
    apple: "/profile/sefa-oruc.png",
    other: {
      rel: "icon",
      url: "/profile/sefa-oruc.png",
    },
  },
  twitter: {
    title: "Sefa Oruc - London-based Marketing Engineer",
    card: "summary_large_image",
    site: "@msefaoruc",
    creator: "@msefaoruc",
    description:
      "London-based Marketing Engineer and founder of Wubbie Studio, working with startups on marketing, growth, and digital experiences.",
    images: [shareImage],
  },
  verification: {
    google: "K1pkJ72cY3DylswXke2MHJGxmjJ91WXwgozcCICvFrU",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "tr-TR": siteUrl,
      "x-default": siteUrl,
    },
    types: {
      "application/rss+xml": `${siteUrl}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sefa Oruc",
    alternateName: "Sefa",
    jobTitle: "Marketing Engineer & Founder",
    url: siteUrl,
    description:
      "London-based Marketing Engineer and founder of Wubbie Studio, working with startups on marketing, growth, and digital experiences.",
    knowsAbout: [
      "Marketing Engineering",
      "Growth Marketing",
      "Digital Experiences",
      "Startups",
      "Community Building",
      "Internet Culture",
      "AI Tools",
      "Storytelling",
    ],
    sameAs: [
      "https://x.com/msefaoruc",
      "https://www.linkedin.com/in/mso96",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Wubbie Studio",
      description:
        "Marketing, growth, and digital experiences studio working with startups.",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressLocality: "London",
    },
    nationality: {
      "@type": "Country",
      name: "United Kingdom",
    },
    workLocation: {
      "@type": "Place",
      name: "London",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
        addressLocality: "London",
      },
    },
  };

  return (
    <html lang="en">
      <body className="bg-background text-foreground overflow-y-scroll">
        <Script
          id="person-structured-data"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is safe
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <main className="antialiased lg:max-w-2xl md:max-w-full mx-4 mb-40 flex flex-col md:flex-row mt-2 sm:mt-8 lg:mx-auto bg-background">
          <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Header />

            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
