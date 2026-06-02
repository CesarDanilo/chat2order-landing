import "./App.css";

import { Banner } from "./components/Banner/Banner";
import { TheProblem } from "./components/Resolver/TheProblem";
import { TheSolution } from "./components/Resolver/TheSolution";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Extention } from "./components/Apresentation/Extention";
import { Resources } from "./components/Resources/Resources";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { TechStack } from "./components/TechStack/TechStack";
import { SocialProof } from "./components/SocialProof/SocialProof";
import { PricingSection } from "./components/PricingSection/PricingSection";
import { CtaSection } from "./components/CtaSection/CtaSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="background-grid" />

      <main className="relative min-h-screen">
        <div className="flex flex-col">
          <Header />
          <Hero />
          <Banner />
          <TheProblem />
          <TheSolution />
          <Extention />
          <Resources />
          <HowItWorks />
          <TechStack />
          <SocialProof />
          <PricingSection />
          <CtaSection />
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;