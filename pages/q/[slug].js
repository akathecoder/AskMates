import axios from "axios";
import Navbar from "../../components/Nav";
import QuestionPage from "../../components/Question/QuestionPage";
import QuestionFourZeroFour from "../../components/Question/404";
import increaseViews from "../../utils/increaseViews";

export default function Home({
  slug,
  questionData,
  answersData,
}) {
  return (
    <>
      <Navbar />

      {questionData === null ? (
        <QuestionFourZeroFour />
      ) : (
        <QuestionPage
          slug={slug}
          questionData={questionData}
          answersData={answersData}
        />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const questionData = await axios
    .get(`${process.env.serverUrl}question`, {
      params: {
        slug: context.params.slug,
      },
    })
    .catch((err) => {
      return null;
    });

  if (questionData === null) {
    return {
      props: {
        slug: context.params.slug,
        questionData: null,
        answersData: null,
      }, // will be passed to the page component as props
    };
  }
  increaseViews(questionData.data.slug);

  const answerData = await axios
    .get(`${process.env.serverUrl}answers/byquestionid/`, {
      params: {
        questionId: questionData.data.questionId,
      },
    })
    .catch((err) => {
      return null;
    });

  return {
    props: {
      slug: context.params.slug,
      questionData: JSON.stringify(questionData.data),
      answersData: JSON.stringify(answerData.data),
    }, // will be passed to the page component as props
  };
}
