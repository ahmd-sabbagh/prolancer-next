"use client";
import { landing } from "@/assets";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperLanding = () => {
  const locale = useLocale();
  const data = [
    {
      title: "5 خطوات لتقديم خدمتك عبر الإنترنت",
      description:
        "نحن هنا لمساعدتك في الانتقال وإطلاق وتنمية أعمالك التجارية الجديدة عبر الإنترنت.",
      img: landing,
    },
    {
      title: "5 خطوات لتقديم خدمتك عبر الإنترنت",
      description:
        "نحن هنا لمساعدتك في الانتقال وإطلاق وتنمية أعمالك التجارية الجديدة عبر الإنترنت.",
      img: landing,
    },
    {
      title: "5 خطوات لتقديم خدمتك عبر الإنترنت",
      description:
        "نحن هنا لمساعدتك في الانتقال وإطلاق وتنمية أعمالك التجارية الجديدة عبر الإنترنت.",
      img: landing,
    },
  ];
  return (
    <section className="relative overflow-hidden py-5 md:py-10 bg-[#F8FAFF]">
      <div className="container">
        <Swiper
          key={locale}
          slidesPerView={1}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          pagination={true}
          autoplay={true}
          speed={700}
          loop={false}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-40 md:h-60 flex flex-col justify-center rounded-xl overflow-hidden">
                {/* overlay */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>

                {/* text */}
                <div className="p-4 md:p-8 relative z-20">
                  <h4 className="text-[#FAFAFA] text-base md:text-2xl font-medium">
                    {item.title}
                  </h4>
                  <p className="text-[#FAFAFA] mt-2 text-xs md:text-base font-light">
                    {item.description}
                  </p>
                </div>

                {/* image */}
                <Image
                  src={item.img}
                  alt="product-image"
                  fill
                  loading="lazy"
                  sizes="100%"
                  className="object-cover rounded-xl z-0"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperLanding;
