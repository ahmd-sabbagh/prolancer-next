"use client";
import React, { useMemo, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";

type StatusKey = "available" | "busy" | "vacation";

export default function AvailabilityStatusCard() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [selected, setSelected] = useState<StatusKey>("available");

  const rows = useMemo(
    () => [
      {
        key: "available" as const,
        title: t("available"),
        desc: t("available_desc"),
        tone: "emerald",
      },
      {
        key: "busy" as const,
        title: t("busy"),
        desc: t("busy_desc"),
        tone: "slate",
      },
      {
        key: "vacation" as const,
        title: t("vacation"),
        desc: t("vacation_desc"),
        tone: "slate",
      },
    ],
    [t]
  );

  return (
    <div className="rounded-xl border border-slate-100 bg-white shadow-sm">
      <div className="p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl text-slate-900">{t("availability_status")}</h2>
          <span />
        </div>

        <div className="space-y-4">
          {rows.map((r) => {
            const isActive = selected === r.key;

            const boxBase =
              "rounded-lg px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-4";
            const activeBox = "bg-emerald-50 border border-emerald-400";
            const inactiveBox = "bg-[#B5B6BA12] border border-transparent";

            return (
              <button
                key={r.key}
                type="button"
                onClick={() => setSelected(r.key)}
                className={[
                  `w-full ${isRTL ? "text-right" : "text-left"}`,
                  boxBase,
                  isActive ? activeBox : inactiveBox,
                ].join(" ")}
              >
                <div className="shrink-0">
                  {isActive ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <FiCheck className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-white" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-slate-900">{r.title}</div>
                  <div className="mt-1 text-xs text-slate-600">{r.desc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
