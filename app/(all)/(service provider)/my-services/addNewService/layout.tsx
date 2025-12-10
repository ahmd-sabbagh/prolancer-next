"use client";

import React from "react";
import { usePathname } from "next/navigation";

type Step = 1 | 2 | 3;

const steps: { id: Step; label: string }[] = [
  { id: 1, label: "نظرة عامة" },
  { id: 2, label: "المراحل و طريقة العمل" },
  { id: 3, label: "التسعير و نشر الخدمة" },
];

export default function AddServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let currentStep: Step = 1;
  if (pathname.endsWith("/step-2")) currentStep = 2;
  else if (pathname.endsWith("/step-3")) currentStep = 3;

  return (
    <section className="min-h-screen bg-[#F8FAFF] py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-[1150px] px-4 md:px-0 space-y-6 md:space-y-8">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#111827]">
            أضف خدمة جديدة
          </h1>
        </div>

        <div className="flex flex-col gap-4 md:m-4">
          <div className="bg-white rounded-[10px] shadow-[0_22px_60px_rgba(15,23,42,0.06)] px-4 sm:px-6 md:px-10 py-5 sm:py-6 space-y-6">
            <StepsHeader currentStep={currentStep} />
          </div>

          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

function StepsHeader({ currentStep }: { currentStep: Step }) {
  return (
    <div
      className="
        flex w-full select-none
        flex-col items-center gap-6
        sm:flex-row sm:gap-4 sm:items-center
      "
    >
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isDone = currentStep > step.id;

        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-right">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs
                  ${isActive || isDone
                    ? "bg-[#00D084] text-white"
                    : "bg-[#E5E7EB] text-[#6B7280]"
                  }`}
              >
                {step.id}
              </span>
              <span
                className={`text-sm ${isActive || isDone
                    ? "text-[#111827] font-medium"
                    : "text-[#9CA3AF]"
                  }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden sm:block flex-1 h-[1px] bg-[#E5E7EB] mx-4" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
