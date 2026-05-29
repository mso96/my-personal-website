import Container from "@/components/shared/container";
import Social from "@/components/social";
import { KizzleCTA } from "@/components/kizzle-cta";
import { SoundCloudEmbed } from "@/components/soundcloud-embed";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sefa Oruc is a London-based Marketing Engineer and founder of Wubbie Studio, working with startups on marketing, growth, and digital experiences.",
  keywords: [
    "Sefa Oruc",
    "Sefa Oruc About",
    "Sefa Oruc Marketing Engineer",
    "Wubbie Studio",
    "Londonmaxxing",
    "Marketing Engineer",
    "Growth Marketing",
    "Digital Experiences",
    "London Tech Community",
  ],
  openGraph: {
    title: "About | Sefa Oruc",
    description:
      "Sefa Oruc is a London-based Marketing Engineer and founder of Wubbie Studio, working with startups on marketing, growth, and digital experiences.",
    url: "https://sefaoruc.com",
    images: [
      {
        url: "/social/sefa-oruc.svg",
        width: 1200,
        height: 630,
        alt: "Sefa Oruc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Sefa Oruc",
    description:
      "Sefa Oruc is a London-based Marketing Engineer and founder of Wubbie Studio, working with startups on marketing, growth, and digital experiences.",
    images: ["/social/sefa-oruc.svg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sefa Oruc",
  alternateName: "Sefa",
  jobTitle: "Marketing Engineer & Founder",
  url: "https://sefaoruc.com",
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
  jobLocation: {
    "@type": "Place",
    name: "London",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressLocality: "London",
    },
  },
};

export default function About() {
  return (
    <Container
      size="large"
      className="prose prose-zinc container animate-enter"
    >
      <p className="text-lg font-medium tracking-tight mb-8">
        Hi, I&apos;m Sefa.
      </p>
      {[
        <>
          I&apos;m a Marketing Engineer and founder of{" "}
          <Link
            href="https://wubbiestudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60"
          >
            Wubbie Studio
          </Link>
          , where I work with startups on marketing, growth, and digital
          experiences. I like building things that sit between technology,
          storytelling, and internet culture.
        </>,
        <>
          Alongside client work, we are building{" "}
          <Link
            href="https://londonmaxxing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60"
          >
            Londonmaxxing
          </Link>
          . The movement making London the greatest city in the world to live
          and build in through curated events, stories, and hidden gems. You can
          follow us on{" "}
          <Link
            href="https://x.com/londonmaxxing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60"
          >
            Twitter
          </Link>
          .
        </>,
        <>
          I like moving from spark to shipped quickly: testing ideas, learning
          in public, and shaping messy thoughts into real products, communities,
          and experiences people genuinely care about.
        </>,
        <>
          Outside of work, I&apos;m usually experimenting with AI tools, vibe
          coding random side projects, filming content, joining hackathons, or
          driving my RC car around London. Always building, always shipping,
          always exploring new things.
        </>,
      ].map((paragraph, index, paragraphs) => (
        <div
          key={index}
          style={
            { "--stagger": index } as React.CSSProperties & {
              [key: string]: number;
            }
          }
        >
          <p
            className={`text-[15px] leading-relaxed opacity-80 ${
              index === paragraphs.length - 1 ? "mb-8" : "mb-6"
            }`}
          >
            {paragraph}
          </p>
          {index === 0 && <hr className="border-foreground/10 my-8" />}
        </div>
      ))}
      <figure className="not-prose mb-8 overflow-hidden rounded-lg border border-foreground/10 bg-background">
        <img
          src="/londonmaxxing/londonmaxxing-friends.jpeg"
          alt="Sefa with Charlie, Sarah Drinkwater, Ash, and Ese"
          className="block w-full object-cover"
        />
        <figcaption className="px-3 py-2 text-xs leading-relaxed opacity-55">
          I, Charlie, Sarah Drinkwater, Ash and Ese.
        </figcaption>
      </figure>
      <KizzleCTA />
      <Social />
      <SoundCloudEmbed />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Container>
  );
}
