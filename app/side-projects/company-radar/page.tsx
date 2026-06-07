import Container from "@/components/shared/container";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Company Radar",
  description:
    "Company Radar is an open-source side project for tracking newly registered UK companies, market signals, SIC codes, and alerts.",
  openGraph: {
    title: "Company Radar | Sefa Oruc",
    description:
      "An open-source side project for tracking newly registered UK companies, market signals, SIC codes, and alerts.",
    url: "https://sefaoruc.com/side-projects/company-radar",
    images: [
      {
        url: "/side-projects/company-radar-overview.png",
        width: 1200,
        height: 630,
        alt: "Company Radar homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Radar | Sefa Oruc",
    description:
      "An open-source side project for tracking newly registered UK companies, market signals, SIC codes, and alerts.",
    images: ["/side-projects/company-radar-overview.png"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/side-projects/company-radar",
  },
};

export default function CompanyRadarPage() {
  return (
    <Container size="large" className="animate-enter">
      <article className="max-w-3xl">
        <div className="mb-8 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035] shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
          <img
            src="/side-projects/company-radar-overview.png"
            alt="Company Radar homepage preview"
            className="w-full object-cover object-top"
          />
        </div>

        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.16em] opacity-35">
            open-source side project
          </p>
          <h1 className="text-xl font-medium tracking-tight">Company Radar</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed opacity-70">
            I built Company Radar to make newly registered UK company data feel
            easier to explore. It tracks Companies House data, highlights fresh
            market signals, and gives people a faster way to spot what is being
            created in the UK right now.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://companyradar.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-foreground/15 px-3 py-2 text-sm transition hover:border-foreground/25 hover:bg-foreground/[0.04]"
            >
              Visit Company Radar
            </a>
            <a
              href="https://github.com/mso96/company-radar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-foreground/15 px-3 py-2 text-sm transition hover:border-foreground/25 hover:bg-foreground/[0.04]"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="space-y-10 border-t border-foreground/10 pt-8">
          <section>
            <h2 className="text-[15px] font-medium tracking-tight">
              What it is
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed opacity-70">
              Company Radar is a live UK company formation intelligence tool. It
              looks at newly incorporated companies and turns that data into
              something you can actually scan: formation volume, top cities, SIC
              codes, hot sectors, business activities, and regional patterns.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-medium tracking-tight">
              Why I built it
            </h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed opacity-70">
              <p>
                I kept thinking there should be a simpler way to see what kind
                of businesses are being created in the UK. Companies House data
                is public, but the useful patterns are not always easy to see at
                a glance.
              </p>
              <p>
                So I built a product around the parts I personally wanted to
                understand faster: what is growing, where it is happening, which
                sectors are active, and which new companies might be worth
                watching.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-medium tracking-tight">
              Real-time company data
            </h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
              <img
                src="/side-projects/company-radar-companies.png"
                alt="Company Radar companies table with live UK company data"
                className="w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed opacity-70">
              <p>
                The companies table is built around real company records:
                company name, number, incorporation date, status, location, and
                SIC codes. I wanted it to feel practical, not like a heavy
                dashboard.
              </p>
              <p>
                Search and pagination make it easier to move through fresh
                companies without losing the simple, fast browsing feeling.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-medium tracking-tight">
              Alerts and signals
            </h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
              <img
                src="/side-projects/company-radar-alerts.png"
                alt="Company Radar alert subscription interface"
                className="w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed opacity-70">
              <p>
                I also added a lightweight alerts layer. Users can pick SIC
                codes and get a weekly email digest with newly incorporated
                companies in those categories.
              </p>
              <p>
                It is intentionally simple: choose the codes, add an email, pay
                through Stripe, and receive fresh signals without checking the
                site every day.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-medium tracking-tight">
              Product and tech notes
            </h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed opacity-70">
              <p>
                I designed the interface to be direct and slightly playful: bold
                borders, clear cards, strong labels, and very little decoration.
                The goal was to make company intelligence feel less boring
                without turning it into a fake startup dashboard.
              </p>
              <p>
                The project is open source, so the code is public and can be
                inspected, forked, or improved. I like building in public when a
                project is useful enough for other people to learn from.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-medium tracking-tight">
              External links
            </h2>
            <a
              href="https://companyradar.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-[15px] underline underline-offset-4 opacity-75 transition hover:opacity-100"
            >
              Visit Company Radar
            </a>
            <a
              href="https://github.com/mso96/company-radar"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 mt-3 inline-flex text-[15px] underline underline-offset-4 opacity-75 transition hover:opacity-100"
            >
              View source on GitHub
            </a>
          </section>
        </div>
      </article>
    </Container>
  );
}
