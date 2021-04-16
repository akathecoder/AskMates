import Navbar from "../components/Nav";
import MyEditor from "../components/InputBox/MyEditor";

function ask() {
  return (
    <>
      <Navbar />
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
              name=""
              id=""
              className="w-full border border-gray-300 px-4 py-2 my-2 outline-none"
            />
          </div>
          <div className="my-4">
            <h1 className="text-xl font-medium">Body</h1>
            <p className="text-sm text-gray-600">
              Include all the information someone would need
              to answer your question
            </p>
            <MyEditor minHeight="20rem" className="my-2" />
          </div>
          <div className="my-4">
            <h1 className="text-xl font-medium">Tags</h1>
            <p className="text-sm text-gray-600">
              Add up to 5 tags to describe what your
              question is about.
              <b> Separate your tags with ';'</b>
            </p>
            <input
              type="text"
              name=""
              id=""
              className="w-full border border-gray-300 px-4 py-2 my-2 outline-none"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="py-3 px-4 bg-blue-400 text-white border border-blue-400 hover:bg-blue-500 hover:shadow-2xl rounded my-6">
            Submit your Question
          </button>
        </div>
      </div>
    </>
  );
}

export default ask;
