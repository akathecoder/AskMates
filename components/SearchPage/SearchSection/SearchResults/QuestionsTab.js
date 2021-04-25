import QuestionSet from "../../../QuestionsListPage/QuestionSet/QuestionSet";

const QuestionsTab = ({
  questionData,
  questionsFound,
  searchTerm,
  showAnswers,
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-lg font-bold">
      {questionsFound ? (
        <>
          <p className="text-gray-600 dark:text-dark-text">
            Showing Questions for&nbsp;
            <span className="text-white bg-displayGradientPrimary text-xl">
              &nbsp;
              {searchTerm}
              &nbsp;
            </span>
          </p>
          <p className="text-gray-600 dark:text-dark-text">
            Found&nbsp;
            <span className="text-white bg-displayGradientPrimary text-xl">
              &nbsp;
              {Object.keys(questionData).length}
              &nbsp;
            </span>
            &nbsp;results
          </p>
          <p
            className="w-full text-right hover:underline text-base text-displayGradientPrimary cursor-pointer"
            onClick={showAnswers}
          >
            Show Answers
          </p>
          <QuestionSet
            questionData={JSON.stringify(questionData)}
          />
        </>
      ) : questionData ? (
        <>
          <p className="text-red-500">No Match Found</p>
          <p
            className="w-full text-right hover:underline text-base text-displayGradientPrimary cursor-pointer"
            onClick={showAnswers}
          >
            Show Answers
          </p>
        </>
      ) : (
        <p className="dark:text-dark-text">
          Start searching...
        </p>
      )}
    </div>
  );
};

export default QuestionsTab;
