"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Messages from "./Messages";

type Message = {
  id: number;
  sender: "me" | "other";
  type: "text" | "image" | "file" | "audio";
  content: string;
  time: string;
  status: "sent" | "delivered" | "seen";
  fileName?: string;
  fileSize?: string;
  duration?: string;
};

type Props = {
  title: string;
  subTitle: string;
  state: string;
  messages: Message[];
};

const Stage: React.FC<Props> = ({ title, subTitle, state, messages }) => {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations();
  return (
    <div className="">
      {/* Head */}
      <button
        type="button"
        className={cn(
          "w-full text-start transition-all",
          !open ? "p-3 md:ps-4.5 md:p-6 rounded-xl bg-white" : ""
        )}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-between">
          <h5 className="md:text-2xl">{title}</h5>
          <div className="flex items-center gap-5">
            <div
              className={cn(
                "text-xs md:text-sm rounded-4xl p-2",
                state === "progress"
                  ? "bg-[#F085041A] text-[#F08504]"
                  : "text-[#00D388] bg-[#00D3881A]"
              )}
            >
              {state === "progress" ? t("Work in progress") : t("Complete")}
            </div>
            <div className="w-7.5 h-7.5 flex-center rounded-full bg-[#62646A1A]">
              <IoIosArrowDown
                className={cn(
                  " transition-all",
                  open ? " rotate-180" : " rotate-0"
                )}
              />
            </div>
          </div>
        </div>
        <p className="text-xs md:text-sm text-[#62646A] mt-4 max-w-[515px]">
          {subTitle}
        </p>
      </button>
      {/* messages */}
      {open && <Messages messages={messages} />}
    </div>
  );
};

export default Stage;
