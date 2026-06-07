import Container from "@/components/shared/container";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Company Radar",
  description:
    "Company Radar is a side project for exploring UK company data through a cleaner, faster product experience.",
  openGraph: {
    title: "Company Radar | Sefa Oruc",
    description:
      "A side project for exploring UK company data through a cleaner, faster product experience.",
    url: "https://sefaoruc.com/side-projects/company-radar",
    images: [
      {
        url: "/side-projects/company-radar-preview.png",
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
      "A side project for exploring UK company data through a cleaner, faster product experience.",
    images: ["/side-projects/company-radar-preview.png"],
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
            src="/side-projects/company-radar-preview.png"
            alt="Company Radar homepage preview"
            className="w-full object-cover object-top"
          />
        </div>

        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.16em] opacity-35">
            side project
          </p>
          <h1 className="text-xl font-medium tracking-tight">Company Radar</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed opacity-70">
            A small product for exploring UK company data and making company
            research feel more like a useful internet product than database
            work.
          </p>
          <a
            href="https://companyradar.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-md border border-foreground/15 px-3 py-2 text-sm transition hover:border-foreground/25 hover:bg-foreground/[0.04]"
          >
            Visit Company Radar
          </a>
        </div>

        <div className="space-y-10 border-t border-foreground/10 pt-8">
          <section>
            <h2 className="text-[15px] font-medium tracking-tight">
              Company Radar nedir?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed opacity-70">
              Company Radar is a side project for browsing and understanding UK
              companies with less friction. The idea is simple: make company
              discovery, research, and context easier to scan.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-medium tracking-tight">
              Ne yaptim / hangi problemleri cozdum?
            </h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed opacity-70">
              <p>
                I shaped the experience around quick discovery, clean company
                pages, and a more direct path from search to useful context.
              </p>
              <p>
                The main problem was turning public company data into something
                that feels easier to browse, compare, and come back to.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[15px] font-medium tracking-tight">
              Tech/product tarafi
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed opacity-70">
              The product keeps the interface lightweight and focused: search,
              company context, and useful signals without adding heavy dashboard
              energy. It is built as a practical web product first, with room to
              grow into deeper workflows later.
            </p>
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
          </section>
        </div>
      </article>
    </Container>
  );
}
