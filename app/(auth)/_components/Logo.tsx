import Image, { StaticImageData } from "next/image";
interface LogoProps {
    logo:StaticImageData
}

const Logo = ({ logo }: LogoProps) => {
  return (
    <div className="w-[180px] h-[145px] relative mx-auto z-30">
      <Image
        src={logo}
        alt="Logo"
        fill
        className="object-contain"
        sizes="180px"
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
