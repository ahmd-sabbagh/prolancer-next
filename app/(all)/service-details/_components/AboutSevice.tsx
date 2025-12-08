import { useTranslations } from "next-intl";
import React from "react";

const AboutSevice = () => {
  const t = useTranslations();
  return (
    <div className="mt-10 md:mt-20">
      <h4 className="text-xl md:text-2xl dark-color">{t("about_service")}</h4>
      <p className="text-[#67696E] mt-4">
        {
          "مرحباً، أنا مصمم مواقع ويب. إذا كنت بحاجة إلى تصميم مواقع ويب من Figma إلى HTML، أو PSD إلى HTML، أو Xd إلى HTML، أو Sketch إلى HTML، أو inVision إلى HTML، أو Zeplin إلى HTML، أو أي شيء آخر يتعلق بـ HTML CSS، فيمكنك الاستعانة بي، فأنا أعمل باحترافية مع HTML وCSS وbootstrap وTailwind CSS وjQuery وJavaScript، مع جميع تصاميم المواقع المتجاوبة مع المتصفحات."
        }
      </p>
      <p className="text-[#67696E] mt-3">
        {
          "لديّ خبرة تزيد عن ثلاث سنوات في إنشاء صفحات ويب HTML وCSS بتصميم مواقع متجاوبة بالكامل. يمكنك طلب أي تصميم، وسأصمم لك الصفحة التي تحتاجها تمامًا. "
        }
      </p>
      <div className="mt-6 md:mt-10">
        <h4 className="text-xl md:text-2xl dark-color">
          {t("Implementation phase")}
        </h4>
        <div className="mt-4 flex flex-col gap-1">
          {Array(5)
            .fill("")
            .map((_, idx) => (
              <p className="text-[#67696E]" key={idx}>
                <span>{idx + 1}</span>
                {"- تحويل Figma إلى HTML"}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSevice;
