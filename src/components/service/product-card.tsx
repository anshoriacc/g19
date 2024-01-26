"use client";

import { Prisma } from "@prisma/client";

import { Card, CardContent } from "../ui/card";

type Props = {
  type: "rental" | "tour" | "carter";
  product:
    | Prisma.VehicleGetPayload<{ include: { vehicleImages: true } }>
    | Prisma.TourGetPayload<{ include: { tourImages: true } }>
    | Prisma.CarterGetPayload<{ include: { carterImages: true } }>;
};

export const ProductCard = ({ type, product }: Props) => {
  return (
    <Card className="group w-full max-w-[368px] cursor-default overflow-hidden transition-all duration-500 hover:-translate-y-1.5">
      <img
        src={""}
        alt="alt"
        loading="lazy"
        width={368}
        height={368}
        className="aspect-[1] max-w-[368px] animate-reveal bg-neutral-100 object-cover dark:bg-neutral-850"
        onError={e => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src = "/assets/fallback.webp";
        }}
      />

      <CardContent className="space-y-2 p-4">
        <h3 className="line-clamp-2 text-ellipsis text-xl font-bold transition-all duration-300 group-hover:text-primary">
          Product Name
        </h3>

        <p className="text-neutral-500">
          <span>FEATURE 1</span>
          <span>FEATURE 2</span>
          <span>FEATURE 3</span>
        </p>

        <p className="line-clamp-1 text-ellipsis">
          <span className="text-2xl font-bold text-accent-dark dark:text-accent-light">
            Rp. 1.234.567
          </span>
          <span className="text-neutral-500"> /hari</span>
        </p>
      </CardContent>
    </Card>
  );
};
