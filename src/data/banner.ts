import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";

export const getBannerList = async (type?: "displayed") => {
  const data = await db.banner.findMany({
    where: type === "displayed" ? { isDisplayed: true } : undefined,
    orderBy: { createdAt: "desc" },
  });

  return data;
};

export type TBanner = Prisma.BannerGetPayload<{}>;
