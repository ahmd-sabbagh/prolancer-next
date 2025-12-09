import React from "react";
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

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
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
