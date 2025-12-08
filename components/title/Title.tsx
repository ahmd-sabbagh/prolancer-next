import React from "react";

interface Props {
  title: string;
  subTitle?: string;
}

const Title: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div>
      <h3 className="text-xl dark-color md:text-2xl">{title}</h3>
      {subTitle && <p className="mt-4 text-sm dark-color">{subTitle}</p>}
    </div>
  );
};

export default Title;
