import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Londonmaxxing 003: Maxxing London Hackathon",
  description:
    "A Londonmaxxing hackathon where builders launched ideas for everyday Londoners.",
  openGraph: {
    title: "Londonmaxxing 003: Maxxing London Hackathon | Sefa Oruc",
    description:
      "Builders came together at Ramen Space to launch ideas for everyday Londoners.",
    url: "https://sefaoruc.com/events/londonmaxxing-003-maxxing-london-hackathon",
    images: [
      {
        url: "/events/londonmaxxing-003-hackathon-hero.jpg",
        width: 1800,
        height: 1200,
        alt: "Builders at the Maxxing London Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Londonmaxxing 003: Maxxing London Hackathon | Sefa Oruc",
    description:
      "Builders came together at Ramen Space to launch ideas for everyday Londoners.",
    images: ["/events/londonmaxxing-003-hackathon-hero.jpg"],
  },
  alternates: {
    canonical:
      "https://sefaoruc.com/events/londonmaxxing-003-maxxing-london-hackathon",
  },
};

const partners = [
  { name: "ElevenLabs", href: "https://x.com/ElevenLabs" },
  { name: "AG Grid", href: "https://x.com/ag_grid" },
  { name: "Zed", href: "https://x.com/zeddotdev" },
  { name: "Arize AI", href: "https://x.com/arizeai" },
  { name: "TRMNL", href: "https://x.com/useTRMNL" },
  { name: "Cloudflare", href: "https://x.com/Cloudflare" },
  { name: "OpenRouter", href: "https://x.com/OpenRouter" },
] as const;

const photos = [
  {
    src: "/events/londonmaxxing-003-hackathon-building.jpg",
    alt: "Builders working together at the Maxxing London Hackathon",
  },
  {
    src: "/events/londonmaxxing-003-hackathon-snacks.jpg",
    alt: "Hackathon attendees taking a break at Ramen Space",
  },
  {
    src: "/events/londonmaxxing-003-hackathon-host.jpg",
    alt: "A Londonmaxxing organiser at the hackathon",
  },
] as const;

const externalLinkClass =
  "font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60";

export default function MaxxingLondonHackathonPage() {
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
          4 July 2026 · Ramen Space, Dalston
        </p>
        <h1 className="max-w-2xl text-2xl font-medium tracking-tight">
          Londonmaxxing 003: Maxxing London Hackathon
        </h1>
      </header>

      <figure className="mb-8 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/events/londonmaxxing-003-hackathon-hero.jpg"
          alt="Builders at the Maxxing London Hackathon"
          className="block aspect-[3/2] w-full object-cover"
        />
      </figure>

      <div className="mb-10 max-w-xl space-y-5 text-[15px] leading-relaxed opacity-80">
        <p>
          We brought builders from near and far to Ramen Space for a full day of
          Maxxing London. The goal was simple: build and launch something that
          helps everyday Londoners and makes the city an even better place to
          live and build.
        </p>
        <p>
          People formed teams, moved quickly, and shipped real ideas in one day.
          It was a room full of energy, experiments, and people who genuinely
          care about making London better.
        </p>

        <div className="pt-2">
          <p className="mb-3 text-xs uppercase tracking-[0.16em] opacity-50">
            Partners
          </p>
          <p className="leading-7">
            {partners.map((partner, index) => (
              <span key={partner.name}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  {partner.name}
                </a>
                {index < partners.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>

        <p>
          <a
            href="https://x.com/Londonmaxxing/status/2075624069165166930?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
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
              className={`block w-full object-cover ${index === 0 ? "aspect-[3/2]" : "aspect-[4/3]"}`}
            />
          </figure>
        ))}
      </div>
    </Container>
  );
}
