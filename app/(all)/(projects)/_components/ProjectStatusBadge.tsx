import React from "react";
import { ProjectStatus } from "./projects-data";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  variant?: "chip" | "pill";
}

function getStatusClasses(status: ProjectStatus, variant: "chip" | "pill") {
  const base =
    variant === "pill"
      ? "inline-flex items-center justify-center px-4 py-1 rounded-full text-xs"
      : "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium";

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
  const isDone = status === "done";

  if (variant === "chip") {
    return (
      <span className={getStatusClasses(status, "chip")}>
        {isDone ? (
          <>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {getStatusLabel(status)}
          </>
        ) : (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            {getStatusLabel(status)}
          </>
        )}
      </span>
    );
  }

  return (
    <span className={getStatusClasses(status, "pill")}>
      {getStatusLabel(status)}
    </span>
  );
};

export default ProjectStatusBadge;
