import React from "react";
import CompletionRate from "./_components/CompletionRate";
import Stage from "./_components/Stage";
type Message = {
  id: number;
  sender: "me" | "other";
  type: "text" | "image" | "file" | "audio";
  content: string;
  time: string;
  status: "sent" | "delivered" | "seen";
  fileName?: string;
  fileSize?: string;
  duration?: string;
};
const RequestServicePage = () => {
  const stageData = {
    title: "المرحلة الاولي",
    subTitle:
      "تتضمن الحزمة الأساسية مشاهد الكمبيوتر المحمول فقط، الموسيقى الخلفية، والشعار، وفيديو بدقة 720HD",
    state: "progress",
    messages: [
      {
        id: 1,
        sender: "me",
        type: "text",
        content: "السلام عليكم يا باشا",
        time: "10:35 AM",
        status: "seen",
      },
      {
        id: 2,
        sender: "other",
        type: "image",
        content:
          "https://images.unsplash.com/photo-1763307411477-6bb3254f1496?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "10:36 AM",
        status: "sent",
      },
      {
        id: 3,
        sender: "me",
        type: "file",
        fileName: "MyCV.pdf",
        fileSize: "1.2MB",
        content:
          "https://images.unsplash.com/photo-1763307411477-6bb3254f1496?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        time: "10:37 AM",
        status: "sent",
      },
      {
        id: 4,
        sender: "other",
        type: "text",
        content: "بص دي الصورة اللي قولتلك عليها",
        time: "10:38 AM",
        status: "delivered",
      },
      {
        id: 5,
        sender: "me",
        type: "audio",
        duration: "0:12",
        content:
          "https://images.unsplash.com/photo-1763307411477-6bb3254f1496?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        time: "10:40 AM",
        status: "seen",
      },
    ],
  };

  return (
    <div className="mt-4">
      <CompletionRate />
      <div className="mt-5">
        <Stage
          title={stageData.title}
          subTitle={stageData.subTitle}
          state={stageData.state}
          messages={stageData.messages as Message[]}
        />
      </div>
    </div>
  );
};

export default RequestServicePage;
