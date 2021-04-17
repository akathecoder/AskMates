import Image from "next/image";
import Link from "next/link";

function SubHero() {
  return (
    <div className="bg-gray-400 bg-cover lg:px-30">
      <div className="grid lg:grid-cols-7">
        <div className="col-span-3 flex ">
          <div className="mx-auto my-20">
            <Image
              src="/assets/undraw_my_answer.svg"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="col-span-4 my-10 mx-auto lg:pr-60 align-top">
          <h1 className="text-gray-900 text-lg text-center lg:text-justify mt-20 lg:text-4xl font-medium">
            Ask Mates is a platform where students of JKLU
            can ask any question related to anything college
            related, may it be academic questions, Coding
            Problems or just some tips and tricks to survive
            college.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
