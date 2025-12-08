import { cn } from "@/lib/utils";
import React, { useState } from "react";
interface Props {
  label: string;
  type: string;
  id: string;
}

const Input: React.FC<Props> = ({ label, type, id }) => {
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
