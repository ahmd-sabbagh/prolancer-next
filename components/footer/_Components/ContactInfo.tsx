import { useTranslations } from "next-intl";
import Link from "next/link";
const ContactInfo = () => {
  const t = useTranslations();

  return (
    <div>
      <h3 className="green-color text-2xl">{t("contact_info")}</h3>
      <div className="mt-6 text-white flex flex-col gap-2">
        <span>{t("email")}</span>
        <Link href="mailto:example@example.com" className="text-white text-xl">
          example@example.com
        </Link>
        <span>{t("unified_phone")}</span>
        <Link href="tel:+1234567890" className="text-white text-xl">
          +1234567890
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
