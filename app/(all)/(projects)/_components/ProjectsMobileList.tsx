import React from "react";
import { useTranslations } from "next-intl";
import { RiMessage2Fill } from "react-icons/ri";
import { Project } from "./projects-data";
import ProjectStatusBadge from "./ProjectStatusBadge";
import Link from "next/link";

interface ProjectsMobileListProps {
  projects: Project[];
}

const ProjectsMobileList: React.FC<ProjectsMobileListProps> = ({ projects }) => {
  const t = useTranslations();

  return (
    <div className="space-y-4 lg:hidden">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 transition-all duration-200 hover:shadow-md">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${project.status === "done" ? "bg-emerald-500" : "bg-amber-500"}`} />
              <div>
                <h3 className="text-base font-semibold text-gray-900 leading-tight">{project.title}</h3>
                <p className="text-xs text-gray-500 mt-1">#{project.id}</p>
              </div>
            </div>
            <Link href="/messages">
              <button className="flex items-center justify-center w-9 h-9 rounded-full border border-[#00D084] text-[#00D084] transition-all duration-200 hover:bg-[#00D084] hover:text-white hover:border-[#00D084] flex-shrink-0">
                <RiMessage2Fill className="w-5 h-5" />
              </button>
            </Link>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 inline-flex">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{project.startAt}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-2">{t("cost")}</div>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">{project.cost}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-2">{t("service_requester")}</div>
              <span className="text-sm font-medium text-gray-900 block">{project.clientName}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100">
            <ProjectStatusBadge status={project.status} variant="chip" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsMobileList;
