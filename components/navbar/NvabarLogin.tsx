"use client";

import React, { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import NavbarTop from "./_components/NavbarTop";
import NavbarBottom from "./_components/NavbarBottom";

import { heart, bell } from "@/assets";
import Image from "next/image";
import { FaRegNewspaper } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";

interface Props {
  lang: string;
}

export type NavItem = { name: string; link: string };
export type MenuLink = { href: string; label: string };

const NvabarLogin: React.FC<Props> = ({ lang }) => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname() ?? "/";
  const t = useTranslations();

  const links: MenuLink[] = useMemo(
    () => [
      { href: "/notifications", label: "notification" },
      { href: "/messages", label: "messages" },
      { href: "/favorite", label: "favorite" },
      { href: "/blog", label: "blog" },
    ],
    []
  );

  const linkIcons: Record<string, ReactNode> = useMemo(
    () => ({
      notification: (
        <div className="w-4.5 h-4.5 relative">
          <Image src={bell} alt="bell icon" fill loading="lazy" sizes="18px" />
        </div>
      ),
      messages: (
        <span className="text-xl text-white/90">
          <FiMessageSquare />
        </span>
      ),
      favorite: (
        <div className="w-4.5 h-4.5 relative">
          <Image src={heart} alt="heart icon" fill loading="lazy" sizes="18px" />
        </div>
      ),
      blog: <FaRegNewspaper className="text-xl text-white/90" />,
    }),
    []
  );

  const nav: NavItem[] = useMemo(
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
    <>
      <NavbarTop
        lang={lang}
        open={open}
        setOpen={setOpen}
        pathname={pathname}
        links={links}
        linkIcons={linkIcons}
      />

      <NavbarBottom nav={nav} />
    </>
  );
};

export default NvabarLogin;
