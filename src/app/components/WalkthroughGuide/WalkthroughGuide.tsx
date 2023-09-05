import React from "react";
import StepComponent from "./StepComponent";
import { steps } from "@/../constants";

const WalkthroughGuide = () => {
  return (
    <>
      <div className="flex justify-center mb-6">
        <h2 className="mb-10 text-center lg:mb-20 article-subtitle article-title lg:w-1/2">
          Meet exciting features of Our app
        </h2>
      </div>
      <section className="w-10/12 mx-auto md:main-grid lg:w-11/12 margin-bottom ">
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
