import { language } from "@/assets";
import { setCookie } from "cookies-next/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

// import { IoIosArrowDown } from "react-icons/io";


interface Props {
  lang: string;
}

const Language: React.FC<Props> = ({ lang }) => {
  const router = useRouter();
  const changeLanguage = () => {
    if (lang === "ar") {
      setCookie("NEXT_LOCALE", "en");
    } else {
      setCookie("NEXT_LOCALE", "ar");
    }
    router.refresh()
  };
  return (
    // <div className="lg:px-4 lg:border-e-2 border-white">
    <div>
      <div className="flex items-center gap-4">
        <button className="relative w-4.5 h-4.5 block cursor-pointer" onClick={changeLanguage}>
          <Image
            src={language}
            alt="language"
            fill
            loading="lazy"
            sizes="18px"
          />
        </button>
        {/* <IoIosArrowDown className="text-white text-xl hidden lg:block" /> */}
      </div>
    </div>
  );
};

export default Language;
