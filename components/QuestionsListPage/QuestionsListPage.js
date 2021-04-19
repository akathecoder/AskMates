import LeftSidePane from "../LeftSideBar/LeftSidePane";
import QuestionSet from "./QuestionSet/QuestionSet";

const QuestionsListPage = ({ questionData }) => {
	return (
		<section className="md:mx-32 lg:mx-48 pb-20 mt-16">
			<div className="flex flex-row">
				<LeftSidePane />
				<div className="ml-96">
					<QuestionSet questionData={questionData} />
				</div>
			</div>
		</section>
	);
};

export default QuestionsListPage;
