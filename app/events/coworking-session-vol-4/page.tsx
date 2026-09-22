import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Coworking Session Vol. 4",
  description:
    "The fourth coworking session with builders at Andaz Adam's Court in London.",
  openGraph: {
    title: "Coworking Session Vol. 4 | Sefa Oruc",
    description:
      "The fourth coworking session with builders at Andaz Adam's Court in London.",
    url: "https://sefaoruc.com/events/coworking-session-vol-4",
    images: [
      {
        url: "/events/coworking-session-vol-4-hero.jpg",
        width: 1800,
        height: 1200,
        alt: "Coworking Session Vol. 4 attendees at Andaz Adam's Court",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coworking Session Vol. 4 | Sefa Oruc",
    description:
      "The fourth coworking session with builders at Andaz Adam's Court in London.",
    images: ["/events/coworking-session-vol-4-hero.jpg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/events/coworking-session-vol-4",
  },
};

const photos = [
  {
    src: "/events/coworking-session-vol-4-working-1.jpg",
    alt: "People working together during Coworking Session Vol. 4",
  },
  {
    src: "/events/coworking-session-vol-4-working-2.jpg",
    alt: "Builders gathering at Andaz Adam's Court in London",
  },
  {
    src: "/events/coworking-session-vol-4-working-3.jpg",
    alt: "Coworking Session Vol. 4 attendees sharing ideas",
  },
] as const;

export default function CoworkingSessionVol4Page() {
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
          22 September 2026 · Andaz Adam&apos;s Court, London
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          Coworking Session Vol. 4
        </h1>
      </header>

      <figure className="mb-8 aspect-[16/9] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/events/coworking-session-vol-4-hero.jpg"
          alt="Coworking Session Vol. 4 attendees at Andaz Adam's Court"
          className="block h-full w-full object-cover object-center"
        />
      </figure>

      <div className="mb-10 max-w-xl space-y-5 text-[15px] leading-relaxed opacity-80">
        <p>
          Hosted our fourth coworking session today at the very fancy Andaz
          Adam&apos;s Court in London :)
        </p>
        <p>
          Such a good mix of people, ideas, and focused energy in the room.
          Every session feels a little bigger, better, and more alive.
        </p>
        <p>See you at the next one 🫂</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo, index) => (
          <figure
            key={photo.src}
            className={`overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035] ${
              index === 2 ? "sm:col-span-2" : ""
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className={`block w-full object-cover ${
                index === 2 ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
            />
          </figure>
        ))}
      </div>
    </Container>
  );
}
