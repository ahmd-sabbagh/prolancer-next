import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link: string;
  nameLink: string;
}

const TitleLink: React.FC<Props> = ({ title, link, nameLink }) => {
  return (
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
  <h2 className="text-lg sm:text-xl md:text-2xl text-[#111827] text-center sm:text-right">
    {title}
  </h2>
  <Link
    href={link}
    className="
      py-2 px-6
      rounded-xl
      bg-[#00D084] text-white
      text-sm md:text-base
      w-full sm:w-auto
      text-center
    "
  >
    {nameLink}
  </Link>
</div>

  );
};


export default TitleLink;
