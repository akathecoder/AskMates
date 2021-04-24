import AnswerSet from "./AnswerSet/AnswerSet";

const AnswersTab = ({
  answerData,
  answersFound,
  searchTerm,
  showQuestions,
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-lg font-bold">
      {answersFound ? (
        <>
          <p className="text-gray-600">
            Showing Answers for&nbsp;
            <span className="text-white bg-displayGradientPrimary text-xl">
              &nbsp;
              {searchTerm}
              &nbsp;
            </span>
          </p>
          <p className="text-gray-600">
            Found&nbsp;
            <span className="text-white bg-displayGradientPrimary text-xl">
              &nbsp;
              {Object.keys(answerData).length}
              &nbsp;
            </span>
            &nbsp;results
          </p>
          <p
            className="w-full text-right hover:underline text-base text-displayGradientPrimary cursor-pointer"
            onClick={showQuestions}
          >
            Show Questions
          </p>
          <AnswerSet
            answerData={JSON.stringify(answerData)}
          />
        </>
      ) : answerData ? (
        <>
          <p className="text-red-500">No Match Found</p>
          <p
            className="w-full text-right hover:underline text-base text-displayGradientPrimary cursor-pointer"
            onClick={showQuestions}
          >
            Show Questions
          </p>
        </>
      ) : (
        <p>Start searching...</p>
      )}
    </div>
  );
};

export default AnswersTab;
