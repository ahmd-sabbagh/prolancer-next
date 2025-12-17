"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavbarBottom() {
  const t = useTranslations();
  const nav = useMemo(
    () => [
      { name: t("All sections"), link: "" },
      { name: t("Graphic and design"), link: "" },
      { name: t("Programming and technology"), link: "" },
      { name: t("Electronic marketing"), link: "" },
      { name: t("Video and montage"), link: "" },
      { name: t("Writing content"), link: "" },
      { name: t("WordPress and SEO"), link: "" },
      { name: t("Advertisement design"), link: "" },
    ],
    [t]
  );
  return (
    <section className="bg-[#353434] py-3 hidden md:block">
      <div className="container flex items-center gap-4 justify-between">
        {nav.map((item, idx) => (
          <Link href={item.link} key={idx} className="text-[#62646A] line-clamp-1">
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
