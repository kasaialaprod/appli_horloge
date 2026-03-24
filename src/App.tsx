import { useState, useEffect } from "react";
import { Clock } from "./components/Clock";
import { Timer } from "./components/Timer";
import "./App.css";

function App() {
  const [mode, setMode] = useState<"clock" | "timer">(() => {
    const saved = localStorage.getItem("mode");
    return saved === "clock" || saved === "timer" ? saved : "clock";
  });

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Horloge</h1>
        <div className="toggle-group" role="tablist">
          <button
            type="button"
            className={`toggle-button ${mode === "clock" ? "is-active" : ""}`}
            onClick={() => setMode("clock")}
          >
            Clock
          </button>
          <button
            type="button"
            className={`toggle-button ${mode === "timer" ? "is-active" : ""}`}
            onClick={() => setMode("timer")}
          >
            Timer
          </button>
        </div>
      </header>

      <main className="app-main">
        {mode === "clock" ? <Clock /> : <Timer />}
      </main>
    </div>
  );
}

export default App;
