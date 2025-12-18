import type { Notif } from "./notifications.types";

export const mockNotifs: Notif[] = [
  {
    id: 1,
    title: "طلب خدمة جديد",
    desc: "يريد محمد احمد ان تقدم له خدمة تصميم موقع إلكتروني",
    time: "16:24 PM",
    unread: true,
  },
  { id: 2, title: "طلب خدمة جديد", desc: "يريد محمد احمد ان تقدم له خدمة تصميم موقع إلكتروني", time: "16:24 PM" },
  { id: 3, title: "طلب خدمة جديد", desc: "يريد محمد احمد ان تقدم له خدمة تصميم موقع إلكتروني", time: "16:24 PM" }
];
