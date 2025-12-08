import { useTranslations } from "next-intl";
import { useState } from "react";

export default function SkillsInput() {
  const t = useTranslations();
  const [skills, setSkills] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() !== "") {
      e.preventDefault();
      setSkills([...skills, value.trim()]);
      setValue("");
    }
  };

  const removeSkill = (idx: number) => {
    setSkills(skills.filter((_, i) => i !== idx));
  };

  return (
    <div className="md:col-span-2">
      <span className="text-sm dark-color">{t("Skills and tools")}</span>
      <div className="flex flex-wrap gap-2 py-2 px-4 border border-[#E4E4E4] rounded-lg mt-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 px-3 py-1 border border-[#E4E4E4] rounded-md text-sm"
          >
            {skill}
            <button
              onClick={() => removeSkill(idx)}
              className="dark-color"
            >
              ×
            </button>
          </span>
        ))}

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="grow outline-none"
          placeholder={t("Skills and tools")}
        />
      </div>
    </div>
  );
}
