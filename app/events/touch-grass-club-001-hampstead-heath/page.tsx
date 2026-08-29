import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Touch Grass Club 001: Hampstead Heath",
  description:
    "The first Touch Grass Club walk through Hampstead Heath with good people, fresh air, and conversations away from our screens.",
  openGraph: {
    title: "Touch Grass Club 001: Hampstead Heath | Sefa Oruc",
    description:
      "A walk through Hampstead Heath with good people, fresh air, and conversations away from our screens.",
    url: "https://sefaoruc.com/events/touch-grass-club-001-hampstead-heath",
    images: [
      {
        url: "/events/touch-grass-club-001-hero.jpg",
        width: 1800,
        height: 1200,
        alt: "Touch Grass Club 001 group at Hampstead Heath",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Touch Grass Club 001: Hampstead Heath | Sefa Oruc",
    description:
      "A walk through Hampstead Heath with good people, fresh air, and conversations away from our screens.",
    images: ["/events/touch-grass-club-001-hero.jpg"],
  },
  alternates: {
    canonical:
      "https://sefaoruc.com/events/touch-grass-club-001-hampstead-heath",
  },
};

const photos = [
  {
    src: "/events/touch-grass-club-001-mushroom.jpg",
    alt: "A bright mushroom growing on a mossy tree at Hampstead Heath",
    position: "object-center",
  },
  {
    src: "/events/touch-grass-club-001-pond.jpg",
    alt: "A pond surrounded by trees at Hampstead Heath",
    position: "object-[center_62%]",
  },
  {
    src: "/events/touch-grass-club-001-path.jpg",
    alt: "A woodland path through Hampstead Heath",
    position: "object-[center_58%]",
  },
] as const;

export default function TouchGrassClub001Page() {
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
          29 August 2026 · Hampstead Heath, London
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          Touch Grass Club 001: Hampstead Heath
        </h1>
      </header>

      <figure className="mb-8 aspect-[16/9] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/events/touch-grass-club-001-hero.jpg"
          alt="Touch Grass Club 001 group at Hampstead Heath"
          className="block h-full w-full object-cover object-[center_62%]"
        />
      </figure>

      <div className="mb-10 max-w-xl space-y-5 text-[15px] leading-relaxed opacity-80">
        <p>
          We did the first Touch Grass Club walk at Hampstead Heath. A small
          group of us stepped away from our screens, walked through the Heath,
          and caught up on what everyone was building and thinking about.
        </p>
        <p>
          We started around Parliament Hill, made our way through the woods and
          ponds, and finished near Kenwood. It rained a little, we found some
          mushrooms, and London looked pretty good from up there.
        </p>
        <p>
          The idea is simple: get good people outside, walk, talk, and touch
          some actual grass.
        </p>
      </div>

      <section className="mb-4">
        <h2 className="mb-4 text-xs uppercase tracking-[0.16em] opacity-40">
          The route
        </h2>
        <figure className="aspect-[16/9] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
          <img
            src="/events/touch-grass-club-001-route.jpg"
            alt="Touch Grass Club walking route across Hampstead Heath"
            loading="lazy"
            className="block h-full w-full object-cover object-center"
          />
        </figure>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="aspect-[4/3] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className={`block h-full w-full object-cover ${photo.position}`}
            />
          </figure>
        ))}
      </div>
    </Container>
  );
}
