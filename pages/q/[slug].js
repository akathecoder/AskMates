import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";
import QuestionPage from "../../components/Question/QuestionPage";

export default function Home({
  slug,
  questionData,
  answersData,
}) {
  // const { slug } = useRouter().query;

  // console.log(questionData);

  return (
    <>
      <Navbar />
      <QuestionPage
        slug={slug}
        questionData={questionData}
        answersData={answersData}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log(context.params.slug); //gives slug

  const questionData = await axios.get(
    "http://localhost:4001/question",
    {
      params: {
        slug: context.params.slug,
      },
    }
  );

  const answerData = await axios.get(
    "http://localhost:4001/answers",
    {
      params: {
        questionId: questionData.data.questionId,
      },
    }
  );

  // console.log(answerData.data);

  return {
    props: {
      slug: context.params.slug,
      questionData: JSON.stringify(questionData.data),
      answersData: JSON.stringify(answerData.data),
    }, // will be passed to the page component as props
  };
}
