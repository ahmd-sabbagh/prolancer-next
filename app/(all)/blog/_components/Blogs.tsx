import { blog } from "@/assets";
import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const data = {
    image: blog,
    hent: "تسويق الكتروني",
    title: "هل مازال هناك سؤال أو فكرة غير واضحة؟",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس النص من مولد النص العربى، ",
  };

  return (
    <div className="mt-8 flex flex-col gap-8">
      {Array(5)
        .fill("")
        .map((_, idx) => (
          <BlogCard key={idx} {...data} />
        ))}
    </div>
  );
};

export default Blogs;
