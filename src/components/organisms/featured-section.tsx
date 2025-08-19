"use client";

import { Carousel } from "../molecules/carousel";
import { featured } from "@/data/featured";
import Image from "next/image";
import { FeaturedType, FeaturedListType } from "@/types/featured";
import ChatButton from "../molecules/chat-button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/carousel.css";

interface FeaturedSlideProps {
  featuredCategory: string;
  feature: FeaturedType;
}

const FeaturedSlide = ({ featuredCategory, feature }: FeaturedSlideProps) => {
  const { alt, src, title } = feature;
  return (
    <div className="relative rounded-xl w-full h-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="w-full h-full rounded-lg objext-cover"
      />
      <div className="z-20 absolute bottom-8 left-4 tracking-normal text-secondary-foreground">
        <p className="font-medium text-sm leading-4 uppercase">
          {featuredCategory}
        </p>
        <p className="font-semibold text-lg leading-5 capitalize">{title}</p>
      </div>
    </div>
  );
};

interface FeaturedCarouselProps {
  category: FeaturedListType;
}

const FeaturedCarousel = ({ category }: FeaturedCarouselProps) => {
  const slides = category.images;
  console.log("slides", slides);
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <Carousel>
        {slides.map((slide, index) => {
          return (
            <FeaturedSlide
              key={index}
              feature={slide}
              featuredCategory={category.title}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

const FeaturedSection = () => {
  return (
    <div className="relative w-full max-w-screen-xl h-72 grid grid-cols-3 justify-between gap-x-3">
      {featured.map((feat, index) => {
        return <FeaturedCarousel key={index} category={feat} />;
      })}
      <div className="z-20 absolute top-10 -right-3">
        <ChatButton />
      </div>
    </div>
  );
};

export default FeaturedSection;
