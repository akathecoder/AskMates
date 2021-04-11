import Question from "./Question";
import Answer from "./Answer";

function QuestionPage({ slug, data }) {
  // console.log(data);
  data = JSON.parse(data);

  return (
    <div className="mx-96 pr-64 font-display">
      <div className="mt-10">
        <Question data={JSON.stringify(data.question)} />
      </div>
      <div className="my-12">
        {data.answers.map((answer) => (
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
