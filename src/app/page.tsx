import CoreFeature from "./components/Features/CoreFeature";
import Features from "./components/Features/Features";
import Hero from "./components/Header/Hero";

export default function Home() {
  return (
    <main className="w-11/12 mx-auto">
      <Hero />
      <Features />
      <CoreFeature />
    </main>
  );
}
