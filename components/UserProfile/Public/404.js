import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="text-center bg-question404 bg-no-repeat bg-center">
        <h1 className="text-9xl mt-7">404</h1>
        <h3 className="text-6xl mt-96">Looks like you are lost</h3>
        <p className="text-xl mt-4">
          the USER you are looking for not found !..
        </p>
        <div className="inline-block p-8">
          <div className="bg-green-500 rounded-sm">
            <Link href="/" className="my-6 p-4">
              <button className=" text-2xl mx-6 my-3">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
