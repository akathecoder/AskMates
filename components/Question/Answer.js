import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Answer = ({ data }) => {
  data = JSON.parse(data);
  const imageLink = "/assets/profilePic.jpeg";

  return (
    <>
      {/* <pre className="whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre> */}
      <div className="mr-96 px-4 grid grid-cols-9 ">
        <div className="mr-6 mt-2">
          <FontAwesomeIcon
            icon={faCaretUp}
            size="2x"
            color="gray"
            className=""
          />
          <p className="">
            {data.upVotes - data.downVotes}
          </p>
          <FontAwesomeIcon
            icon={faCaretDown}
            size="2x"
            color="gray"
            className=""
          />
        </div>
        <div className="col-span-8">
          {/* Answer Body */}
          <div className="text-justify">
            <p>{data.answerBody}</p>
          </div>

          {/* user details */}
          <div className="">
            <Link href={"/u/" + data.username}>
              <a className="mt-1 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                {/* <div className="mx-4 my-auto"> */}
                <p className="text-sm text-gray-900">
                  John Doe
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className="text-xs text-gray-600">
                  Computer Science & Engineering
                </p>
                {/* </div> */}
              </a>
            </Link>
          </div>

          {/* line below answer */}
          <hr className="mb-6 mt-2 border border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default Answer;
