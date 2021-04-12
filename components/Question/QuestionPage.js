import Question from "./Question";
import Answer from "./Answer";
import NoAnswer from "./NoAnswer";

function QuestionPage({ slug, questionData, answersData }) {
  // console.log(answersData);
  questionData = JSON.parse(questionData);
  answersData = JSON.parse(answersData);

  // console.log(answersData.length);

  return (
    <div className="mx-96 pr-64 font-display">
      <div className="mt-10">
        <Question data={JSON.stringify(questionData)} />
      </div>
      <div className="my-12">
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
    </div>
  );
}

export default QuestionPage;
