import Question from "./Question";

function QuestionPage({ slug, data }) {
  // console.log(data);
  data = JSON.parse(data);

  return (
    <div className="mx-96 font-display">
      <Question data={JSON.stringify(data.question)} />
    </div>
  );
}

export default QuestionPage;
