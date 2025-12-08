import Easily from "@/components/Easily/Easily";
import Faqs from "@/components/faqs/Faqs";
import HowItWork from "@/components/howItWork/HowItWork";
import { Landing } from "@/components/landing/Landing";
import NewlyAddedServices from "@/components/newlyAddedServices/NewlyAddedServices";
import NewlyAddedServicesAuth from "./components/newlyAddedServicesAuth/NewlyAddedServicesAuth";
import Competencies from "./components/competencies/Competencies";
import Experts from "./components/experts/Experts";

const HomePage = () => {
  return (
    <>
      <Landing />
      <NewlyAddedServicesAuth />
      <Competencies />
      <Experts />
      <HowItWork />
      <NewlyAddedServices />
      <Easily />
      <Faqs className="py-[100px] mt-[100px] bg-[#F9F9F9]" />
    </>
  );
};

export default HomePage;
