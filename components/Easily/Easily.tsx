import { useTranslations } from "next-intl";
import React from "react";
import Card from "./_components/Card";
import { cercle, ok, searching } from "@/assets";

const Easily = () => {
  const t = useTranslations();
  return (
    <section className="py-[50px]">
      <div className="container">
        <div className="text-xs text-center green-color">{t("easly")}</div>
        <p className="mt-6 text-center text-[30px] font-bold dark-color">
          {t("Complete your tasks and projects")}
        </p>
        <p className="text-center text-sm dark-color mt-3">
          {
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، "
          }
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12 lg:mt-20 gap-5 md:gap-8 lg:gap-12 xl:gap-20">
          <Card
            title={"الانتقاء من الافضل"}
            description={
              "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، "
            }
            icon={cercle}
          />
          <Card
            title={"تراقب انجاز اعمالك"}
            description={
              "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، "
            }
            icon={searching}
          />
          <Card
            title={"ضمان لاموالك"}
            description={
              "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، "
            }
            icon={ok}
          />
        </div>
      </div>
    </section>
  );
};

export default Easily;
