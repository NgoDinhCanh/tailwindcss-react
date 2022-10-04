import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef: dropdownRef } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer bg-white"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div className="absolute border border-gray-200 rounded-lg w-full bg-white">
          <div className="p-4 cursor-pointer">NodeJS</div>
          <div className="p-4 cursor-pointer">Laravel</div>
          <div className="p-4 cursor-pointer">Flutter</div>
          <div className="p-4 cursor-pointer">ReactJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
