import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
interface Props {
  icon: StaticImageData;
  title: string;
  subTitle: string;
  link: string;
  service_availability?: string;
  response_time?: string;
}

const SupportCard: React.FC<Props> = ({
  icon,
  title,
  subTitle,
  link,
  service_availability,
  response_time,
}) => {
  const t = useTranslations();
  return (
    <div className="p-4 rounded-2xl border border-[#D2D6DB] flex flex-col justify-between gap-6 bg-white">
      <div>
        <div className="w-12 h-12 bg-[#F3FCF6] rounded-full flex-center">
          <div className="w-6 h-6 relative">
            <Image src={icon} alt="icon" fill loading="lazy" sizes="24px" />
          </div>
        </div>
        <h3 className="mt-4 md:mt-6 dark-color text-lg">{title}</h3>
        <p className="dark-color mt-2 line-clamp-2">{subTitle}</p>
        {service_availability && (
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="green-color">{t("Service Availability:")}</span>
              <span className="dark-color text-sm">{service_availability}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="green-color">{t("Response time:")}</span>
              <span className="dark-color text-sm">{response_time}</span>
            </div>
          </div>
        )}
      </div>
      <Link href={link} className="bg-[#F3F4F6] w-10 h-10 flex-center text-xl dark-color rounded-sm self-end">
        <FaArrowLeftLong />
      </Link>
    </div>
  );
};

export default SupportCard;
