import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import {
  voteUp,
  voteDown,
} from "../../../../../utils/voteAnswers";
import date from "date-and-time";
import { useState } from "react";
import parse from "html-react-parser";

const Answer = ({ data }) => {
  data = JSON.parse(data);
  const imageLink = "/assets/profilePic.jpeg";

  const [votes, setVotes] = useState([
    data.upVotes,
    data.downVotes,
  ]);

  return (
    <div className="my-6 pl-5 pr-10 py-6 bg-white dark:bg-dark-black shadow-lg rounded-lg font-normal w-full">
      <div className="grid grid-cols-10 gap-x-5 place-content-center justify-items-center">
        <div className="col-span-1 mt-1 flex flex-col justify-center items-center space-y-3">
          {data.correct.toLowerCase() == "c" && (
            <FontAwesomeIcon
              icon={faCheck}
              size="2x"
              className="mt-2 text-green-500"
            />
          )}
          <div>
            <div
              className="text-center cursor-pointer"
              onClick={() =>
                voteUp(data.answerId, votes, setVotes)
              }
            >
              <FontAwesomeIcon
                icon={faCaretUp}
                size="2x"
                className="text-displayGradientPrimary hover:text-displayGradientDanger"
              />
            </div>
            <p className="text-center dark:text-dark-gray">
              {votes[0] - votes[1]}
            </p>

            <div
              className="text-center cursor-pointer"
              onClick={() =>
                voteDown(data.answerId, votes, setVotes)
              }
            >
              <FontAwesomeIcon
                icon={faCaretDown}
                size="2x"
                className="text-displayGradientPrimary hover:text-displayGradientDanger"
              />
            </div>
          </div>
        </div>

        {/* Answer Body */}
        <div className="text-left mt-1 col-start-2 col-end-11 flex flex-col justify-between content-between w-full">
          <div className="flex flex-row-reverse items-center mb-6 pr-2">
            {/* Date */}
            <p className="text-sm text-gray-500 dark:text-dark-gray font-semibold">
              {date.format(
                date.parse(
                  new String(data.doc).substring(0, 10),
                  "YYYY-MM-DD"
                ),
                "ddd, MMM DD YYYY"
              )}
            </p>
          </div>
          <Link href={`/q/${data.slug}`}>
            <p className="cursor-pointer dark:text-dark-text">
              {parse(data.answerBody)}
            </p>
          </Link>

          {/* user details */}
          <div className="mt-6 flex flex-row-reverse">
            <Link href={"/u/" + data.username}>
              <a className="mt-1 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                {imageLink ? (
                  <Image
                    src="/assets/profilePic.jpeg"
                    alt="Picture of the author"
                    className="rounded-full overflow-hidden"
                    width={40}
                    height={40}
                    objectFit="cover"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    size="4x"
                    className="leading-lg opacity-75"
                  />
                )}
                <div className="mx-4 my-auto">
                  <p className="text-sm text-gray-900 dark:text-dark-text">
                    {data.firstName + " " + data.lastName}
                  </p>
                  {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;</p> */}
                  <p className="text-xs text-gray-600 dark:text-dark-gray">
                    Computer Science & Engineering
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
