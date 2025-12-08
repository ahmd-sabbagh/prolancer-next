"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { landing } from "@/assets";
import Image from "next/image";

const ImageSwiper = () => {
  const [image, setImage] = useState({ img: landing, id: 1 });
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <div className="costom-arrow overflow-hidden">
      <div className="relative h-[264px] md:h-[427px] xl:h-[550px] rounded-lg overflow-hidden">
        <Image
          src={image.img}
          alt="product"
          fill
          loading="lazy"
          sizes="100%"
          className=" object-cover"
        />
      </div>
      <div className="relative mt-3 md:mt-5">
        {/* swiper */}
        <div className="swiper-cont mx-auto relative overflow-hidden">
          <Swiper
            slidesPerView={4}
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            pagination={false}
            autoplay={false}
            loop={false}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={12}
            breakpoints={{
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
              1400: { slidesPerView: 9 },
            }}
          >
            {arr.map((_, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="relative img-fit h-[60px] rounded-sm overflow-hidden cursor-pointer"
                  onClick={() => {
                    setImage((prev) => ({ ...prev, id: idx }));
                  }}
                >
                  <Image
                    src={landing}
                    alt="product-image"
                    fill
                    loading="lazy"
                    sizes="100%"
                    className=" object-cover"
                  />
                  {image.id !== ++idx && (
                    <div className="absolute inset-0 bg-white/60 flex items-center justify-center"/>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageSwiper;
