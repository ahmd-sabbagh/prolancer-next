import React from "react";
import Text from "./_Components/Text";
import ImportantLinks from "./_Components/ImportantLinks";
import ContactInfo from "./_Components/ContactInfo";

export const Footer = () => {
  return (
    <section className="bg-[#202020] py-[94px]">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-16 xl:gap-36">
          <Text />
          <ImportantLinks />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};
