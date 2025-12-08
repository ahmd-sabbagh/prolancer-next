import { useTranslations } from "next-intl";
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
  const social_links = [
    {
      icon: facebook_acc,
      link: "",
    },
    {
      icon: instagram_acc,
      link: "",
    },
    {
      icon: messenger_acc,
      link: "",
    },
    {
      icon: linkedin_acc,
      link: "",
    },
    {
      icon: whatsapp_acc,
      link: "",
    },
  ];
  const service_provider = true;

  const service_requester = [
    {
      link: "",
      name: t("projects"),
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
      link: "",
      name: t("orders"),
    },
    {
      link: "",
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
  const data = service_provider
    ? service_provider_links
    : service_requester;
  return (
    <div className="">
      <div className="px-4 py-5 rounded-[14px] bg-white box-shadow2">
        <h4 className="text-xl dark-color">{t("account information")}</h4>
        <div className="mt-3 flex flex-col gap-3">
          <ItemLink
            link="/setting/account-setting"
            name={t("account setting")}
          />
          <ItemLink link="" name={t("notification")} />
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
                  alt="socila icon"
                  fill
                  loading="lazy"
                  sizes="36px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/*  */}
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
