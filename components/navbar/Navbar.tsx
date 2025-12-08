import { getLocale } from "next-intl/server";
import NavbarClone from "./NavbarClone";

export const Navbar = async () => {
  const lang = await getLocale();

  return <NavbarClone lang={lang} />;
};
