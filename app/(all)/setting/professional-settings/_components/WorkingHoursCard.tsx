"use client";

import React, { useState } from "react";
import { FiClock } from "react-icons/fi";

type Slot = {
    from: string;
    to: string;
};

export default function WorkingHoursCard() {
    const [slots, setSlots] = useState<Slot[]>([{ from: "09:00", to: "17:00" }]);

    const handleChange = (index: number, field: "from" | "to", value: string) => {
        const updated = [...slots];
        updated[index][field] = value;
        setSlots(updated);
    };

    const addSlot = () => {
        setSlots([...slots, { from: "09:00", to: "17:00" }]);
    };

    const removeSlot = (index: number) => {
        setSlots(slots.filter((_, i) => i !== index));
    };

    return (
        <div className="rounded-xl border border-slate-100 bg-white shadow-sm">
            <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-xl text-slate-900">ساعات العمل</h2>
                    <span />
                </div>

                {slots.map((slot, index) => (
                    <div key={index} className={index === 0 ? "" : "mt-5"}>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            {/* من */}
                            <div>
                                <div className="mb-2 text-sm font-medium text-slate-700">من</div>
                                <div className="relative">
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500">
                                        <FiClock className="h-5 w-5" />
                                    </span>

                                    <input
                                        type="time"
                                        value={slot.from}
                                        onChange={(e) => handleChange(index, "from", e.target.value)}
                                        className="w-full rounded-lg !border !border-slate-200 bg-white py-3 pr-12 pl-4 text-right text-slate-900 outline-none focus:border-slate-300
                                                    [&::-webkit-calendar-picker-indicator]:opacity-0
                                                    [&::-webkit-calendar-picker-indicator]:absolute
                                                    [&::-webkit-calendar-picker-indicator]:right-0"
                                    />
                                </div>

                            </div>

                            {/* إلى */}
                            <div>
                                <div className="mb-2 text-sm font-medium text-slate-700">الى</div>
                                <div className="relative">
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500">
                                        <FiClock className="h-5 w-5" />
                                    </span>

                                    <input
                                        type="time"
                                        value={slot.to}
                                        onChange={(e) => handleChange(index, "to", e.target.value)}
                                        className="w-full rounded-lg !border !border-slate-200 bg-white py-3 pr-12 pl-4 text-right text-slate-900 outline-none focus:border-slate-300
                                                    [&::-webkit-calendar-picker-indicator]:opacity-0
                                                    [&::-webkit-calendar-picker-indicator]:absolute
                                                    [&::-webkit-calendar-picker-indicator]:right-0"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* زر الحذف */}
                        {slots.length > 1 && (
                            <div className="mt-3 flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => removeSlot(index)}
                                    className="inline-flex items-center gap-1 text-[#E5322D] text-sm font-medium"
                                >
                                    <span className="text-lg leading-none">-</span>
                                    <span>حذف</span>
                                </button>
                            </div>
                        )}
                    </div>
                ))}

                {/* زر إضافة */}
                <div className="mt-6 flex justify-end">
                    <button
                        type="button"
                        onClick={addSlot}
                        className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600"
                    >
                        <span className="text-lg leading-none">+</span>
                        <span>أضف جديد</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
