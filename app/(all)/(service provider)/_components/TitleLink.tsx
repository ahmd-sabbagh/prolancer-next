import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link: string;
  nameLink: string;
}
const TitleLink: React.FC<Props> = ({ title, link, nameLink }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl dark-color md:text-2xl">{title}</h2>
      <Link
        href={link}
        type="button"
        className="py-2 px-6 rounded-xl bg-green-color text-white text-sm"
      >
        {nameLink}
      </Link>
    </div>
  );
};

export default TitleLink;
