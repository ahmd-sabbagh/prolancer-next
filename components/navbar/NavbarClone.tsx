"use client";
import React from "react";
import NavbarLogout from "./NavbarLogout";
import NvabarLogin from "./NvabarLogin";
import { useAuth } from "@/app/context/AuthContext";

interface Props {
  lang: string;
}

const NavbarClone: React.FC<Props> = ({ lang }) => {
const {token} = useAuth();
  return (
    <>{token ? <NvabarLogin lang={lang} /> : <NavbarLogout lang={lang} />}</>
  );
};

export default NavbarClone;
