import { support_message, support_question } from "@/assets";
import React from "react";
import SupportCard from "./SupportCard";

const Supports = () => {
  const data = [
    {
      icon: support_message,
      title: "اتصل بنا",
      subTitle:
        "هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف.",
      link: "",
      service_availability: "خلال 5 أيام.",
      response_time: "طوال الأسبوع.",
    },
    {
      icon: support_question,
      title: "الاسئلة الشائعة",
      subTitle:
        "هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف.",
      link: "",
    },
    {
      icon: support_message,
      title: "اتصل بنا",
      subTitle:
        "هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف.",
      link: "",
      service_availability: "خلال 5 أيام.",
      response_time: "طوال الأسبوع.",
    },
    {
      icon: support_question,
      title: "الاسئلة الشائعة",
      subTitle:
        "هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف.",
      link: "",
    },
    {
      icon: support_message,
      title: "اتصل بنا",
      subTitle:
        "هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف.",
      link: "",
      service_availability: "خلال 5 أيام.",
      response_time: "طوال الأسبوع.",
    },
    {
      icon: support_question,
      title: "الاسئلة الشائعة",
      subTitle:
        "هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف.",
      link: "",
    },
    {
      icon: support_message,
      title: "اتصل بنا",
      subTitle:
        "هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف.",
      link: "",
      service_availability: "خلال 5 أيام.",
      response_time: "طوال الأسبوع.",
    },
    {
      icon: support_question,
      title: "الاسئلة الشائعة",
      subTitle:
        "هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف.",
      link: "",
    },
  ];
  return <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {data.map((item,idx) => (
        <SupportCard {...item} key={idx} />
    ))}
  </div>;
};

export default Supports;
