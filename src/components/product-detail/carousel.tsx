"use client";

import { useState } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { TCarter, TTour, TVehicle } from "@/data/product";

export const Carousel = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="flex flex-col gap-4">
      <Swiper
        spaceBetween={16}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-detail aspect-[4/3] w-full self-center justify-self-center rounded-lg bg-neutral-100 dark:bg-neutral-850">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.imageUrl ?? "/assets/fallback.webp"}
              alt={`image${index}`}
              loading="lazy"
              className="pointer-events-none aspect-[4/3] w-full animate-reveal self-center justify-self-center rounded-lg bg-neutral-100 object-cover dark:bg-neutral-850"
              onError={e => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = "/assets/fallback.webp";
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper as unknown as SwiperProps["onSwiper"]}
        spaceBetween={16}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-detail-thumb w-full max-w-[640px] self-center justify-self-center">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.imageUrl ?? "/assets/fallback.webp"}
              alt={`image${index}`}
              loading="lazy"
              className="pointer-events-none aspect-[4/3] w-full animate-reveal justify-self-center rounded-lg bg-neutral-100 object-cover dark:bg-neutral-850"
              onError={e => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = "/assets/fallback.webp";
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

type Props = {
  images:
    | TVehicle["vehicleImages"]
    | TTour["tourImages"]
    | TCarter["carterImages"];
};
