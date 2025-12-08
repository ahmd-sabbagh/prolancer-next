import { landing } from "@/assets";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Card = () => {
  const t = useTranslations();
  return (
    <div
      className="bg-white box-shadow2 rounded-[14px] p-4 pb-5 
  transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 group"
    >
      <div
        className="relative w-20 h-20 mx-auto rounded-full 
    overflow-hidden transition-all duration-300 group-hover:scale-110"
      >
        <Image
          src={landing}
          alt="profile image"
          fill
          loading="lazy"
          className="object-cover rounded-full border-4 border-white box-shadow"
        />
      </div>

      {/* text */}
      <div className="text-center mt-3">
        <h3 className="dark-color">{"عبدالرحمن الـمرزوقي"}</h3>

        <span className="flex items-center justify-center gap-1 text-[#67696E] mt-1">
          <HiOutlineLocationMarker />
          <span className="text-sm">{"جدة - حي النعيم"}</span>
        </span>

        <div className="flex items-center gap-1 justify-center mt-1">
          <FaStar className="text-[#F4AA1A]" />
          <span className="dark-color text-sm font-semibold">{"4.9"}</span>
          <span className="text-sm text-[#67696E]">{"(234 تقييم)"}</span>
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-5">
          <div className="py-2 px-4 rounded-4xl bg-[#F5F7F9] text-xs dark-color font-medium">
            {"برمجة موقع"}
          </div>
          <div className="py-2 px-4 rounded-4xl bg-[#F5F7F9] text-xs dark-color font-medium">
            {"دوام كامل"}
          </div>
        </div>

        <div className="mt-5 pt-2.5 border-t border-[#E4E4E4]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <strong className="text-lg font-semibold dark-color">
                {"$22"}
              </strong>
              <span className="text-[#67696E]">{"/ساعة"}</span>
            </span>
            <span className="text-[#67696E] text-sm">{"234 مشروع"}</span>
          </div>

          <Link
            href={""}
            className="block mt-5 text-center bg-[#00D3881A] green-color rounded-xl py-3 text-sm
        transition-all duration-300 hover:bg-[#00D38833]"
          >
            {t("view details")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
