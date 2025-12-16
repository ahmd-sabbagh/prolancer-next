import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { Project } from "./projects-data";
import ProjectStatusBadge from "./ProjectStatusBadge";

interface ProjectsTableProps {
  projects: Project[];
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects }) => {
  return (
    <div className="rounded-2xl bg-white box-shadow2 overflow-hidden hidden lg:block">
      <table className="w-full text-right border-collapse">
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
              وقت البدء
            </th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">
              حالة المشروع
            </th>
            <th className="h-[87px] px-6 font-medium text-center align-middle">
              طالب الخدمة
            </th>
            <th className="h-[87px] px-6 text-center align-middle"></th>
          </tr>
        </thead>

        <tbody className="text-sm text-[#111827]">
          {projects.map((project, idx) => (
            <tr
              key={project.id}
              className={`border-b border-[#F1F5F9] ${
                idx % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"
              }`}
            >
              <td className="px-6 h-[87px] align-middle text-center">
                {project.id}
              </td>

              <td className="px-6 h-[87px] align-middle">{project.title}</td>

              <td className="px-6 h-[87px] align-middle">{project.cost}</td>

              <td className="px-6 h-[87px] align-middle">{project.startAt}</td>

              <td className="px-6 h-[87px] align-middle">
                <ProjectStatusBadge status={project.status} variant="pill" />
              </td>

              <td className="px-6 h-[87px] align-middle">
                {project.clientName}
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
  );
};

export default ProjectsTable;
