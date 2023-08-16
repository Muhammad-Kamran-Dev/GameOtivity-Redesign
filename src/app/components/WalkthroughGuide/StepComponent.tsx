import React from "react";

type Prop = {
  imgUrl: string;
  altText: string;
};

const StepComponent = ({ imgUrl, altText }: Prop) => {
  return <img src={imgUrl} alt={altText} />;
};

export default StepComponent;
