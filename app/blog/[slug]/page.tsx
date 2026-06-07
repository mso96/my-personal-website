import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getBlogPost, getAllBlogPosts } from "@/app/db/blog";
import { CustomMDX } from "@/components/mdx";
import Container from "@/components/shared/container";
import TableOfContents from "@/components/table-of-contents";
import { extractHeadings, formatDate } from "@/lib/utils";

export const dynamic = "force-static";
export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    modifiedAt: modifiedTime,
    summary: description,
    keywords,
  } = blog.metadata;

  const blogUrl = `https://sefaoruc.com/blog/${blog.slug}`;
  const shareImage = blog.metadata.image || "/social/sefa-oruc-og.png";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      ...(modifiedTime && { modifiedTime }),
      authors: ["Sefa Oruc"],
      url: blogUrl,
      siteName: "Sefa Oruc",
      images: [
        {
          url: shareImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      alternateLocale: ["tr_TR"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@msefaoruc",
      creator: "@msefaoruc",
      images: [shareImage],
    },
    alternates: {
      canonical: blogUrl,
      languages: {
        en: blogUrl,
        tr: blogUrl,
      },
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    notFound();
  }

  const headings = extractHeadings(blog.content);
  const modifiedAt = blog.metadata.modifiedAt;
  const baseUrl = "https://sefaoruc.com";
  const blogUrl = `${baseUrl}/blog/${blog.slug}`;

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.metadata.title,
    datePublished: blog.metadata.publishedAt,
    ...(modifiedAt && { dateModified: modifiedAt }),
    description: blog.metadata.summary,
    image: blog.metadata.image
      ? `${baseUrl}${blog.metadata.image}`
      : `${baseUrl}/social/sefa-oruc-og.png`,
    url: blogUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    author: {
      "@type": "Person",
      name: "Sefa Oruc",
      url: baseUrl,
      sameAs: [
        "https://github.com/mso96",
        "https://x.com/msefaoruc",
        "https://www.linkedin.com/in/mso96",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Sefa Oruc",
      url: baseUrl,
    },
    inLanguage: "en-US",
    ...(blog.metadata.keywords && {
      keywords: Array.isArray(blog.metadata.keywords)
        ? blog.metadata.keywords.join(", ")
        : blog.metadata.keywords,
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.metadata.title,
        item: blogUrl,
      },
    ],
  };

  return (
    <Container size="large">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tight">
        {blog.metadata.title}
      </h1>
      <div className="flex justify-start items-center mt-3 mb-8 text-sm">
        <p className="text-[15px] opacity-60 tracking-tight">
          {formatDate(blog.metadata.publishedAt)}
        </p>
        <span className="mx-2 opacity-40">—</span>
        <p className="text-[15px] opacity-60 tracking-tight">
          {blog.readingTime} min read
        </p>
      </div>
      <TableOfContents headings={headings} />
      <article className="prose prose-quoteless prose-neutral text-justify w-auto">
        <CustomMDX source={blog.content} />
      </article>
    </Container>
  );
}
