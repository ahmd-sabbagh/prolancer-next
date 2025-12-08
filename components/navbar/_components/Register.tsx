import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { IoLogIn } from "react-icons/io5";

const Register = () => {
  const t = useTranslations();
  return (
    <>
      <Link href={"/login"} className="lg:hidden text-2xl text-white">
        <IoLogIn />
      </Link>
      <Link
        href={"/login"}
        className="w-[146px] h-11 rounded-md bg-green-color text-white hidden lg:flex lg:justify-center lg:items-center "
      >
        {t("login now")}
      </Link>
    </>
  );
};

export default Register;
