import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { voteUp, voteDown } from "../../utils/voteAnswers";
import { useState } from "react";
import { default as parse } from "html-react-parser";

const Answer = ({ data }) => {
  data = JSON.parse(data);
  const imageLink = "/assets/profilePic.jpeg";

  const [votes, setVotes] = useState([
    data.upVotes,
    data.downVotes,
  ]);

  // console.log(data);

  return (
    <>
      <div className="px-4 flex ">
        <div className="mr-6">
          {data.correct.toLowerCase() == "c" && (
            <FontAwesomeIcon
              icon={faCheck}
              size="2x"
              color="green"
              className="mt-2"
            />
          )}

          <div
            className="text-center cursor-pointer"
            onClick={() =>
              voteUp(data.answerId, votes, setVotes)
            }
          >
            <FontAwesomeIcon
              icon={faCaretUp}
              size="2x"
              color="gray"
            />
          </div>
          <p className="text-center dark:text-dark-text ">
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
              color="gray"
            />
          </div>
        </div>

        {/* Answer Body */}
        <div className="text-justify mt-1 mb-auto dark:text-dark-text">
          {parse(data.answerBody)}
        </div>
      </div>

      {/* user details */}
      <div className="ml-14 mt-4 mb-6">
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
                {data.firstName +
                  " " +
                  (data.middleName
                    ? data.middleName + " "
                    : "") +
                  data.lastName}
              </p>
              {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;</p> */}
              <p className="text-xs text-gray-600 dark:text-dark-gray">
                {data.field}
              </p>
            </div>
          </a>
        </Link>
      </div>
      {/* line below answer */}
      <hr className="mb-6 mt-2 border border-gray-200 dark:border-dark-gray" />
    </>
  );
};

export default Answer;
