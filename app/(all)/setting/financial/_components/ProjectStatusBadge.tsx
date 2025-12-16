import React from "react";
import { ProjectStatus } from "./projects-data";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  variant?: "chip" | "pill";
}

function getStatusClasses(status: ProjectStatus, variant: "chip" | "pill") {
  const base =
    variant === "pill"
      ? "inline-flex items-center justify-center px-4 py-1 rounded-full text-xs font-medium"
      : "inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium";

  if (status === "done") {
    return `${base} bg-[#E1F7EC] text-[#00B274]`;
  }

  return `${base} bg-[#FFEED6] text-[#F59E0B]`;
}

function getStatusLabel(status: ProjectStatus) {
  return status === "done" ? "مكتمل" : "جاري العمل";
}

const ProjectStatusBadge: React.FC<ProjectStatusBadgeProps> = ({
  status,
  variant = "pill",
}) => {
  return <span className={getStatusClasses(status, variant)}>{getStatusLabel(status)}</span>;
};

export default ProjectStatusBadge;
