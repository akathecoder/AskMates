import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEye,
  faEdit,
  faShare,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import date from "date-and-time";
import { useState } from "react";
import { showPopup } from "../../Notification";
import parse from "html-react-parser";

const Question = ({ question }) => {
  const imageLink = "/assets/profilePic.jpeg";
  const [share, setShare] = useState(true);
  return (
    // Question Card
    <div className="my-6 px-10 py-6 bg-white shadow-2xl rounded-lg">
      <div className="grid grid-cols-10 gap-x-5 items-center">
        {/* user details */}
        <div className="col-span-1 mt-7">
          <Link href={"/u/" + question.username}>
            <a className="mt-1 flex flex-col items-center space-y-3 font-medium group opacity-100 hover:opacity-75">
              {imageLink ? (
                <Image
                  src="/assets/profilePic.jpeg"
                  alt="Picture of the author"
                  className="rounded-full overflow-hidden"
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="4x"
                  className="leading-lg opacity-100"
                />
              )}
              <div className="my-auto text-center">
                <p className="text-sm text-gray-700">
                  {question.firstName +
                    " " +
                    question.lastName}
                </p>
                <p className="text-xs text-gray-500">
                  {question.field}
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex flex-col  justify-center col-start-2 col-end-11">
          {/* Date and Views */}
          <div className="flex flex-row justify-end items-center space-x-10 mx-6 px-2 w-full">
            {/* Views */}
            <div>
              <FontAwesomeIcon
                icon={faEye}
                size="1x"
                className="text-gray-500"
              />
              <span className="text-gray-500 text-sm">
                &nbsp;{question.views}
              </span>
            </div>

            {/* Date */}
            <p className="text-sm text-gray-500 font-semibold">
              {date.format(
                date.parse(
                  new String(question.doc).substring(0, 10),
                  "YYYY-MM-DD"
                ),
                "ddd, MMM DD YYYY"
              )}
            </p>
          </div>

          {/* Question */}
          <div>
            <Link href={`/q/${question.slug}`}>
              <div className="cursor-pointer">
                {/* Question title */}
                <h3 className="text-lg font-bold text-black mb-2 mx-2 text-justify">
                  {question.title}
                </h3>

                {/* Question body */}
                <p className="font-normal text-gray-700 mt-2 mb-2 mx-2 text-justify">
                  {parse(question.content)}
                </p>
              </div>
            </Link>

            {/* Action Buttons and User Details */}
            <div className="mx-2 mt-5 flex flex-row justify-between items-center">
              {/* Answer and Share Buttons */}
              <div className="flex flex-row justify-evenly space-x-7">
                <Link
                  href={`/q/${question.slug}#answer-section`}
                >
                  <div className="cursor-pointer group">
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="1x"
                      className="text-displayGradientDanger group-hover:text-displayGradientPrimary"
                    />
                    <span className="text-displayGradientDanger group-hover:text-displayGradientPrimary font-bold">
                      &nbsp;Answer
                    </span>
                  </div>
                </Link>
                {share ? (
                  <div
                    className="cursor-pointer group"
                    onClick={() => {
                      setShare(!share);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      size="1x"
                      className="text-displayGradientDanger group-hover:text-displayGradientPrimary"
                    />
                    <span className="text-displayGradientDanger group-hover:text-displayGradientPrimary font-bold">
                      &nbsp;Share
                    </span>
                  </div>
                ) : (
                  <div
                    className="cursor-pointer group"
                    onClick={() => {
                      setShare(!share);
                      navigator.clipboard.writeText(
                        `${window.location.href}/${question.slug}`
                      );
                      showPopup("URL Copied!", "green");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCopy}
                      size="1x"
                      className="text-green-500 group-hover:text-gray-600"
                    />
                    <span className="text-green-500 group-hover:text-gray-600 font-bold">
                      &nbsp;Copy URL
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
