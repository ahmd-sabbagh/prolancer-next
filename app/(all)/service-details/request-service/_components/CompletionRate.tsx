import { useTranslations } from "next-intl";
import { IoMdArrowDropdown } from "react-icons/io";

const CompletionRate = () => {
  const t = useTranslations();
  const rate = 50;

  const getColor = () => {
    if (rate <= 30) return "#F08504";
    if (rate <= 90) return "#3D67F0";
    return "#00D388";
  };

  const color = getColor();

  return (
    <div>
      <h4 className="dark-color text-lg">
        {t("You can track the project's progress")}
      </h4>

      <div className="p-2.5 bg-white rounded-lg mt-8">
        <div className="relative h-[3px] rounded-sm bg-[#d3d3d3]">
          {/* bar color */}
          <div
            className="absolute h-full rounded-sm"
            style={{ width: `${rate}%`, backgroundColor: color }}
          />

          {/* rate bubble */}
          <div
            className="absolute -top-8"
            style={{ right: `calc(${rate > 95 ? rate - 2 : rate}% - 24px)` }}
          >
            <div
              className="relative w-12 h-6 rounded-4xl flex items-center justify-center text-white text-xs"
              style={{ backgroundColor: color }}
            >
              {rate}%{/* arrow */}
              <div className="text-2xl absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
                <IoMdArrowDropdown style={{ color }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionRate;
