// messages.types.ts
export type MsgPreview = {
  id: number | string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  online?: boolean;
  avatarUrl?: string;
};
