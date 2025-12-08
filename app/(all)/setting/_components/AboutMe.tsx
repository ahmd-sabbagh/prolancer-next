import { useTranslations } from "next-intl";
import React from "react";

const AboutMe = () => {
  const t = useTranslations();
  const experience = [
    {
      date: "فبراير 2021 - الان",
      work_type: "مصمم جرافيك محترف",
      company: "خطوة للبرمجيات الحرة",
    },
    {
      date: "أكتوبر 2020",
      work_type: "مدير مشروعات",
      company: "Google Inc.",
    },
    {
      date: "أكتوبر 2020",
      work_type: "مدير مشروعات",
      company: "Google Inc.",
    },
  ];
  const education = [
    {
      date: "فبراير 2021 - الان",
      work_type: "بكالريوس علوم حاسب الي",
      company: "خطوة للبرمجيات الحرة",
    },
    {
      date: "أكتوبر 2020",
      work_type: "دبلومة برمجة الجوال",
      company: "Google Inc.",
    },
    {
      date: "أكتوبر 2020",
      work_type: "دبلومة برمجة الجوال",
      company: "Google Inc.",
    },
  ];
  return (
    <div className="px-4 pt-5 pb-8 rounded-[14px] bg-white box-shadow2">
      <h3 className="dark-color text-xl">{t("About me")}</h3>
      <p className="mt-3 text-[#67696E] text-sm">
        {
          "بصفتي مصممًا لواجهات المستخدم وتجربة المستخدم، أكرس نفسي لتصميم تجارب رقمية سلسة وبديهية تُولي رضا المستخدم وتفاعله الأولوية. بفضل خبرتي الواسعة في مبادئ التصميم المُركزة على المستخدم، أتخصص في إنشاء واجهات جذابة بصريًا، لا تتميز بمظهرها الرائع فحسب، بل تعمل بكفاءة عالية على مختلف المنصات."
        }
      </p>
      <p className="mt-6 text-[#67696E] text-sm">
        {
          "إذا كنت تبحث عن مصمم تجربة مستخدم/واجهة مستخدم قادر على الارتقاء بحضورك الرقمي وتقديم تجارب مستخدم استثنائية، فقد وجدت ضالتك. دعنا نتعاون لتحقيق رؤيتك وبناء علاقات قيّمة مع جمهورك."
        }
      </p>

      {/* education and xperience */}
      <div className="flex flex-col md:flex-row md:items-start mt-10 gap-4 md:gap-10">
        <div className="grow md:pe-4 pb-4 md:pb-0 border-b md:border-b-0 md:border-e border-[#E4E4E4]">
          <h4 className="dark-color text-xl">{t("Experience")}</h4>
          <div className="mt-4 flex flex-col gap-5">
            {experience.map((item, idx) => (
              <div className="flex flex-col gap-1 c_g" key={idx}>
                <span className="text-xs text-[#67696E]">{item.date}</span>
                <div className="text-xl dark-color">{item.work_type}</div>
                <span className="text-[#67696E] text-sm">{item.company}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grow">
          <h4 className="dark-color text-xl">{t("education")}</h4>
          <div className="mt-4 flex flex-col gap-5">
            {education.map((item, idx) => (
              <div className="flex flex-col gap-1 c_g" key={idx}>
                <span className="text-xs text-[#67696E]">{item.date}</span>
                <div className="text-xl dark-color">{item.work_type}</div>
                <span className="text-[#67696E] text-sm">{item.company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
