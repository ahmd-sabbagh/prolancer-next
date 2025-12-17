"use client";

import React from "react";
import Logo from "./Logo";
import { RiMenu3Fill } from "react-icons/ri";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavbarBrand({ open, setOpen }: Props) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="text-2xl lg:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        <RiMenu3Fill />
      </button>
      <Logo />
    </div>
  );
}
