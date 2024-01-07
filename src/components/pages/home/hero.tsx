"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import CarouselCard from "./carousel-card";

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
        className="h-full w-full">
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index} className="max-w-[1200px] p-6">
            <CarouselCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
