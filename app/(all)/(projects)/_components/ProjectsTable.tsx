import React from "react";
import { useTranslations } from "next-intl";
import { RiMessage2Fill } from "react-icons/ri";
import { Project } from "./projects-data";
import ProjectStatusBadge from "./ProjectStatusBadge";
import Link from "next/link";

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
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("project_number")}</th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("project")}</th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("cost")}</th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("start_time")}</th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("project_status")}</th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">{t("service_requester")}</th>
            <th className="h-[87px] px-6 text-center align-middle"></th>
          </tr>
        </thead>
        <tbody className="text-sm text-[#111827]">
          {projects.map((project, idx) => (
            <tr
              key={project.id}
              className={`border-b border-[#F1F5F9] ${idx % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"}`}
            >
              <td className="px-6 h-[87px] align-middle text-center">{project.id}</td>
              <td className="px-6 h-[87px] align-middle text-center">{project.title}</td>
              <td className="px-6 h-[87px] align-middle text-center">{project.cost}</td>
              <td className="px-6 h-[87px] align-middle text-center">{project.startAt}</td>
              <td className="px-6 h-[87px] align-middle text-center">
                <ProjectStatusBadge status={project.status} variant="pill" />
              </td>
              <td className="px-6 h-[87px] align-middle text-center">{project.clientName}</td>
              <td className="px-6 h-[87px] align-middle text-center">
                <Link href="/messages">
                  <button className="flex items-center justify-center w-9 h-9 rounded-full border border-[#00D084] text-[#00D084] transition-all duration-200 hover:bg-[#00D084] hover:text-white hover:border-[#00D084]">
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

export default ProjectsTable;
