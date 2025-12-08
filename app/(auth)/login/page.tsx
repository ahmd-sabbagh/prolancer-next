import { logo_black } from "@/assets";
import Bg from "@/components/landing/_components/Bg";
import { useTranslations } from "next-intl";
import LoginForm from "./LoginForm";
import LoginBy from "../_components/LoginBy";
import Text from "../_components/Text";
import Logo from "../_components/Logo";

const LoginPage = () => {
  const t = useTranslations();
  return (
    <section className="min-h-screen relative flex-center p-5">
      <Bg>
        <div>
          <div className="relative z-20 bg-white px-8 md:px-[90px] pt-8 pb-14 max-w-[505px] rounded-[34px] grow">
            {/* logo */}
            <Logo logo={logo_black} />
            {/* text */}
            <Text title={t("login_now")} subtitle={t("welcom_you")} />
            <LoginForm />
          </div>
          <LoginBy />
        </div>
      </Bg>
    </section>
  );
};

export default LoginPage;
