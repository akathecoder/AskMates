import Navbar from "../components/Nav";
import AnswerSet from "../components/SearchPage/SearchSection/SearchResults/AnswerSet/AnswerSet";
import LeftSidePane from "../components/LeftSideBar/LeftSidePane";
import UserFourZeroFour from "../components/UserProfile/Public/404";
import axios from "axios";

export default function Home({ answerData }) {
  return (
    <div>
      <Navbar />
      {answerData === "zeroAnswers" ||
      answerData === null ? (
        <>
          <section className="md:mx-32 lg:mx-48 pb-20 mt-16">
            <div className="flex flex-row">
              <LeftSidePane />
              <div className="ml-96">
                <section className="w-full">
                  <h2 className="text-3xl font-bold block text-red-500">
                    You haven't answered any answers yet !.
                  </h2>
                </section>
              </div>
            </div>
          </section>
        </>
      ) : answerData === "notLoggedIn" ? (
        <UserFourZeroFour
          message="You need to LogIn to see your Answers !.."
          path={`/login`}
          buttonName="LOGIN"
        />
      ) : (
        <section className="md:mx-32 lg:mx-48 pb-20 mt-16">
          <div className="flex flex-row">
            <LeftSidePane />
            <div className="ml-96 w-full">
              <AnswerSet answerData={answerData} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const answerData = await axios
    .get(`${process.env.serverUrl}answers/byusername`, {
      withCredentials: true,
      headers: ctx.req.headers.cookie
        ? { cookie: ctx.req.headers.cookie }
        : undefined,
    })
    .catch((error) => {
      if (error.response.status === 401) {
        return "notLoggedIn";
      }
      if (error.response.status === 404) {
        return "zeroAnswers";
      } else {
        console.log(error.response);
        return null;
      }
    });
  if (answerData === "zeroAnswers") {
    return {
      props: {
        answerData: "zeroAnswers",
      },
    };
  }
  if (answerData === "notLoggedIn" || answerData === null) {
    return {
      props: {
        answerData: "notLoggedIn",
      },
    };
  }
  return {
    props: {
      answerData: JSON.stringify(answerData.data),
    },
  };
}
