"use client";

import Image from "next/image";

import g19logo from "@/assets/g19.svg";

export default function ScrollToTopLogo() {
  return (
    <Image
      src={g19logo}
      alt="G19 logo"
      height={32}
      draggable={false}
      priority
      className="cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
  );
}
