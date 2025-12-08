import Image, { StaticImageData } from "next/image";
import React from "react";

interface ServiceImageProps {
  image: string | StaticImageData;
  title: string;
}

const ServiceImage: React.FC<ServiceImageProps> = ({ image, title }) => {
  return (
    <div className="w-[179px] h-[150px] relative shrink-0">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
};

export default ServiceImage;
