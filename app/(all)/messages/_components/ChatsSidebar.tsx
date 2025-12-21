"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LuSearch } from "react-icons/lu";
import type { Chat } from "./types";
import { useTranslations } from "next-intl";

type Props = {
    chats: Chat[];
    activeChatId: number;
    onSelectChat: (id: number) => void;
    search: string;
    onSearchChange: (v: string) => void;
};

export default function ChatsSidebar({
    chats,
    activeChatId,
    onSelectChat,
    search,
    onSearchChange,
}: Props) {
    const t = useTranslations()

    return (
        <aside className="w-full md:w-[320px] lg:w-[360px] xl:w-[400px] flex flex-col border-e border-[#F0F0F0] h-full">

            {/* Search */}
            <div className="p-4 border-b border-[#F0F0F0]">
                <div className="relative">
                    <input
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder={t("Search")}

                        className="w-full h-11 ps-3 pe-10 rounded-md !border !border-[#EDEDED] outline-none"
                    />
                    <span className="absolute end-3 top-1/2 -translate-y-1/2 text-[#6C757D]">
                        <LuSearch />
                    </span>
                </div>
            </div>

            {/* Chats */}
            <div className="flex-1 overflow-y-auto min-h-0">
                {chats.map((chat) => {
                    const isActive = chat.id === activeChatId;

                    return (
                        <button
                            key={chat.id}
                            type="button"
                            onClick={() => onSelectChat(chat.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 border-b border-[#F7F7F7] text-start hover:bg-[#FAFAFA] ",
                                isActive ? "bg-[#00D3881A]" : "bg-white"
                            )}
                        >
                            <div className="relative shrink-0">
                                <div className="w-11 h-11 rounded-full bg-[#E9ECEF]" />
                                <span
                                    className={cn(
                                        "absolute bottom-0 start-0 w-3 h-3 rounded-full border-2 border-white",
                                        chat.online ? "bg-[#00D388]" : "bg-[#ADB5BD]"
                                    )}
                                />
                            </div>

                            <div className="flex-1 min-w-0 pb-1">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="truncate">{chat.name}</p>
                                </div>
                                <p className="text-xs text-[#6C757D] truncate">{chat.lastMessage}</p>
                            </div>

                            <div className="flex flex-col gap-1.5 items-end shrink-0">
                                <span className="text-xs text-[#6C757D]">{chat.lastTime}</span>
                                {chat.unread ? (
                                    <span className="w-5 h-5 rounded-full bg-[#F04438] text-white text-xs flex items-center justify-center">
                                        {chat.unread}
                                    </span>
                                ) : null}
                            </div>
                        </button>
                    );
                })}
            </div>
        </aside>
    );
}
