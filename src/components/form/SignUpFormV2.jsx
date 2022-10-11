import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .min(3, "Must be 3 character or than")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .min(3, "Must be 3 character or than")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName" className="text-base">
            First Name
          </label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter
            Your First Name ..."
            className="p-4 rounded-md border
            border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage
              name="firstName"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName" className="text-base">
            Last Name
          </label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter
            Your Last Name ..."
            className="p-4 rounded-md border
            border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 rounded-lg bg-blue-500 text-white font-semibold"
          >
            Sign Up
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
