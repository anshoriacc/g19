import { ProductCard } from "./product-card";
import { Prisma } from "@prisma/client";
import { AlertCircle, PackageOpen } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { db } from "@/lib/db";

type Props = {
  type: "rental" | "tour" | "carter";
  searchParams: { [key: string]: string | string[] | undefined };
};

export const ProductList = async ({ type, searchParams }: Props) => {
  let data:
    | Prisma.VehicleGetPayload<{ include: { vehicleImages: true } }>[]
    | Prisma.TourGetPayload<{ include: { tourImages: true } }>[]
    | Prisma.CarterGetPayload<{ include: { carterImages: true } }>[]
    | null = null;

  if (type === "rental") {
    data = await db.vehicle.findMany({ include: { vehicleImages: true } });
    if (!data) data = null;
  } else if (type === "tour") {
    data = await db.tour.findMany({ include: { tourImages: true } });
    if (!data) data = null;
  } else if (type === "carter") {
    data = await db.carter.findMany({ include: { carterImages: true } });
    if (!data) data = null;
  }

  if (data === null) {
    return (
      <Alert variant="destructive" className="bg-white dark:bg-neutral-950">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
          Terjadi kesalahan, silakan coba lagi.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <section className="flex flex-wrap justify-center gap-6">
      {data.length > 0 ? (
        data.map((product, index) => (
          <ProductCard key={index} type={type} product={product} />
        ))
      ) : (
        <div className="flex flex-col items-center text-neutral-300 dark:text-neutral-700">
          <PackageOpen className="h-20 w-20" />
          <p>
            <span className="capitalize">{type}</span> belum tersedia
          </p>
        </div>
      )}
    </section>
  );
};
