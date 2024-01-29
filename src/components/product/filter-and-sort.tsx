"use client";

import { FormEvent, useCallback, useRef } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

type Props = {
  type: "rental" | "tour" | "carter";
};

export const FilterAndSort = ({ type }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const price = searchParams.get("price");
  const q = searchParams.get("q");
  const searchRef = useRef<HTMLInputElement>(null);

  const handleFilter = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      if (name === "q" && value === "") {
        params.delete(name);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const handleSearch = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleFilter("q", e.currentTarget.q.value);
    },
    [handleFilter],
  );

  const handleClear = useCallback(() => {
    if (searchRef.current) {
      searchRef.current.value = "";
    }
    router.push(pathname);
  }, [pathname, router]);

  return (
    <section className="flex flex-wrap gap-4">
      <div className="relative w-full max-w-[400px]">
        <form onSubmit={handleSearch}>
          <Input
            type="search"
            name="q"
            ref={searchRef}
            defaultValue={q ?? ""}
            placeholder={`Cari ${type}`}
            className="pr-10"
          />
        </form>

        <Search
          type="submit"
          className="pointer-events-none absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 transform text-neutral-500"
        />
      </div>

      <Select
        value={price ?? ""}
        onValueChange={value => handleFilter("price", value)}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Urutkan" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="lowest">Termurah</SelectItem>
          <SelectItem value="highest">Termahal</SelectItem>
        </SelectContent>

        <Button variant="link" onClick={handleClear}>
          Atur ulang
        </Button>
      </Select>
    </section>
  );
};
