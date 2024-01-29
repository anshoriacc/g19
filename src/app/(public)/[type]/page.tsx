import { Suspense } from "react";
import { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ProductList } from "@/components/product/product-list";
import { FilterAndSort } from "@/components/product/filter-and-sort";
import { LoadingPlaceholder } from "@/components/product/loading-placeholder";

export const dynamicParams = false;

export async function generateStaticParams() {
  return ["rental", "tour", "carter"].map(type => ({
    type,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = params;

  return {
    title: type[0].toUpperCase() + type.slice(1),
  };
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { type } = params;

  return (
    <Container className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold capitalize">{type}</h1>

      <FilterAndSort type={type} />

      <Suspense fallback={<LoadingPlaceholder />}>
        <ProductList type={type} searchParams={searchParams} />
      </Suspense>
    </Container>
  );
}

type Props = {
  params: { type: "rental" | "tour" | "carter" };
  searchParams: { [key: string]: string | string[] | undefined };
};
