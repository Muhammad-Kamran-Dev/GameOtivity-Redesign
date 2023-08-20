import {
  Founder,
  CoreFeature,
  ExcitingFeatures,
  Features,
  Hero,
  FAQSection,
  GamerPerks,
  TestimonialSlider,
  WalkthroughGuide,
} from "./components";

import { storeData } from "@/app/utils/utils";
export default function Home() {
  return (
    <main className="w-11/12 mx-auto">
      <Hero />
      <Features />
      <CoreFeature />
      <ExcitingFeatures />
      <Founder />
      <WalkthroughGuide />

      {/* used for Game store as well and for Core Feature as Well */}
      <GamerPerks
        heading={storeData.heading}
        title={storeData.title}
        desc={storeData.desc}
        imgUrl={storeData.imgUrl}
        hasBtn
        left
        key={storeData.title}
        btnText={storeData.btnText}
      />
      <TestimonialSlider />
      <FAQSection />
    </main>
  );
}
