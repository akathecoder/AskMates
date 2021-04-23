import Navbar from "../components/Nav";
import QuestionsListPage from "../components/QuestionsListPage/QuestionsListPage";
import LeftSidePane from "../components/LeftSideBar/LeftSidePane";
import axios from "axios";
import UserFourZeroFour from "../components/UserProfile/Public/404";

export default function Home({ questionData }) {
  return (
    <div>
      <Navbar />
      {questionData === "zeroAnswers" ||
      questionData === null ? (
        <>
          <section className="md:mx-32 lg:mx-48 pb-20 mt-16">
            <div className="flex flex-row">
              <LeftSidePane />
              <div className="ml-96">
                <section className="w-full items-center">
                  <h2 className="text-3xl font-bold block text-red-500">
                    You haven't asked any questions yet !.
                  </h2>
                </section>
              </div>
            </div>
          </section>
        </>
      ) : questionData === "notLoggedIn" ? (
        <UserFourZeroFour
          message="You need to LogIn to see your Questions !.."
          path={`/login`}
          buttonName="LOGIN"
        />
      ) : (
        <QuestionsListPage questionData={questionData} />
      )}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const questionData = await axios
    .get("http://localhost:4001/questions/username", {
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
  console.log(questionData);
  if (questionData === "zeroAnswers") {
    return {
      props: {
        questionData: "zeroAnswers",
      },
    };
  }
  if (
    questionData === "notLoggedIn" ||
    questionData === null
  ) {
    return {
      props: {
        questionData: "notLoggedIn",
      },
    };
  }
  return {
    props: {
      questionData: JSON.stringify(questionData.data),
    },
  };
}
