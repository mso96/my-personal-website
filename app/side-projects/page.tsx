import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Side Projects",
  description:
    "Small internet projects, experiments, and products built by Sefa Oruc.",
  openGraph: {
    title: "Side Projects | Sefa Oruc",
    description:
      "Small internet projects, experiments, and products built by Sefa Oruc.",
    url: "https://sefaoruc.com/side-projects",
    images: [
      {
        url: "/social/sefa-oruc.svg",
        width: 1200,
        height: 630,
        alt: "Sefa Oruc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Side Projects | Sefa Oruc",
    description:
      "Small internet projects, experiments, and products built by Sefa Oruc.",
    images: ["/social/sefa-oruc.svg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/side-projects",
  },
};

export default function SideProjectsPage() {
  return (
    <Container size="large" className="animate-enter">
      <div className="mb-9">
        <h1 className="text-lg font-medium tracking-tight mb-3">
          Side Projects
        </h1>
        <p className="max-w-2xl text-[15px] leading-relaxed opacity-70">
          Small products and experiments I build to explore markets, internet
          behavior, data, and useful little workflows.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/side-projects/company-radar"
          className="group overflow-hidden rounded-lg border border-foreground/10 bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[0_14px_38px_rgba(0,0,0,0.07)]"
        >
          <div className="aspect-[1.91/1] overflow-hidden border-b border-foreground/10 bg-foreground/[0.035]">
            <img
              src="/side-projects/company-radar-preview.png"
              alt="Company Radar homepage preview"
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
            />
          </div>
          <div className="p-4">
            <p className="mb-2 text-xs uppercase tracking-[0.16em] opacity-35">
              product experiment
            </p>
            <h2 className="text-[15px] font-medium tracking-tight">
              Company Radar
            </h2>
            <p className="mt-2 text-sm leading-relaxed opacity-65">
              A UK company discovery and research tool for turning public
              company data into a cleaner, faster browsing experience.
            </p>
            <p className="mt-3 text-xs opacity-40">companyradar.uk</p>
          </div>
        </Link>
      </div>
    </Container>
  );
}
