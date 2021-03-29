const Login = () => {
  return (
    <div className="absolute bg-login h-full w-full bg-cover">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full md:w-2/3 xl:w-1/3 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl border-0 rounded-lg bg-gray-600">
              <div className="text-gray-100 flex-auto px-4 lg:px-10 py-10 pt-8">
                <div className="text-center mb-3 font-bold text-xl">
                  <h3>Sign in with credentials</h3>
                </div>
                <form className="mt-8">
                  <div className="relative w-full mb-5">
                    <label
                      className="block text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <div className="flex rounded text-sm shadow bg-white">
                      <input
                        type="email"
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

                  <div className="relative w-full mb-5">
                    <label
                      className="block text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring-0 w-full"
                      placeholder="Password"
                      style={{
                        transition: "all .15s ease",
                      }}
                    />
                  </div>
                  <div className="text-center mt-8">
                    <button
                      className="bg-gray-900 active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="button"
                      style={{
                        transition: "all .15s ease",
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="flex justify-center mt-2">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-100"
                    >
                      <small>Forgot password?</small>
                    </a>
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
