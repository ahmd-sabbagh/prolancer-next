import { useTranslations } from "next-intl";
import React from "react";
import { SkillItem } from "./SkillItem";

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

      {/* skills and tools */}
      <div className="flex flex-col md:flex-row md:items-start mt-10 gap-4 md:gap-10">
        {/* Card */}
        <div className="w-full">
          {/* Title */}
          <h3 className="text-right text-gray-800 mb-4 text-xl">مهارات و ادوات</h3>

          {/* Rows */}
          <div className="space-y-4 bg-white border border-gray-200 rounded-lg p-4 md:p-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <SkillItem label="Figma" value={60} />
              <SkillItem label="Html & CSS" value={70} />
              <SkillItem label="AI" value={80} />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <SkillItem label="Figma" value={60} />
              <SkillItem label="Html & CSS" value={70} />
              <SkillItem label="AI" value={80} />
            </div>
          </div>
        </div>
      </div>

      {/* portfolio */}
      <div className="flex flex-col md:flex-row md:items-start mt-10 gap-4 md:gap-10">
        <div className="w-full bg-white">
          {/* Title */}
          <h3 className="text-right text-gray-800 mb-4 text-xl">ملف الاعمال</h3>

          {/* Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Right big box */}
            <div className="md:col-span-2">
              <div className="h-[320px] md:h-[510px] bg-gray-200 rounded-xl" />
            </div>

            {/* Left column (2 stacked boxes) */}
            <div className="md:col-span-1 flex flex-col gap-6">
              {/* top gray */}
              <div className="h-[220px] md:h-[240px] bg-gray-200 rounded-xl" />

              {/* bottom mint "show all" */}
              <button
                type="button"
                className="h-[220px] md:h-[240px] bg-emerald-100 rounded-xl
                     flex items-center justify-center text-emerald-600
                     text-xl hover:bg-emerald-200 transition"
              >
                عرض الكل
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;
