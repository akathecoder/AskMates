import Navbar from "../components/Nav";
import AnswerSet from "../components/SearchPage/SearchSection/SearchResults/AnswerSet/AnswerSet";
import LeftSidePane from "../components/LeftSideBar/LeftSidePane";
import axios from "axios";

export default function Home({ answerData }) {
  return (
    <div>
      <Navbar />
      {answerData ? (
        <section className="md:mx-32 lg:mx-48 pb-20 mt-16">
          <div className="flex flex-row">
            <LeftSidePane />
            <div className="ml-96">
              <AnswerSet answerData={answerData} />
            </div>
          </div>
        </section>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const answerData = await axios
    .get("http://localhost:4001/answers/byusername", {
      params: {
        username: "rg12301",
      },
    })
    .catch((error) => {
      console.log(error);
      return;
    });

  console.log(answerData);
  if (answerData === null) {
    return {
      props: {
        answerData: null,
      },
    };
  }
  return {
    props: {
      answerData: JSON.stringify(answerData.data),
    },
    revalidate: 1,
  };
}
