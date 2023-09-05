import { featureData } from "@/../constants";
import FeatureCard from "./FeatureCard";
const ExcitingFeatures = () => {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="mb-10 lg:mb-20 article-subtitle article-title lg:w-1/2 text-center">
          Meet exciting features of Our app
        </h2>
      </div>
      <section className="grid items-center justify-center grid-cols-1 mb-32 justify-items-center md:grid-cols-2 lg:grid-cols-3 margin-bottom gap-y-32 ">
        {featureData.map((feature) => (
          <FeatureCard
            key={feature.title}
            img={feature.img}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </>
  );
};

export default ExcitingFeatures;
