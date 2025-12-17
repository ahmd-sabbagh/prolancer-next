"use client";

import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { mockChats } from "./_components/mockChats";
import type { Chat } from "./_components/types";
import ChatsSidebar from "./_components/ChatsSidebar";
import ChatHeader from "./_components/ChatHeader";
import ChatInput from "./_components/ChatInput";
import Messages from "./_components/Messages";
import Title from "@/components/title/Title";

export default function Page() {
  const chats: Chat[] = useMemo(() => mockChats, []);

  const [activeChatId, setActiveChatId] = useState<number>(chats[0]?.id ?? 1);
  const [search, setSearch] = useState("");
  const [messageText, setMessageText] = useState("");

  const [showList, setShowList] = useState(false);

  const filteredChats = chats.filter((c) =>
    (c.name + " " + c.lastMessage).toLowerCase().includes(search.toLowerCase())
  );

  const activeChat = chats.find((c) => c.id === activeChatId) ?? chats[0];

  return (
    <section className="bg-[#F8FAFF] pt-10 md:pt-16 pb-[100px]">
      <div className="container">
        <Title title={"الرسائل"} />

        <div className="bg-white rounded-xl border border-[#ECECEC] overflow-hidden mt-8">
          <div className="flex md:h-[650px]">
            {/* Sidebar */}
            <div className={cn("w-full md:w-auto", showList ? "block" : "hidden md:block")}>
              <ChatsSidebar
                chats={filteredChats}
                activeChatId={activeChatId}
                onSelectChat={(id) => {
                  setActiveChatId(id);
                  setShowList(false);
                }}
                search={search}
                onSearchChange={setSearch}
              />
            </div>

            <div
              className={cn(
                "flex-1 flex flex-col md:border-e md:border-[#F0F0F0]",
                showList ? "hidden md:flex" : "flex"
              )}
            >
              <div className="md:hidden px-4 py-3 border-b border-[#F0F0F0] bg-white">
                <button
                  type="button"
                  className="text-sm text-[#00D388]"
                  onClick={() => setShowList(true)}
                >
                  عرض قائمة المحادثات
                </button>
              </div>

              <ChatHeader chat={activeChat} />

              <div className="flex-1 bg-[#FAFAFA] md:min-h-0">
                <Messages messages={(activeChat?.messages ?? [])} />
              </div>

              <ChatInput
                value={messageText}
                onChange={setMessageText}
                onSend={() => setMessageText("")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
