"use client";

import { MainLanding } from "./_components/MainLanding";
import SwiperLanding from "./_components/SwiperLanding";
import { useAppSelector } from "@/lib/store/hooks";

export const Landing = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return <>{isLoggedIn ? <SwiperLanding /> : <MainLanding />}</>;
};
