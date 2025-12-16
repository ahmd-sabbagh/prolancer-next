import Image, { StaticImageData } from "next/image";
import React from "react";

interface ServiceImageProps {
  image: string | StaticImageData;
  title: string;
}

const ServiceImage: React.FC<ServiceImageProps> = ({ image, title }) => {
  return (
    <div
      className="
        relative
        w-full max-w-[179px]
        h-[190px] sm:h-[150px]
        shrink-0
        mx-auto md:mx-0
      "
    >
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
