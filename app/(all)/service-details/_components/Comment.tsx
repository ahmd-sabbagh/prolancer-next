import { landing } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Comment = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="mt-5 md:mt-10 pt-5 md:pt-10 border-t border-[#E4E4E4]">
      <div className="flex items-start gap-5">
        <div className="min-w-14 h-14 relative">
          <Image
            src={landing}
            alt="profile"
            loading="lazy"
            fill
            sizes="56px"
            className=" object-cover rounded-full"
          />
        </div>
        <div>
          <h4 className="md:text-xl dark-color">{"حسام الدين"}</h4>
          <span className="text-sm text-[#67696E]">{"August 13, 2024"}</span>
          <div className="flex items-center gap-1.5 w-fit mt-2">
            {arr.map((iem) => (
              <FaStar key={iem} className="text-xl text-[#F4AA1A]" />
            ))}
          </div>
          <p className="text-sm text-[#67696E] mt-4">{"إذا كنت تبحث عن مصمم تجربة مستخدم/واجهة مستخدم قادر على الارتقاء بحضورك الرقمي وتقديم تجارب مستخدم استثنائية، فقد وجدت ضالتك. دعنا نتعاون لتحقيق رؤيتك وبناء علاقات قيّمة مع جمهورك."}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
