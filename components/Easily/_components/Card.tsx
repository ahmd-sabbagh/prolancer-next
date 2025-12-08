import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon?: StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div>
      <div className="w-[52px] h-[52px] relative mx-auto">
        <Image
          src={icon!}
          alt="icon"
          fill
          loading="lazy"
          sizes="52px"
          className=" object-contain"
        />
      </div>
      <h3 className="text-center mt-4 text-xl dark-color">{title}</h3>
      <p className="text-center text-sm text-[#7A7D85] mt-2">{description}</p>
    </div>
  );
};

export default Card;
