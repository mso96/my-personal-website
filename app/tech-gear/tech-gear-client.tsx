"use client";

import { useState } from "react";

type GearItem = {
  name: string;
  image: string;
};

type CursorPosition = {
  x: number;
  y: number;
};

export function TechGearClient({ gear }: { gear: readonly GearItem[] }) {
  const [activeItem, setActiveItem] = useState<GearItem | null>(null);
  const [cursor, setCursor] = useState<CursorPosition>({ x: 0, y: 0 });

  return (
    <div
      className="relative grid gap-3"
      onMouseLeave={() => setActiveItem(null)}
    >
      {gear.map((item) => (
        <div
          key={item.name}
          className="group border border-foreground/10 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/15 hover:bg-foreground/[0.025] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
          onMouseEnter={() => setActiveItem(item)}
          onMouseMove={(event) => {
            setActiveItem(item);
            setCursor({ x: event.clientX, y: event.clientY });
          }}
        >
          <p className="text-[15px] font-medium tracking-tight">{item.name}</p>
        </div>
      ))}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-50 hidden size-44 overflow-hidden rounded-[10px] border border-white/70 bg-white/90 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-[opacity,transform] duration-200 ease-out md:block"
        style={{
          left: cursor.x + 18,
          top: cursor.y + 18,
          opacity: activeItem ? 1 : 0,
          transform: activeItem
            ? "translate3d(0, 0, 0) scale(1)"
            : "translate3d(0, 4px, 0) scale(0.98)",
        }}
      >
        {activeItem && (
          <img
            src={activeItem.image}
            alt=""
            className="size-full rounded-[7px] bg-foreground/[0.04] object-contain"
          />
        )}
      </div>
    </div>
  );
}
