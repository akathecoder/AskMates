import _ from "lodash";
import { useState } from "react";
import AnswersTab from "./AnswersTab";
import QuestionsTab from "./QuestionsTab";
const SearchResults = ({ searchResult, searchTerm }) => {
	const {
		questionData,
		answerData,
		questionsFound,
		answersFound,
		isLoading,
	} = searchResult;
	const [tab, setTab] = useState(true);
	const handleChangeTab = () => {
		setTab(!tab);
	};

	return (
		<>
			{tab ? (
				<QuestionsTab
					questionData={questionData}
					questionsFound={questionsFound}
					searchTerm={searchTerm}
					showAnswers={handleChangeTab}
				/>
			) : (
				<AnswersTab
					answerData={answerData}
					answersFound={answersFound}
					searchTerm={searchTerm}
					showQuestions={handleChangeTab}
				/>
			)}
		</>
	);
};

export default SearchResults;
