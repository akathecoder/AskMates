import Navbar from "../../components/Nav";
import QuestionsListPage from "../../components/QuestionsListPage/QuestionsListPage";
import axios from "axios";

export default function Home({ questionData }) {
	return (
		<div className="">
			<Navbar />
			<QuestionsListPage questionData={questionData} />
		</div>
	);
}

export async function getServerSideProps() {
	const questionData = await axios
		.get("http://localhost:4001/questions")
		.catch(error => {
			console.log(error);
			return;
		});
	if (questionData === null) {
		return {
			props: {
				questionData: null,
			}, // will be passed to the page component as props
		};
	}
	// const answerData = questionData.map(question=>{
	// 	const answer = await axios.get(
	// 		"http://localhost:4001/answers/byquestionid/",
	// 		{
	// 			params: {
	// 				questionId: question.questionId,
	// 			},
	// 		}
	// 	);
	// 	return answer
	// })
	return {
		props: {
			questionData: JSON.stringify(questionData.data),
		},
	};
}
