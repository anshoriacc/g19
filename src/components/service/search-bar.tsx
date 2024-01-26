"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";

type Props = {
  type: "rental" | "tour" | "carter";
};

export const SearchBar = ({ type }: Props) => {
  return (
    <div className="relative w-full max-w-[400px]">
      <Input type="search" placeholder={`Cari ${type}`} className="pr-10" />

      <Search className="pointer-events-none absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 transform text-neutral-200 dark:text-neutral-800" />
    </div>
  );
};
