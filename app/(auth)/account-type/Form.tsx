"use client";
import { cn } from "@/lib/utils";
import BtnSubmit from "../_components/BtnSubmit";
import { useUserTypeForm } from "@/hooks/feature/auth/useUserTypeForm";

const Form = () => {
  const { userType, selectUserType, onSubmit, loading, t } = useUserTypeForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
      <button
        type="button"
        className={cn(
          "rounded-xl py-5 px-6 border text-start",
          userType === "client"
            ? "border-[#1DBF73] green-color bg-[#1DBF731A]"
            : "border-[#DDDFDF]"
        )}
        onClick={() => selectUserType("client")}
      >
        {t("Service provider")}
      </button>
      <button
        type="button"
        className={cn(
          "rounded-xl py-5 px-6 border text-start",
          userType === "freelancer"
            ? "border-[#1DBF73] green-color bg-[#1DBF731A]"
            : "border-[#DDDFDF]"
        )}
        onClick={() => selectUserType("freelancer")}
      >
        {t("postulant")}
      </button>
      <p className="text-[#3F434A] text-sm mt-2">
        {
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص."
        }
      </p>
      <BtnSubmit text={t("next")} className="mt-3.5" loading={loading} />
    </form>
  );
};

export default Form;
