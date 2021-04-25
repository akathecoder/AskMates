import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import _ from "lodash";
// export default function Page() {

//   return <span onClick={() => router.push('/about')}>Click me</span>

const TagList = ({ tagname }) => {
  const router = useRouter();
  const url = `/search/${_.snakeCase(tagname)}`;
  return (
    <div
      className="flex flex-row justify-start items-start space-x-2 rounded-sm bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-danger cursor-pointer text-left break-normal md:break-word text-gray-700 py-2 pl-16 pr-6 leading-tight font-semibold hover:text-white group"
      onClick={() => {
        router.push(url);
      }}
    >
      {/* <span className="text-sm font-normal"># </span> */}
      <FontAwesomeIcon
        icon={faHashtag}
        size="1x"
        className="text-displayGradientPrimary group-hover:text-white dark:group-hover:text-white text-base pt-1"
      />
      <p className="dark:text-dark-gray dark:hover:text-white">
        {tagname}
      </p>
    </div>
  );
};

export default TagList;
