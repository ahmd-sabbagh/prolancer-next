import React from "react";
import { RiMessage2Fill } from "react-icons/ri";

type ProjectStatus = "in-progress" | "done";

interface Project {
  id: string;
  title: string;
  cost: string;
  startAt: string;
  status: ProjectStatus;
  clientName: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "تصميم واجهات تطبيق",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "02",
    title: "تصميم واجهات تطبيق",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "done",
    clientName: "عمر حسام الدين",
  },
  {
    id: "03",
    title: "تصميم واجهات تطبيق",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "04",
    title: "تصميم واجهات تطبيق",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "05",
    title: "تصميم واجهات تطبيق",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "06",
    title: "تصميم واجهات تطبيق",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
  {
    id: "07",
    title: "تصميم واجهات تطبيق",
    cost: "$1000",
    startAt: "AM 05:30  22 فبراير 2025",
    status: "in-progress",
    clientName: "عمر حسام الدين",
  },
];

function getStatusClasses(status: ProjectStatus) {
  if (status === "done") {
    return "bg-[#E1F7EC] text-[#00B274]";
  }
  return "bg-[#FFEED6] text-[#F59E0B]";
}

const ProjectsPage = () => {

  return (
    <section className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-[1511px] px-4 space-y-6">
        <h1 className="
  text-2xl md:text-3xl 
  text-[#111827] 
  text-right
  mt-[42px]
  mb-[30px]
">
          المشاريع
        </h1>
        <div className="space-y-4 md:hidden">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 transition-all duration-200 hover:shadow-md"
            >

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${project.status === "done" ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">#{project.id}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#00D084] text-[#00D084] transition-all duration-200 hover:bg-[#00D084] hover:text-white hover:border-[#00D084] flex-shrink-0"
                >
                  <RiMessage2Fill className="w-5 h-5" />
                </button>
              </div>


              <div className="mb-4">
                <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 inline-flex">
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{project.startAt}</span>
                </div>
              </div>


              <div className="grid grid-cols-2 gap-4 mb-4">

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-2">التكلفة</div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900">
                      {project.cost}
                    </span>
                    <svg
                      className="w-4 h-4 text-emerald-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h6l4 4v-6l-4-4H4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>


                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-2">طالب الخدمة</div>
                  <span className="text-sm font-medium text-gray-900 block">
                    {project.clientName}
                  </span>
                </div>
              </div>


              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${project.status === "done"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                      }`}
                  >
                    {project.status === "done" ? (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        مكتمل
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
                        جاري العمل
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-white box-shadow2 overflow-hidden hidden md:block">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-[#171717] text-white text-sm">
                <th className="h-[87px] px-6 font-medium text-center align-middle">#</th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">المشروع</th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">التكلفة</th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">وقت البدء</th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">حالة المشروع</th>
                <th className="h-[87px] px-6 font-medium text-center align-middle">طالب الخدمة</th>
                <th className="h-[87px] px-6 text-center align-middle"></th>
              </tr>
            </thead>

            <tbody className="text-sm text-[#111827]">
              {projects.map((project, idx) => (
                <tr
                  key={project.id}
                  className={`border-b border-[#F1F5F9] ${idx % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"
                    }`}
                >
                  <td className="px-6 h-[87px] align-middle">{project.id}</td>

                  <td className="px-6 h-[87px] align-middle">{project.title}</td>

                  <td className="px-6 h-[87px] align-middle">{project.cost}</td>

                  <td className="px-6 h-[87px] align-middle">{project.startAt}</td>

                  <td className="px-6 h-[87px] align-middle">
                    <span
                      className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs ${getStatusClasses(
                        project.status
                      )}`}
                    >
                      {project.status === "done" ? "مكتمل" : "جاري العمل"}
                    </span>
                  </td>

                  <td className="px-6 h-[87px] align-middle">{project.clientName}</td>

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
      </div>
    </section>
  );
};

export default ProjectsPage;
