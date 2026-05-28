import Link from "next/link";

export function KizzleCTA() {
  return (
    <section
      className="relative mb-8 overflow-hidden rounded-lg border border-sky-100/70 bg-[#f7f8fb] p-6"
      style={{
        background:
          "linear-gradient(rgba(255,255,255,0.34), rgba(255,255,255,0.58)), url('/backgrounds/cloudy-skies.jpg') center / cover",
      }}
    >
      <div className="relative max-w-xl">
        <p className="text-sm leading-relaxed text-[#102033]/75">
          Always up for meeting good people. If you are building something,
          growing something, or just want to talk internet, marketing, or ideas,
          say hi.
        </p>
        <Link
          href="https://cal.com/mso96"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-[#102033] px-4 text-sm font-medium tracking-tight text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md active:translate-y-0"
        >
          call me
        </Link>
      </div>
    </section>
  );
}
