"use client";

import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import StatusBadge from "./StatusBadge";
import { WorkRequest } from "./requests-data";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface RequestsTableProps {
  requests: WorkRequest[];
}

const RequestsTable: React.FC<RequestsTableProps> = ({ requests }) => {
  const t = useTranslations();

  return (
    <div className="rounded-2xl bg-white box-shadow2 overflow-hidden hidden lg:block">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-[#171717] text-white text-sm">
            <th className="h-[87px] px-6 font-medium text-center align-middle">
              {t("project_number")}
            </th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">
              {t("project")}
            </th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">
              {t("cost")}
            </th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">
              {t("start_time")}
            </th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">
              {t("service_requester")}
            </th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">
              {t("project_status")}
            </th>
            <th className="h-[87px] px-6 text-center align-middle"></th>
          </tr>
        </thead>

        <tbody className="text-sm text-[#111827]">
          {requests.map((item, idx) => (
            <tr
              key={item.id + idx}
              className={`border-b border-[#F1F5F9] ${
                idx % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"
              }`}
            >
              <td className="px-6 h-[87px] align-middle text-center">
                {item.id}
              </td>

              <td className="px-6 h-[87px] align-middle">{item.projectTitle}</td>

              <td className="px-6 h-[87px] align-middle">{item.cost}</td>

              <td className="px-6 h-[87px] align-middle">{item.requestedAt}</td>

              <td className="px-6 h-[87px] align-middle">{item.clientName}</td>

              <td className="px-6 h-[87px] align-middle">
                <div className="flex items-center gap-2 justify-center">
                  <StatusBadge status={item.primaryStatus} />
                  <StatusBadge status={item.secondaryStatus} />
                </div>
              </td>

              <td className="px-6 h-[87px] align-middle">
                <Link href="/messages">
                  <button
                    type="button"
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-[#00D084] text-[#00D084] transition-all duration-200 hover:bg-[#00D084] hover:text-white hover:border-[#00D084]"
                  >
                    <RiMessage2Fill className="w-5 h-5" />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsTable;
