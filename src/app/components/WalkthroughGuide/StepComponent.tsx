import React from "react";

type Prop = {
  imgUrl: string;
  altText: string;
};

const StepComponent = ({ imgUrl, altText }: Prop) => {
  return (
    <img
      className="my-10 max-w-[300px] lg:max-w-full h-full  mx-auto"
      src={imgUrl}
      alt={altText}
    />
  );
};

export default StepComponent;
