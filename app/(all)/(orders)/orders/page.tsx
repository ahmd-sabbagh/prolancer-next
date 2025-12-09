import React from "react";
import RequestsMobileList from "../_components/RequestsMobileList";
import RequestsTable from "../_components/RequestsTable";
import { requests } from "../_components/requests-data";

const RequestsPage = () => {
  return (
    <section className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-[1511px] px-4 space-y-6">
        <h1
          className="
            text-2xl md:text-3xl 
            text-[#111827] 
            text-right
            mt-[42px]
            mb-[30px]
          "
        >
          طلبات للعمل عليها
        </h1>

        <RequestsMobileList requests={requests} />

        <RequestsTable requests={requests} />
      </div>
    </section>
  );
};

export default RequestsPage;
