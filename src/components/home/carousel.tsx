"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const Carousel = () => {
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
        className="hero h-full w-full">
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index} className="max-w-[1200px] p-6">
            <div className="flex aspect-[3] items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 bg-white duration-300 dark:border-neutral-800 dark:bg-neutral-950"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
