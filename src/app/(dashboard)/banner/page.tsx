import { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/dashboard/banner/columns";
import { getBannerList } from "@/data/banner";
import { AddBanner } from "../../../components/dashboard/banner/add-banner";

export const metadata: Metadata = {
  title: "Banner",
};

export default async function BannerPage() {
  const data = await getBannerList();

  return (
    <Container className="mx-0 space-y-6">
      <div className="flex items-center justify-between gap-6">
        <h1 className="text-2xl font-bold">Banner</h1>

        <AddBanner />
      </div>

      <DataTable columns={columns} data={data} />
    </Container>
  );
}
