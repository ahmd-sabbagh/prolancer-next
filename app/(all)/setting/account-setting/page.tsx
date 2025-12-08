import React from "react";
import Submit from "./_components/Submit";
import BasicInfo from "./_components/basicInfo/BasicInfo";
import SocialLinks from "./_components/socialLinks/SocialLinks";
import Adress from "./_components/adress/Adress";
import Educations from "./_components/education/Educations";
import PracticalExperiences from "./_components/practicalExperiences/PracticalExperiences";

const AccountSettingPage = () => {
  return (
    <section className="bg-[#F8FAFF] pt-10 md:pt-16 pb-[100px]">
      <div className="container">
        <Submit />
        <BasicInfo />
        <SocialLinks />
        <Adress />
        <PracticalExperiences />
        <Educations />

      </div>
    </section>
  );
};

export default AccountSettingPage;
