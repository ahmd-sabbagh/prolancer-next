"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import type { MenuLink } from "../NvabarLogin";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
  links: MenuLink[];
  linkIcons: Record<string, React.ReactNode>;
};

export default function MobileMenu({
  open,
  setOpen,
  pathname,
  links,
  linkIcons,
}: Props) {
  return (
    <ul
      className={cn(
        "flex flex-col lg:flex-row lg:items-center gap-8 xl:gap-16 absolute lg:relative top-0 start-0 w-full min-h-screen lg:min-h-fit bg-[#202020] lg:bg-transparent z-50 transition-all duration-500 pt-8 lg:pt-0 px-6 lg:px-0 lg:hidden",
        open ? "open-nav" : "close-nav"
      )}
    >
      <div className="lg:hidden flex items-center justify-between mb-6">
        <Logo />
        <button
          type="button"
          className="text-2xl lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <IoClose />
        </button>
      </div>

      {links.map((link, idx) => (
        <li key={idx}>
          <Link
            href={link.href}
            className={cn(
              "text-white hover:text-primary transition-colors flex items-center justify-between",
              pathname === link.href ? "text-primary" : ""
            )}
            onClick={() => setOpen(false)}
          >
            <span className="flex items-center gap-3">
              {linkIcons[link.label] ? (
                <span className="shrink-0">{linkIcons[link.label]}</span>
              ) : null}
              <span>{link.label}</span>
            </span>

            <span className="text-xl ltr:rotate-180">
              <MdKeyboardArrowLeft />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
