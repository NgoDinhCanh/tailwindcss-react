import React, { useState } from "react";

const DoubleCouter = () => {
  const [count, setCount] = useState(0);
  const handleDoubleNumber = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={handleDoubleNumber}>Double Couter</button>
      <span className="count">{count}</span>
    </div>
  );
};

export default DoubleCouter;
