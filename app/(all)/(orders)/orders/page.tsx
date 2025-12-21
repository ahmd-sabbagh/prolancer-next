"use client";

import React from "react";
import RequestsMobileList from "../_components/RequestsMobileList";
import RequestsTable from "../_components/RequestsTable";
import { requests } from "../_components/requests-data";
import Header from "../_components/Header";

const RequestsPage = () => {
  return (
    <section className="min-h-screen bg-[#F6F8FB] pb-10">
      <div className="container pt-8">
        <div className="mb-9 mt-7 flex justify-between">
          <Header />
        </div>

        <RequestsMobileList requests={requests} />

        <RequestsTable requests={requests} />
      </div>
    </section>
  );
};

export default RequestsPage;
