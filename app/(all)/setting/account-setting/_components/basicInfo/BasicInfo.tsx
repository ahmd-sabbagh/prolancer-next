import { useTranslations } from "next-intl";
import ProfileImag from "./_components/ProfileImag";
import Inputs from "./_components/Inputs";

const BasicInfo = () => {
  const t = useTranslations();
  return (
    <div className="p-4 md:p-8 bg-white rounded-xl mt-5 md:mt-7.5">
      <h3 className="md:text-xl dark-color">{t("Basic Information")}</h3>
      <ProfileImag />
      <Inputs />
    </div>
  );
};

export default BasicInfo;
