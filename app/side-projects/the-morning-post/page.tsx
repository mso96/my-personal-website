import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "The Morning Post",
  description:
    "A fake British news channel that turns submitted websites into short AI-generated television reports.",
  openGraph: {
    title: "The Morning Post | Sefa Oruc",
    description:
      "Submit a website and watch it become a deeply serious, highly questionable British television report.",
    url: "https://sefaoruc.com/side-projects/the-morning-post",
    images: [
      {
        url: "/side-projects/the-morning-post.jpg",
        width: 1800,
        height: 1536,
        alt: "The Morning Post live AI news channel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Morning Post | Sefa Oruc",
    description:
      "Submit a website and watch it become a deeply serious, highly questionable British television report.",
    images: ["/side-projects/the-morning-post.jpg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/side-projects/the-morning-post",
  },
};

const steps = [
  "You submit a public website URL.",
  "A Cloudflare Worker reads the site and creates a simple visual joke with a short British voiceover.",
  "Prodia generates a 15-second video while the current broadcast keeps playing.",
  "The finished report is saved to R2, added to the shared playlist, and cut into the live channel.",
] as const;

export default function TheMorningPostPage() {
  return (
    <Container size="large" className="animate-enter">
      <Link
        href="/side-projects"
        className="mb-8 inline-flex text-sm opacity-50 transition-opacity hover:opacity-100"
      >
        ← All side projects
      </Link>

      <header className="mb-8 max-w-2xl">
        <h1 className="text-2xl font-medium tracking-tight">
          The Morning Post
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed opacity-70">
          News that takes itself far too seriously.
        </p>
      </header>

      <figure className="mb-10 aspect-[16/10] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/side-projects/the-morning-post.jpg"
          alt="The Morning Post live AI news channel showing Britain's most negative swan"
          className="block h-full w-full object-cover object-top"
        />
      </figure>

      <div className="max-w-2xl space-y-9">
        <section className="space-y-5 text-[15px] leading-relaxed opacity-80">
          <p>
            I built a fake British news channel that turns any website into a
            short AI-generated TV report. Submit a link, keep watching the live
            broadcast, and the channel cuts to your story as soon as it is
            ready.
          </p>
          <p>
            The whole thing looks like a forgotten news portal from 2003:
            royal-blue bars, pale-yellow sidebars, underlined links, terrible
            headlines, and an endless stream of highly committed nonsense.
            Inspired by Brass Eye, it keeps generating absurd news with a
            completely serious face.
          </p>
          <p>
            Every story is fictional satire. It is an experiment in turning a
            simple URL into something that feels weirdly close to live
            television, powered by{" "}
            <a
              href="https://prodia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Prodia
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xs uppercase tracking-[0.16em] opacity-40">
            How it works
          </h2>
          <ol className="divide-y divide-foreground/10 border-y border-foreground/10">
            {steps.map((step, index) => (
              <li
                key={step}
                className="grid grid-cols-[2rem_1fr] gap-3 py-3.5 text-sm leading-relaxed"
              >
                <span className="opacity-30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="opacity-75">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-lg border border-foreground/10 p-5 sm:p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.16em] opacity-40">
            Try it or take it apart
          </p>
          <p className="max-w-xl text-sm leading-relaxed opacity-70">
            Built with React, Cloudflare Workers, R2, and Prodia. The whole
            project is open source.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="https://themorningpost.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Watch live ↗
            </a>
            <a
              href="https://github.com/mso96/the-morning-post"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-foreground/15 px-3.5 py-2 text-sm font-medium transition-colors hover:bg-foreground/[0.05]"
            >
              View source on GitHub ↗
            </a>
          </div>
        </section>

        <section className="min-h-24 overflow-hidden">
          <blockquote className="twitter-tweet" data-dnt="true">
            <a href="https://x.com/msefaoruc/status/2094472716828946901?s=20">
              View post on X
            </a>
          </blockquote>
        </section>
      </div>

      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
    </Container>
  );
}
