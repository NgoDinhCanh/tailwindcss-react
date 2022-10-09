import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (values.firstName.length < 3) {
  }
  return errors;
};
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName" className="text-base">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter Your First Name ..."
          className="p-4 rounded-md border border-gray-100"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 rounded-lg bg-blue-500 text-white font-semibold"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
