import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { TheProblem } from "./components/Banner/TheProblem";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="background-grid" />

      <main className="relative min-h-screen">
        <div className="container w-2/3 mx-auto px-4">
          <Header />
          <Hero />
          <Banner />
          <TheProblem /> 
        </div>
      </main>
    </>
  );
}

export default App;