"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";

export default function AboutServiceRequester() {
    const t = useTranslations();
    const locale = useLocale();
    const isRTL = locale === "ar";

    // Helper للـ responsive text alignment
    const textAlignClass = `text-center md:text-${isRTL ? "right" : "left"}`;

    return (
        <div dir={isRTL ? "rtl" : "ltr"} className="w-full min-h-screen bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Header */}
                <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 ${textAlignClass}`}>
                    <h2 className="text-xl font-semibold text-slate-900">{t("overview")}</h2>
                    <span className="bg-emerald-50 text-emerald-600 text-sm px-4 py-1.5 rounded-full font-medium mt-2 sm:mt-0">
                        {t("freelancer_kpis")}
                    </span>
                </div>

                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5">
                    {[
                        { title: "total_earnings", value: "$8,420", sub: "this_month_up", color: "text-emerald-600" },
                        { title: "completed_work_hours", value: t("hour"), sub: "added_to_professional_record", color: "text-slate-900" },
                        { title: "completed_projects", value: "27", sub: "projects_in_progress", color: "text-slate-900" },
                        { title: "overall_rating", value: "4.8 ★", sub: "rating", color: "text-yellow-500" },
                    ].map((item, idx) => (
                        <div key={idx} className={`bg-white rounded-xl border border-slate-100 p-5 shadow-sm ${textAlignClass}`}>
                            <p className="text-slate-500 text-sm mb-2">{t(item.title)}</p>
                            <p className={`text-2xl font-semibold ${item.color}`}>{item.value}</p>
                            <p className="text-xs text-slate-400 mt-1">{t(item.sub)}</p>
                        </div>
                    ))}
                </div>

                {/* Middle Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    {[
                        { title: "order_completion_rate", value: "96%", sub: "days", badge: "5%", badgeColor: "text-emerald-600" },
                        { title: "on_time_delivery", value: "94%", sub: "day", badge: t("excellent"), badgeColor: "text-emerald-600" },
                        { title: "avg_response_time", value: t("hour"), sub: t("hour"), badge: t("needs_improvement"), badgeColor: "text-yellow-500" },
                    ].map((item, idx) => (
                        <div key={idx} className={`bg-white rounded-xl border border-slate-100 p-5 shadow-sm ${textAlignClass}`}>
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-slate-500 text-sm">{t(item.title)}</p>
                                <span className={`text-xs font-medium ${item.badgeColor}`}>{item.badge}</span>
                            </div>
                            <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                            <p className="text-xs text-slate-400 mt-1">{item.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        { title: "customer_satisfaction", value: "5", sub: "ratings", badge: "3%", badgeColor: "text-emerald-600" },
                        { title: "offer_acceptance_rate", value: "72%", sub: "offers_accepted_this_month", badge: t("contracts"), badgeColor: "text-emerald-600" },
                        { title: "monthly_goals", content: (
                            <div className="space-y-2 text-sm leading-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-600">{t("monthly_goals")}</span>
                                    <span className="text-sm font-medium text-emerald-600">{t("in_progress")}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500">{t("completed_projects")}</span>
                                    <span className="font-semibold text-slate-800">3/5</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500">{t("paid_work_hours")}</span>
                                    <span className="font-semibold text-slate-800">{t("hour")}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500">{t("improve_reply")}</span>
                                    <span className="font-semibold text-slate-800">{t("hour")}</span>
                                </div>
                            </div>
                        )},
                    ].map((item, idx) => (
                        <div key={idx} className={`bg-white rounded-xl border border-slate-100 p-5 shadow-sm ${textAlignClass}`}>
                            {item.content ? item.content : (
                                <>
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-slate-500 text-sm">{t(item.title)}</p>
                                        <span className={`text-xs font-medium ${item.badgeColor}`}>{item.badge}</span>
                                    </div>
                                    <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                                    <p className="text-xs text-slate-400 mt-1">{item.sub}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
