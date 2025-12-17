"use client";

import React from "react";
import { IoSend } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";

type Props = {
    value: string;
    onChange: (v: string) => void;
    onSend: () => void;
};

export default function ChatInput({ value, onChange, onSend }: Props) {
    return (
        <div className="px-3 md:px-6 py-3 border-t border-[#F0F0F0] bg-white">
            <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                    <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="اكتب رسالتك هنا"
                        className="w-full h-12 ps-4 pe-12 rounded-lg bg-[#F8F9FA] border border-[#EDEDED] outline-none"
                    />

                    <button
                        type="button"
                        title="مرفقات"
                        className="absolute top-1/2 -translate-y-1/2 end-2 w-9 h-9 rounded-md text-[#6C757D] flex items-center justify-center hover:bg-white/60"
                    >
                        <FiPaperclip className="text-xl" />
                    </button>
                </div>
                <button
                    type="button"
                    onClick={onSend}
                    className="shrink-0 w-12 h-12 rounded-full bg-[#00D388] text-white flex items-center justify-center"
                >
                    <IoSend className="text-xl" />
                </button>
            </div>
        </div>
    );
}
