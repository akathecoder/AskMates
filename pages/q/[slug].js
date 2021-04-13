import axios from "axios";
import Navbar from "../../components/Nav";
import QuestionPage from "../../components/Question/QuestionPage";
import QuestionFourZeroFour from "../../components/Question/404";

export default function Home({
	slug,
	questionData,
	answersData,
}) {
	// const { slug } = useRouter().query;

	// console.log(questionData);

	return (
		<>
			<Navbar />

			{questionData === null ? (
				<QuestionFourZeroFour />
			) : (
				<QuestionPage
					slug={slug}
					questionData={questionData}
					answersData={answersData}
				/>
			)}
		</>
	);
}

export async function getServerSideProps(context) {
	// console.log(context.params.slug); //gives slug

	const questionData = await axios
		.get("http://localhost:4001/question", {
			params: {
				slug: context.params.slug,
			},
		})
		.catch(err => {
			return null;
		});

	// console.log(questionData);

	if (questionData === null) {
		return {
			props: {
				slug: context.params.slug,
				questionData: null,
				answersData: null,
			}, // will be passed to the page component as props
		};
	}

	const answerData = await axios
		.get("http://localhost:4001/answers", {
			params: {
				questionId: questionData.data.questionId,
			},
		})
		.catch(err => {
			return null;
		});

	return {
		props: {
			slug: context.params.slug,
			questionData: JSON.stringify(questionData.data),
			answersData: JSON.stringify(answerData.data),
		}, // will be passed to the page component as props
	};
}
