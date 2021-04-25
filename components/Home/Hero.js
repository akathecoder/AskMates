import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="bg-cover pb-20 bg-hero_light1 dark:bg-hero_dark1">
        <div className="flex lg:flex-row md:flex-col space-x-20">
          <div className="flex flex-col my-auto lg:pl-56">
            <h1 className="text-gray-800 dark:text-gray-50 text-4xl lg:text-left mt-20 lg:text-7xl font-medium">
              Have a Question.
              <br />
              Get answers from all
              <br />
              your collegemates
            </h1>
            <div className="">
              <Link href="/registration">
                <button className="px-4 py-3 my-6 mx-auto text-gray-700 text-xl border hover:shadow-xl border-gray-700 hover:bg-gray-700 hover:text-gray-50 dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-700 dark:text-gray-50">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="pr-40">
            <div className="mx-auto">
              <Image
                src="/assets/undraw_Questions.svg"
                width={700}
                height={800}
              />
            </div>
          </div>
        </div>
        <div
          id="about"
          className="flex lg:flex-cols md:flex-row space-x-14 py-10"
        >
          <div className="pl-60">
            <div className="mx-auto">
              <Image
                src="/assets/undraw_my_answer.svg"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="my-auto mx-auto pr-56 w-6/12 pl-10">
            <p className="text-gray-600 dark:text-gray-50 text-4xl text-center font-medium leading-snug break-words">
              Ask Mates is a platform where students of JKLU
              can ask any question related to anything
              college related, may it be academic questions,
              Coding Problems or just some tips and tricks
              to survive college.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
