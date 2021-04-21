import Navbar from "../components/Nav";
import AnswerSet from "../components/SearchPage/SearchSection/SearchResults/AnswerSet/AnswerSet";
import LeftSidePane from "../components/LeftSideBar/LeftSidePane";
import axios from "axios";

export default function Home({ answerData }) {
  return (
    <div>
      <Navbar />
      <section className="md:mx-32 lg:mx-48 pb-20 mt-16">
        <div className="flex flex-row">
          <LeftSidePane />
          <div className="ml-96">
            {answerData ? (
              <AnswerSet answerData={answerData} />
            ) : (
              <section className="w-full">
                <h2 className="text-3xl font-bold block text-red-500">
                  You haven't answered any questions yet !.
                </h2>
              </section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const answerData = await axios
    .get("http://localhost:4001/answers/byusername", {
      params: {
        username: "nonit_m",
      },
    })
    .catch((error) => {
      console.log(error);
      return;
    });

  if (answerData.data.length === 0) {
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
