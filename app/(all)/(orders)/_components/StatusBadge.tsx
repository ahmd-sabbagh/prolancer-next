"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { RequestStatus } from "./requests-data";

interface StatusBadgeProps {
  status: RequestStatus;
}

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

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const t = useTranslations();

  const getStatusLabel = (status: RequestStatus) => {
    switch (status) {
      case "accepted":
        return t("accepted");
      case "rejected":
        return t("rejected");
      case "canceled":
        return t("canceled");
      default:
        return "";
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs ${getStatusClasses(
        status
      )}`}
    >
      {getStatusLabel(status)}
    </span>
  );
};

export default StatusBadge;
