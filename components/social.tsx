"use client";

import type { SocialButtonProps } from "@/types";
import IconArrowRightUp from "./shared/icons/arrow-right-up";
import IconLinkedIn from "./shared/icons/linkedin";
import IconX from "./shared/icons/x";

import Link from "next/link";

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      passHref
      className="flex w-full border border-foreground/10 rounded-lg p-4 no-underline items-center hover:bg-foreground/2 hover:border-foreground/20 transition-all justify-between group"
    >
      {children}
      <div className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <IconArrowRightUp />
      </div>
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      <SocialButton href="https://x.com/msefaoruc">
        <div className="flex flex-row items-center">
          <IconX />
          <span className="ml-3 text-[15px] tracking-tight">X / Twitter</span>
        </div>
      </SocialButton>
      <SocialButton href="https://www.linkedin.com/in/mso96">
        <div className="flex flex-row items-center">
          <IconLinkedIn />
          <span className="ml-3 text-[15px] tracking-tight">LinkedIn</span>
        </div>
      </SocialButton>
    </div>
  );
}
