import { useState } from "react";

export function Timer() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [msCount2, setMsCount2] = useState(0);
  const [msCount, setMsCount] = useState(0);
  const [mCount, setMCount] = useState(0);
  const [mCount2, setMCount2] = useState(0);

  const [start, setStart] = useState(false);
  const [timerRefs, setTimerRefs] = useState<number[]>([]); // ← tableau de IDs

  function startTimer() {
    setStart(true);

    const refs: number[] = [];

    // Mini secondes
    refs.push(setInterval(() => {
      setMsCount((prev) => (prev >= 9 ? 0 : prev + 1));
    }, 10));
    refs.push(setInterval(() => {
      setMsCount2((prev) => (prev >= 9 ? 0 : prev + 1));
    }, 100));

    // Secondes
    refs.push(setInterval(() => {
      setCount((prev) => (prev >= 9 ? 0 : prev + 1));
    }, 1000));
    refs.push(setInterval(() => {
      setCount2((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 10000));

    // Minutes
    refs.push(setInterval(() => {
      setMCount((prev) => (prev >= 9 ? 0 : prev + 1));
    }, 60000));
    refs.push(setInterval(() => {
      setMCount2((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 10000 * 60));

    setTimerRefs(refs); // ✅ maintenant ça écrit bien dans l’état
  }

  function pauseTimer() {
    timerRefs.forEach(ref => clearInterval(ref));
    setTimerRefs([]); // on vide la liste
    setStart(false);
  }

  function resetTimer() {
    pauseTimer();

    setMsCount(0);
    setMsCount2(0);
    setCount(0);
    setCount2(0);
    setMCount(0);
    setMCount2(0);
  }

  return (
    <div className="timer">
      <h1>
        {mCount2}{mCount}:{count2}{count}:{msCount2}{msCount}
      </h1>
      <div>
        {!start && (
          <button id="startBtn" onClick={startTimer}>
            Start
          </button>
        )}
        {start && (
          <button id="pauseBtn" onClick={pauseTimer}>
            Pause
          </button>
        )}
        <button id="resetBtn" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
