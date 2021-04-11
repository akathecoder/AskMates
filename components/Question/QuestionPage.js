import Question from "./Question";
import Answer from "./Answer";

function QuestionPage({ slug, questionData, answersData }) {
  // console.log(answersData);
  questionData = JSON.parse(questionData);
  answersData = JSON.parse(answersData);

  return (
    <div className="mx-96 pr-64 font-display">
      <div className="mt-10">
        <Question data={JSON.stringify(questionData)} />
      </div>
      <div className="my-12">
        {answersData.map((answer) => (
          <Answer
            data={JSON.stringify(answer)}
            key={answer.answerId}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionPage;
