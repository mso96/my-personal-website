import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "ESP32 Codex Agent Device",
  description:
    "An open-source physical status display for local Codex tasks, built with an ESP32-S3 and a small AMOLED screen.",
  openGraph: {
    title: "ESP32 Codex Agent Device | Sefa Oruc",
    description:
      "A pocket-sized open-source display that mirrors the lifecycle of local Codex tasks.",
    url: "https://sefaoruc.com/side-projects/esp32-codex-agent-device",
    images: [
      {
        url: "/side-projects/esp32-codex-agent-device.jpg",
        width: 1600,
        height: 1067,
        alt: "ESP32 Codex agent device showing a completed task",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESP32 Codex Agent Device | Sefa Oruc",
    description:
      "A pocket-sized open-source display that mirrors the lifecycle of local Codex tasks.",
    images: ["/side-projects/esp32-codex-agent-device.jpg"],
  },
  alternates: {
    canonical:
      "https://sefaoruc.com/side-projects/esp32-codex-agent-device",
  },
};

const features = [
  "Live task state, from starting and working to completed or failed",
  "Runtime, active model, bridge connection, and non-cached token usage",
  "A procedural avatar that reacts to the current task state",
  "A small web panel for checking the same status from another screen",
] as const;

export default function Esp32CodexAgentDevicePage() {
  return (
    <Container size="large" className="animate-enter">
      <Link
        href="/side-projects"
        className="mb-8 inline-flex text-sm opacity-50 transition-opacity hover:opacity-100"
      >
        ← All side projects
      </Link>

      <header className="mb-8 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] opacity-40">
          Open-source hardware experiment
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          ESP32 Codex Agent Device
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed opacity-70">
          A physical status display for Codex tasks, built around a tiny ESP32
          screen.
        </p>
      </header>

      <figure className="mb-10 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
        <img
          src="/side-projects/esp32-codex-agent-device.jpg"
          alt="ESP32 Codex agent device showing a completed task beside a laptop"
          className="block aspect-[3/2] w-full object-cover"
        />
      </figure>

      <div className="max-w-2xl space-y-9">
        <section className="space-y-5 text-[15px] leading-relaxed opacity-80">
          <p>
            I wanted a simple way to see what Codex was doing without keeping
            the app in front of me all the time, so I turned its task lifecycle
            into a small physical display.
          </p>
          <p>
            The device mirrors local Codex sessions on a 368 by 448 AMOLED
            screen. I can glance at it and see whether a task is starting,
            working, completed, or failed, together with the runtime, model,
            connection status, and token usage.
          </p>
          <p>
            A Python bridge watches local Codex session events and sends the
            status to the ESP32 over the local network. Prompt and response text
            never gets copied to the device.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xs uppercase tracking-[0.16em] opacity-40">
            What it does
          </h2>
          <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
            {features.map((feature, index) => (
              <li
                key={feature}
                className="grid grid-cols-[2rem_1fr] gap-3 py-3.5 text-sm leading-relaxed"
              >
                <span className="opacity-30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="opacity-75">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-foreground/10 p-5 sm:p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.16em] opacity-40">
            Build your own
          </p>
          <p className="max-w-xl text-sm leading-relaxed opacity-70">
            The firmware, Python bridge, web panel, setup instructions, and
            hardware details are all open source.
          </p>
          <a
            href="https://github.com/mso96/ESP32-Codex-agent-device"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            View source on GitHub ↗
          </a>
        </section>
      </div>
    </Container>
  );
}
