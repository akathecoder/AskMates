import Navbar from "../components/Nav";
import MyEditor from "../components/InputBox/MyEditor";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Router from "next/router";

function ask() {
  const [bodyData, setBodyData] = useState("");

  // console.log(bodyData);

  useEffect(() => {
    if (!Cookies.get("username")) {
      Router.push("/login");
    }
  });

  return (
    <>
      <Navbar />
      <form
        method="post"
        action={process.env.serverUrl + "question"}
        autoComplete="false"
      >
        <div className="px-44">
          <h1 className="text-3xl font-medium py-6 px-4">
            Ask a public question
          </h1>
          <div className="bg-white shadow-2xl rounded-lg py-4 px-8">
            <div className="my-4">
              <h1 className="text-xl font-medium">Title</h1>
              <p className="text-sm text-gray-600">
                Be specific and imagine you’re asking a
                question to another person
              </p>
              <input
                type="text"
                name="title"
                id=""
                autoFocus
                required={true}
                className="w-full border border-gray-300 px-4 py-2 my-2 outline-none"
              />
            </div>
            <div className="my-4">
              <h1 className="text-xl font-medium">Body</h1>
              <p className="text-sm text-gray-600">
                Include all the information someone would
                need to answer your question
              </p>
              <input
                readOnly={true}
                type="text"
                hidden={true}
                name="content"
                value={bodyData}
              />
              <MyEditor
                minHeight="20rem"
                className="my-2"
                setData={setBodyData}
              />
            </div>
            <div className="my-4">
              <h1 className="text-xl font-medium">Tags</h1>
              <p className="text-sm text-gray-600">
                Add up to 5 tags to describe what your
                question is about.
                <b> Separate your tags with space. </b>
                <br />
                Only Small characters, Numerals and hyphens
                allowed.
              </p>
              <input
                type="text"
                name="tags"
                id=""
                className="w-full border border-gray-300 px-4 py-2 my-2 outline-none"
                pattern="^[a-z]+([\s-][a-z]+){0,5}$"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-3 px-4 bg-blue-400 text-white border border-blue-400 hover:bg-blue-500 hover:shadow-2xl rounded my-6"
            >
              Submit your Question
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ask;
