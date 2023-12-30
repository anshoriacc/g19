"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="w-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView="auto"
        centeredSlides
        autoplay
        loop
        className="h-full w-full rounded-lg">
        <SwiperSlide className="max-w-[1200px] px-4 py-6">
          <div className="pointer-events-none flex aspect-[3] h-full w-full items-center justify-center rounded-lg bg-primary shadow-md">
            Slide 1
          </div>
        </SwiperSlide>

        <SwiperSlide className="max-w-[1200px] px-4 py-6">
          <div className="pointer-events-none flex aspect-[3] h-full w-full items-center justify-center rounded-lg bg-primary shadow-md">
            Slide 2
          </div>
        </SwiperSlide>

        <SwiperSlide className="max-w-[1200px] px-4 py-6">
          <div className="pointer-events-none flex aspect-[3] h-full w-full items-center justify-center rounded-lg bg-primary shadow-md">
            Slide 3
          </div>
        </SwiperSlide>

        <SwiperSlide className="max-w-[1200px] px-4 py-6">
          <div className="pointer-events-none flex aspect-[3] h-full w-full items-center justify-center rounded-lg bg-primary shadow-md">
            Slide 4
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
