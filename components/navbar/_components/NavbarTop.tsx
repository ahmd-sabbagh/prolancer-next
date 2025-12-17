"use client";

import React from "react";
import SearchNav from "./SearchNav";
import NavbarBrand from "./NavbarBrand";

import MobileMenu from "./MobileMenu";
import NavbarActions from "./NavbarActions";
import type { MenuLink } from "../NvabarLogin";

type Props = {
  lang: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
  links: MenuLink[];
  linkIcons: Record<string, React.ReactNode>;
};

export default function NavbarTop({
  lang,
  open,
  setOpen,
  pathname,
  links,
  linkIcons,
}: Props) {
  return (
    <header className="bg-[#262626] w-full top-0 start-0 z-20 py-5">
      <div className="container flex items-center justify-between gap-8">
        <NavbarBrand open={open} setOpen={setOpen} />

        <SearchNav />

        <MobileMenu
          open={open}
          setOpen={setOpen}
          pathname={pathname}
          links={links}
          linkIcons={linkIcons}
        />

        <NavbarActions lang={lang} />
      </div>
    </header>
  );
}
