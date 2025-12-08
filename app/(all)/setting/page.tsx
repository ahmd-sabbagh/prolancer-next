import React from "react";
import Profile from "./_components/Profile";
import AccountInfo from "./_components/AccountInfo";
import AboutMe from "./_components/AboutMe";

const SettingPage = () => {
  return (
    <section className="py-16 bg-[#F8FAFF]">
      <div className="container">
        <Profile />
        <div className="mt-14 grid lg:grid-cols-3 gap-5 lg:gap-14">
          <AccountInfo />
          <div className="lg:col-span-2">
            <AboutMe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingPage;
