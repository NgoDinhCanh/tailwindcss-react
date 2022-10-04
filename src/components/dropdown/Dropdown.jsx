import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutDropdown = (e) => {
      console.log(dropdownRef.current.contains(e.target));
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        console.log("outside");
        setShowDropdown(false);
      } else {
        console.log("inside");
      }
    };
    document.addEventListener("click", handleClickOutDropdown);
    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer bg-white"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>
      {showDropdown && (
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
