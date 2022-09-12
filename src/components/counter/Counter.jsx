import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleNumber = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleNumber}>Number</button>
      <span>{count}</span>
    </div>
  );
};

export default Counter;
