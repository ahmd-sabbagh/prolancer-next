export type Message = {
  id: number;
  sender: "me" | "other";
  type: "text" | "image" | "file" | "audio";
  content: string;
  time: string;
  status: "sent" | "delivered" | "seen";
  fileName?: string;
  fileSize?: string;
  duration?: string;
};

export type Chat = {
  id: number;
  name: string;
  location?: string;
  online?: boolean;
  lastMessage: string;
  lastTime: string;
  unread?: number;
  messages: Message[];
};
