import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  image: StaticImageData | string;
  hent: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<Props> = ({ image, hent, title, description  }) => {
  return (
    <Link href={'/blog/1'} className="p-4 bg-white rounded-lg flex flex-col lg:flex-row items-center gap-5 lg:gap-8.5">
      <div className="relative w-full lg:w-[382px] h-[150px] lg:h-[318px]">
        <Image
          src={image}
          alt="blog image"
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 382px"
          className="rounded-xl object-cover object-center"
        />
      </div>
      <div className="">
        <span className="green-color">{hent}</span>
        <h3 className="dark-color text-2xl md:text-[32px] mt-2.5">{title}</h3>
        <p className="text-[#848A98] mt-3.5 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
