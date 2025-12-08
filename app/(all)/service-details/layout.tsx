import React from "react";
import Overview from "./_components/Overview";
import Title from "./_components/Title";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-[#F8FAFF] pt-10 md:pt-16 pb-[100px]">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 overflow-hidden order-2 lg:order-1">
            <Title />
            {children}
          </div>
          <div className="lg:order-2">
            <Overview />
          </div>
        </div>
      </div>
    </section>
  );
}
