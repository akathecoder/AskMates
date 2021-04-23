import { showPopup } from "../../Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import axios from "axios";

const imageLink1 = "/assets/profilePic.jpeg";
const imageLink = false;

export default function CardProfile() {
  const [formData, updateFormData] = useState({});
  // To store confirmNewPassword to later check with newPassword.
  const [confirmNewPass, setconfirmNewPass] = useState("");
  // Whenever there is any change in any input, it gets added to formdata.
  const handleChange = (e) => {
    e.target.name === "confirmNewPassword"
      ? setconfirmNewPass(e.target.value.trim())
      : updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
        });
  };

  // what happens when from is Submitted.
  const handleSubmit = (e) => {
    console.log(formData);
    // Sending Data to server.
    //updatePassword(formData);
    formData.newPassword === confirmNewPass
      ? showPopup("Password Matches..", "green")
      : showPopup("Confirm Password not Match !..", "red") &
        e.preventDefault();
  };

  // Call the Update Password API
  const updatePassword = async (updatePassword) => {
    await axios
      .patch(`http://localhost:4001/updatePassword`, {
        ...updatePassword,
      })
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
        {/* Profile Picture */}
        <div className="w-full flex p-4 justify-center my-8">
          <div className="text-2xl rounded-full shadow-2xl">
            {imageLink1 ? (
              <img
                src="/assets/profilePic.jpeg"
                alt="Picture of the author"
                className="overflow-hidden object-cover rounded-full w-64 h-64"
              />
            ) : (
              <FontAwesomeIcon
                icon={faUserCircle}
                size="10x"
                className="text-blue-900 opacity-75 rounded-full"
              />
            )}
          </div>
        </div>
        {/* Update Password */}
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-4 shadow-lg rounded-lg bg-gray-100 md:p-7">
          <h6 className="text-gray-600 text-base mt-2 mb-2 font-bold uppercase">
            Change Password
          </h6>
          <div className="flex flex-wrap py-2 mx-3">
            <div className="relative w-full mb-1.5">
              <input
                type="password"
                name="currentPassword"
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Current Password"
                required
              />
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-gray-300" />

          <div className="flex flex-wrap py-2 mx-3">
            <div className="relative w-full mb-3">
              <input
                type="password"
                name="newPassword"
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="New Password"
                required
                pattern="^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                minLength="8"
                title="Password must contain at-least one uppercase, lowercase, number and symbol and at-least 8 characters."
              />
            </div>
          </div>
          <div className="flex flex-wrap py-2 mx-3">
            <div className="relative w-full mb-3">
              <input
                type="password"
                name="confirmNewPassword"
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Confirm New Password"
                required
              />
            </div>
          </div>
        </div>
        {/* Change / Update Password */}
        <button
          className="relative flex w-4/5 flex-col mt-8 rounded-lg items-center m-auto focus:outline-none bg-gray-200 text-gray-700 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 hover:font-bold transititon duration-200 ease-in-out transform hover:scale-105"
          type="submit"
        >
          <div className="p-4 font-semibold uppercase text-base break-words">
            Change Password
          </div>
        </button>
      </form>
    </>
  );
}
