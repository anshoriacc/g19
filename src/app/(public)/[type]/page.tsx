import { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ProductList } from "@/components/product/product-list";
import { SearchBar } from "@/components/product/search-bar";
import { getProductList } from "@/data/product";

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

  return (
    <Container className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold capitalize">{type}</h1>

      <SearchBar type={type} />

      <ProductList type={type} data={data} />
    </Container>
  );
}

type Props = {
  params: { type: "rental" | "tour" | "carter" };
  searchParams: { [key: string]: string | string[] | undefined };
};
