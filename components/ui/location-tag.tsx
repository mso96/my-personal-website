"use client";

import { useEffect, useState } from "react";

type LocationTagProps = {
  city: string;
  country: string;
  timezone: string;
};

function getLocalTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Los_Angeles",
  }).format(new Date());
}

export function LocationTag({ city, country, timezone }: LocationTagProps) {
  const [time, setTime] = useState(getLocalTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getLocalTime());
    }, 30_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="group mt-3 inline-flex w-full items-center justify-between overflow-hidden rounded-lg border border-foreground/10 bg-background px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      <div>
        <p className="text-[15px] font-medium tracking-tight">
          {city}, {country}
        </p>
        <p className="mt-1 text-xs opacity-45">Hover to reveal local time</p>
      </div>
      <div className="translate-y-1 text-right opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm font-medium tabular-nums tracking-tight">
          {time}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.14em] opacity-45">
          {timezone}
        </p>
      </div>
    </div>
  );
}
