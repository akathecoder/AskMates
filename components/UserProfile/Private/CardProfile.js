import { showPopup } from "../../Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const imageLink1 = "/assets/profilePic.jpeg";
const imageLink = false;

export default function CardProfile() {
  // what happens when from is Submitted.
  const handleSubmit = (e) => {
    e.preventDefault();

    // if confirm new password not matches
    if (
      e.target.newPassword.value !==
      e.target.confirmNewPassword.value
    ) {
      showPopup("Confirm Password not Match", "red");
    }
    // if the current password entered is not correct and confirm password matches..
    else {
      const message = updatePassword(
        e.target.currentPassword.value,
        e.target.newPassword.value
      ).then((val) => {
        return val;
      });
      message.then((val) => {
        if (val === "CurrentPasswordNotMatch") {
          showPopup("Current Password not Match", "red");
        }
        if (val === "PasswordChanged") {
          showPopup(
            "Password Successfully Updated",
            "green"
          );
        }
      });
    }
    e.target.currentPassword.value = "";
    e.target.newPassword.value = "";
    e.target.confirmNewPassword.value = "";
  };

  // Call the Update Password API
  const updatePassword = async (
    currentPassword,
    newPassword
  ) => {
    const result = await axios
      .patch(
        `http://localhost:4001/updatePassword`,
        {
          password: currentPassword,
          newPassword: newPassword,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          return "PasswordChanged";
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          return "CurrentPasswordNotMatch";
        } else {
          console.log(error);
        }
      });
    return result;
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
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-4 shadow-lg rounded-lg bg-gray-100 dark:bg-dark-black md:p-7">
          <h6 className="text-gray-600 dark:text-dark-text text-base mt-2 mb-2 font-bold uppercase">
            Change Password
          </h6>
          <div className="flex flex-wrap py-2 mx-3">
            <div className="relative w-full mb-1.5">
              <input
                type="password"
                name="currentPassword"
                autoComplete="new-password"
                className="border-0 px-3 py-3 placeholder-gray-400 dark:placeholder-dark-gray text-blueGray-600 dark:text-dark-text bg-white dark:bg-dark-background rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                autoComplete="new-password"
                className="border-0 px-3 py-3 placeholder-gray-400 dark:placeholder-dark-gray text-blueGray-600 dark:text-dark-text bg-white dark:bg-dark-background rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                autoComplete="new-password"
                className="border-0 px-3 py-3 placeholder-gray-400 dark:placeholder-dark-gray text-blueGray-600 dark:text-dark-text bg-white dark:bg-dark-background rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Confirm New Password"
                required
              />
            </div>
          </div>
        </div>
        {/* Change / Update Password */}
        <button
          className="relative flex w-4/5 flex-col mt-8 rounded-lg items-center m-auto focus:outline-none bg-gray-200 dark:bg-dark-black text-gray-700 dark:text-dark-text border-gray-700 dark:border-dark-background border-2 hover:bg-gray-700 hover:text-gray-50 hover:font-bold transititon duration-200 ease-in-out transform hover:scale-105"
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
