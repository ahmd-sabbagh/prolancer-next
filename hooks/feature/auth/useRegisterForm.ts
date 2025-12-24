import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import {
  getPhoneSchema,
  RegisterSchemaType,
} from "@/validation/registerSchema";
import { setRegisterData } from "@/lib/store/features/auth/registerDraftSlice";


export const useRegisterForm = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const router = useRouter();


  const registerSchema = getPhoneSchema(t);

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const { reset } = form;

  const onSubmit = async (data: RegisterSchemaType) => {
    dispatch(
      setRegisterData({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        password: data.password,
      })
    );
    reset();
    router.push("/account-type");
  };
  return {
    ...form,
    onSubmit,
    t,
  };
};
