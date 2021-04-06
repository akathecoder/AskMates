import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { string, mixed, number, object } from "yup";
import {
  validateEmail,
  validateUsername,
} from "../utils/validateUsername";

const Registration = () => {
  return (
    <div className="absolute bg-login h-full w-full bg-cover">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full md:w-2/3 xl:w-1/3 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl border-0 rounded-lg bg-gray-600">
              <div className="text-gray-100 flex-auto px-4 lg:px-10 py-10 pt-8">
                <div className="text-center mb-3 font-bold text-xl">
                  <h3>Register</h3>
                </div>
                <FormikStepper
                  className="mt-8"
                  initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    fname: "",
                    mname: "",
                    lname: "",
                    batch: "",
                    degree: "",
                    field: "",
                    rollno: "",
                  }}
                  onSubmit={async (values) => {
                    console.log("values", values);
                  }}
                >
                  <FormikStep
                    label="Login Information"
                    validationSchema={object({
                      username: string()
                        .required("Username is required!")
                        .matches(
                          /^[aA-zZ0-9.]+$/,
                          "Username cannot contains spaces or any symbols"
                        )
                        .test(
                          "isAlreadyExists",
                          "Username already exists",
                          (value, context) =>
                            validateUsername(value)
                        ),
                      email: string()
                        .required("Email is required")
                        .matches(
                          /^[aA-zZ0-9.]+$/,
                          "Email cannot contains spaces or any symbols except a period"
                        )
                        .test(
                          "isEmailValid",
                          "Email Address already exists",
                          (value, context) =>
                            validateEmail(value)
                        ),
                      password: string().required(
                        "Password is required"
                      ),
                    })}
                  >
                    <InputField
                      label="Username"
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                    />
                    <InputField
                      label="Email"
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      isEmail="true"
                    />
                    <InputField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </FormikStep>

                  <FormikStep
                    label="Personal Information"
                    validationSchema={object({
                      fname: string()
                        .required("First Name is Required")
                        .matches(
                          /^[aA-zZ]+$/,
                          "First Name Cannot contain numeric, symbols, spaces"
                        ),
                      mname: string().matches(
                        /^[aA-zZ]+$/,
                        "Middle Name Cannot contain numeric, symbols, spaces"
                      ),
                      lname: string("Last Name is Required")
                        .required()
                        .matches(
                          /^[aA-zZ]+$/,
                          "Last Name Cannot contain numeric, symbols, spaces"
                        ),
                    })}
                  >
                    <InputField
                      label="First Name"
                      name="fname"
                      type="text"
                      placeholder="Enter your First name"
                    />
                    <InputField
                      label="Middle Name"
                      name="mname"
                      type="text"
                      placeholder="Enter your Middle name"
                    />
                    <InputField
                      label="Last Name"
                      name="lname"
                      type="text"
                      placeholder="Enter your Last name"
                    />
                  </FormikStep>

                  <FormikStep label="Student Information">
                    <InputField
                      label="Batch"
                      name="batch"
                      type="text"
                      placeholder="Year of Graduation"
                    />
                    <InputField
                      label="Degree"
                      name="degree"
                      type="text"
                      placeholder="Select your Degree"
                    />
                    <InputField
                      label="Field"
                      name="field"
                      type="text"
                      placeholder="Enter your Major"
                    />
                    <InputField
                      label="Roll No."
                      name="rollno"
                      type="text"
                      placeholder="Enter your Roll No."
                    />
                  </FormikStep>
                </FormikStepper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

function FormikStep({ children }) {
  return <>{children}</>;
}

function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {currentChild}

          <div className="grid grid-cols-2 gap-4">
            {step > 0 ? (
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </Button>
            ) : null}

            <div className={step > 0 ? null : `col-span-2`}>
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting
                  ? "Submitting"
                  : isLastStep()
                  ? "Submit"
                  : "Next"}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

function InputField({
  label,
  type,
  placeholder,
  name,
  isEmail,
}) {
  return (
    <div className="relative w-full mb-5">
      <label
        className="block text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <div className="flex rounded overflow-hidden text-sm shadow bg-white">
        <Field
          type={type}
          name={name}
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
          placeholder={placeholder}
          style={{
            transition: "all .15s ease",
          }}
        />
        {isEmail ? (
          <div className="text-center bg-gray-100 px-5 py-3 font-semibold border-l-2 border-gray-300 text-gray-600">
            @jklu.edu.in
          </div>
        ) : (
          ""
        )}
      </div>
      <ErrorMessage
        name={name}
        component={CustomErrorMessage}
      />
    </div>
  );
}

function Button({ children, type, disabled, onClick }) {
  return (
    <div className="text-center mt-8">
      <button
        className={`${
          type == "submit" && children == "Submit"
            ? "bg-green-500"
            : "bg-gray-900"
        } active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-1 mb-1 w-full`}
        type={type}
        disabled={disabled}
        onClick={onClick}
        style={{
          transition: "all .15s ease",
        }}
      >
        {children}
      </button>
    </div>
  );
}

function TextLink({ children, href }) {
  return (
    <div className="flex justify-center mt-2">
      <a
        href={href}
        onClick={(e) => e.preventDefault()}
        className="text-gray-100"
      >
        <small>{children}</small>
      </a>
    </div>
  );
}

function CustomErrorMessage({ children }) {
  return (
    <span className="text-sm text-red-500">{children}</span>
  );
}
