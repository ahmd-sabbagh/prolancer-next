import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Props {
  label: string;
  type: string;
  id: string;
  dir?: "ltr" | "rtl";          //  اتجاه الكتابة
  textAlign?: "left" | "right"; //  محاذاة النص
}

const Input: React.FC<Props> = ({ label, type, id, dir, textAlign }) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="dark-color text-sm">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={label}
        dir={dir} // تطبيق اتجاه النص
        style={{ textAlign: textAlign }} // تطبيق المحاذاة
        className={cn(
          "grow border! rounded-lg py-3 px-4 placeholder:text-xs!",
          focus ? "border-[#00D388]!" : "border-[#E4E4E4]!"
        )}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

export default Input;
