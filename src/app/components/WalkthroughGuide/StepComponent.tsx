import React from "react";

type Prop = {
  imgUrl: string;
  altText: string;
};

const StepComponent = ({ imgUrl, altText }: Prop) => {
  return <img className="my-10" src={imgUrl} alt={altText} />;
};

export default StepComponent;
