"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { projects } from "../_components/projects-data";
import ProjectsMobileList from "../_components/ProjectsMobileList";
import ProjectsTable from "../_components/ProjectsTable";
import Header from "../_components/Header";

const ProjectsPage: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="min-h-screen bg-[#F6F8FB] pb-10">
      <div className="container pt-8">
        {/* Page Title */}
        <div className="mb-9 mt-7 flex justify-between">
          <Header />
        </div>

        {/* Mobile List */}
        <ProjectsMobileList projects={projects} />

        {/* Table for large screens */}
        <ProjectsTable projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
