export type ProjectStatus = "in-progress" | "done";

export interface Project {
  id: string;
  title: string;
  cost: string;
  startAt: string;
  status: ProjectStatus;
  clientName: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "تصميم موقع إلكتروني",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "01",
    title: "تصميم موقع إلكتروني",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "01",
    title: "تصميم موقع إلكتروني",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "01",
    title: "تصميم موقع إلكتروني",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "01",
    title: "تصميم موقع إلكتروني",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "01",
    title: "تصميم موقع إلكتروني",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
];
