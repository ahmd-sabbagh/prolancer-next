"use client";

import React, { useMemo, useState } from "react";
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

  return (
    <>
      <NavbarTop
        lang={lang}
        open={open}
        setOpen={setOpen}
        pathname={pathname}
        linkIcons={linkIcons}
      />

      <NavbarBottom />
    </>
  );
};

export default NvabarLogin;
