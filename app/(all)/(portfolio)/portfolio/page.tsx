import React from "react";
import Link from "next/link";
import WorkCard from "../_components/WorkCard";
import { works } from "../_components/portfolio-data";

const PortfolioPage: React.FC = () => {
    return (
        <section className="min-h-screen bg-[#F8FAFF] py-10 md:py-16">
            <div className="mx-auto max-w-[1511px] px-4 md:px-6 space-y-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl md:text-2xl font-semibold text-[#111827]">
                        معرض الاعمال
                    </h1>
                    
                    <Link
                        href="/portfolio/addNewProject"
                        className="
              bg-[#00D084] text-white text-sm md:text-base
              px-5 md:px-6 py-2 md:py-2.5 
              rounded-full
              shadow-[0_10px_25px_rgba(16,185,129,0.35)]
              transition-all duration-200
              hover:translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,185,129,0.45)]
              flex items-center justify-center
            "
                    >
                        إضافة عمل
                    </Link>
                </div>

                <div className="space-y-6">
                    {works.map((work) => (
                        <WorkCard key={work.id} work={work} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioPage;
