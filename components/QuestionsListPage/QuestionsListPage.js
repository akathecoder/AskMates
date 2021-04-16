import LeftSidePane from "../LeftSideBar/LeftSidePane";
import QuestionSet from "./QuestionSet/QuestionSet";

const QuestionsListPage = ({ questionData }) => {
	return (
		<section className="md:mx-32 lg:mx-48 pb-20">
			<div className="fixed top-0 w-full h-40 bg-white z-10"></div>
			<div className="flex flex-row">
				<LeftSidePane />
				<QuestionSet questionData={questionData} />
			</div>
		</section>
	);
};

export default QuestionsListPage;
