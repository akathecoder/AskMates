import Question from "./Question";
import Answer from "./Answer";

function QuestionPage({ slug, data }) {
  // console.log(data);
  data = JSON.parse(data);

  return (
    <div className="mx-96 font-display">
      <Question data={JSON.stringify(data.question)} />
      {data.answers.map((answer) => (
        <Answer
          data={JSON.stringify(answer)}
          key={answer.answerId}
        />
      ))}
    </div>
  );
}

export default QuestionPage;
