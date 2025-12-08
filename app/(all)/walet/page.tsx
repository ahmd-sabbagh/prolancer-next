import React from "react";
import Title from "./_components/Title";
import AvailableMoney from "./_components/AvailableMoney";
import ProfitsAndExpenses from "./_components/ProfitsAndExpenses";
import LatestOperations from "./_components/LatestOperations";

const WaletPage = () => {
  return (
    <section className="py-16 bg-[#F8FAFF]">
      <div className="container">
        <Title />
        <div className="mt-7.5 grid md:grid-cols-2 gap-7.5">
          <AvailableMoney />
          <ProfitsAndExpenses />
        </div>
        <LatestOperations />
      </div>
    </section>
  );
};

export default WaletPage;
