"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Logo from "./_components/Logo";
import Language from "./_components/Language";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SearchNav from "./_components/SearchNav";
import Image from "next/image";
import { heart } from "@/assets";
import Message from "./_components/Message";
import Notification from "./_components/Notification";
import TransferProvider from "./_components/TransferProvider";
import ProfileIcon from "./_components/ProfileIcon";
import { LuSearch } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { FaRegNewspaper } from "react-icons/fa6";

interface Props {
  lang: string;
}

const NvabarLogin: React.FC<Props> = ({ lang }) => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname() ?? "/";
  const t = useTranslations();

  const links = [
    { href: "/notifications", label: "notification" },
    { href: "/messages", label: "messages" },
    { href: "/favorite", label: "favorite" },
    { href: "/blog", label: "blog" },
  ];


  const linkIcons: Record<string, React.ReactNode> = {
    notification: (
      <span className="text-xl text-white/90">
        <Notification />
      </span>
    ),
    messages: (
      <span className="text-xl text-white/90">
        <Message />
      </span>
    ),
    favorite: (
      <div className="w-4.5 h-4.5 relative">
        <Image src={heart} alt="heart icon" fill loading="lazy" sizes="18px" />
      </div>
    ),
    blog: <FaRegNewspaper className="text-xl text-white/90" />,
  };

  const nav = [
    { name: t("All sections"), link: "" },
    { name: t("Graphic and design"), link: "" },
    { name: t("Programming and technology"), link: "" },
    { name: t("Electronic marketing"), link: "" },
    { name: t("Video and montage"), link: "" },
    { name: t("Writing content"), link: "" },
    { name: t("WordPress and SEO"), link: "" },
    { name: t("Advertisement design"), link: "" },
  ];

  return (
    <>
      <header className="bg-[#262626] w-full top-0 start-0 z-20 py-5">
        <div className="container flex items-center justify-between gap-8">
          {/* logo */}
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
          {/* search */}
          <SearchNav />
          {/* menu */}
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
                    <span>{t(link.label)}</span>
                  </span>
                  <span className="text-xl ltr:rotate-180">
                    <MdKeyboardArrowLeft />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Links */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link href={"/favorite"} className="hidden lg:block">
              <div className="w-4.5 h-4.5 relative">
                <Image src={heart} alt="heart icon" fill loading="lazy" sizes="18px" />
              </div>
            </Link>

            <Link href={"/blog"} className="hidden lg:block text-white text-xl">
              <FaRegNewspaper />
            </Link>
            {/* search mob */}
            <Link href={""} className="lg:hidden block text-white text-xl ">
              <LuSearch />
            </Link>
            <Message />
            <Notification />
            <Language lang={lang} />
            <TransferProvider />
            <ProfileIcon />
          </div>
        </div>
      </header>
      <section className="bg-[#353434] py-3 hidden md:block">
        <div className="container flex items-center gap-4 justify-between">
          {nav.map((link, idx) => (
            <Link href={link.link} key={idx} className="text-[#62646A] line-clamp-1">
              {link.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default NvabarLogin;
