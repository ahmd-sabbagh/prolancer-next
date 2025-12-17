"use client";

import React from "react";
import Link from "next/link";
import Title from "@/components/title/Title";

import NotificationsList from "./_components/NotificationsList";
import { notifications } from "./_components/data";

export default function NotificationsPage() {
  return (
    <section className="bg-[#F8FAFF] pt-10 md:pt-16 pb-[120px]">
      <div className="container max-w-[720px]">
        <Title title="الإشعارات" />

        <div className="bg-white rounded-xl shadow-lg border border-[#EDEDED] mt-8 overflow-hidden">
          <NotificationsList items={notifications} />
        </div>
      </div>
    </section>
  );
}
