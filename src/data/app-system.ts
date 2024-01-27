import * as z from "zod";

import { db } from "@/lib/db";
import { appSystemSchema } from "@/schemas";

export const getSystemConfig = async () => {
  const appSystem = await db.appSystem.findUnique({ where: { name: "g19" } });
  const systemConfig = appSystem?.config;

  return systemConfig;
};
