import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Londonmaxxing Meetup 001: Why London Feels Alive Again",
  description:
    "The first sold-out Londonmaxxing meetup at Ramen Space in Dalston.",
  openGraph: {
    title: "Londonmaxxing Meetup 001 | Sefa Oruc",
    description:
      "Why London Feels Alive Again. The first sold-out Londonmaxxing meetup at Ramen Space in Dalston.",
    url: "https://sefaoruc.com/events/londonmaxxing-meetup-001",
    images: [
      {
        url: "/events/londonmaxxing-meetup-001-hero.jpg",
        width: 1800,
        height: 1350,
        alt: "The audience at Londonmaxxing Meetup 001",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Londonmaxxing Meetup 001 | Sefa Oruc",
    description:
      "Why London Feels Alive Again. The first sold-out Londonmaxxing meetup at Ramen Space in Dalston.",
    images: ["/events/londonmaxxing-meetup-001-hero.jpg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/events/londonmaxxing-meetup-001",
  },
};

const photos = [
  {
    src: "/events/londonmaxxing-meetup-001-panel.jpg",
    alt: "Panel discussion at Londonmaxxing Meetup 001",
    wide: true,
  },
  {
    src: "/events/londonmaxxing-meetup-001-friends-1.jpg",
    alt: "Guests at Londonmaxxing Meetup 001",
    wide: false,
  },
  {
    src: "/events/londonmaxxing-meetup-001-friends-2.jpg",
    alt: "Friends at Londonmaxxing Meetup 001",
    wide: false,
  },
  {
    src: "/events/londonmaxxing-meetup-001-ramen-space.jpg",
    alt: "Londonmaxxing organisers at Ramen Space",
    wide: true,
  },
  {
    src: "/events/londonmaxxing-meetup-001-predictions.jpg",
    alt: "Printed Londonmaxxing predictions from the meetup",
    wide: true,
  },
] as const;

export default function LondonmaxxingMeetup001Page() {
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
          23 April 2026 · Ramen Space, Dalston
        </p>
        <h1 className="max-w-2xl text-2xl font-medium tracking-tight">
          Londonmaxxing Meetup 001: Why London Feels Alive Again
        </h1>
      </header>

      <figure className="mb-8 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/events/londonmaxxing-meetup-001-hero.jpg"
          alt="The audience at Londonmaxxing Meetup 001"
          className="block aspect-[4/3] w-full object-cover"
        />
      </figure>

      <div className="mb-10 max-w-xl space-y-5 text-[15px] leading-relaxed opacity-80">
        <p>
          We hosted the first sold-out Londonmaxxing meetup at Ramen Space in
          Dalston. A room full of people came together to talk about why London
          feels alive again and how we can make it an even better city to live,
          meet, and build in.
        </p>
        <p>
          Good conversations, new connections, and plenty of London energy. A
          strong start for Londonmaxxing, and definitely not the last one.
        </p>
        <p>
          <a
            href="https://x.com/Londonmaxxing/status/2049130122154774607?utm_source=luma"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60"
          >
            See the original recap on X →
          </a>
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className={`overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035] ${photo.wide ? "sm:col-span-2" : ""}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className={`block w-full object-cover ${photo.wide ? "aspect-[16/9]" : "aspect-[3/4]"}`}
            />
          </figure>
        ))}
      </div>
    </Container>
  );
}
