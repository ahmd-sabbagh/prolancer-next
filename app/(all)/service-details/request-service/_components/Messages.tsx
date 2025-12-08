import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
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
  messages: Message[];
};

const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <div className="bg-white p-3 md:p-6 mt-5">
      <div className="h-[450px] overflow-y-scroll hide-scrollbar flex flex-col gap-5">
        {messages.map((msg) => (
          <div
            className={cn(msg.sender === "me" ? " self-start" : " self-end")}
            key={msg.id}
          >
            <div className="">
              {msg.type === "text" ? (
                <div
                  className={cn(
                    "max-w-[400px] px-4 py-3 rounded-xl text-sm",
                    msg.sender === "me" ? "bg-[#F5F7F9]" : "bg-[#E6FBF3]"
                  )}
                >
                  {msg.content}
                </div>
              ) : (
                <div className="p-4 rounded-sm bg-[#F5F7F9]">
                  <div className="w-[296px] h-[197px] relative">
                    <Image
                      src={msg.content}
                      alt="photo"
                      fill
                      loading="lazy"
                      sizes="296px"
                      className=" object-cover"
                    />
                  </div>
                </div>
              )}
              <span
                className={cn(
                  "mt-1 text-[#6C757D] text-sm block",
                  msg.sender !== "me" && "text-end"
                )}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
