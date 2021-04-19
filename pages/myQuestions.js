import Navbar from "../components/Nav";
import QuestionsListPage from "../components/QuestionsListPage/QuestionsListPage";
import axios from "axios";

export default function Home({ questionData }) {
  return (
    <div className="">
      <Navbar />
      <QuestionsListPage questionData={questionData} />
    </div>
  );
}

export async function getStaticProps() {
  const questionData = await axios
    .get("http://localhost:4001/questions/username/nonit_m")
    .catch((error) => {
      console.log(error);
      return;
    });
  if (questionData === null) {
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
