import Question from "./Question.js";
const QuestionSet = ({ questionData }) => {
  questionData = JSON.parse(questionData);
  const questionSet = [];
  for (const [_key, value] of Object.entries(
    questionData
  )) {
    questionSet.push(value);
  }
  const mapQuestion = questionSet.map((question) => {
    return (
      <Question
        key={question.questionId}
        question={question}
      />
    );
  });
  return (
    <section>
      <h2 className="text-3xl dark:text-white font-bold block">
        Questions
      </h2>
      {mapQuestion}
    </section>
  );
};

export default QuestionSet;
