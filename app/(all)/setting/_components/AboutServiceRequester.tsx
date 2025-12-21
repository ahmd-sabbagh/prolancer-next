"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function AboutServiceRequester() {
    const t = useTranslations()

    return (
        <div dir="rtl" className="w-full min-h-screen bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-semibold text-slate-900">
                        {t("overview")}
                    </h2>
                    <span className="bg-emerald-50 text-emerald-600 text-sm px-4 py-1.5 rounded-full font-medium">
                        {t("freelancer_kpis")}
                    </span>
                </div>

                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5 text-center lg:text-right">
                    {/* إجمالي الأرباح */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <p className="text-slate-500 text-sm mb-2">{t("total_earnings")}</p>
                        <p className="text-2xl font-semibold text-emerald-600">$8,420</p>
                        <p className="text-xs text-emerald-600 mt-1">{t("this_month_up")}</p>
                    </div>

                    {/* ساعات العمل */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <p className="text-slate-500 text-sm mb-2">
                            {t("completed_work_hours")}
                        </p>
                        <p className="text-2xl font-semibold text-slate-900">
                            {t("hour")}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                            {t("added_to_professional_record")}
                        </p>
                    </div>

                    {/* المشاريع المكتملة */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <p className="text-slate-500 text-sm mb-2">{t("completed_projects")}</p>
                        <p className="text-2xl font-semibold text-slate-900">27</p>
                        <p className="text-xs text-slate-400 mt-1">{t("projects_in_progress")}</p>
                    </div>

                    {/* التقييم العام */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <p className="text-slate-500 text-sm mb-2">{t("overall_rating")}</p>

                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <span className="text-2xl font-semibold text-yellow-500">4.8</span>
                            <span className="text-yellow-400 text-lg">★</span>
                        </div>

                        <p className="text-xs text-slate-400 mt-1">{t("rating")}</p>
                    </div>
                </div>

                {/* Middle Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    {/* نسبة إنجاز الطلبات */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">{t("order_completion_rate")}</p>
                            <span className="text-xs font-medium text-emerald-600">5%</span>
                        </div>

                        <p className="text-2xl font-semibold text-slate-900">96%</p>
                        <p className="text-xs text-slate-400 mt-1">{t("days")}</p>
                    </div>

                    {/* التسليم في الوقت */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">{t("on_time_delivery")}</p>
                            <span className="text-xs font-medium text-emerald-600">
                                {t("excellent")}
                            </span>
                        </div>

                        <p className="text-2xl font-semibold text-slate-900">94%</p>
                        <p className="text-xs text-slate-400 mt-1">{t("day")}</p>
                    </div>

                    {/* متوسط زمن الاستجابة */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">{t("avg_response_time")}</p>
                            <span className="text-xs font-medium text-yellow-500">
                                {t("needs_improvement")}
                            </span>
                        </div>
                        <p className="text-2xl font-semibold text-slate-900">{t("hour")}</p>
                        <p className="text-xs text-slate-400 mt-1">{t("hour")}</p>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* رضا العملاء */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">{t("customer_satisfaction")}</p>
                            <span className="text-xs font-medium text-emerald-600">3%</span>
                        </div>

                        <p className="text-2xl font-semibold text-slate-900">5</p>
                        <p className="text-xs text-slate-400 mt-1">{t("ratings")}</p>
                    </div>

                    {/* نسبة قبول العروض */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">{t("offer_acceptance_rate")}</p>
                            <span className="text-xs font-medium text-emerald-600">
                                {t("contracts")}
                            </span>
                        </div>

                        <p className="text-2xl font-semibold text-slate-900">72%</p>
                        <p className="text-xs text-slate-400 mt-1">
                            {t("offers_accepted_this_month")}
                        </p>
                    </div>

                    {/* أهداف شهرية */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="space-y-2 text-sm leading-6">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">{t("monthly_goals")}</span>
                                <span className="text-sm font-medium text-emerald-600">
                                    {t("in_progress")}
                                </span>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
