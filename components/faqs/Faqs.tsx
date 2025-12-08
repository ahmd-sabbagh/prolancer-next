"use client";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
interface Props {
  className?: string;
}

const Faqs: React.FC<Props> = ({ className }) => {
  const t = useTranslations();
  const [open, setOpen] = useState<number | null>(1);
  const toggle = (id: number) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  const data = [
    {
      id: 1,
      question: "ما هي منصة فريلانس ان ؟",
      answer:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، ",
    },
    {
      id: 2,
      question: "ما هي منصة فريلانس ان ؟",
      answer:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، ",
    },
    {
      id: 3,
      question: "ما هي منصة فريلانس ان ؟",
      answer:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، ",
    },
  ];
  return (
    <section className={cn("", className)}>
      <div className="container">
        <h3 className="text-center text-2xl md:text-[32px] green-color">
          {t("faqs")}
        </h3>
        <p className="mt-2.5 text-center dark-color text-2xl md:text-[32px]">
          {t("faqs_sub")}
        </p>
        <span className="text-center block text-[#848A98] mt-3 md:mt-5.5">
          {t("maybe_help")}
        </span>

        <div className="mt-8">
          {data.map((item) => (
            <div
              className={cn(
                "bg-white py-6 px-10 border-b transition-all duration-300",
                open === item.id ? "border-[#00D388]" : "border-[#EFEFF2]"
              )}
              key={item.id}
            >
              {/* question */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle(item.id)}
              >
                <h4 className="dark-color text-lg line-clamp-1">
                  {item.question}
                </h4>

                <motion.span
                  initial={false}
                  animate={{ rotate: open === item.id ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xl"
                >
                  {open === item.id ? <FiMinus /> : <FiPlus />}
                </motion.span>
              </div>

              {/* answer with animation */}
              <AnimatePresence>
                {open === item.id && (
                  <motion.p
                    key={item.id}
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="text-[#848A98] mt-4 overflow-hidden"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
