import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { string, mixed, number, object } from "yup";
import {
  validateEmail,
  validateUsername,
} from "../utils/validate";

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
                    batch: "2021",
                    degree: "btech",
                    field: "cse",
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
                            validateEmail(
                              value + "@jklu.edu.in"
                            )
                        ),
                      password: string()
                        .required("Password is required")
                        .min(
                          8,
                          "Password must be at-least 8 characters long"
                        )
                        .matches(
                          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                          "Password must contain at-least one uppercase, lowercase, number and symbol"
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

                  <FormikStep
                    label="Student Information"
                    validationSchema={object({
                      rollno: number()
                        .required("Roll No. is required")
                        .positive(
                          "Roll no. must be a positive number"
                        ),
                    })}
                  >
                    <InputField
                      as="select"
                      label="Batch"
                      name="batch"
                      placeholder="Year of Graduation"
                    >
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </InputField>

                    <InputField
                      as="select"
                      label="Degree"
                      name="degree"
                      placeholder="Select your Degree"
                    >
                      <option value="btech">B Tech</option>
                      <option value="bba">BBA</option>
                      <option value="bdes">B Des</option>
                      <option value="bca">BCA</option>
                      <option value="mtech">M Tech</option>
                      <option value="mba">MBA</option>
                      <option value="mdes">M Des</option>
                      <option value="mca">MCA</option>
                    </InputField>

                    <InputField
                      as="select"
                      label="Field"
                      name="field"
                      placeholder="Enter your Major"
                    >
                      <option value="cse">
                        Computer Science
                      </option>
                      <option value="mechanical">
                        Mechanical
                      </option>
                      <option value="civil">Civil</option>
                      <option value="electrical">
                        Electrical
                      </option>
                    </InputField>

                    <InputField
                      label="Roll No."
                      name="rollno"
                      type="number"
                      placeholder="Enter your Roll No."
                      min="1"
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
  children,
  as,
  ...props
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
          as={as}
          type={type}
          name={name}
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
          placeholder={placeholder}
          style={{
            transition: "all .15s ease",
          }}
          {...props}
        >
          {children}
        </Field>
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
