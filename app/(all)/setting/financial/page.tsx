import React from "react";
import { projects } from "./_components/projects-data";
import ProjectsMobileList from "./_components/ProjectsMobileList";
import ProjectsTable from "./_components/ProjectsTable";
import Header from "./_components/Header";
import WithdrawRequests from "./_components/WithdrawRequests";

const ProjectsPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#F6F8FB] pb-10">
      <div className="container pt-8">
        {/* Page Title */}
        <div className="mb-6 mt-7">
          <Header />
        </div>

        {/* كارت سجل المعاملات */}
        <div
          className="
            bg-white
            rounded-2xl
            border border-[#EEF2FF]
            shadow-sm
            px-4 sm:px-6
            py-5 sm:py-6
            mt-10
          "
        >
          <div className="mb-4">
            <h3 className="text-base sm:text-lg text-[#111827]">
              سجل المعاملات
            </h3>
          </div>

          <div className="rounded-2xl">
            <div className="block lg:hidden">
              <ProjectsMobileList projects={projects} />
            </div>

            <div className="hidden lg:block">
              <ProjectsTable projects={projects} />
            </div>
          </div>
        </div>

        {/* ✅ مكون طلبات السحب */}
        <div className="mt-10">
          <WithdrawRequests amount="$1000.00" />

        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
