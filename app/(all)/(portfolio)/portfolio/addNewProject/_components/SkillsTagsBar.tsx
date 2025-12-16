import React from "react";

interface SkillsTagsBarProps {
  tags: string[];
}

const SkillsTagsBar: React.FC<SkillsTagsBarProps> = ({ tags }) => {
  return (
    <div
      className="
        w-full
        min-h-[50px]
        rounded-[10px]
        border border-[#E5E7EB]
        bg-white
        flex items-center
        px-3 py-2
        overflow-x-auto
        gap-2
      "
      dir="ltr"
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="
            inline-flex items-center justify-center
            px-3 py-1
            rounded-[6px]
            border border-[#D1D5DB]
            text-[11px] tracking-wide
            text-[#374151]
            font-semibold
            whitespace-nowrap
          "
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default SkillsTagsBar;
