import React from "react";
import { RiMessage2Fill } from "react-icons/ri";

type RequestStatus = "accepted" | "rejected" | "canceled";

interface WorkRequest {
  id: string;
  projectTitle: string;
  cost: string;
  requestedAt: string;
  clientName: string;
  primaryStatus: RequestStatus;
  secondaryStatus: RequestStatus;
}

const requests: WorkRequest[] = [
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

function getStatusClasses(status: RequestStatus) {
  switch (status) {
    case "accepted":
      return "bg-[#E1F7EC] text-[#00B274]";
    case "rejected":
      return "bg-[#FFE5E7] text-[#F97373]";
    case "canceled":
      return "bg-[#FFEED6] text-[#F59E0B]";
    default:
      return "";
  }
}



function getStatusLabel(status: RequestStatus) {
  switch (status) {
    case "accepted":
      return "قبول";
    case "rejected":
      return "رفض";
    case "canceled":
      return "ملغي";
  }
}

const RequestsPage = () => {
  return (
    <section className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-[1511px] px-4 space-y-6">
        <h1
          className="
            text-2xl md:text-3xl 
            text-[#111827] 
            text-right
            mt-[42px]
            mb-[30px]
          "
        >
          طلبات للعمل عليها
        </h1>

        {/* ✅ نسخة الموبايل – كروت مشابهة لـ ProjectsPage */}
        <div className="space-y-4 md:hidden">
          {requests.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 transition-all duration-200 hover:shadow-md"
            >
              {/* أعلى الكارت: عنوان + رقم + زر الرسالة */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col gap-1 text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <h3 className="text-base font-semibold text-gray-900 leading-tight">
                      {item.projectTitle}
                    </h3>
                    <p className="text-xs text-gray-500">#{item.id}</p>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 self-start">
                    <svg
                      className="w-3 h-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item.requestedAt}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#00D084] text-[#00D084] transition-all duration-200 hover:bg-[#00D084] hover:text-white hover:border-[#00D084] flex-shrink-0"
                >
                  <RiMessage2Fill className="w-5 h-5" />
                </button>
              </div>

              {/* التكلفة + طالب الخدمة */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-2">التكلفة</div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900">
                      {item.cost}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-2">طالب الخدمة</div>
                  <span className="text-sm font-medium text-gray-900 block">
                    {item.clientName}
                  </span>
                </div>
              </div>

              {/* حالة الطلب (قبول / رفض / ملغي) */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs ${getStatusClasses(
                        item.primaryStatus
                      )}`}
                    >
                      {getStatusLabel(item.primaryStatus)}
                    </span>
                    <span
                      className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs ${getStatusClasses(
                        item.secondaryStatus
                      )}`}
                    >
                      {getStatusLabel(item.secondaryStatus)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🖥️ جدول الديسكتوب – نفس مقاسات جدول المشاريع */}
        <div className="rounded-2xl bg-white box-shadow2 overflow-hidden hidden md:block ">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-[#171717] text-white text-sm">
                <th className="h-[87px] px-6 font-medium text-center align-middle">
                  #
                </th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">
                  المشروع
                </th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">
                  التكلفة
                </th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">
                  وقت الطلب
                </th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">
                  طالب الخدمة
                </th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">
                  حالة الطلب
                </th>
                <th className="h-[87px] px-6 text-center align-middle"></th>
              </tr>
            </thead>

            <tbody className="text-sm text-[#111827]">
              {requests.map((item, idx) => (
                <tr
                  key={item.id + idx}
                  className={`border-b border-[#F1F5F9] ${idx % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"
                    }`}
                >
                  <td className="px-6 h-[87px] align-middle text-center">
                    {item.id}
                  </td>

                  <td className="px-6 h-[87px] align-middle">
                    {item.projectTitle}
                  </td>

                  <td className="px-6 h-[87px] align-middle">{item.cost}</td>

                  <td className="px-6 h-[87px] align-middle">
                    {item.requestedAt}
                  </td>

                  <td className="px-6 h-[87px] align-middle">
                    {item.clientName}
                  </td>

                  <td className="px-6 h-[87px] align-middle">
                    <div className="flex items-center gap-2 justify-center">
                      <span
                        className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs ${getStatusClasses(
                          item.primaryStatus
                        )}`}
                      >
                        {getStatusLabel(item.primaryStatus)}
                      </span>
                      <span
                        className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs ${getStatusClasses(
                          item.secondaryStatus
                        )}`}
                      >
                        {getStatusLabel(item.secondaryStatus)}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 h-[87px] align-middle">
                    <button
                      type="button"
                      className="
                        flex items-center justify-center
                        w-9 h-9 rounded-full border border-[#00D084] 
                        text-[#00D084] 
                        transition-all duration-200
                        hover:bg-[#00D084] hover:text-white hover:border-[#00D084]
                      "
                    >
                      <RiMessage2Fill className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RequestsPage;
