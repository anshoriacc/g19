import { AlertCircle, PackageOpen } from "lucide-react";
import { Prisma } from "@prisma/client";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ProductCard } from "./product-card";
import { getProductList } from "@/data/product";

type Props = {
  type: "rental" | "tour" | "carter";
  searchParams: { [key: string]: string | string[] | undefined };
};

export const ProductList = async ({ type, searchParams }: Props) => {
  const { q = "", price = "" } = searchParams;

  const whereClause = {
    name: { contains: q, mode: "insensitive" },
  };

  const orderByClause = [
    price === "highest"
      ? { price: "desc" }
      : price === "lowest"
        ? { price: "asc" }
        : {},
    { createdAt: "desc" },
  ];

  const data = await getProductList({ type, whereClause, orderByClause });

  if (!data) {
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
    <section className="flex flex-1 flex-wrap justify-center gap-6 lg:justify-start">
      {type === "rental" && data.length > 0 ? (
        data.map((item, index) => (
          <ProductCard
            key={index}
            type={type}
            vehicle={
              item as Prisma.VehicleGetPayload<{
                include: { vehicleImages: true };
              }>
            }
          />
        ))
      ) : type === "tour" && data.length > 0 ? (
        data.map((item, index) => (
          <ProductCard
            key={index}
            type={type}
            tour={
              item as Prisma.TourGetPayload<{
                include: { tourImages: true };
              }>
            }
          />
        ))
      ) : type === "carter" && data.length > 0 ? (
        data.map((item, index) => (
          <ProductCard
            key={index}
            type={type}
            carter={
              item as Prisma.CarterGetPayload<{
                include: { carterImages: true };
              }>
            }
          />
        ))
      ) : (
        <div className="flex flex-1 flex-col items-center text-neutral-500">
          <PackageOpen className="h-20 w-20" />

          <p>
            <span className="capitalize">{type}</span> belum tersedia.
          </p>
        </div>
      )}
    </section>
  );
};
