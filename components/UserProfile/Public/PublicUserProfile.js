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

const imageLink1 = "/assets/profilePic.jpeg";
const imageLink = false;

export default function PublicUserProfile({ userData }) {
  userData = JSON.parse(userData);
  if (userData.dob != null) {
    userData.dob = new Date(userData.dob)
      .toGMTString()
      .substring(5, 17);
  }

  const questionData = async () => {
    await axios
      .get(
        "http://localhost:4001/questions/username/rg12301"
      )
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  const answerData = async () => {
    await axios
      .get("http://localhost:4001/answers/byusername", {
        params: {
          username: "rg12301",
        },
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };
  let questionCount = 0;
  let answerCount = 0;
  console.log(questionData, answerData);
  // const answerCount = answerData.data.length;

  // questionData === undefined
  //   ? (questionCount = 0)
  //   : (questionCount = questionData.data.length);

  return (
    <section className="pb-20">
      <div className="w-full h-3/5">
        <img src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80" />
      </div>
      <div className="relative flex flex-col mx-auto shadow-lg lg:w-6/12 md:w-3/5 p-7 bg-white -mt-32 rounded-lg">
        <div className="flex text-2xl justify-center -mt-36">
          {imageLink1 ? (
            <img
              src="/assets/profilePic.jpeg"
              alt="Picture of the author"
              className="object-cover rounded-full w-64 h-64"
            />
          ) : (
            <FontAwesomeIcon
              icon={faUserCircle}
              size="10x"
              className="text-blue-900 opacity-75 rounded-full bg-white"
            />
          )}
        </div>
        <div className="text-center px-3 p-5">
          <h3 className="text-gray-700 text-3xl font-bold font-sans tracking-wider">
            {`${userData.firstName} ${
              userData.middleName
                ? userData.middleName + ` `
                : ""
            }${userData.lastName}`}
          </h3>
          <p className="mt-3 font-sans font-medium text-gray-600">
            {userData.field}
          </p>
          <p className="mt-1 font-sans font-medium text-gray-600">
            {userData.degree + " - " + userData.batch}
          </p>
          <p className="mt-1 font-sans text-gray-500">
            RollNo : {userData.rollNo}
          </p>
        </div>
        <div className="mx-auto pl-7">
          <div className="flex flex-col">
            <p className="mt-3 pl-0.5 font-sans font-medium text-gray-500">
              {userData.dob === null ? (
                ""
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faBirthdayCake}
                    size="1x"
                    className="text-blue-700 text-lg opacity-75 rounded-full"
                  />
                  &nbsp; &nbsp;
                  {userData.dob}
                </>
              )}
            </p>
            <p className="mt-2 font-sans font-medium text-gray-600">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="1x"
                className="text-blue-700 text-lg rounded-full"
              />
              &nbsp; &nbsp;{userData.email}
            </p>
            <p className="mt-2 font-sans font-medium text-gray-600">
              {userData.mobileNumber === null ? (
                ""
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    size="1x"
                    className="text-blue-700 opacity-75 rounded-full"
                  />
                  &nbsp; &nbsp; {userData.mobileNumber}
                </>
              )}
            </p>
          </div>
        </div>

        <div className="flex justify-center p-5 mt-3 text-gray-600">
          <div className="text-center bg-blue-100 p-2 rounded-lg mr-3">
            <h2 className="text-lg font-semibold">
              {questionCount}
            </h2>
            <i>Questions Asked</i>
          </div>
          <div className="text-center bg-blue-100 py-2 px-3 rounded-lg">
            <h2 className="text-lg font-semibold">
              {answerCount}
            </h2>
            <i>Answers Given</i>
          </div>
        </div>
        <hr className="my-3 lg:mx-32 md:mx-12 border-b-1 border-gray-200" />
        <div className="flex justify-center py-5 md:px-20 lg:px-40 text-center text-gray-600">
          <p>{userData.bio}</p>
          {/* <p>
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen
            book.
          </p> */}
        </div>
      </div>
    </section>
  );
}
