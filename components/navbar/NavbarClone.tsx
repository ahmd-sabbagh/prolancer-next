"use client";
import React from "react";
import NavbarLogout from "./NavbarLogout";
import NvabarLogin from "./NvabarLogin";
import { useAppSelector } from "@/lib/store/hooks";

interface Props {
  lang: string;
}

const NavbarClone: React.FC<Props> = ({ lang }) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return <>{isLoggedIn ? <NvabarLogin lang={lang} /> : <NavbarLogout lang={lang} />}</>;
};

export default NavbarClone;
