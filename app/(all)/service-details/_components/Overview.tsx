import { clock, rotate, timer, walet } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import RequestService from "./RequestService";
import ProfileOrderOwner from "./ProfileOrderOwner";

const Overview = () => {
  const t = useTranslations();
  return (
    <>
      <div className="p-6 bg-white rounded-xl h-fit">
        <h3 className="dark-color">{t("Overview")}</h3>
        <p className="mt-2 md:mt-3 text-sm text-[#62646A]">
          {
            "تتضمن الحزمة الأساسية مشاهد الكمبيوتر المحمول فقط، الموسيقى الخلفية، والشعار، وفيديو بدقة 720HD"
          }
        </p>
        {/* info */}

        <div className="flex items-center flex-wrap gap-4.5 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 relative">
              <Image src={walet} alt="walet" fill loading="lazy" sizes="24px" />
            </div>
            <span className="text-[#6C757D]">{"100$"}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 relative">
              <Image src={clock} alt="clock" fill loading="lazy" sizes="24px" />
            </div>
            <span className="text-[#6C757D]">{"50 دقيقة / يوم"}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 relative">
              <Image
                src={rotate}
                alt="recycle"
                fill
                loading="lazy"
                sizes="20px"
              />
            </div>
            <span className="text-[#6C757D]">{"1 تعديل"}</span>
          </div>
        </div>

        {/* action step */}
        <h4 className="dark-color mt-7">{t("Action steps")}</h4>
        <div className="mt-5 flex flex-col gap-4">
          {Array(4)
            .fill("")
            .map((_, idx) => (
              <div className="flex items-center gap-3" key={idx}>
                <div className="w-4 h-4 relative">
                  <Image
                    src={timer}
                    alt="timer"
                    loading="lazy"
                    fill
                    sizes="16px"
                  />
                </div>
                <span className="text-[#67696E] text-sm">
                  {"تحويل Figma إلى HTML"}
                </span>
              </div>
            ))}
        </div>
        {/* Request the service */}
        <RequestService />
      </div>
      <ProfileOrderOwner />
    </>
  );
};

export default Overview;
