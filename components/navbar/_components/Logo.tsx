import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="block">
      <div className="relative w-20 h-8 lg:w-[130px] lg:h-11">
        <Image
          src={logo}
          alt="Prolancer Logo"
          fill
          loading="lazy"
          sizes="(min-width: 768px) 130px, 80px"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
