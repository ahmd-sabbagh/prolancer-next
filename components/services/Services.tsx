import { clock, layer, location, walet, wanted } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Fav from "./_components/Fav";
import Link from "next/link";
interface ItemProps {
  icon: StaticImageData;
  text: string;
  isFav?: boolean;
}

const Item = ({ icon, text }: ItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 relative">
        <Image src={icon} alt="item" fill sizes="24px" loading="lazy" />
      </div>
      <div className="text-[#6C757D]">{text}</div>
    </div>
  );
};

const Services = () => {
  return (
    <div
      className="
      group
    p-4 md:p-8 bg-white rounded-lg shadow-sm border border-transparent
    transition-all duration-300
    hover:scale-[1.01] hover:border-[#E4E4E4] hover:shadow-md hover:bg-[#fafafa]
  "
    >
      {/* top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 md:gap-6">
          <div
            className="
          w-10 h-10 relative overflow-hidden rounded-lg
          transition-all duration-300
          group-hover:rotate-6 group-hover:scale-110
        "
          >
            <Image
              src={wanted}
              alt="service"
              fill
              sizes="40px"
              loading="lazy"
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="dark-color">{"مطلوب مصمم مواقع محترف"}</h3>
            <p className="mt-2 text-sm">{"شركة خطوة للبرمجيات الحرة"}</p>
          </div>
        </div>

        {/* date */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
          <div className="p-2 bg-[#9696961A] rounded-lg text-[#969696] text-xs">
            {"منذ 10 دقائق"}
          </div>
          <Fav />
        </div>
      </div>

      {/* bottom */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap items-center gap-6">
          <Item icon={layer} text={"برمجة تطبيقات"} />
          <Item icon={walet} text={"$40000-$42000"} />
          <Item icon={location} text={"جدة - حي النعيم"} />
          <Item icon={clock} text={"50 دقيقة  يوم"} />
        </div>

        <Link
          href="/service-details"
          className="
        mt-6 bg-green-color text-white py-2 px-5 rounded-xl text-sm block w-full md:w-fit text-center
        transition-all duration-300 hover:scale-105 hover:shadow-lg
      "
        >
          {"عرض التفاصيل"}
        </Link>
      </div>
    </div>
  );
};

export default Services;
