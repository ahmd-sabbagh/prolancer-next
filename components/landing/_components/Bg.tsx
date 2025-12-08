import { landing } from "@/assets";
import Image from "next/image";

interface BgProps {
  children?: React.ReactNode;
}

const Bg = ({ children }: BgProps) => {
  return (
    <>
      <Image
        src={landing}
        alt="Landing Background"
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover z-0"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 z-1 pointer-events-none bg-[#262626]/90"
        aria-hidden="true"
      />
      {children}
    </>
  );
};

export default Bg;
