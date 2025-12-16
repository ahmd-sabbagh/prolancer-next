"use client";

import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";

import ItemLink from "./ItemLink.";
import {
  facebook_acc,
  instagram_acc,
  linkedin_acc,
  messenger_acc,
  whatsapp_acc,
} from "@/assets";
import Link from "next/link";
import Image from "next/image";

const AccountInfo = () => {
  const t = useTranslations();

  const isServiceProvider = useSelector(
    (state: RootState) => state.role.isServiceProvider
  );

  const social_links = [
    { icon: facebook_acc, link: "" },
    { icon: instagram_acc, link: "" },
    { icon: messenger_acc, link: "" },
    { icon: linkedin_acc, link: "" },
    { icon: whatsapp_acc, link: "" },
  ];

  const service_requester = [
    {
      link: "/projects",
      name: t("projects"),
    },
    {
      link: "/disputes",
      name: "النزاعات",
    },
    {
      link: "/favorite",
      name: t("likly_services"),
    },
    {
      link: "/walet",
      name: t("walet"),
    },
  ];

  const service_provider_links = [
    {
      link: "/my-services",
      name: t("myServices"),
    },
    {
      link: "orders",
      name: t("orders"),
    },
    {
      link: "portfolio",
      name: t("portfolio"),
    },
    {
      link: "/projects",
      name: t("projects"),
    },
    {
      link: "/favorite",
      name: t("likedWorks"),
    },
    {
      link: "/walet",
      name: t("walet"),
    },
  ];

  const data = isServiceProvider
    ? service_provider_links
    : service_requester;

  return (
    <div>
      {/* Account Information */}
      <div className="px-4 py-5 rounded-[14px] bg-white box-shadow2">
        <h4 className="text-xl dark-color">{t("account information")}</h4>

        <div className="mt-3 flex flex-col gap-3">
          <ItemLink
            link="/setting/account-setting"
            name={t("account setting")}
          />
          <ItemLink
            link="/setting/privacy-and-security"
            name={"الأمان والخصوصية"}
          />
          <ItemLink
            link="/setting/professional-settings"
            name={"الإعدادات المهنية"}
          />
          <ItemLink link="/setting/financial" name={"المالية"} />
        </div>

        <span className="mt-3 dark-color text-sm block">
          {t("share account")}
        </span>

        <div className="mt-5 flex items-center gap-3.5 flex-wrap">
          {social_links.map((icon, idx) => (
            <Link href={icon.link} key={idx} className="block">
              <div className="h-9 w-9 relative">
                <Image
                  src={icon.icon}
                  alt="social icon"
                  fill
                  loading="lazy"
                  sizes="36px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* General Info */}
      <div className="px-4 py-5 rounded-[14px] bg-white box-shadow2 mt-8">
        <h4 className="text-xl dark-color">{t("general info")}</h4>

        <div className="mt-3 flex flex-col gap-3">
          {data.map((item, idx) => (
            <ItemLink link={item.link} name={item.name} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
