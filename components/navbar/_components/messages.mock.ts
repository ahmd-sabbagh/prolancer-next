// messages.mock.ts
import type { MsgPreview } from "./messages.types";

export const mockMessages: MsgPreview[] = [
  { id: 1, name: "هشام السيد", lastMessage: "السلام عليكم و رحمة الله..", time: "16:24 AM", unreadCount: 2, online: true },
  { id: 2, name: "عبدالرحمن حسام", lastMessage: "تمام، أرسل لي العرض.", time: "14:32 PM", unreadCount: 0, online: true },
  { id: 3, name: "أحمد حسام", lastMessage: "إن شاء الله نبدأ الأسبوع القادم.", time: "أمس", unreadCount: 0, online: false },
];
