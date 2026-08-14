import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Londonmaxxing Meetup 002: Pubmaxxing 🍻",
  description:
    "Pubmaxxing, the second Londonmaxxing meetup, with drinks, London hot takes, and good people.",
  openGraph: {
    title: "Londonmaxxing Meetup 002: Pubmaxxing 🍻 | Sefa Oruc",
    description:
      "The second Londonmaxxing meetup, with drinks, London hot takes, and good people.",
    url: "https://sefaoruc.com/events/londonmaxxing-meetup-002",
    images: [
      {
        url: "/events/londonmaxxing-meetup-002-hero.jpg",
        width: 1800,
        height: 1350,
        alt: "The group at Londonmaxxing Meetup 002: Pubmaxxing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Londonmaxxing Meetup 002: Pubmaxxing 🍻 | Sefa Oruc",
    description:
      "The second Londonmaxxing meetup, with drinks, London hot takes, and good people.",
    images: ["/events/londonmaxxing-meetup-002-hero.jpg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/events/londonmaxxing-meetup-002",
  },
};

const photos = [
  {
    src: "/events/londonmaxxing-meetup-002-crowd.jpg",
    alt: "Guests talking at Pubmaxxing",
  },
  {
    src: "/events/londonmaxxing-meetup-002-interview-1.jpg",
    alt: "London hot takes interview at Pubmaxxing",
  },
  {
    src: "/events/londonmaxxing-meetup-002-interview-2.jpg",
    alt: "Guests sharing London hot takes at Pubmaxxing",
  },
] as const;

export default function LondonmaxxingMeetup002Page() {
  return (
    <Container size="large" className="animate-enter">
      <Link
        href="/events"
        className="mb-8 inline-flex text-sm opacity-50 transition-opacity hover:opacity-100"
      >
        ← All events
      </Link>

      <header className="mb-8">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] opacity-40">
          27 May 2026 · London
        </p>
        <h1 className="max-w-2xl text-2xl font-medium tracking-tight">
          Londonmaxxing Meetup 002: Pubmaxxing 🍻
        </h1>
      </header>

      <figure className="mb-8 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/events/londonmaxxing-meetup-002-hero.jpg"
          alt="The group at Londonmaxxing Meetup 002: Pubmaxxing"
          className="block aspect-[4/3] w-full object-cover"
        />
      </figure>

      <div className="mb-10 max-w-xl space-y-5 text-[15px] leading-relaxed opacity-80">
        <p>
          We hosted our second Londonmaxxing meetup and took things to the pub.
          Pubmaxxing brought together another great group of people for drinks,
          conversations, and a relaxed evening in London.
        </p>
        <p>
          We also set up a London hot takes corner where people shared what they
          love about the city, what they are building, and their spiciest London
          opinions. Simple idea, good people, really fun night.
        </p>
        <p>
          <a
            href="https://x.com/Londonmaxxing/status/2062512246568169857?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60"
          >
            See the original recap on X →
          </a>
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo, index) => (
          <figure
            key={photo.src}
            className={`overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035] ${index === 0 ? "sm:col-span-2" : ""}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className={`block w-full object-cover ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
            />
          </figure>
        ))}
      </div>
    </Container>
  );
}
