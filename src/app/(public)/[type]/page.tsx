import { Container } from "@/components/layout/container";

export async function generateStaticParams() {
  return ["rental", "tour", "carter"].map(type => ({
    type,
  }));
}

export const dynamic = 'force-static'
export const dynamicParams = false

export default function ProductPage({ params }: { params: { type: string } }) {
  const { type } = params;

  return <Container>{type}</Container>;
}
