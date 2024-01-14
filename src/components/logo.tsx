import Link from "next/link";
import { Kanit } from "next/font/google";

import { cn } from "@/lib/utils";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

const Logo = () => {
  return (
    <Link
      href="/"
      className={cn(
        "select-none text-5xl font-bold self-start",
        "bg-gradient-to-b from-primary from-60% bg-clip-text text-transparent",
      )}>
      <span className={kanit.className}>G19</span>
    </Link>
  );
};

export default Logo;
