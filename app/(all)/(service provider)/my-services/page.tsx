import React from "react";
import TitleLink from "../_components/TitleLink";
import { useTranslations } from "next-intl";
import ServiceCard from "../_components/service-card/ServiceCard";
import { landing } from "@/assets";

const MyservicesPage = () => {
  const t = useTranslations();

  const services = [
    {
      id: 1,
      title: "برمجة و تصميم تطبيق جوال نيتيف",
      category: "برمجة تطبيقات",
      image: landing,
      price: 42000,
      duration: "50 دقيقة \\ يوم",
      revisions: "3 مراحل",
      inQueue: "داخل 3 أيام",
      rate: 4.8,
      reviewsCount: 751,
      isActive: true,
    },
    {
      id: 2,
      title: "تصميم واجهات UI/UX احترافية",
      category: "تصميم وتجربة مستخدم",
      image: landing,
      price: 2800,
      duration: "3 أيام",
      revisions: "2 مراحل",
      inQueue: "يبدأ خلال يوم",
      rate: 4.9,
      reviewsCount: 520,
      isActive: false,
    },
    {
      id: 3,
      title: "تطوير موقع إلكتروني متكامل WordPress",
      category: "برمجة مواقع",
      image: landing,
      price: 3500,
      duration: "5 أيام",
      revisions: "3 مراحل",
      inQueue: "داخل 24 ساعة",
      rate: 4.7,
      reviewsCount: 890,
      isActive: true,
    },
    {
      id: 4,
      title: "كتابة محتوى SEO احترافي",
      category: "كتابة محتوى",
      image: landing,
      price: 500,
      duration: "يوم واحد",
      revisions: "مرحلتين",
      inQueue: "فوري",
      rate: 4.9,
      reviewsCount: 230,
      isActive: true,
    },
    {
      id: 5,
      title: "مونتاج فيديو احترافي",
      category: "مونتاج و تحرير فيديو",
      image: landing,
      price: 1500,
      duration: "يومين",
      revisions: "3 مراحل",
      inQueue: "داخل 12 ساعة",
      rate: 4.6,
      reviewsCount: 340,
      isActive: false,
    },
  ];
  return (
    <section className="bg-[#F8FAFF]">
      {/* البلوك اللي عرضه 1511 وارتفاعه قريب من 658 */}
      <div
        className="
          mx-auto
          max-w-[1511px]
          min-h-[658px]
          pt-[122px]
          pb-[204px]
          space-y-8
        "
      >
        <TitleLink
          title={t("myServices")}
          nameLink={t("Add a service")}
          link=""
        />

        {/* مسافات ثابتة بين الكروت */}
        <div className="space-y-[32px]">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default MyservicesPage;
