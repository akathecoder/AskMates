import Answer from "./Answer";

const AnswerSet = ({ answerData }) => {
	answerData = JSON.parse(answerData);
	const answerSet = [];
	for (const [_key, value] of Object.entries(answerData)) {
		answerSet.push(value);
	}
	const mapAnswers = answerSet.map(answer => {
		return (
			<Answer
				key={answer.answerId}
				data={JSON.stringify(answer)}
			/>
		);
	});
	return (
		<section>
			<h2 className="text-3xl font-bold block">Answers</h2>
			{mapAnswers}
		</section>
	);
};

export default AnswerSet;
