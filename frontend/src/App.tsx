import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { TheProblem } from "./components/Resolver/TheProblem";
import { TheSolution } from "./components/Resolver/TheSolution";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="background-grid" />

      <main className="relative min-h-screen">
        <div className="container flex flex-col gap-11 w-2/3 mx-auto px-4">
          <Header />
          <Hero />
          <Banner />
          <TheProblem /> 
          <TheSolution />
        </div>
      </main>
    </>
  );
}

export default App;