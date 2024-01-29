import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hourglass, KeySquare, LifeBuoy, Users } from "lucide-react";

import { Container } from "@/components/layout/container";
import {
  TCarter,
  TTour,
  TVehicle,
  getProductDetail,
  getProductList,
} from "@/data/product";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { delimiterFormatter } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel } from "@/components/product-detail/carousel";

// export async function generateStaticParams() {
//   return ["rental", "tour", "carter"].map(async type => {
//     const data = (
//       await getProductList({ type: type as "rental" | "tour" | "carter" })
//     )?.map(product => ({
//       type,
//       id: product.id,
//     }));

//     return data;
//   });
// }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, id } = params;
  const data = await getProductDetail({ type, id });

  return {
    title: data?.name,
    description: data?.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { type, id } = params;

  if (!["rental", "tour", "carter"].includes(type)) notFound();

  const data = await getProductDetail({ type, id });

  if (data === null) notFound();

  const images =
    type === "rental"
      ? (data as TVehicle).vehicleImages
      : type === "tour"
        ? (data as TTour).tourImages
        : type === "carter"
          ? (data as TCarter).carterImages
          : [];

  return (
    <Container className="flex flex-col">
      <Card className="flex flex-col gap-6 p-6">
        <h1 className="text-2xl font-bold">{data?.name}</h1>

        <section className="grid flex-1 gap-6 lg:grid-cols-[3fr_2fr]">
          {/* <div className="flex flex-col gap-4">
            <img
              src={"/assets/fallback.webp"}
              alt={`${data?.name} image`}
              loading="lazy"
              className="pointer-events-none aspect-[4/3] w-full max-w-[640px] animate-reveal self-center justify-self-center rounded-lg bg-neutral-100 object-cover dark:bg-neutral-850"
            />

            <div className="grid max-w-[640px] grid-cols-3 gap-4 self-center justify-self-center">
              {[...Array(3)].map((_, index) => (
                <img
                  key={index}
                  src={"/assets/fallback.webp"}
                  alt={`${data?.name} image`}
                  loading="lazy"
                  className="pointer-events-none aspect-[4/3] w-full animate-reveal justify-self-center rounded-lg bg-neutral-100 object-cover dark:bg-neutral-850"
                />
              ))}
            </div>
          </div> */}
          <Carousel images={images} />

          <section className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 uppercase">
              <Badge
                variant="secondary"
                className="flex items-center gap-1 bg-primary/20 text-sm font-normal hover:bg-primary/15 dark:bg-primary/20 dark:hover:bg-primary/15">
                <Users size={18} />
                {data?.capacity} orang
              </Badge>

              {type === "rental" && (
                <>
                  <Badge className="flex items-center gap-1 bg-primary/20 text-sm font-normal hover:bg-primary/15 dark:bg-primary/20 dark:hover:bg-primary/15">
                    <KeySquare size={18} />
                    {(data as TVehicle)?.isDriverMandatory
                      ? "WAJIB DRIVER"
                      : "LEPAS KUNCI"}
                  </Badge>

                  <Badge className="flex items-center gap-1 bg-primary/20 text-sm font-normal hover:bg-primary/15 dark:bg-primary/20 dark:hover:bg-primary/15">
                    <LifeBuoy size={18} />
                    {(data as TVehicle)?.transmission
                      ? "WAJIB DRIVER"
                      : "LEPAS KUNCI"}
                  </Badge>
                </>
              )}

              {type === "tour" && (
                <>
                  <Badge className="flex items-center gap-1 bg-primary/20 text-sm font-normal hover:bg-primary/15 dark:bg-primary/20 dark:hover:bg-primary/15">
                    <Hourglass size={18} />
                    {(data as TTour)?.duration}
                    hari
                  </Badge>
                </>
              )}
            </div>

            <p>{data?.description}</p>

            <Accordion type="multiple" className="w-full space-y-2 *:border-0 ">
              {data && data.highlights.length > 0 && (
                <AccordionItem value="highlights">
                  <AccordionTrigger className="rounded-md p-2 font-semibold transition-all hover:bg-neutral-100 hover:no-underline dark:hover:bg-neutral-900">
                    Highlights
                  </AccordionTrigger>

                  <AccordionContent className="px-4">
                    <ul className="space-y-2">
                      {data.highlights.map((highlight, index) => (
                        <li key={index}>{highlight.highlight}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}

              {/* {type === "rental" &&
                data &&
                (data as TTour).tourItineraries.length > 0 && (
                  <AccordionItem value="itineraries">
                    <AccordionTrigger className="rounded-md p-2 font-semibold transition-all hover:bg-neutral-100 hover:no-underline dark:hover:bg-neutral-900">
                      Itineraries
                    </AccordionTrigger>

                    <AccordionContent className="px-4">
                      <ul className="space-y-2">
                        <li>itineraries1</li>
                        <li>itineraries2</li>
                        <li>itineraries3</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                )} */}
            </Accordion>

            <div className="mt-auto flex flex-col gap-4">
              <h3 className="line-clamp-1 text-ellipsis">
                <span className="text-3xl font-bold text-accent-dark dark:text-accent-light">
                  Rp. {delimiterFormatter(data?.price ?? 0)}
                </span>

                {type === "rental" && (
                  <span className="text-neutral-500"> /hari</span>
                )}
              </h3>

              <Button>Reservasi</Button>
            </div>
          </section>
        </section>
      </Card>
    </Container>
  );
}

type Props = {
  params: { type: "rental" | "tour" | "carter"; id: string };
};
