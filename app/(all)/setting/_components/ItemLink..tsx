import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
interface Props {
  link: string;
  name: string;
}

const ItemLink: React.FC<Props> = ({ link, name }) => {
  return (
    <Link
      href={link}
      className="px-4 py-[9px] rounded-[100px] border border-[#E4E4E4] bg-[#F5F7F9] flex items-center justify-between"
    >
      <span className="text-sm dark-color ">{name}</span>
      <span className="dark-color">
        <IoIosArrowBack />
      </span>
    </Link>
  );
};

export default ItemLink;
