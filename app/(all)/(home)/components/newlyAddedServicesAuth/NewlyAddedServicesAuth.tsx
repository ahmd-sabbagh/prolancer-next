"use client";
import Card from "./Card";
import Image from "next/image";
import { how_shape } from "@/assets";
import { useLocale, useTranslations } from "next-intl";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NewlyAddedServicesAuth = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="bg-[#F8FAFF] pb-10">
      <div className="container">
        <div>
          <h2 className="md:text-2xl dark-color">
            {t("Newly added services")}
          </h2>
          <div className="h-[17px] w-[123px] relative mt-1 md:mt-5">
            <Image
              src={how_shape}
              alt="line"
              fill
              sizes="123px"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-4 md:mt-8 relative overflow-hidden">
          <Swiper
            key={locale}
            slidesPerView={1}
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            pagination={false}
            autoplay={false}
            loop={false}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={32}
            breakpoints={{
              767: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {Array(10)
              .fill("")
              .map((_, idx) => (
                <SwiperSlide key={idx}>
                  <Card />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewlyAddedServicesAuth;
