import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Coworking Session Vol. 2",
  description:
    "A Solo Builders coworking session at Curve Club near Old Street, London.",
  openGraph: {
    title: "Coworking Session Vol. 2 | Sefa Oruc",
    description:
      "A few hours of deep work, fresh ideas, and new connections at Curve Club in London.",
    url: "https://sefaoruc.com/events/coworking-session-vol-2",
    images: [
      {
        url: "/events/coworking-session-vol-2.jpeg",
        width: 1200,
        height: 900,
        alt: "Solo Builders at Coworking Session Vol. 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coworking Session Vol. 2 | Sefa Oruc",
    description:
      "A few hours of deep work, fresh ideas, and new connections at Curve Club in London.",
    images: ["/events/coworking-session-vol-2.jpeg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/events/coworking-session-vol-2",
  },
};

const photos = [
  {
    src: "/events/coworking-session-vol-2-working.jpg",
    alt: "Solo Builders working together at Curve Club",
  },
  {
    src: "/events/coworking-session-vol-2-curve-club-1.jpg",
    alt: "Builders working by the windows at Curve Club",
  },
  {
    src: "/events/coworking-session-vol-2-curve-club-2.jpg",
    alt: "Coworking session attendees working at Curve Club",
  },
] as const;

const externalLinkClass =
  "font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60";

export default function CoworkingSessionVol2Page() {
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
          4 August 2026 · Curve Club, Old Street
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          Coworking Session Vol. 2
        </h1>
      </header>

      <figure className="mb-8 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/events/coworking-session-vol-2.jpeg"
          alt="Solo Builders at Coworking Session Vol. 2"
          className="block w-full object-cover"
        />
      </figure>

      <div className="mb-10 max-w-xl space-y-5 text-[15px] leading-relaxed opacity-80">
        <p>
          I hosted another Solo Builders coworking session at{" "}
          <a
            href="https://x.com/_curve_club"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            Curve Club
          </a>
          , near Old Street. A few hours of deep work, followed by fresh ideas
          and new connections during the breaks.
        </p>
        <p>
          The goal is simple: make building cool things in London feel a little
          less lonely.
        </p>
        <p className="text-sm opacity-70">
          Thanks to the{" "}
          <a
            href="https://x.com/upstash"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            Upstash
          </a>{" "}
          team for supporting the meetup with{" "}
          <a
            href="https://x.com/Context7AI"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            Context7
          </a>{" "}
          credits, and to Curve Club for hosting us.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo, index) => (
          <figure
            key={photo.src}
            className={`overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035] ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="block aspect-[4/3] h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </Container>
  );
}
