"use client";
import React from "react";
import NavbarLogout from "./NavbarLogout";
import NvabarLogin from "./NvabarLogin";

interface Props {
  lang: string;
}

const NavbarClone: React.FC<Props> = ({ lang }) => {
  const login = true;
  return (
    <>{login ? <NvabarLogin lang={lang} /> : <NavbarLogout lang={lang} />}</>
  );
};

export default NavbarClone;
