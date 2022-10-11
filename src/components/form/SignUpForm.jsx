import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (values.firstName.length < 3) {
//   }
//   return errors;
// };
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(3, "Must be 3 character or than")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(3, "Must be 3 character or than")
        .required("Required"),
    }),
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
          // name="firstName"
          placeholder="Enter Your First Name ..."
          className="p-4 rounded-md border border-gray-100"
          // value={formik.values.firstName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName" className="text-base">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          // name="lastName"
          placeholder="Enter Your Last Name ..."
          className="p-4 rounded-md border border-gray-100"
          // value={formik.values.lastName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : null}
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
