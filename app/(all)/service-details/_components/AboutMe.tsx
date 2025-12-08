import { useTranslations } from "next-intl";
import Comment from "./Comment";
import Profile from "./Profile";
import Rating from "./Rating";
import AddRating from "./AddRating";

const AboutMe = () => {
    const t = useTranslations()
  return (
    <div className="p-4 lg:p-8 bg-white rounded-xl mt-5 md:mt-8">
      <Profile />
      <Rating />
      <div className="">
        <Comment />
        <Comment />
        <Comment />
        <button type="button" className="mx-auto block mt-5 md:mt-10 green-color underline">{t("view_more")}</button>
      </div>
       <AddRating />
    </div>
  );
};

export default AboutMe;
