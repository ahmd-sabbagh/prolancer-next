"use client";

import React from "react";
import type { Chat } from "./types";
import ChatAvatar from "./ChatAvatar";
import ChatInfo from "./ChatInfo";
import ChatActionsMenu from "./ChatActionsMenu";

type Props = {
  chat?: Chat;
  onBlock?: (chatId?: number) => void;
  onDelete?: (chatId?: number) => void;
};

export default function ChatHeader({ chat, onBlock, onDelete }: Props) {
  return (
    <div className="px-4 md:px-6 py-4 border-b border-[#F0F0F0] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <ChatAvatar online={chat?.online} />
        <ChatInfo name={chat?.name} location={chat?.location} />
      </div>

      <ChatActionsMenu
        onBlock={() => onBlock?.(chat?.id)}
        onDelete={() => onDelete?.(chat?.id)}
      />
    </div>
  );
}
