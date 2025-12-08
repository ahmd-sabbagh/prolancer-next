import { blog } from "@/assets";
import React from "react";
import SuggestBlogCard from "./SuggestBlogCard";

const SuggestBlogs = () => {
  const data = {
    image: blog,
    hent: "تسويق الكتروني",
    title: "هل مازال هناك سؤال أو فكرة غير واضحة؟",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس النص من مولد النص العربى، ",
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 md:mt-14">
      {Array(3)
        .fill("")
        .map((_, idx) => (
          <SuggestBlogCard key={idx} {...data} />
        ))}
    </div>
  );
};

export default SuggestBlogs;
