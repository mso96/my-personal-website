"use client";

import { memo, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./shared/container";
import { AvailabilityBadge } from "./availability-badge";
import { AvailabilityDialog } from "./availability-dialog";
import { appConfig } from "@/lib/config";

const NAV_ITEMS = [
  { name: "about", href: "/" },
  { name: "gallery", href: "/gallery" },
  { name: "events", href: "/events" },
  { name: "side projects", href: "/side-projects" },
  { name: "garden", href: "/blog" },
  { name: "tech gear", href: "/tech-gear" },
  { name: "resources", href: "/resources" },
] as const;

export const Header = memo(function Header() {
  const pathname = usePathname();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navLinks = useMemo(
    () =>
      NAV_ITEMS.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={cn(
            pathname === href ? "opacity-100" : "opacity-50",
            "py-1 text-center text-[14px] leading-tight transition-opacity hover:opacity-100 sm:px-2 sm:first:pl-0 sm:text-left sm:text-[15px]"
          )}
        >
          {name}
        </Link>
      )),
    [pathname]
  );

  return (
    <header>
      <Container size="large">
        <nav
          className="fade flex w-full min-w-0 flex-col items-start justify-start py-10 tracking-tight sm:py-12"
          aria-label="Main navigation"
        >
          <div className="flex w-full min-w-0 items-center gap-3">
            <img
              src="/profile/sefa-oruc.png"
              alt="Sefa Oruc"
              className="size-16 shrink-0 rounded-lg border border-foreground/10 bg-foreground/[0.04] object-cover shadow-sm sm:size-[74px]"
            />
            <div className="flex min-w-0 flex-col items-start gap-2 sm:gap-3">
              <div className="flex min-w-0 flex-col items-start">
                <span className="text-base font-medium">Sefa Oruc</span>
                <span className="text-[13px] leading-snug opacity-50 sm:text-sm">
                  London-based Marketing Engineer
                </span>
              </div>
              {appConfig.availability.enabled && (
                <AvailabilityBadge onClick={() => setIsDialogOpen(true)} />
              )}
            </div>
          </div>
          {appConfig.availability.enabled && (
            <AvailabilityDialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
            />
          )}

          <div className="mt-9 w-full tracking-tight sm:mt-6">
            <div className="grid w-full grid-cols-4 items-start gap-x-2 gap-y-2 sm:inline-flex sm:w-auto sm:items-center sm:gap-1">
              {navLinks}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
});
