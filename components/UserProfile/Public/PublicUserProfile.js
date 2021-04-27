import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBirthdayCake,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  getCoverImageLink,
  getProfilePicLink,
} from "../../../utils/getImage";
import date from "date-and-time";
import { useEffect, useState } from "react";

export default function PublicUserProfile({ userData }) {
  userData = JSON.parse(userData);
  if (userData.dob != null) {
    userData.dob = date.format(
      new Date(userData.dob),
      "DD MMMM YYYY"
    );
  }

  const profileImage = getProfilePicLink(userData.email);

  const [questionCount, setQuestionCount] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);

  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  );
  useEffect(() => {
    getCoverImageLink(userData.email).then((e) => {
      setCoverImage(e);
    });
  }, []);

  const getQuestionData = async () => {
    return await axios
      .get(`${process.env.serverUrl}questions/username`, {
        params: {
          username: userData.username,
        },
        withCredentials: true,
      })
      .then((questionData) => {
        return questionData.data;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          return 0;
        }
        console.log(error);
        return;
      });
  };

  const getAnswerData = async () => {
    return await axios
      .get(`${process.env.serverUrl}answers/byusername`, {
        params: {
          username: userData.username,
        },
        withCredentials: true,
      })
      .then((answerData) => {
        return answerData.data;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          return 0;
        }
        console.log(error);
        return;
      });
  };
  useEffect(() => {
    getQuestionData().then((questionData) => {
      setQuestionCount(questionData.length);
    });
    getAnswerData().then((answerData) => {
      setAnswerCount(answerData.length);
    });
  }, []);

  return (
    <section className="pb-20">
      <div className="w-full h-3/5">
        <img src={coverImage} />
      </div>
      <div className="relative flex flex-col mx-auto shadow-lg lg:w-6/12 md:w-3/5 p-7 bg-white dark:bg-dark-black -mt-32 rounded-lg">
        <div className="flex text-2xl justify-center -mt-36">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Picture of the author"
              className="object-cover rounded-full w-64 h-64"
            />
          ) : (
            <FontAwesomeIcon
              icon={faUserCircle}
              size="10x"
              className="text-displayGradientSecondary opacity-75 rounded-full bg-white dark:bg-dark-text"
            />
          )}
        </div>
        <div className="text-center px-3 p-5 text-lg tracking-wide">
          <h3 className="text-gray-700 dark:text-dark-text text-3xl font-bold font-sans tracking-wider">
            {`${userData.firstName} ${
              userData.middleName
                ? userData.middleName + ` `
                : ""
            }${userData.lastName}`}
          </h3>
          <p className="mt-3 font-sans font-medium text-gray-600 dark:text-dark-gray">
            {userData.field}
          </p>
          <p className="mt-1 font-sans font-medium text-gray-600 dark:text-dark-gray">
            {userData.degree + " - " + userData.batch}
          </p>
          <p className="mt-1 font-sans font-medium text-gray-600 dark:text-dark-gray">
            RollNo : {userData.rollNo}
          </p>
        </div>
        <div className="mx-auto pl-7 tracking-wide">
          <div className="flex flex-col">
            <p className="mt-3 pl-0.5 font-sans font-medium text-gray-600 dark:text-dark-gray">
              {userData.dob === null ? (
                ""
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faBirthdayCake}
                    size="1x"
                    className="text-displayGradientPrimary text-lg opacity-75 rounded-full"
                  />
                  &nbsp; &nbsp;
                  {userData.dob}
                </>
              )}
            </p>
            <p className="mt-2 font-sans font-medium text-gray-600 dark:text-dark-gray">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="1x"
                className="text-displayGradientPrimary text-lg rounded-full"
              />
              &nbsp; &nbsp;{userData.email}
            </p>
            <p className="mt-2 font-sans font-medium text-gray-600 dark:text-dark-gray">
              {userData.mobileNumber === null ? (
                ""
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    size="1x"
                    className="text-displayGradientPrimary opacity-75 rounded-full"
                  />
                  &nbsp; &nbsp; {userData.mobileNumber}
                </>
              )}
            </p>
          </div>
        </div>

        <div className="flex justify-center p-5 mt-3 text-gray-600 dark:text-dark-gray">
          <div className="text-center bg-displayGradientPrimaryLight bg-opacity-20 p-2 rounded-lg mr-3">
            <h2 className="text-lg font-semibold">
              {questionCount}
            </h2>
            <i>Questions Asked</i>
          </div>
          <div className="text-center bg-displayGradientPrimaryLight py-2 px-3 rounded-lg">
            <h2 className="text-lg font-semibold">
              {answerCount}
            </h2>
            <i>Answers Given</i>
          </div>
        </div>
        <hr className="my-3 lg:mx-32 md:mx-12 border-b-1 border-gray-200 dark:border-dark-gray" />
        <div className="flex justify-center py-5 md:px-20 lg:px-40 text-center text-gray-600 tracking-wider">
          <p>{userData.bio}</p>
        </div>
      </div>
    </section>
  );
}
