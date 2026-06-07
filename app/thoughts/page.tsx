import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Resources moved",
  description: "This page has moved to /resources.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://sefaoruc.com/resources",
  },
};

export default function ThoughtsRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/resources" />
      <Container size="large" className="animate-enter">
        <div className="max-w-sm py-10">
          <h1 className="text-lg font-medium tracking-tight">
            Resources moved
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed opacity-65">
            My favorite websites and resources now live at{" "}
            <Link className="underline underline-offset-4" href="/resources">
              /resources
            </Link>
            .
          </p>
        </div>
      </Container>
    </>
  );
}
