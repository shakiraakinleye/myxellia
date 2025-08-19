import { StaticImageData } from "next/image";

export interface FeaturedType {
  id: string;
  src: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
}

export interface FeaturedListType {
  title: string;
  images: FeaturedType[];
}
