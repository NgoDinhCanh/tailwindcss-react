import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef();
  const divRef = useRef();
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto Focus ..."
        className="inline-block p-5 border border-gray-200 focus:border-blue-500"
      />
    </div>
  );
};

export default InputFocus;
