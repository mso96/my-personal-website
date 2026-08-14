import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Coworking Session Vol. 1",
  description:
    "The first Solo Builders LDN coworking session at Tradestars Islington, powered by each::labs.",
  openGraph: {
    title: "Coworking Session Vol. 1 | Sefa Oruc",
    description:
      "Breakfast, focused work, builder catch-ups, and baklava at Tradestars Islington.",
    url: "https://sefaoruc.com/events/coworking-session-vol-1",
    images: [
      {
        url: "/events/coworking-session-vol-1-hero.jpg",
        width: 1800,
        height: 1571,
        alt: "Solo Builders at Coworking Session Vol. 1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coworking Session Vol. 1 | Sefa Oruc",
    description:
      "Breakfast, focused work, builder catch-ups, and baklava at Tradestars Islington.",
    images: ["/events/coworking-session-vol-1-hero.jpg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/events/coworking-session-vol-1",
  },
};

const photos = [
  {
    src: "/events/coworking-session-vol-1-workspace-1.jpg",
    alt: "Solo Builders working together at Tradestars Islington",
  },
  {
    src: "/events/coworking-session-vol-1-workspace-2.jpg",
    alt: "Coworking session attendees at Tradestars Islington",
  },
] as const;

const externalLinkClass =
  "font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60";

export default function CoworkingSessionVol1Page() {
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
          14 July 2026 · Tradestars Islington
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          Coworking Session Vol. 1
        </h1>
      </header>

      <figure className="mb-8 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/events/coworking-session-vol-1-hero.jpg"
          alt="Solo Builders at Coworking Session Vol. 1"
          className="block w-full object-cover"
        />
      </figure>

      <div className="mb-10 max-w-xl space-y-5 text-[15px] leading-relaxed opacity-80">
        <p>
          I hosted the first Solo Builders LDN coworking morning at Tradestars
          Islington, powered by{" "}
          <a
            href="https://x.com/eachlabs"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            each::labs
          </a>
          . Around 15 of us started with breakfast, spent a few focused hours on
          our own things, then caught up on what everyone was building. We
          finished with baklava.
        </p>
        <p>
          I really enjoyed this one. There is something nice about being around
          people who are all building, even when everyone is working on a
          completely different idea.
        </p>
        <p className="text-sm opacity-70">
          Big thanks to the each::labs team and Tradestars Islington for
          supporting the meetup and helping us make these mornings happen.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]"
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
