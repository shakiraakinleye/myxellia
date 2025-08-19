"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/carousel.css";

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const slides = React.Children.toArray(children);

  return (
    <div className="w-full h-full min-w-0">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        mousewheel
        grabCursor
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="h-full w-full"
      >
        {slides.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
