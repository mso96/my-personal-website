import Container from "@/components/shared/container";
import type { Metadata } from "next";
import { WorkClient } from "./work-client";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Sefa Oruc's professional experience and work history. Founder of Kizzle Studio, former Software Developer at Insider, Frontend Engineer at Utilify. Building e-commerce solutions and web applications.",
  keywords: [
    "Sefa Oruc Work",
    "Sefa Oruc Experience",
    "Sefa Oruc Career",
    "Kizzle Studio",
    "Software Developer Turkey",
    "Full Stack Developer Experience",
  ],
  openGraph: {
    title: "Work | Sefa Oruc",
    description:
      "Sefa Oruc's professional experience and work history. Founder of Kizzle Studio, specializing in e-commerce and full-stack development.",
    url: "https://sefaoruc.com/work",
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
    title: "Work | Sefa Oruc",
    description:
      "Sefa Oruc's professional experience and work history.",
    images: ["/social/sefa-oruc.svg"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/work",
  },
};

export default function Work() {
  return (
    <Container size="large">
      <WorkClient />
    </Container>
  );
}
