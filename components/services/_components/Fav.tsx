"use client";

import { heart_off, heart_on } from "@/assets";
import Image from "next/image";
import { useState } from "react";

interface FavProps {
  defaultFav?: boolean;
}

const Fav = ({ defaultFav = false }: FavProps) => {
  const [state, setState] = useState(defaultFav);
  const img = state ? heart_on : heart_off;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setState((prev) => !prev);
      }}
    >
      <div className="w-8 h-8 relative">
        <Image src={img} alt="favorite" fill sizes="32px" loading="lazy" />
      </div>
    </button>
  );
};

export default Fav;
