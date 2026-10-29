import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Coworking Session Vol. 5",
  description:
    "The fifth coworking session with builders at London Startup Center.",
  openGraph: {
    title: "Coworking Session Vol. 5 | Sefa Oruc",
    description:
      "The fifth coworking session with builders at London Startup Center.",
    url: "https://sefaoruc.com/events/coworking-session-vol-5",
    images: [
      {
        url: "/events/coworking-session-vol-5-hero.jpg",
        width: 1800,
        height: 1350,
        alt: "Builders at Coworking Session Vol. 5",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coworking Session Vol. 5 | Sefa Oruc",
    description:
      "The fifth coworking session with builders at London Startup Center.",
    images: ["/events/coworking-session-vol-5-hero.jpg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/events/coworking-session-vol-5",
  },
};

const photos = [
  {
    src: "/events/coworking-session-vol-5-pizza.jpg",
    alt: "Builders taking a pizza break during Coworking Session Vol. 5",
  },
  {
    src: "/events/coworking-session-vol-5-working.jpg",
    alt: "Builders working together at London Startup Center",
  },
  {
    src: "/events/coworking-session-vol-5-baklava.jpg",
    alt: "Baklava at Coworking Session Vol. 5",
  },
] as const;

export default function CoworkingSessionVol5Page() {
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
          17 October 2026 · London Startup Center
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          Coworking Session Vol. 5
        </h1>
      </header>

      <figure className="mb-8 aspect-[16/9] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/events/coworking-session-vol-5-hero.jpg"
          alt="Builders at Coworking Session Vol. 5"
          className="block h-full w-full object-cover object-[center_72%]"
        />
      </figure>

      <div className="mb-10 max-w-xl space-y-5 text-[15px] leading-relaxed opacity-80">
        <p>
          Another great session with builders today. We got work done, shared
          ideas, and made time for plenty of Turkish tea, pizza, and baklava.
        </p>
        <p>
          We also hosted one-to-one founder advisory sessions with Ali Servet
          Eyuboglu, helping founders think through GTM, sales, fundraising, and
          growth.
        </p>
        <p>
          Huge thanks to Ali, Yagmur, and{" "}
          <a
            href="https://x.com/LDNstartupctr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60"
          >
            London Startup Center
          </a>{" "}
          for hosting us and supporting the community. Seeing builders help
          each other is exactly why we started this. See you at the next one 🙂
        </p>
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
