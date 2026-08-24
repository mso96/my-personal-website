import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Coworking Session Vol. 3",
  description:
    "A quiet and focused coworking session with builders at Night Office in London.",
  openGraph: {
    title: "Coworking Session Vol. 3 | Sefa Oruc",
    description:
      "A quiet and focused coworking session with builders at Night Office in London.",
    url: "https://sefaoruc.com/events/coworking-session-vol-3",
    images: [
      {
        url: "/events/coworking-session-vol-3-hero.jpg",
        width: 1800,
        height: 1350,
        alt: "Coworking Session Vol. 3 attendees at Night Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coworking Session Vol. 3 | Sefa Oruc",
    description:
      "A quiet and focused coworking session with builders at Night Office in London.",
    images: ["/events/coworking-session-vol-3-hero.jpg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/events/coworking-session-vol-3",
  },
};

const photos = [
  {
    src: "/events/coworking-session-vol-3-working.jpg",
    alt: "Builders working together during Coworking Session Vol. 3",
  },
  {
    src: "/events/coworking-session-vol-3-room.jpg",
    alt: "Coworking Session Vol. 3 at Night Office in London",
  },
] as const;

const externalLinkClass =
  "font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60";

export default function CoworkingSessionVol3Page() {
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
          24 August 2026 · Night Office, London
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          Coworking Session Vol. 3
        </h1>
      </header>

      <figure className="mb-8 aspect-[16/9] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/events/coworking-session-vol-3-hero.jpg"
          alt="Coworking Session Vol. 3 attendees at Night Office"
          className="block h-full w-full scale-[1.2] object-cover object-[center_48%]"
        />
      </figure>

      <div className="mb-10 max-w-xl space-y-5 text-[15px] leading-relaxed opacity-80">
        <p>
          Today I hosted another coworking session with some super cool people
          in London. 🫡
        </p>
        <p>
          Everyone locked in and worked on their own thing. It was probably the
          quietest session we&apos;ve had, haha.
        </p>
        <p>
          Huge thanks to{" "}
          <a
            href="https://nightoffice.co"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            Night Office
          </a>{" "}
          and Oli for hosting us in such a beautiful space!
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
