import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const email = () => {
  const router = useRouter();
  return (
    <div className="absolute bg-login h-full w-full bg-cover">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full md:w-2/3 xl:w-1/3 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl border-0 rounded-lg bg-gray-600">
              <div className="text-gray-100 flex-auto px-4 lg:px-10 py-10 pt-8">
                <div className="text-center mb-3 font-bold text-xl">
                  <h3>Create new password</h3>
                </div>
                <form
                  className="mt-5"
                  method="post"
                  onSubmit={(e) => {
                    e.preventDefault();
                    axios
                      .patch(
                        `${process.env.serverUrl}updateForgottenPassword`,
                        {
                          email: router.query.email,
                          newPassword:
                            e.target.newPassword.value,
                          authenticateForgotPassword:
                            router.query
                              .authenticateForgotPassword,
                        }
                      )
                      .then((res) => {
                        showPopup(
                          "Passwod updated sucessfully",
                          "green"
                        );
                        setTimeout(() => {
                          Router.push(`/login`);
                        }, 2000);
                      })
                      .catch((error) => {
                        if (error.response.status === 200) {
                          console.log(
                            "Password updated sucessfully"
                          );
                        } else {
                          console.log(error.response);
                        }
                      });
                  }}
                >
                  <div className="relative w-full mb-5">
                    <label
                      className="block text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      New Password
                    </label>
                    <div className="flex rounded text-sm shadow bg-white">
                      <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        className="flex-grow rounded focus:outline-none focus:ring-0 px-3 py-3 placeholder-gray-400 text-gray-600"
                        style={{
                          transition: "all .15s ease",
                        }}
                      />
                    </div>
                  </div>
                  <div className="relative w-full mb-5">
                    <label
                      className="block text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Confirm Password
                    </label>
                    <div className="flex rounded text-sm shadow bg-white">
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="flex-grow rounded focus:outline-none focus:ring-0 px-3 py-3 placeholder-gray-400 text-gray-600"
                        style={{
                          transition: "all .15s ease",
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <button
                      className="bg-gray-900 active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="submit"
                      style={{
                        transition: "all .15s ease",
                      }}
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default email;
