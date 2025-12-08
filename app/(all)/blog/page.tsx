import Title from "@/components/title/Title";
import { useTranslations } from "next-intl";
import React from "react";
import Blogs from "./_components/Blogs";

const BlogPage = () => {
  const t = useTranslations();
  return (
    <section className="pt-10 bg-[#F8FAFF] pb-20">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <Title
            title={t("Blog and topics")}
            subTitle={t("Messages and support sub")}
          />
          <Blogs />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
