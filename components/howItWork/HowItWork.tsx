"use client";

import { how_it_work, how_shape, right } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Images from "./_components/Images";
import { useAppSelector } from "@/lib/store/hooks";

const HowItWork = () => {
  const t = useTranslations();
  const data = [
    {
      title: "دعم فني مباشر عبر الموقع",
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، ",
    },
    {
      title: "دعم فني مباشر عبر الموقع",
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، ",
    },
    {
      title: "دعم فني مباشر عبر الموقع",
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، ",
    },
  ];
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) return null;

  return (
    <section className="relative py-[70px]">
      <Image
        src={how_it_work}
        alt="How It Work Background"
        loading="lazy"
        fill
        sizes="100vh"
        className="object-cover object-center absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="container">
        {/* title */}
        <div>
          <h2 className="text-2xl dark-color">{t("how_it_works")}</h2>
          <div className="h-[17px] w-[123px] relative mt-5">
            <Image src={how_shape} alt="line" fill sizes="123px" loading="lazy" />
          </div>
        </div>

        {/* content */}
        <div className="grid xl:grid-cols-5 mt-10 gap-[135px] items-center">
          <div className="col-span-2 flex flex-col gap-6">
            {data.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 relative">
                    <Image src={right} alt="check icon" fill sizes="24px" loading="lazy" />
                  </div>
                  <h3 className="dark-color text-2xl">{item.title}</h3>
                </div>
                <p className="text-[#1C1C1C] text-sm mt-5">{item.description}</p>
              </div>
            ))}
          </div>
          {/* Images */}
          <div className="col-span-3 hidden xl:block">
            <Images />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
