import { MainLanding } from "./_components/MainLanding";
import SwiperLanding from "./_components/SwiperLanding";

export const Landing = () => {
  const login = true;
  return <>{login ? <SwiperLanding /> : <MainLanding />}</>;
};
