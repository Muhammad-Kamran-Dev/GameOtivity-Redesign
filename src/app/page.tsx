import {
  Founder,
  CoreFeature,
  ExcitingFeatures,
  Features,
  Hero,
} from "./components";

export default function Home() {
  return (
    <main className="w-11/12 mx-auto">
      <Hero />
      <Features />
      <CoreFeature />
      <ExcitingFeatures />
      <Founder />
    </main>
  );
}
