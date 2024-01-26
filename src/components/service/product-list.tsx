import { ProductCard } from "./product-card";
import { Prisma } from "@prisma/client";
import { AlertCircle, PackageOpen } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { db } from "@/lib/db";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type Props = {
  type: "rental" | "tour" | "carter";
  searchParams: { [key: string]: string | string[] | undefined };
};

export const ProductList = async ({ type, searchParams }: Props) => {
  const vehicle = await db.vehicle.findMany({
    include: { vehicleImages: true },
  });
  const tour = await db.tour.findMany({ include: { tourImages: true } });
  const carter = await db.carter.findMany({ include: { carterImages: true } });

  if (!vehicle && !tour && !carter) {
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
    <>
      <section className="flex flex-1 flex-wrap gap-6">
        {type === "rental" && vehicle.length > 0 ? (
          vehicle.map((item, index) => (
            <ProductCard key={index} type={type} vehicle={item} />
          ))
        ) : type === "tour" && tour.length > 0 ? (
          tour.map((item, index) => (
            <ProductCard key={index} type={type} tour={item} />
          ))
        ) : type === "carter" && carter.length > 0 ? (
          carter.map((item, index) => (
            <ProductCard key={index} type={type} carter={item} />
          ))
        ) : (
          <div className="flex flex-1 flex-col items-center text-neutral-300 dark:text-neutral-700">
            <PackageOpen className="h-20 w-20" />

            <p>
              <span className="capitalize">{type}</span> belum tersedia
            </p>
          </div>
        )}
      </section>
    </>
  );
};
