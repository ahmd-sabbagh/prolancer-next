"use client";

import { useTranslations } from "next-intl";
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendar } from "react-icons/io5";

interface Education {
  degree: string;
  university: string;
  startDate: Date | null;
  endDate: Date | null;
}

export default function Educations() {
  const t = useTranslations();
  const [educations, setEducations] = useState<Education[]>([
    { degree: "", university: "", startDate: null, endDate: null },
  ]);

  const startRefs = useRef<(DatePicker | null)[]>([]);
  const endRefs = useRef<(DatePicker | null)[]>([]);

  function handleChange<K extends keyof Education>(
    index: number,
    field: K,
    value: Education[K]
  ) {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);
  }

  const addEducation = () => {
    setEducations([
      ...educations,
      { degree: "", university: "", startDate: null, endDate: null },
    ]);
  };

  const removeEducation = (index: number) => {
    setEducations(educations.filter((_, i) => i !== index));
    startRefs.current.splice(index, 1);
    endRefs.current.splice(index, 1);
  };

  const openStartPicker = (index: number) => {
    startRefs.current[index]?.setOpen(true);
  };

  const openEndPicker = (index: number) => {
    endRefs.current[index]?.setOpen(true);
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-xl mt-5 md:mt-7.5">
      <h3 className="md:text-xl dark-color">{t("education")}</h3>

      {educations.map((edu, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-5 mt-5 items-center"
        >
          {/* نوع الشهادة */}
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor={`certificate_${index}`}
              className="text-sm darc-color"
            >
              {t("Certificate")}
            </label>
            <input
              type="text"
              placeholder={t("Certificate")}
              id={`certificate_${index}`}
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
              className="grow border! rounded-lg py-3 px-4 placeholder:text-xs! border-[#E4E4E4]!"
            />
          </div>

          {/* اسم الجامعة */}
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor={`university_${index}`}
              className="text-sm darc-color"
            >
              {t("University")}
            </label>
            <input
              type="text"
              placeholder={t("University")}
              id={`university_${index}`}
              value={edu.university}
              onChange={(e) =>
                handleChange(index, "university", e.target.value)
              }
              className="grow border! rounded-lg py-3 px-4 placeholder:text-xs! border-[#E4E4E4]!"
            />
          </div>

          {/* تاريخ البداية */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor={`e_start_date${index}`}
              className="text-sm darc-color"
            >
              {t("Start date")}
            </label>
            <div className="flex items-center grow border! rounded-lg py-3 px-4 placeholder:text-xs! border-[#E4E4E4]!">
              <input
                type="text"
                readOnly
                id={`e_start_date${index}`}
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
            <label htmlFor={`e_finish_${index}`} className="text-sm darc-color">
              {t("Finish")}
            </label>
            <div className="flex items-center grow border! rounded-lg py-3 px-4 placeholder:text-xs! border-[#E4E4E4]!">
              <input
                type="text"
                readOnly
                id={`e_finish_${index}`}
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
          {educations.length > 1 && (
            <div className="flex justify-end  md:col-span-2">
              <button
                onClick={ () => removeEducation(index)}
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
