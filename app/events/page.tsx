import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events hosted, organised, and supported by Sefa Oruc in London.",
  openGraph: {
    title: "Events | Sefa Oruc",
    description:
      "Upcoming and past events hosted, organised, and supported by Sefa Oruc in London.",
    url: "https://sefaoruc.com/events",
    images: [
      {
        url: "/events/coworking-session-vol-3-hero.jpg",
        width: 1536,
        height: 1024,
        alt: "Coworking Session Vol. 3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | Sefa Oruc",
    description:
      "Upcoming and past events hosted, organised, and supported by Sefa Oruc in London.",
    images: ["/events/coworking-session-vol-3-hero.jpg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/events",
  },
};

const events = [
  {
    title: "Touch Grass Club 001: Hampstead Heath",
    date: "29 August 2026",
    image: "/events/touch-grass-pixel.png",
    status: "upcoming",
    href: "https://luma.com/583em4zg",
  },
  {
    title: "Coworking Session Vol. 3",
    date: "24 August 2026",
    image: "/events/coworking-session-vol-3-hero.jpg",
    status: "past",
    detailHref: "/events/coworking-session-vol-3",
  },
  {
    title: "Coworking Session Vol. 2",
    date: "4 August 2026",
    image: "/events/coworking-session-vol-2.jpeg",
    status: "past",
    detailHref: "/events/coworking-session-vol-2",
  },
  {
    title: "Coworking Session Vol. 1",
    date: "14 July 2026",
    image: "/events/coworking-session-vol-1-hero.jpg",
    status: "past",
    detailHref: "/events/coworking-session-vol-1",
  },
  {
    title: "Londonmaxxing 003: Maxxing London Hackathon",
    date: "4 July 2026",
    image: "/events/londonmaxxing-003-hackathon-hero.jpg",
    status: "past",
    detailHref: "/events/londonmaxxing-003-maxxing-london-hackathon",
  },
  {
    title: "Londonmaxxing Meetup 002: Pubmaxxing 🍻",
    date: "27 May 2026",
    image: "/events/londonmaxxing-meetup-002-hero.jpg",
    status: "past",
    detailHref: "/events/londonmaxxing-meetup-002",
  },
  {
    title: "Londonmaxxing Meetup 001: Why London Feels Alive Again",
    date: "23 April 2026",
    image: "/events/londonmaxxing-meetup-001-hero.jpg",
    status: "past",
    detailHref: "/events/londonmaxxing-meetup-001",
  },
] as const;

const upcomingEvents = events.filter((event) => event.status === "upcoming");
const pastEvents = events.filter((event) => event.status === "past");

export default function EventsPage() {
  return (
    <Container size="large" className="animate-enter">
      <div className="mb-9">
        <h1 className="mb-3 text-lg font-medium tracking-tight">Events</h1>
        <p className="text-[15px] leading-relaxed opacity-70">
          Events I&apos;ve hosted, organised, and supported.
        </p>
      </div>

      {upcomingEvents.length > 0 && (
        <section className="mb-12" aria-labelledby="upcoming-events">
          <h2
            id="upcoming-events"
            className="mb-4 text-xs uppercase tracking-[0.16em] opacity-40"
          >
            Upcoming
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-lg border border-foreground/10 bg-background sm:grid sm:grid-cols-2"
              >
                <div className="aspect-[40/21] overflow-hidden border-b border-foreground/10 bg-foreground/[0.035] sm:aspect-auto sm:h-full sm:border-b-0 sm:border-r">
                  <img
                    src={event.image}
                    alt={`${event.title} event artwork`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-between p-5 sm:p-6">
                  <div>
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 px-2.5 py-1 text-xs opacity-65">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-40" />
                        <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-foreground opacity-30" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-foreground opacity-70" />
                      </span>
                      Upcoming
                    </span>
                    <h3 className="text-base font-medium tracking-tight">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm opacity-55">{event.date}</p>
                  </div>
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
                  >
                    Register on Luma
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="past-events">
        <h2
          id="past-events"
          className="mb-4 text-xs uppercase tracking-[0.16em] opacity-40"
        >
          Past events
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {pastEvents.map((event) => {
            const card = (
              <article className="h-full overflow-hidden rounded-lg border border-foreground/10 bg-background transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-foreground/15 group-hover:shadow-[0_14px_38px_rgba(0,0,0,0.07)]">
              <div className="aspect-[4/3] overflow-hidden border-b border-foreground/10 bg-foreground/[0.035]">
                <img
                  src={event.image}
                  alt={`${event.title} attendees`}
                  loading="lazy"
                  className={`h-full w-full object-cover ${
                    event.title === "Coworking Session Vol. 3"
                      ? "scale-[1.24] object-[center_48%]"
                      : event.title === "Coworking Session Vol. 2"
                        ? "scale-[1.12] object-center"
                      : ""
                  }`}
                />
              </div>
              <div className="p-4">
                <h3 className="text-[15px] font-medium tracking-tight">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm opacity-55">{event.date}</p>
                <p className="mt-3 text-xs opacity-40">View event →</p>
              </div>
              </article>
            );

            return (
              <Link
                key={event.title}
                href={event.detailHref}
                className="group block"
              >
                {card}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12 border-t border-foreground/10 pt-8">
        <p className="text-[15px] leading-relaxed opacity-70">
          Want to host an event together or have an idea?{" "}
          <a
            href="https://cal.com/mso96"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60"
          >
            Hit me up.
          </a>
        </p>
      </section>
    </Container>
  );
}
