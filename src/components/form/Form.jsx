import React from "react";
import useChangeInput from "../../hooks/useChangeInput";

const Form = () => {
  const { values, handleChange } = useChangeInput({
    name: "",
    email: "",
    remember: false,
  });
  console.log("=======>", values);
  return (
    <div className="p-5">
      <input
        className="border border-gray-600 bg-white rounded-lg text-black w-full max-w-[300px] p-4"
        type="text"
        name="name"
        placeholder="Enter your name..."
        onChange={handleChange}
      />
      <input
        className="ml-3 border border-gray-600 bg-white rounded-lg text-black w-full max-w-[300px] p-4"
        type="email"
        name="email"
        placeholder="Enter your email address"
        onChange={handleChange}
      />
      <label className="ml-3">Remember me</label>
      <input
        className="ml-2"
        type="checkbox"
        name="remember"
        onChange={handleChange}
      />
      <button className="ml-3 inline-block p-4 rounded-lg bg-green-500 text-white">
        Submit
      </button>
    </div>
  );
};

export default Form;
