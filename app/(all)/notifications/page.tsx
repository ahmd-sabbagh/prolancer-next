"use client";

import React from "react";
import Title from "@/components/title/Title";
import NotificationsList from "./_components/NotificationsList";
import { notifications } from "./_components/data";
import { useTranslations } from "next-intl";

export default function NotificationsPage() {
  const t = useTranslations();

  return (
    <section className="bg-[#F8FAFF] pt-10 md:pt-16 pb-[120px]">
      <div className="container max-w-[900px]">
        <Title title={t("notification")} />

        <div className="bg-white rounded-xl shadow-lg border border-[#EDEDED] mt-8 overflow-hidden">
          <NotificationsList items={notifications} />
        </div>
      </div>
    </section>
  );
}
