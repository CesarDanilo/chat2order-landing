import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="background-grid" />

      <main className="relative min-h-screen">
        <Header />
      </main>
    </>
  );
}

export default App;