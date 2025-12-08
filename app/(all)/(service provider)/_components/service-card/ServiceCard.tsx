import React from "react";
import ServiceImage from "./ServiceImage";
import ServiceInfo from "./ServiceInfo";
import ServiceStats from "./ServiceStats";
import { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  category: string;
  image: string | StaticImageData;
  price: string | number;
  duration: string;
  revisions: string;
  inQueue: string;
  rate: string | number;
  reviewsCount: string | number;
  isActive: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  category,
  image,
  price,
  duration,
  revisions,
  inQueue,
  rate,
  reviewsCount,
  isActive,
}) => {
  return (
    <article
      className="
        relative
        flex flex-col md:flex-row
        md:items-center md:justify-between
        w-full
        md:h-[174px]
        rounded-[20px]
        bg-white
        box-shadow2
        p-6
        gap-4
      "
    >
      {/* الصورة يمين */}
      <ServiceImage image={image} title={title} />

      {/* النص في النص */}
      <ServiceInfo
        title={title}
        category={category}
        rate={rate}
        reviewsCount={reviewsCount}
      />

      {/* الإحصائيات يسار */}
      <ServiceStats
        price={price}
        duration={duration}
        revisions={revisions}
        inQueue={inQueue}
        isActive={isActive}
      />
    </article>
  );
};


export default ServiceCard;
