"use client";

import { Prisma } from "@prisma/client";

import { Card, CardContent } from "../ui/card";
import { delimiterFormatter } from "@/lib/utils";

type Props = {
  type: "rental" | "tour" | "carter";
  vehicle?: Prisma.VehicleGetPayload<{ include: { vehicleImages: true } }>;
  tour?: Prisma.TourGetPayload<{ include: { tourImages: true } }>;
  carter?: Prisma.CarterGetPayload<{ include: { carterImages: true } }>;
};

export const ProductCard = ({ type, vehicle, tour, carter }: Props) => {
  return (
    <Card className="group w-full max-w-[368px] cursor-default self-start overflow-hidden transition-all duration-500 hover:-translate-y-1.5">
      <img
        src={
          vehicle?.vehicleImages[0]?.imageUrl ??
          tour?.tourImages[0]?.imageUrl ??
          carter?.carterImages[0]?.imageUrl ??
          "/assets/fallback.webp"
        }
        alt={`${vehicle?.name ?? tour?.name ?? carter?.name ?? "product"} image`}
        loading="lazy"
        className="aspect-[1] w-full max-w-[368px] animate-reveal bg-neutral-100 object-cover dark:bg-neutral-850"
        onError={e => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src = "/assets/fallback.webp";
        }}
      />

      <CardContent className="space-y-2 p-4">
        <h3 className="line-clamp-2 text-ellipsis text-xl font-bold transition-all duration-300 group-hover:text-primary">
          {vehicle?.name ?? tour?.name ?? carter?.name}
        </h3>

        {type === "rental" && (
          <p className="text-neutral-500">
            <span>FEATURE 1</span>
            <span>FEATURE 2</span>
            <span>FEATURE 3</span>
          </p>
        )}

        {type === "tour" && (
          <p className="text-neutral-500">
            <span>FEATURE 1</span>
            <span>FEATURE 2</span>
            <span>FEATURE 3</span>
          </p>
        )}

        <p className="line-clamp-1 text-ellipsis">
          <span className="text-2xl font-bold text-accent-dark dark:text-accent-light">
            Rp.{" "}
            {delimiterFormatter(
              vehicle?.price ?? tour?.price ?? carter?.price ?? 0,
            )}
          </span>

          <span className="text-neutral-500"> /hari</span>
        </p>
      </CardContent>
    </Card>
  );
};
