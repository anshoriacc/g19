import { Suspense } from "react";
import { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ProductList } from "@/components/service/product-list";
import { LoadingPlaceholder } from "@/components/service/loading-placeholder";

export async function generateStaticParams() {
  return ["rental", "tour", "carter"].map(type => ({
    type,
  }));
}

export const dynamic = "force-static";
export const dynamicParams = false;

type Props = {
  params: { type: "rental" | "tour" | "carter" };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = params;

  return {
    title: type[0].toUpperCase() + type.slice(1),
  };
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { type } = params;

  return (
    <Container className="space-y-6">
      <h1 className="capitalize">{type}</h1>

      <Suspense fallback={<LoadingPlaceholder />}>
        <ProductList type={type} searchParams={searchParams} />
      </Suspense>
    </Container>
  );
}
