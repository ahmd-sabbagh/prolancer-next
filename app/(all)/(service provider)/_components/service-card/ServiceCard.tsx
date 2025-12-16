import React from "react";
import ServiceImage from "./ServiceImage";
import ServiceInfo from "./ServiceInfo";
import ServiceStats from "./ServiceStats";
import ServiceHeader from "./ServiceHeader"; // 👈 إضافة

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
    flex flex-col lg:flex-row
    lg:items-center lg:justify-between
    w-full
    lg:h-[174px]
    rounded-[20px]
    bg-white
    box-shadow2
    p-4 lg:p-6
    gap-4 lg:gap-6
  "
>

  {/* mobile header */}
  <div className="w-full flex justify-end lg:hidden">
    <ServiceHeader isActive={isActive} />
  </div>

  <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6 w-full">

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

  </div>
    </article>
  );
};

export default ServiceCard;
