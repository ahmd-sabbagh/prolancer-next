"use client";

import React from "react";
import Link from "next/link";
import type { NavItem } from "../NvabarLogin";

type Props = {
  nav: NavItem[];
};

export default function NavbarBottom({ nav }: Props) {
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
