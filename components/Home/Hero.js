import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-gray-800 bg-cover lg:px-30">
      <div className="grid lg:grid-cols-7">
        <div className="col-span-4 my-auto mx-auto lg:pl-60">
          <h1 className="text-white text-4xl text-center lg:text-left mt-20 lg:text-7xl font-medium">
            Have a Question.
            <br />
            Get answers from all your collegemates
          </h1>
          <div className="flex lg:block">
            <Link href="/registration">
              <button className="px-4 py-3 my-6 mx-auto border border-white hover:bg-gray-700 hover:shadow-lg text-white text-xl">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-3 flex ">
          <div className="mx-auto">
            <Image
              src="/assets/undraw_Questions.svg"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
