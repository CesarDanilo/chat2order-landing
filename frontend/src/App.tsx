import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="background-grid" />

      <main className="relative min-h-screen px-6">
        <Header />
        <Hero />
      </main>
    </>
  );
}

export default App;