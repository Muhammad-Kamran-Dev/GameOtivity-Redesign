import {
  Founder,
  CoreFeature,
  ExcitingFeatures,
  Features,
  Hero,
} from "./components";
import GamerPerks from "./components/Features/GamerPerks";
import Testimonials from "./components/Testimonials/Testimonials";
import WalkthroughGuide from "./components/WalkthroughGuide/WalkthroughGuide";
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
      <Testimonials />
    </main>
  );
}
