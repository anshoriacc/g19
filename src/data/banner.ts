import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";

export const getBannerList = async (type?: "displayed") => {
  const data = await db.banner.findMany({
    where: type === "displayed" ? { isDisplayed: true } : undefined,
    orderBy: { updatedAt: "desc" },
  });

  return data;
};

export type TBanner = Prisma.BannerGetPayload<{}>;
