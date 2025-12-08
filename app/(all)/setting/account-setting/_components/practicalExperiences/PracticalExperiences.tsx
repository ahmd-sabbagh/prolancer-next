"use client";

import { useTranslations } from "next-intl";
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendar } from "react-icons/io5";

interface Education {
  job_name: string;
  company: string;
  startDate: Date | null;
  endDate: Date | null;
}

export default function PracticalExperiences() {
  const t = useTranslations();
  const [experiences, setExperiences] = useState<Education[]>([
    { job_name: "", company: "", startDate: null, endDate: null },
  ]);

  const startRefs = useRef<(DatePicker | null)[]>([]);
  const endRefs = useRef<(DatePicker | null)[]>([]);

  function handleChange<K extends keyof Education>(
    index: number,
    field: K,
    value: Education[K]
  ) {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  }

  const addEducation = () => {
    setExperiences([
      ...experiences,
      { job_name: "", company: "", startDate: null, endDate: null },
    ]);
  };

  const removeEducation = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
    startRefs.current.splice(index, 1);
    endRefs.current.splice(index, 1);
  };

  const openStartPicker = (index: number) => {
    startRefs.current[index]?.setOpen(true);
  };

  const openEndPicker = (index: number) => {
    endRefs.current[index]?.setOpen(true);
  };
  console.log(experiences);
  return (
    <div className="p-4 md:p-8 bg-white rounded-xl mt-5 md:mt-7.5">
      <h3 className="md:text-xl dark-color">{t("Practical experiences")}</h3>

      {experiences.map((edu, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-5 mt-5 items-center"
        >
          {/* اسم الوظيفة */}
          <div className="flex flex-col gap-2.5">
            <label htmlFor={`job_name${index}`} className="text-sm darc-color">
              {t("Job name")}
            </label>
            <input
              type="text"
              placeholder={t("Job name")}
              id={`job_name${index}`}
              value={edu.job_name}
              onChange={(e) => handleChange(index, "job_name", e.target.value)}
              className="grow border! rounded-lg py-3 px-4 placeholder:text-xs! border-[#E4E4E4]!"
            />
          </div>

          {/* الشركة */}
          <div className="flex flex-col gap-2.5">
            <label htmlFor={`company_${index}`} className="text-sm darc-color">
              {t("company")}
            </label>
            <input
              type="text"
              placeholder={t("company")}
              id={`company_${index}`}
              value={edu.company}
              onChange={(e) => handleChange(index, "company", e.target.value)}
              className="grow border! rounded-lg py-3 px-4 placeholder:text-xs! border-[#E4E4E4]!"
            />
          </div>

          {/* تاريخ البداية */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor={`start_date${index}`}
              className="text-sm darc-color"
            >
              {t("Start date")}
            </label>
            <div className="flex items-center grow border! rounded-lg py-3 px-4 placeholder:text-xs! border-[#E4E4E4]!">
              <input
                type="text"
                readOnly
                id={`start_date${index}`}
                value={edu.startDate ? edu.startDate.toLocaleDateString() : ""}
                placeholder={t("Start date")}
                className="grow"
              />
              <button
                onClick={() => openStartPicker(index)}
                className="text-xl green-color"
              >
                <IoCalendar />
              </button>
              <DatePicker
                ref={(el) => {
                  startRefs.current[index] = el;
                }}
                selected={edu.startDate}
                onChange={(date) => handleChange(index, "startDate", date)}
                className="hidden"
              />
            </div>
          </div>

          {/* تاريخ النهاية */}
          <div className="flex flex-col gap-2">
            <label htmlFor={`finish_${index}`} className="text-sm darc-color">
              {t("Finish")}
            </label>
            <div className="flex items-center grow border! rounded-lg py-3 px-4 placeholder:text-xs! border-[#E4E4E4]!">
              <input
                type="text"
                readOnly
                id={`finish_${index}`}
                value={edu.endDate ? edu.endDate.toLocaleDateString() : ""}
                placeholder={t("Finish")}
                className="grow"
              />
              <button
                onClick={() => openEndPicker(index)}
                className="text-xl green-color"
              >
                <IoCalendar />
              </button>
              <DatePicker
                ref={(el) => {
                  endRefs.current[index] = el;
                }}
                selected={edu.endDate}
                onChange={(date) => handleChange(index, "endDate", date)}
                className="hidden"
              />
            </div>
          </div>

          {/* زر الحذف */}
          {experiences.length > 1 && (
            <div className="flex justify-end  md:col-span-2">
              <button
                onClick={() => removeEducation(index)}
                className="flex items-center gap-1 text-[#E5322D]"
              >
                <span className="text-xl">-</span>
                <span>{t("delete")}</span>
              </button>
            </div>
          )}
        </div>
      ))}

      {/* زر إضافة خبرة جديدة */}
      <div className="flex justify-end mt-5">
        <button
          onClick={addEducation}
          className="flex items-center gap-1 green-color"
        >
          <span className="text-xl">+</span>
          <span>{t("Add new")}</span>
        </button>
      </div>
    </div>
  );
}
