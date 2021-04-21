import Navbar from "../components/Nav";
import QuestionsListPage from "../components/QuestionsListPage/QuestionsListPage";
import LeftSidePane from "../components/LeftSideBar/LeftSidePane";
import axios from "axios";

export default function Home({ questionData }) {
  return (
    <div className="">
      <Navbar />
      {questionData ? (
        <QuestionsListPage questionData={questionData} />
      ) : (
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
      )}
    </div>
  );
}

export async function getStaticProps() {
  const questionData = await axios
    .get("http://localhost:4001/questions/username/nonit_mittal")
    .catch((error) => {
      console.log(error);
      return;
    });
  console.log(questionData);
  if (questionData === undefined) {
    return {
      props: {
        questionData: null,
      },
    };
  }
  return {
    props: {
      questionData: JSON.stringify(questionData.data),
    },
    revalidate: 1,
  };
}
