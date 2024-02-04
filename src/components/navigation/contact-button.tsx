import Link from "next/link";

import { Button } from "../ui/button";
import { getSystemConfig } from "@/data/app-system";

export const ContactButton = async () => {
  const systemConfig = await getSystemConfig();

  return (
    <Link
      href={`https://wa.me/62${systemConfig?.phone}?text=Halo!%20`}
      target="_blank">
      <Button variant="outline">Hubungi Kami</Button>
    </Link>
  );
};
