import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  image: StaticImageData | string;
  hent: string;
  title: string;
  description: string;
}

const SuggestBlogCard: React.FC<Props> = ({
  image,
  hent,
  title,
  description,
}) => {
  return (
    <Link
      href={"/blog/1"}
      className="p-4 bg-white rounded-lg flex flex-col gap-4 md:gap-5"
    >
      <div className="relative w-full h-[150px] lg:h-[318px]">
        <Image
          src={image}
          alt="blog image"
          fill
          loading="lazy"
          sizes="100vh"
          className="rounded-xl object-cover object-center"
        />
      </div>
      <div className="">
        <span className="text-[#4C4C4C] text-xs">{"Aug 23, 2025 "}</span>
        <h3 className="dark-color md:text-2xl mt-2">{title}</h3>
        <span className="green-color mt-1 block">{hent}</span>
        <p className="text-[#848A98] mt-1 text-xs md:text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default SuggestBlogCard;
