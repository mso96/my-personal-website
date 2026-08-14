"use client";

import { useState } from "react";

type GearItem = {
  name: string;
  image: string;
};

export function TechGearClient({ gear }: { gear: readonly GearItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = gear[activeIndex];

  return (
    <>
      <div className="hidden gap-8 md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="border-t border-foreground/10">
          {gear.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.name}
                type="button"
                aria-pressed={isActive}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="group flex h-14 w-full items-center gap-4 border-b border-foreground/10 text-left outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/20"
              >
                <span
                  className={`w-6 text-[11px] tabular-nums transition-opacity ${
                    isActive ? "opacity-55" : "opacity-25"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`min-w-0 flex-1 text-[15px] tracking-tight transition-opacity ${
                    isActive
                      ? "font-medium opacity-100"
                      : "opacity-45 group-hover:opacity-75"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-px bg-foreground transition-all duration-300 ${
                    isActive ? "w-6 opacity-45" : "w-0 opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="sticky top-6 self-start">
          <div className="h-[21rem] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.025]">
            <img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.name}
              className="size-full scale-[1.03] animate-enter object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs opacity-35">
            <span>{activeItem.name}</span>
            <span className="tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} / {" "}
              {String(gear.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:hidden">
        {gear.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`View ${item.name}`}
            onClick={() => setActiveIndex(index)}
            className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-4 overflow-hidden rounded-lg border border-foreground/10 bg-background p-3 text-left outline-none transition-colors active:bg-foreground/[0.025] focus-visible:ring-2 focus-visible:ring-foreground/20"
          >
            <span className="flex aspect-square items-center justify-center rounded-md bg-foreground/[0.025] p-2.5">
              <img
                src={item.image}
                alt=""
                className="size-full object-contain"
              />
            </span>
            <span className="flex min-w-0 items-center gap-3">
              <span className="text-[11px] tabular-nums opacity-30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] font-medium tracking-tight">
                {item.name}
              </span>
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
