import React from "react";
import StepComponent from "./StepComponent";

type imagesData = {
  imgUrl: string;
  altText: string;
};
const WalkthroughGuide = () => {
  const steps: imagesData[] = [
    { imgUrl: "/assets/svg/WalkthroughGuide/step1.svg", altText: "Step 1" },
    { imgUrl: "/assets/svg/WalkthroughGuide/step2.svg", altText: "Step 2" },
    { imgUrl: "/assets/svg/WalkthroughGuide/step3.svg", altText: "Step 3" },
    { imgUrl: "/assets/svg/WalkthroughGuide/step4.svg", altText: "Step 4" },
  ];
  return (
    <>
      <div className="flex justify-center mb-6">
        <h2 className="mb-10 lg:mb-20 article-subtitle article-title lg:w-1/2 text-center">
          Meet exciting features of Our app
        </h2>
      </div>
      <section className="w-10/12  lg:main-grid lg:w-11/12 mx-auto margin-bottom">
        {steps.map((step) => {
          return (
            <StepComponent
              key={step.altText}
              imgUrl={step.imgUrl}
              altText={step.altText}
            />
          );
        })}
      </section>
    </>
  );
};

export default WalkthroughGuide;
