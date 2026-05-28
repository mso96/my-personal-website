"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import type { AvailabilityDialogProps } from "@/types";

export function AvailabilityDialog({
  open,
  onOpenChange,
}: AvailabilityDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-xl font-medium tracking-tight mb-2">
            Building{" "}
            <Link
              href="https://wubbiestudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60"
            >
              Wubbie Studio
            </Link>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed opacity-80">
              I&apos;m currently focused on building{" "}
              <Link
                href="https://wubbiestudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-foreground/20 underline-offset-4 transition hover:decoration-foreground/60"
              >
                Wubbie Studio
              </Link>{" "}
              and working with startups on marketing, growth, and digital
              experiences.
            </p>

            <div>
              <p className="text-[15px] font-medium leading-relaxed opacity-90 mb-2">
                What we do:
              </p>
              <div className="text-[15px] leading-relaxed opacity-75 space-y-1 pl-1">
                <p>• Marketing and growth systems</p>
                <p>• Digital experiences</p>
                <p>• Community and internet culture projects</p>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed opacity-80">
              Alongside client work, we are building Londonmaxxing, a tech
              community for builders, creatives, hackers, and curious internet
              people in London.
            </p>
          </div>

          <hr className="border-foreground/10" />

          <div className="space-y-4">
            <p className="text-[15px] leading-[22px] opacity-90 font-medium tracking-[-0.6px]">
              Always happy to connect with founders, marketers, developers,
              creatives, and curious internet people.
            </p>

            <div className="flex flex-col gap-3">
              <Button
                asChild
                variant="default"
                className="w-full h-[52px] justify-center tracking-tight"
              >
                <Link
                  href="https://cal.com/mso96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let&apos;s Connect
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-center gap-2 h-[52px] px-5 tracking-[-0.1px]"
              >
                <Link
                  href="mailto:sefa@wubbiestudio.com"
                  className="flex items-center gap-2"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
