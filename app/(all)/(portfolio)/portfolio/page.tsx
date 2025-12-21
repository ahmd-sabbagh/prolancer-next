import React from "react";
import Link from "next/link";
import WorkCard from "../_components/WorkCard";
import { works } from "../_components/portfolio-data";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";

const PortfolioPage: React.FC = () => {
    const t = useTranslations();

    return (
        <section className="min-h-screen bg-[#F6F8FB] pb-10">
            <div className="container pt-8">
                <div className="mb-9 mt-7 flex justify-between">
                    <Header />
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
                        {t("add_work")}
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
