import { useEffect, useRef, useState, ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";



let currentOTPIndex = 0;

type UseOtpFormProps = {
  phone?: string;
  onSuccess?: () => void;
};

export const useOtpForm = ({ phone, onSuccess }: UseOtpFormProps) => {
  const t = useTranslations();
  const router = useRouter()
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[currentOTPIndex] = value.slice(-1);
    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);
    setOtp(newOtp);
  };

  const handleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOTPIndex(index - 1);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.replace("/")
    const otpStr = otp.join("");
  };

  return {
    otp,
    inputRef,
    activeOTPIndex,
    handleChange,
    handleKeyDown,
    onSubmit,
  };
};
