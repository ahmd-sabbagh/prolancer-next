import React from "react";
import { projects } from "../_components/projects-data";
import ProjectsMobileList from "../_components/ProjectsMobileList";
import ProjectsTable from "../_components/ProjectsTable";

const ProjectsPage: React.FC = () => {
  return (
    <section className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-[1511px] px-4 space-y-6">
        <h1
          className="
            text-2xl md:text-3xl 
            text-[#111827] 
            text-right
            mt-[42px]
            mb-[30px]
          "
        >
          المشاريع
        </h1>

        <ProjectsMobileList projects={projects} />

        <ProjectsTable projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
