import React from "react";
import Profile from "./_components/Profile";
import AccountInfo from "./_components/AccountInfo";
import AboutServiceProvider from "./_components/AboutServiceProvider";
import AboutServiceRequester from "./_components/AboutServiceRequester";

const SettingPage = () => {
  const service_provider = false;

  return (
    <section className="py-16 bg-[#F8FAFF]">
      <div className="container">
        <Profile />
        <div className="mt-14 grid lg:grid-cols-3 gap-5 lg:gap-14">
          <AccountInfo />
          <div className="lg:col-span-2">
            {
              service_provider ? <AboutServiceProvider /> : <AboutServiceRequester />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingPage;
