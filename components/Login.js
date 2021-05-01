import axios from "axios";
import Cookies from "js-cookie";

import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    const router = useRouter();

    e.preventDefault();

    axios
      .post(
        process.env.serverUrl + "authenticate",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        Cookies.set("username", result.data.username);
        Cookies.set("auth", result.data.auth);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally((r) => {
        router.push("/q/");
      });
  }

  return (
    <div className="relative top-44">
      <div className="container mx-auto px-4">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full md:w-2/3 xl:w-1/3 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl border-0 rounded-lg bg-gray-600">
              <div className="text-gray-100 flex-auto px-4 lg:px-10 py-10 pt-8">
                <div className="text-center mb-3 font-bold text-xl">
                  <h3>Sign in with credentials</h3>
                </div>
                <form className="mt-8" onSubmit={login}>
                  <div className="relative w-full mb-5">
                    <label
                      className="block text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <div className="flex rounded text-sm shadow bg-white">
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="flex-grow rounded focus:outline-none focus:ring-0 px-3 py-3 placeholder-gray-400 text-gray-600"
                        style={{
                          transition: "all .15s ease",
                        }}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="relative w-full mb-5">
                    <label
                      className="block text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                      placeholder="Password"
                      style={{
                        transition: "all .15s ease",
                      }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
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
                        Sign In
                      </button>
                      <div className="flex flex-col justify-center items-center mt-1 w-full">
                        <a
                          href="/forgotPassword/email"
                          className="text-gray-100 tracking-wider font-semibold hover:underline"
                        >
                          <small>Forgot password?</small>
                        </a>
                      </div>
                    </div>
                    <div className="text-center w-full">
                      <div className="text-center mb-3 font-bold text-xl pt-10">
                        <h3>Create a new acount</h3>
                      </div>
                      <a href="/registration">
                        <p
                          className="bg-gray-900 active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full mt-2"
                          type="submit"
                          style={{
                            transition: "all .15s ease",
                          }}
                        >
                          Sign Up
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
  );
};

export default Login;
