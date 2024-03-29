import { Metadata } from "next";

import { Container } from "@/components/layout/container";

export async function generateStaticParams() {
  return ["rental", "tour", "carter"].map(type => ({
    type,
  }));
}

export const dynamicParams = false;

type Props = {
  params: { type: "rental" | "tour" | "carter" };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = params;

  return {
    title: type[0].toUpperCase() + type.slice(1),
  };
}

export default async function ProductPage({ params }: Props) {
  const { type } = params;

  return <Container className="mx-0">{type}</Container>;
}
