import React from "react";
import ServiceImage from "./ServiceImage";
import ServiceInfo from "./ServiceInfo";
import ServiceStats from "./ServiceStats";
import type { Service } from "../services-data";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const {
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
  } = service;

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
      <ServiceImage image={image} title={title} />

      <ServiceInfo
        title={title}
        category={category}
        rate={rate}
        reviewsCount={reviewsCount}
      />

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
