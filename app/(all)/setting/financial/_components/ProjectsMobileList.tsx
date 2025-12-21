import React from "react";
import { Project } from "./projects-data";
import ProjectStatusBadge from "./ProjectStatusBadge";
import { useTranslations } from "next-intl";

interface ProjectsMobileListProps {
  projects: Project[];
}

const ProjectsMobileList: React.FC<ProjectsMobileListProps> = ({ projects }) => {
  const t = useTranslations();

  return (
    <div className="space-y-4 lg:hidden">
      {projects.map((project, idx) => (
        <div
          key={`${project.id}-${project.startAt}-${idx}`}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 transition-all duration-200 hover:shadow-md"
        >
          {/* Top row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-sm font-semibold text-gray-900">#{project.id}</span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500 truncate">{project.startAt}</span>
            </div>

            <ProjectStatusBadge status={project.status} variant="pill" />
          </div>

          {/* Description */}
          <div className="mb-3">
            <p className="text-sm text-gray-900 leading-6">{project.title}</p>
          </div>

          {/* Amount */}
          <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
            <span className="text-xs text-gray-500">{t("amount")}</span>
            <span className="text-sm font-semibold text-gray-900">{project.cost}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsMobileList;
