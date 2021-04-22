import Link from "next/link";

export default function Custom404({
  message,
  path,
  buttonName,
}) {
  return (
    <>
      <div className="text-center bg-question404 bg-no-repeat bg-center">
        <h1 className="text-7xl mt-7">404</h1>
        <h3 className="text-3xl mt-80 pt-20">
          Looks like you are lost
        </h3>
        <p className="text-4xl font-semibold mt-1">
          {message}
        </p>
        <div className="inline-block p-5">
          <div className="bg-green-500 rounded-sm">
            <Link href={path} className="my-6 p-4">
              <button className=" text-2xl mx-6 my-3">
                {buttonName}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
