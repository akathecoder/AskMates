import Navbar from "../../components/Nav";
import QuestionsListPage from "../../components/QuestionsListPage/QuestionsListPage";
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
    .get(`${process.env.serverUrl}questions`)
    .catch((error) => {
      console.log(error);
      return;
    });
  if (questionData === null) {
    return {
      props: {
        questionData: null,
      }, // will be passed to the page component as props
    };
  }
  return {
    props: {
      questionData: JSON.stringify(questionData.data),
    },
    revalidate: 1,
  };
}
