"use client";

import Image from "next/image";
import img1 from "@/public/images/hero-image-1.png";
import img2 from "@/public/images/hero-image-2.png";
import img3 from "@/public/images/hero-image-3.png";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import useViewportWidth from "@/src/lib/hooks/getViewportWidth";

type heroTypes = {
  sectionTitle: string;
  title: string;
};

export default function Hero({ sectionTitle, title }: heroTypes) {
  useEffect(() => {
    register();
  }, []);
  return (
    <div className="relative">
      <div className="flex text-white items-end gap-5 absolute top-0 z-40 bottom-10 lg:bottom-24 left-5 sm:left-10 xl:left-[260px]">
        <div className="">
          <h2 className="text-lg sm:text-xl md:text-2xl">{sectionTitle}</h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
      {images.length > 2 && (
        <swiper-container
          speed={1500}
          autoplay={true}
          loop={true}
          slides-per-view={1}
        >
          {images.map((img: any) => {
            return (
              <swiper-slide key={img.id}>
                <Image
                  src={img?.url}
                  className="w-full h-[450px] sm:h-[550px] lg:h-[800px] object-center object-cover "
                  alt={img?.title}
                />
              </swiper-slide>
            );
          })}
        </swiper-container>
      )}
    </div>
  );
}

const images = [
  { id: 1, title: "Image 1", url: img1 },
  { id: 2, title: "Image 2", url: img2 },
  { id: 3, title: "Image 3", url: img3 },
];
