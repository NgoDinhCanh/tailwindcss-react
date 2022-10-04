import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const handleClear = () => {
    setCount(0);
  };
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div>
      <h3 className="ml-5 font-semibold text-lg my-5">Timer: {count}s</h3>
      <button className="p-5 bg-blue-500 rounded-md" onClick={handleStart}>
        Start
      </button>
      <button className="ml-2 p-5 bg-red-500 rounded-md" onClick={handleStop}>
        Stop
      </button>
      <button
        className="ml-2 p-5 bg-green-500 rounded-md"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
};

export default StopWatch;
