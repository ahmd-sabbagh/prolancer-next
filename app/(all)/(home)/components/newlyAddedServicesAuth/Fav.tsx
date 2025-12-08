"use client";

import { heart_off, heart_on } from "@/assets";
import Image from "next/image";
import { useState } from "react";

const Fav = () => {
  const [state, setState] = useState(false);
  const img = state ? heart_on : heart_off;
  return (
    <button type="button"  onClick={() => setState(!state)}>
      <div className="w-8 h-8 relative">
        <Image src={img} alt="favorite" fill sizes="32px" loading="lazy" />
      </div>
    </button>
  );
};

export default Fav;
