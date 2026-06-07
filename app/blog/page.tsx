import { BlogPaginatedList } from "@/components/blog-paginated-list";
import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Script from "next/script";
import { getAllBlogPostsList } from "../db/blog";

export const metadata: Metadata = {
  title: "Digital Garden / Thoughts",
  description:
    "A casual digital garden of notes from Sefa Oruc on digital nomad life, random observations, startup lessons, Turkish recipes, and internet projects.",
  keywords: [
    "Sefa Oruc Digital Garden",
    "Digital Nomad Notes",
    "Startup Lessons",
    "Random Observations",
    "Turkish Recipes",
    "Internet Projects",
  ],
  openGraph: {
    title: "Digital Garden / Thoughts | Sefa Oruc",
    description:
      "A casual digital garden of notes from Sefa Oruc on digital nomad life, random observations, startup lessons, Turkish recipes, and internet projects.",
    url: "https://sefaoruc.com/blog",
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
    title: "Digital Garden / Thoughts | Sefa Oruc",
    description:
      "A casual digital garden of notes from Sefa Oruc on digital nomad life, random observations, startup lessons, Turkish recipes, and internet projects.",
    images: ["/social/sefa-oruc-og.png"],
  },
  alternates: {
    canonical: "https://sefaoruc.com/blog",
    types: {
      "application/rss+xml": "https://sefaoruc.com/feed.xml",
    },
  },
};

export const dynamic = "force-static";

export default async function Blog() {
  const posts = await getAllBlogPostsList();
  const baseUrl = "https://sefaoruc.com";

  const blogCollectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}/blog`,
    name: "Digital Garden / Thoughts | Sefa Oruc",
    description:
      "A casual digital garden of notes from Sefa Oruc on digital nomad life, random observations, startup lessons, Turkish recipes, and internet projects.",
    url: `${baseUrl}/blog`,
    mainEntity: {
      "@type": "Blog",
      name: "Sefa Oruc's Digital Garden",
      description:
        "Loose notes on digital nomad life, random observations, startup lessons, Turkish recipes, and internet projects.",
      author: {
        "@type": "Person",
        name: "Sefa Oruc",
        url: baseUrl,
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.metadata.title,
        url: `${baseUrl}/blog/${post.slug}`,
        datePublished: post.metadata.publishedAt,
        description: post.metadata.summary,
      })),
    },
  };

  return (
    <Container size="large">
      <Script
        id="blog-collection-structured-data"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionJsonLd),
        }}
      />
      <div className="mb-8">
        <h1 className="text-lg font-medium tracking-tight mb-3">
          Digital Garden / Thoughts
        </h1>
        <p className="text-[15px] leading-relaxed opacity-70">
          Loose notes, tiny lessons, recipes, observations, and half-polished
          thoughts from building, moving around, and spending too much time on
          the internet.
        </p>
      </div>
      <BlogPaginatedList posts={posts} />
    </Container>
  );
}
