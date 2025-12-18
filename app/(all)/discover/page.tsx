// /discover/page.tsx
import Title from "@/components/title/Title";
import { useTranslations } from "next-intl";
import Card from "../(home)/components/newlyAddedServicesAuth/Card";

const Page = () => {
  const t = useTranslations();
  const cards = Array.from({ length: 12 });

  return (
    <section className="pt-10 bg-[#F8FAFF] pb-20">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <Title
            title={t("Newly added services")}
            subTitle={t("Messages and support sub")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {cards.map((_, idx) => (
              <Card key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
