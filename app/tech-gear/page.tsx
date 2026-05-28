import Container from "@/components/shared/container";
import type { Metadata } from "next";
import { TechGearClient } from "./tech-gear-client";

export const metadata: Metadata = {
  title: "Tech Gear",
  description:
    "The cameras, computers, phone, drone, and RC gear Sefa uses for building, filming, and experimenting.",
};

const gear = [
  {
    name: "Apple iPhone 14 Pro",
    image: "/tech-gear/apple-iphone-14-pro.svg",
  },
  {
    name: "MacBook Pro Max",
    image: "/tech-gear/macbook-pro-max.svg",
  },
  {
    name: "DJI Osmo Pocket 3",
    image: "/tech-gear/dji-osmo-pocket-3.svg",
  },
  {
    name: "DJI Mini 4 Pro Drone",
    image: "/tech-gear/dji-mini-4-pro-drone.svg",
  },
  {
    name: "Sony Handycam HDR-SR7",
    image: "/tech-gear/sony-handycam-hdr-sr7.svg",
  },
  {
    name: "Arrma QUAKE 223S",
    image: "/tech-gear/arrma-quake-223s.svg",
  },
] as const;

export default function TechGearPage() {
  return (
    <Container size="large" className="animate-enter">
      <div className="mb-8">
        <h1 className="text-lg font-medium tracking-tight mb-3">
          My Tech Gear
        </h1>
        <p className="text-[15px] leading-relaxed opacity-70">
          The tools I use for building, filming, experimenting, and getting
          ideas out into the world.
        </p>
      </div>

      <TechGearClient gear={gear} />
    </Container>
  );
}
