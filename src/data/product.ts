import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export const getProductList = async ({
  type,
  whereClause,
  orderByClause,
}: TGetProductListParams) => {
  if (type === "rental") {
    return await db.vehicle.findMany({
      include: { vehicleImages: true },
      where: whereClause,
      orderBy: orderByClause,
    });
  } else if (type === "tour") {
    return await db.tour.findMany({
      include: { tourImages: true },
      where: whereClause,
      orderBy: orderByClause,
    });
  } else if (type === "carter") {
    return await db.carter.findMany({
      include: { carterImages: true },
      where: whereClause,
      orderBy: orderByClause,
    });
  }
};

export const getProductDetail = async ({
  type,
  id,
}: TGETProductDetailParams) => {
  if (type === "rental") {
    return await db.vehicle.findUnique({
      include: { vehicleImages: true },
      where: { id },
    });
  } else if (type === "tour") {
    return await db.tour.findUnique({
      include: {
        tourImages: true,
        tourHighlights: true,
        tourItineraries: true,
      },
      where: { id },
    });
  } else if (type === "carter") {
    return await db.carter.findUnique({
      include: { carterImages: true },
      where: { id },
    });
  }
};

type TGetProductListParams = {
  type: "rental" | "tour" | "carter";
  whereClause: any;
  orderByClause: any;
};

type TGETProductDetailParams = {
  type: "rental" | "tour" | "carter";
  id: string;
};
