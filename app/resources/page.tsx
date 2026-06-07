import Container from "@/components/shared/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Fav Website and Resources",
  description:
    "A curated list of websites and design resources Sefa likes, with visual previews and links.",
  openGraph: {
    title: "My Fav Website and Resources | Sefa Oruc",
    description:
      "A curated list of websites and design resources Sefa likes, with visual previews and links.",
    url: "https://sefaoruc.com/resources",
    images: [
      {
        url: "/social/sefa-oruc-og.png",
        width: 1200,
        height: 630,
        alt: "Sefa Oruc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Fav Website and Resources | Sefa Oruc",
    description:
      "A curated list of websites and design resources Sefa likes, with visual previews and links.",
    images: ["/social/sefa-oruc-og.png"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/resources",
  },
};

const websites = [
  {
    title: "Gramicci",
    description:
      "Outdoor clothing with a clean archive feeling, strong product photography, and relaxed visual language.",
    href: "https://gramicci.com/",
  },
  {
    title: "Market",
    description:
      "Playful streetwear, bold graphics, and internet-culture energy without feeling too polished.",
    href: "https://marketstudios.com/",
  },
  {
    title: "Godly",
    description:
      "A strong place to browse sharp website and product UI references when you need visual momentum.",
    href: "https://godly.design/",
  },
  {
    title: "Minimal Gallery",
    description:
      "A quiet library of minimal websites, useful for spacing, restraint, typography, and layout ideas.",
    href: "https://minimal.gallery/",
  },
  {
    title: "Siteinspire",
    description:
      "Classic web design inspiration with a good mix of studios, brands, portfolios, and editorial sites.",
    href: "https://www.siteinspire.com/",
  },
  {
    title: "Savee",
    description:
      "Visual bookmarking for references, moods, typography, campaigns, products, and image-led ideas.",
    href: "https://savee.it/",
  },
  {
    title: "Are.na",
    description:
      "Slow internet research boards for collecting references, rabbit holes, essays, and strange good finds.",
    href: "https://www.are.na/",
  },
  {
    title: "Cosmos",
    description:
      "A modern visual discovery tool for building taste, collecting references, and spotting patterns.",
    href: "https://www.cosmos.so/",
  },
  {
    title: "Mobbin",
    description:
      "Product and mobile UI patterns from real apps, especially useful before designing flows from scratch.",
    href: "https://mobbin.com/",
  },
  {
    title: "Typewolf",
    description:
      "Typography inspiration and font pairing references for making websites feel more intentional.",
    href: "https://www.typewolf.com/",
  },
  {
    title: "Metropol",
    description:
      "A sharp digital world with a strange, cinematic internet feeling and plenty of visual atmosphere.",
    href: "https://www.metropol.world/",
  },
  {
    title: "Asciinator",
    description:
      "A tiny, fun tool for turning images into ASCII-style visuals. Weird in the best internet way.",
    href: "https://asciinator.app/",
  },
  {
    title: "LogoSystem",
    description:
      "A useful archive for studying logo systems, identity structure, and how brands stay flexible.",
    href: "https://logosystem.co/",
  },
  {
    title: "Basement Lab",
    description:
      "Experimental studio work, interaction ideas, and polished digital craft from Basement.",
    href: "https://basement.studio/lab/",
  },
  {
    title: "Unicorn Studio",
    description:
      "A no-code 3D and interactive design tool with a very modern, playful web-native feel.",
    href: "https://www.unicorn.studio/",
  },
] as const;

function previewUrl(url: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url`;
}

export const dynamic = "force-static";

export default function ResourcesPage() {
  return (
    <Container size="large" className="animate-enter">
      <div className="mb-9">
        <h1 className="text-lg font-medium tracking-tight mb-3">
          My Fav Website and Resources
        </h1>
        <p className="text-[15px] leading-relaxed opacity-70">
          A small collection of websites I keep coming back to for design,
          culture, taste, references, and useful internet wandering.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {websites.map((website) => (
          <a
            key={website.href}
            href={website.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-lg border border-foreground/10 bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[0_14px_38px_rgba(0,0,0,0.07)]"
          >
            <div className="aspect-[1.91/1] overflow-hidden border-b border-foreground/10 bg-foreground/[0.035]">
              <img
                src={previewUrl(website.href)}
                alt={`${website.title} website preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
              />
            </div>
            <div className="p-4">
              <h2 className="text-[15px] font-medium tracking-tight">
                {website.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed opacity-65">
                {website.description}
              </p>
              <p className="mt-3 truncate text-xs opacity-40">
                {website.href.replace("https://", "").replace(/\/$/, "")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}
