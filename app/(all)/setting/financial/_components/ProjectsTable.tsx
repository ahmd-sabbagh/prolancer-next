import React from "react";
import { Project } from "./projects-data";
import ProjectStatusBadge from "./ProjectStatusBadge";
import { useTranslations } from "next-intl";

interface ProjectsTableProps {
  projects: Project[];
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects }) => {
  const t = useTranslations();

  return (
    <div className="rounded-2xl bg-white box-shadow2 overflow-hidden hidden lg:block">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-[#171717] text-white text-sm">
            <th className="h-[87px] px-6 font-medium text-center align-middle">#</th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("date")}</th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("description")}</th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("amount")}</th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("status")}</th>
          </tr>
        </thead>

        <tbody className="text-sm text-[#111827]">
          {projects.map((project, idx) => (
            <tr
              key={`${project.id}-${idx}`}
              className={`border-b border-[#F1F5F9] ${idx % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"}`}
            >
              <td className="px-6 h-[87px] align-middle text-center">{project.id}</td>
              <td className="px-6 h-[87px] align-middle text-center">{project.startAt}</td>
              <td className="px-6 h-[87px] align-middle text-center">{project.title}</td>
              <td className="px-6 h-[87px] align-middle text-center">{project.cost}</td>
              <td className="px-6 h-[87px] align-middle text-center">
                <ProjectStatusBadge status={project.status} variant="pill" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
