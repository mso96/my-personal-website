import Container from "@/components/shared/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A curated collection of travel moments, street details, and quiet scenes from Sefa's personal archive.",
};

const photos = [
  {
    src: "/gallery/porto-portugal-2026-1.png",
    caption: "Porto, Portugal, 2026",
    rotate: "-1.3deg",
  },
  {
    src: "/gallery/porto-portugal-2026.png",
    caption: "Porto, Portugal, 2026",
    rotate: "1deg",
  },
  {
    src: "/gallery/sigiriya-sri-lanka-2025.png",
    caption: "Sigiriya, Sri Lanka, 2025",
    rotate: "-0.7deg",
  },
  {
    src: "/gallery/new-york-usa-2025.png",
    caption: "New York, USA, 2025",
    rotate: "1.4deg",
  },
  {
    src: "/gallery/marrakech-morocco-2025.png",
    caption: "Marrakech, Morocco, 2025",
    rotate: "-1deg",
  },
  {
    src: "/gallery/machu-picchu-peru-2026.png",
    caption: "Machu Picchu, Peru, 2026",
    rotate: "0.8deg",
  },
  {
    src: "/gallery/ankara-turkey-2025.jpeg",
    caption: "Ankara, Turkey, 2025",
    rotate: "-1.6deg",
  },
  {
    src: "/gallery/san-francisco-united-states-2024.jpeg",
    caption: "San Francisco, United States, 2024",
    rotate: "1.2deg",
  },
  {
    src: "/gallery/tbilisi-georgia-2025.jpeg",
    caption: "Tbilisi, Georgia, 2025",
    rotate: "-0.8deg",
  },
  {
    src: "/gallery/istanbul-turkey-2022.jpeg",
    caption: "Istanbul, Turkey, 2022",
    rotate: "0.9deg",
  },
  {
    src: "/gallery/taichung-taiwan-2023.jpeg",
    caption: "Taichung, Taiwan, 2023",
    rotate: "-1.1deg",
  },
  {
    src: "/gallery/siem-reap-cambodia-2023.jpeg",
    caption: "Siem Reap, Cambodia, 2023",
    rotate: "1.5deg",
  },
  {
    src: "/gallery/london-uk-2024.jpeg",
    caption: "London, UK, 2024",
    rotate: "-0.6deg",
  },
  {
    src: "/gallery/chiang-mai-thailand-2022.jpeg",
    caption: "Chiang Mai, Thailand, 2022",
    rotate: "1deg",
  },
  {
    src: "/gallery/danang-vietnam-2023.jpeg",
    caption: "Danang, Vietnam, 2023",
    rotate: "-1.4deg",
  },
  {
    src: "/gallery/edinburgh-scotland-2024.jpeg",
    caption: "Edinburgh, Scotland, 2024",
    rotate: "0.7deg",
  },
  {
    src: "/gallery/siem-reap-combodia-2022.jpeg",
    caption: "Siem Reap, Cambodia, 2022",
    rotate: "-0.9deg",
  },
  {
    src: "/gallery/taipei-taiwan-2023.jpeg",
    caption: "Taipei, Taiwan, 2023",
    rotate: "1.3deg",
  },
  {
    src: "/gallery/bali-indonesia-2023.jpeg",
    caption: "Bali, Indonesia, 2023",
    rotate: "-1deg",
  },
  {
    src: "/gallery/isparta-turkey-2024.jpeg",
    caption: "Isparta, Turkey, 2024",
    rotate: "0.8deg",
  },
  {
    src: "/gallery/luang-prabang-laos-2023.jpg",
    caption: "Luang Prabang, Laos, 2023",
    note: "before the slow boat to Chiang Rai",
    rotate: "-1.2deg",
  },
  {
    src: "/gallery/cebu-philippines-2023.jpeg",
    caption: "Cebu, Philippines, 2023",
    rotate: "1.1deg",
  },
  {
    src: "/gallery/petra-jordan-2024.jpeg",
    caption: "Petra, Jordan, 2024",
    rotate: "-0.7deg",
  },
  {
    src: "/gallery/siquijor-philippines-2023.jpeg",
    caption: "Siquijor, Philippines, 2023",
    rotate: "1.4deg",
  },
] as const;

export default function GalleryPage() {
  return (
    <Container size="large" className="animate-enter">
      <div className="mb-10">
        <h1 className="text-lg font-medium tracking-tight mb-3">Gallery</h1>
        <p className="text-[15px] leading-relaxed opacity-70">
          A curated collection of moments from cities, side streets, markets,
          ferries, mountains, and small scenes that stayed with me.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 gap-5 [column-fill:_balance]">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="group mb-5 break-inside-avoid rounded-[6px] bg-[#fbfaf7] p-2.5 pb-4 shadow-[0_10px_32px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(0,0,0,0.12)]"
            style={{ rotate: photo.rotate }}
          >
            <div className="overflow-hidden rounded-[3px] bg-foreground/[0.04]">
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="block w-full object-cover transition duration-500 ease-out group-hover:scale-[1.025]"
              />
            </div>
            <figcaption className="px-1 pt-3 text-[13px] leading-snug text-[#2b2b2b]/80">
              <span className="block font-serif italic tracking-normal">
                {photo.caption}
              </span>
              {"note" in photo && (
                <span className="mt-1 block text-[11px] opacity-55">
                  {photo.note}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
