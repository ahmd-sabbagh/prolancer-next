import Services from "@/components/services/Services";
import Title from "@/components/title/Title";
import { useTranslations } from "next-intl";
import React from "react";

const FavoritePage = () => {
  const t = useTranslations();
  return (
    <section className="bg-[#F8FAFF] pt-10 md:pt-16 pb-[100px]">
      <div className="container">
        <Title title={t("Services you liked")} />
        {/* Services */}
        <div className="mt-8 flex flex-col gap-8">
          <Services defaultFav />
          <Services defaultFav />
          <Services defaultFav />
          <Services defaultFav />
        </div>
      </div>
    </section>
  );
};

export default FavoritePage;
