"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Kanit } from "next/font/google";
import * as z from "zod";

import "swiper/css";
import "swiper/css/pagination";

import { TBanner } from "@/data/banner";
import { cn } from "@/lib/utils";
import { appSystemSchema } from "@/schemas";

const kanit = Kanit({ weight: ["700"], subsets: ["latin"] });

export const Carousel = ({ images, systemConfig }: Props) => {
  return (
    <section className="w-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView="auto"
        centeredSlides
        className="hero h-full w-full">
        {images.length > 0 ? (
          images.map((image, index) => (
            <SwiperSlide key={index} className="max-w-[1200px] p-6">
              <a
                href={image.url}
                target="_blank"
                className={cn(!image.url && "pointer-events-none")}>
                <img
                  src={image.imageUrl}
                  alt={`banner${index}`}
                  loading="lazy"
                  className="pointer-events-none aspect-[3] w-full animate-reveal overflow-hidden rounded-3xl bg-white object-cover dark:bg-neutral-950"
                  onError={e => {
                    (e.target as HTMLImageElement).onerror = null;
                    (e.target as HTMLImageElement).src =
                      "/assets/fallback.webp";
                  }}
                />
              </a>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="max-w-[1200px] p-6">
            <div className="pointer-events-none flex aspect-[3] w-full items-center justify-center overflow-hidden rounded-3xl bg-white dark:bg-neutral-950">
              <div
                className={cn(
                  "select-none text-5xl font-bold md:text-8xl",
                  "bg-gradient-to-b from-neutral-500 from-60% bg-clip-text text-transparent",
                )}>
                <span className={kanit.className}>
                  {systemConfig?.logoTitle ?? "G19"}
                </span>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

type Props = {
  images: TBanner[];
  systemConfig?: z.infer<typeof appSystemSchema>;
};
