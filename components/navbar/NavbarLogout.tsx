import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Logo from "./_components/Logo";
import Register from "./_components/Register";
import Language from "./_components/Language";
import React, { useState } from "react";
import Search from "./_components/Search";
import { RiMenu3Fill } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";

interface Props {
  lang: string;
}

const NavbarLogout: React.FC<Props> = ({ lang }) => {
  const [open, setOpen] = useState<boolean>();
  const pathname = usePathname() ?? "/";
  const isHome = pathname === "/";
  const t = useTranslations();

  const links = [
    { href: "/", label: "home" },
    { href: "/discover", label: "discover" },
    { href: "/blog", label: "blog" },
    { href: "/support", label: "support" },
    { href: "/contact-us", label: "contact" },
  ];

  return (
    <header
      className={`${
        isHome ? "absolute bg-[#26262633]" : "bg-[#262626]"
      } w-full top-0 start-0 z-20 py-5 `}
    >
      <div className="container flex items-center justify-between">
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
        {/* Links */}
        <nav className="flex items-center gap-4 lg:gap-6">
          <ul
            className={cn(
              "flex flex-col lg:flex-row lg:items-center gap-8 xl:gap-16 absolute lg:relative top-0 start-0 w-full min-h-screen lg:min-h-fit bg-[#202020] lg:bg-transparent z-50 transition-all duration-500 pt-8 lg:pt-0 px-6 lg:px-0",
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
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-white hover:text-primary transition-colors
                    ${pathname === link.href ? "text-primary" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
          {/*  */}
          <Language lang={lang} />
          <Register />
        </nav>
      </div>
      <Search />
    </header>
  );
};

export default NavbarLogout;
