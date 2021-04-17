import Question from "./Question";
import Answer from "./Answer";
import NoAnswer from "./NoAnswer";
import MyEditor from "../InputBox/MyEditor";

function QuestionPage({ slug, questionData, answersData }) {
  // console.log(answersData);
  questionData = JSON.parse(questionData);
  answersData = JSON.parse(answersData);

  // console.log(answersData);

  return (
    <div className="mx-96 pr-64 font-display">
      <div className="mt-10">
        <Question data={JSON.stringify(questionData)} />
      </div>
      <div className="mb-6 mt-12">
        {answersData.length ? (
          answersData.map((answer) => (
            <Answer
              data={JSON.stringify(answer)}
              key={answer.answerId}
            />
          ))
        ) : (
          <NoAnswer />
        )}
      </div>
      <div className="mt-6 px-2">
        <h1 className="text-xl mb-4 px-1 font-medium ">
          Your Answer
        </h1>
        <MyEditor minHeight="12rem" />
        <div className="flex justify-end">
          <button className="border hover:bg-blue-500 bg-blue-600 font-medium text-white hover:shadow-lg py-2 px-4 rounded-sm my-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
