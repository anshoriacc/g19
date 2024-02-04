"use client";

import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";

import { TBanner } from "@/data/banner";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { parseTime } from "@/lib/utils";
import { EditBanner } from "./edit-banner";
import { DeleteBanner } from "./delete-banner";
import { ToggleBanner } from "./toggle-banner";

export const columns: ColumnDef<TBanner>[] = [
  {
    accessorKey: "number",
    header: "#",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "title",
    header: "Judul",
    cell: ({ row }) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <h3 className="line-clamp-1 w-[120px] text-ellipsis">
              {row.original.title}
            </h3>
          </TooltipTrigger>

          <TooltipContent>
            <p>{row.original.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "image",
    header: "Gambar",
    cell: ({ row }) => (
      <img
        src={row.original.imageUrl}
        alt={row.original.title}
        className="aspect-[3] h-16 animate-reveal rounded-md object-cover"
        loading="lazy"
        onError={e => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src = "/assets/fallback.webp";
        }}
      />
    ),
  },
  {
    accessorKey: "url",
    header: "Tujuan URL",
    cell: ({ row }) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={row.original.url || undefined}
              target="_blank"
              className="line-clamp-1 w-[120px] text-ellipsis">
              {row.original.url || "-"}
            </a>
          </TooltipTrigger>

          <TooltipContent>
            <p>{row.original.url || "Tidak ada"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "isDisplayed",
    header: "Ditampilkan?",
    cell: ({ row }) => (
      <ToggleBanner
        id={row.original.id}
        isDisplayed={row.original.isDisplayed}
      />
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Terakhir Diubah",
    cell: ({ row }) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p>{parseTime(row.original.updatedAt)}</p>
          </TooltipTrigger>

          <TooltipContent>
            <p>{dayjs(row.original.updatedAt).format("DD MMMM YYYY HH:mm")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "action",
    header: "Aksi",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <EditBanner id={row.original.id} />

        <DeleteBanner id={row.original.id} />
      </div>
    ),
  },
];
