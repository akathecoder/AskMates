import React from "react";
import axios from "axios";
import { showPopup } from "../../components/Notification";
import Router from "next/router";
import Navbar from "../../components/Nav";

const email = () => {
  return (
    <div className="relative h-screen bg-login bg-repeat w-full">
      <Navbar />
      <div className="relative top-52">
        <div className="container mx-auto px-4">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full md:w-2/3 xl:w-1/3 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl border-0 rounded-lg bg-gray-600">
                <div className="text-gray-100 flex-auto px-4 lg:px-10 py-10 pt-8">
                  <div className="text-center mb-3 font-bold text-xl">
                    <h3>Enter email</h3>
                  </div>
                  <form
                    className="mt-3"
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      axios
                        .post(
                          `${process.env.serverUrl}authenticateForgotPassword`,
                          {
                            email: `${e.target.email.value}@jklu.edu.in`,
                          }
                        )
                        .then((res) => {
                          showPopup("Email sent", "green");
                          Router.push(
                            `/forgotPassword/linkSendMessage?email=${e.target.email.value}@jklu.edu.in`
                          );
                        })
                        .catch((error) => {
                          console.error(error);
                          if (
                            error.response.status === 404
                          ) {
                            showPopup(
                              "Email not registered",
                              "red"
                            );
                          }
                        });
                    }}
                  >
                    <div className="relative w-full mb-5">
                      <label
                        className="block text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <div className="flex rounded text-sm shadow bg-white">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="flex-grow rounded focus:outline-none focus:ring-0 px-3 py-3 placeholder-gray-400 text-gray-600"
                          style={{
                            transition: "all .15s ease",
                          }}
                        ></input>
                        <div className="text-center px-5 py-3 font-semibold text-gray-600">
                          @jklu.edu.in
                        </div>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-500 ">
                      <div className="text-center mt-8 mb-10">
                        <button
                          className="bg-gray-900 active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{
                            transition: "all .15s ease",
                          }}
                        >
                          Send Email
                        </button>
                      </div>
                      <div className="text-center w-full">
                        <div className="text-center mb-3 font-bold text-xl pt-10">
                          <h3>Sign in with credentials</h3>
                        </div>
                        <a href="/login">
                          <p
                            className="bg-gray-900 active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full mt-2"
                            type="button"
                            style={{
                              transition: "all .15s ease",
                            }}
                          >
                            Sign In
                          </p>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default email;
