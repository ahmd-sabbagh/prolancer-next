import { FaStar } from "react-icons/fa6";

export const useStarRating = () => {
  const renderStars = (avg: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        className={`${
          index < avg ? "opacity-100" : "opacity-30"
        } text-xl text-[#F4AA1A] block`}
        key={index}
      >
        <FaStar />
      </span>
    ));
  };

  return { renderStars };
};
