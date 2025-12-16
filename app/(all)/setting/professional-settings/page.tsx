// app/%28all%29/setting/professional-settings/page.tsx
import React from "react";
import AvailabilityStatusCard from "./_components/AvailabilityStatusCard";
import WorkingHoursCard from "./_components/WorkingHoursCard";
import Header from "./_components/Header";

export default function page() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <div className="container py-8">
        {/* Page Title */}
        <div className="mb-6 mt-7">
          <Header />
        </div>

        <div className="space-y-6 mt-10">
          <AvailabilityStatusCard />
          <WorkingHoursCard />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="rounded-xl bg-emerald-500 px-5 py-2 text-sm font-medium text-white">
            حفظ ساعات العمل
          </button>
        </div>
      </div>
    </div>
  );
}
