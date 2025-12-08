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
    <article className="relative p-6 rounded-[20px] bg-white box-shadow2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


      {/* image on the far right */}
      <ServiceImage image={image} title={title} />

      {/* center text (title + rating) */}
      <ServiceInfo
        title={title}
        category={category}
        rate={rate}
        reviewsCount={reviewsCount}
      />

      {/* left stats (price + duration + revisions + inQueue + toggle) */}
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
