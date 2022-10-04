import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const textareaRef = useRef();
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    setTextareaHeight("auto");
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setText(e.target.value);
  };
  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div
      className="p-5"
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        className="transition-all overflow-hidden leading-normal w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-500 resize-none"
        placeholder="Please enter your content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
