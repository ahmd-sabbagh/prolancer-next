import { useTranslations } from "next-intl";
import Bg from "./Bg";
import { bag, more } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const MainLanding = () => {
  const t = useTranslations();
  const services = [
    {
      link: "",
      name: "تطوير الويب والتطبيقات وIT والبرمجيات ",
    },
    {
      link: "",
      name: "تطوير الويب والتطبيقات وIT والبرمجيات ",
    },
    {
      link: "",
      name: "تطوير الويب والتطبيقات وIT والبرمجيات ",
    },
    {
      link: "",
      name: "تطوير الويب والتطبيقات وIT والبرمجيات ",
    },
  ];
  return (
    <section>
      <div className="relative min-h-screen flex items-end pb-10 pt-[150px] lg:py-[109px]">
        <Bg>
          <div className="container relative z-10">
            <div className="bg-[#00D3882E] py-2 px-5 rounded-4xl green-color w-fit mx-auto md:m-0">
              {t("prolancer")}
            </div>
            <h1 className="mt-6 text-white font-bold text-3xl lg:text-[70px] text-center md:text-start">
              {t("jop")}
            </h1>
            <p className="text-center md:text-start md:text-xl text-white mt-5">
              {
                "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، "
              }
            </p>
            <div className="mt-8 md:mt-[72px]">
              <div className="flex items-end gap-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src={more}
                    alt="More Icon"
                    fill
                    sizes="40px"
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <span className="green-color text-xl">
                  {t("most_requested_services")}
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-8">
                {services.map((service, index) => (
                  <Link
                    href={service.link}
                    key={index}
                    className="flex items-center gap-4 px-9 py-6 bg-[#44444485] rounded-2xl"
                  >
                    <div className="w-8 h-8 relative">
                      <Image
                        src={bag}
                        alt="Bag Icon"
                        fill
                        sizes="32px"
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                    <div className="text-white">{service.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Bg>
      </div>
    </section>
  );
};
