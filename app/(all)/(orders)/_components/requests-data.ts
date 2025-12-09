export type RequestStatus = "accepted" | "rejected" | "canceled";

export interface WorkRequest {
  id: string;
  projectTitle: string;
  cost: string;
  requestedAt: string;
  clientName: string;
  primaryStatus: RequestStatus;
  secondaryStatus: RequestStatus;
}

export const requests: WorkRequest[] = [
  {
    id: "01",
    projectTitle: "تصميم واجهات تطبيق",
    cost: "$1000",
    requestedAt: "AM 05:30  22 فبراير 2025",
    clientName: "عمر حسام الدين",
    primaryStatus: "accepted",
    secondaryStatus: "rejected",
  },
  {
    id: "02",
    projectTitle: "تصميم واجهات تطبيق",
    cost: "$1000",
    requestedAt: "AM 05:30  22 فبراير 2025",
    clientName: "عمر حسام الدين",
    primaryStatus: "canceled",
    secondaryStatus: "accepted",
  },
  {
    id: "03",
    projectTitle: "تصميم واجهات تطبيق",
    cost: "$1000",
    requestedAt: "AM 05:30  22 فبراير 2025",
    clientName: "عمر حسام الدين",
    primaryStatus: "accepted",
    secondaryStatus: "rejected",
  },
  {
    id: "04",
    projectTitle: "تصميم واجهات تطبيق",
    cost: "$1000",
    requestedAt: "AM 05:30  22 فبراير 2025",
    clientName: "عمر حسام الدين",
    primaryStatus: "canceled",
    secondaryStatus: "accepted",
  },
  {
    id: "05",
    projectTitle: "تصميم واجهات تطبيق",
    cost: "$1000",
    requestedAt: "AM 05:30  22 فبراير 2025",
    clientName: "عمر حسام الدين",
    primaryStatus: "accepted",
    secondaryStatus: "rejected",
  },
  {
    id: "06",
    projectTitle: "تصميم واجهات تطبيق",
    cost: "$1000",
    requestedAt: "AM 05:30  22 فبراير 2025",
    clientName: "عمر حسام الدين",
    primaryStatus: "canceled",
    secondaryStatus: "accepted",
  },
  {
    id: "07",
    projectTitle: "تصميم واجهات تطبيق",
    cost: "$1000",
    requestedAt: "AM 05:30  22 فبراير 2025",
    clientName: "عمر حسام الدين",
    primaryStatus: "accepted",
    secondaryStatus: "rejected",
  },
];
