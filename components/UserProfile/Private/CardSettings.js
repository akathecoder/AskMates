import _ from "lodash";
import date from "date-and-time";
import { useState } from "react";
import { showPopup } from "../../Notification";
import axios from "axios";

export default function CardSettings({
  enabled,
  setEnabled,
  userData,
}) {
  const [formData, updateFormData] = useState({});
  if (userData.dob != null) {
    userData.dob = date.format(
      new Date(userData.dob),
      "YYYY-MM-DD"
    );
  }

  // TO set the max DOB option to 18 years before from now.
  let maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  maxDate = maxDate.toISOString().substring(0, 10);

  // Whenever there is any change in any input, it gets added to formdata.
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // what happens when from is Submitted.
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnabled(true);
    console.log(formData);
    // Sending Data to server.
    updateUser(formData);
    showPopup(
      "User Profile Successfully Updated..",
      "green"
    );
  };

  // Call the Update User API
  const updateUser = async (updatedData) => {
    await axios
      .patch(
        `http://localhost:4001/users/data/${userData.username}`,
        {
          ...updatedData,
        },
        {
          withCredentials: true,
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100">
          <div className="flex-auto md:p-7 lg:px-10 lg:py-7 ">
            <h6 className="text-gray-500 text-base mt-2 mb-2 font-bold uppercase">
              Personal Information
            </h6>
            {/* firstName, middleName, lastName */}
            <div className="flex flex-wrap py-1.5">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="First Name"
                    required
                    pattern="^[aA-zZ]+$"
                    title="Cannot contain numeric, symbols, spaces"
                    disabled={enabled}
                    defaultValue={userData.firstName}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    name="middleName"
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="Middle Name"
                    pattern="^[aA-zZ]+$"
                    title="Cannot contain numeric, symbols, spaces"
                    disabled={enabled}
                    defaultValue={userData.middleName}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="Last Name"
                    required
                    pattern="^[aA-zZ]+$"
                    title="Cannot contain numeric, symbols, spaces"
                    disabled={enabled}
                    defaultValue={userData.lastName}
                  />
                </div>
              </div>
            </div>

            {/* username, Emailid */}
            <div className="flex flex-wrap py-1.5">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    name="username"
                    disabled
                    className={`${
                      enabled ? "bg-gray-200" : "bg-gray-50"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="Username"
                    defaultValue={userData.username}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="email"
                    name="email"
                    disabled
                    className={`${
                      enabled ? "bg-gray-200" : "bg-gray-50"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="E-Mail ID"
                    defaultValue={userData.email}
                  />
                </div>
              </div>
            </div>

            {/* DOB, Mobile numbae */}
            <div className="flex flex-wrap py-1.5">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="date"
                    name="dob"
                    max={maxDate.toString()}
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="D.O.B."
                    disabled={enabled}
                    defaultValue={
                      userData.dob ? userData.dob : ""
                    }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="tel"
                    name="mobileNumber"
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="Mobile Number"
                    pattern="^[0-9]+$"
                    minLength="10"
                    maxLength="11"
                    title="Must Contain only Numbers (xxxxxxxxxx)"
                    disabled={enabled}
                    defaultValue={userData.mobileNumber}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 mb-3 border-b-1 border-gray-300" />

            <h6 className="text-gray-500 text-base mt-4 mb-2 font-bold uppercase">
              College Information
            </h6>

            {/* Batch, Degree, Field, RollNo */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-6 py-1.5">
                <div className="relative w-full mb-3">
                  <input
                    type="number"
                    name="rollNo"
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="Roll No."
                    required
                    pattern="[0-9]"
                    title="Cannot contain alphabets, symbols, spaces"
                    min="1"
                    disabled={enabled}
                    defaultValue={userData.rollNo}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-6 py-1.5">
                <div className="relative flex flex-row w-full mb-3 items-center space-x-3">
                  <label
                    className="uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="degree"
                  >
                    Degree
                  </label>
                  <select
                    name="degree"
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    disabled={enabled}
                    defaultValue={userData.degree}
                  >
                    <option value="*" disabled>
                      Select Degree
                    </option>
                    <optgroup label="Institute of Engineernig and Technology">
                      <option value="B. Tech.">
                        B. Tech.
                      </option>
                      <option value="BCA">BCA</option>
                      <option value="M. Tech.">
                        M. Tech.
                      </option>
                      <option value="MCA">MCA</option>
                      <option value="PhD">PhD</option>
                    </optgroup>
                    <optgroup label="Institute of Management">
                      <option value="BBA">BBA</option>
                      <option value="MBA">MBA</option>
                      <option value="PhD">PhD</option>
                    </optgroup>
                    <optgroup label="Institute of Design">
                      <option value="B. Des.">
                        B. Des.
                      </option>
                      <option value="M. Des.">
                        M. Des.
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-6 py-1.5">
                <div className="relative flex flex-row w-full mb-3 items-center space-x-3">
                  <label
                    className="uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="field"
                  >
                    Field
                  </label>
                  <select
                    name="field"
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    disabled={enabled}
                    defaultValue={userData.field}
                  >
                    <optgroup label="B. Tech.">
                      <option value="Computer Science Engineering">
                        Computer Science Engineering
                      </option>
                      <option value="Mechanical Engineering">
                        Mechanical Engineering
                      </option>
                      <option value="Civil Engineering">
                        Civil Engineering
                      </option>
                      <option value="Electrical Engineering">
                        Electrical Engineering
                      </option>
                      <option value="Electronics and Communication Engineeringe">
                        Electronics and Communication
                        Engineering
                      </option>
                      <option value="Electrical and Electronics Engineering">
                        Electrical and Electronics
                        Engineering
                      </option>
                    </optgroup>
                    <optgroup label="B. Des.">
                      <option value="Product Design">
                        Product Design
                      </option>
                      <option value="Interaction Design">
                        Interaction Design
                      </option>
                      <option value="Interdisciplinary Design">
                        Interdisciplinary Design
                      </option>
                      <option value="Integrated and Communication Design">
                        Integrated and Communication Design
                      </option>
                    </optgroup>
                    <optgroup label="M. Tech.">
                      <option value="Data Science">
                        Data Science
                      </option>
                      <option value="Embedded Systems and IoT">
                        Embedded Systems and IoT
                      </option>
                      <option value="Automation and Robotics">
                        Automation and Robotics
                      </option>
                      <option value="Health, Safety and Environment">
                        Health, Safety and Environment
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-6 py-1.5">
                <div className="relative flex flex-row w-full mb-3 items-center space-x-4">
                  <label
                    className="uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="batch"
                  >
                    Batch
                  </label>
                  <select
                    name="batch"
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    disabled={enabled}
                    defaultValue={userData.batch}
                  >
                    <option value="*" disabled>
                      Year of Graduation
                    </option>
                    {_.range(
                      2017,
                      new Date().getFullYear() + 3,
                      1
                    ).map((option, index) => {
                      return (
                        <option value={option} key={index}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            <hr className="mt-6 mb-3 border-b-1 border-gray-300" />

            <h6 className="text-gray-500 text-base mt-4 mb-2 font-bold uppercase">
              About Me
            </h6>
            {/* Biography */}
            <div className="flex flex-wrap pt-2">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <textarea
                    type="text"
                    name="bio"
                    onChange={handleChange}
                    className={`${
                      enabled ? "bg-gray-200" : "bg-white"
                    } border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 rounded text-sm tracking-wider font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    rows="5"
                    placeholder="Something about Me......."
                    disabled={enabled}
                    defaultValue={userData.bio}
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Edit / Update Profile */}
            <button
              className={`${
                enabled
                  ? "bg-gray-200 text-gray-400 border-gray-500 cursor-default"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-50 hover:font-bold transititon duration-200 ease-in-out transform hover:scale-105 border-gray-700"
              } relative flex w-2/5 flex-col mt-5 mb-3  rounded-lg items-center m-auto focus:outline-none border-2 font-semibold  tracking-wider`}
              type="submit"
              disabled={enabled}
            >
              <div className="p-4 font-semibold uppercase text-lg break-words">
                Update Profile
              </div>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
