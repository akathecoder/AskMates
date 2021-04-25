import {
  faEye,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import date from "date-and-time";
import Tags from "./Tags";

const Question = ({ data }) => {
  data = JSON.parse(data);

  const tags = data.tags.split(" ");
  // console.log(tags);

  const imageLink = "/assets/profilePic.jpeg";

  return (
    <>
      <div className="px-6 py-6 bg-white dark:bg-dark-black shadow-2xl">
        <div className="flex justify-between ">
          {/* user details */}
          <div className="mb-4">
            <Link href={"/u/" + data.username}>
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
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
                    className="leading-lg opacity-75"
                  />
                )}

                <div className="mx-4 my-auto">
                  <p className="text-lg text-gray-900 dark:text-dark-text">
                    {data.firstName +
                      " " +
                      (data.middleName
                        ? data.middleName + " "
                        : "") +
                      data.lastName}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-dark-gray">
                    {data.field}
                  </p>
                </div>
              </a>
            </Link>
          </div>

          <div className="inline-block my-2">
            {/* Date and Views */}
            <div className="flex flex-row items-center space-x-10 mx-6 px-2 ">
              {/* Views */}
              <div>
                <FontAwesomeIcon
                  icon={faEye}
                  size="1x"
                  className="text-gray-500 dark:text-dark-gray"
                />
                <span className="text-gray-500 dark:text-dark-gray text-sm">
                  &nbsp;{data.views}
                </span>
              </div>

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
          </div>
        </div>

        {/* Question title */}
        <h1 className="text-2xl font-bold text-black dark:text-white mb-2 mx-2 text-justify">
          {data.title}
        </h1>

        {/* Question body */}
        <h1 className="text-xl font-normal text-black dark:text-dark-text mt-2 mb-2 mx-2 text-justify">
          {parse(data.content)}
        </h1>

        {/* Tags */}
        <div className="flex gap-4">
          {tags.map((tag) => {
            return <Tags tag={tag} key={tag} />;
          })}
        </div>

        {/* line above user details */}
        {/* <hr className="mt-8 mb-1 border " /> */}

        {/* line below user details */}
        {/* <hr className="mb-8 mt-1 border " /> */}
      </div>
    </>
  );
};

export default Question;
