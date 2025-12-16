import React from "react";
export default function AboutServiceRequester() {
    return (
        <div dir="rtl" className="w-full min-h-screen bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-semibold text-slate-900">
                        نظرة عامة
                    </h2>
                    <span className="bg-emerald-50 text-emerald-600 text-sm px-4 py-1.5 rounded-full font-medium">
                        مؤشرات أداء الفريلانسر
                    </span>
                </div>

                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5 text-center lg:text-right">


                    {/* إجمالي الأرباح */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <p className="text-slate-500 text-sm mb-2">
                            إجمالي الأرباح
                        </p>

                        <p className="text-2xl font-semibold text-emerald-600">
                            $8,420
                        </p>

                        <p className="text-xs text-emerald-600 mt-1">
                            ↑ هذا الشهر
                        </p>
                    </div>


                    {/* ساعات العمل */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <p className="text-slate-500 text-sm mb-2">
                            ساعات العمل المنجزة
                        </p>

                        <p className="text-2xl font-semibold text-slate-900">ساعة</p>

                        <p className="text-xs text-slate-400 mt-1">
                            مضافة إلى سجلك المهني
                        </p>
                    </div>
                    {/* المشاريع المكتملة */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <p className="text-slate-500 text-sm mb-2">
                            المشاريع المكتملة
                        </p>

                        <p className="text-2xl font-semibold text-slate-900">27</p>

                        <p className="text-xs text-slate-400 mt-1">
                            مشاريع قيد التنفيذ
                        </p>
                    </div>


                    {/* التقييم العام */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <p className="text-slate-500 text-sm mb-2">التقييم العام</p>

                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <span className="text-2xl font-semibold text-yellow-500">
                                4.8
                            </span>
                            <span className="text-yellow-400 text-lg">★</span>

                        </div>

                        <p className="text-xs text-slate-400 mt-1">تقييم</p>
                    </div>
                </div>

                {/* Middle Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    {/* نسبة إنجاز الطلبات */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">
                                نسبة إنجاز الطلبات
                            </p>
                            <span className="text-xs font-medium text-emerald-600">
                                5%
                            </span>
                        </div>

                        <p className="text-2xl font-semibold text-slate-900">96%</p>
                        <p className="text-xs text-slate-400 mt-1">يوماً</p>
                    </div>

                    {/* التسليم في الوقت */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">
                                التسليم في الوقت
                            </p>
                            <span className="text-xs font-medium text-emerald-600">
                                ممتاز
                            </span>
                        </div>

                        <p className="text-2xl font-semibold text-slate-900">94%</p>
                        <p className="text-xs text-slate-400 mt-1">يوم</p>
                    </div>

                    {/* متوسط زمن الاستجابة */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">
                                متوسط زمن الاستجابة
                            </p>
                            <span className="text-xs font-medium text-yellow-500">
                                بحاجة تحسين
                            </span>
                        </div>
                        <p className="text-2xl font-semibold text-slate-900">ساعة</p>
                        <p className="text-xs text-slate-400 mt-1">ساعة</p>
                    </div>

                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* رضا العملاء */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">
                                رضا العملاء
                            </p>
                            <span className="text-xs font-medium text-emerald-600">
                                3%
                            </span>
                        </div>

                        <p className="text-2xl font-semibold text-slate-900">5</p>
                        <p className="text-xs text-slate-400 mt-1">
                            تقييماً
                        </p>
                    </div>

                    {/* نسبة قبول العروض */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-slate-500 text-sm">
                                نسبة قبول العروض
                            </p>
                            <span className="text-xs font-medium text-emerald-600">
                                عقود
                            </span>
                        </div>

                        <p className="text-2xl font-semibold text-slate-900">72%</p>
                        <p className="text-xs text-slate-400 mt-1">
                            عرض تم قبوله هذا الشهر
                        </p>
                    </div>

                    {/* أهداف شهرية */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="space-y-2 text-sm leading-6">
                            {/* عنصر */}
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">
                                    أهداف شهرية
                                </span>
                                <span className="text-sm font-medium text-emerald-600">
                                    قيد المتابعة
                                </span>
                            </div>

                            {/* عنصر */}
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500">مشاريع مكتملة</span>
                                <span className="font-semibold text-slate-800">3/5</span>
                            </div>

                            {/* عنصر */}
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500">ساعة عمل مدفوعة</span>
                                <span className="font-semibold text-slate-800">ساعة</span>
                            </div>

                            {/* عنصر */}
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500">تحسين الرد - ساعة</span>
                                <span className="font-semibold text-slate-800">ساعة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
