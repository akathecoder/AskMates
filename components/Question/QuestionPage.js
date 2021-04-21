import Question from "./Question";
import Answer from "./Answer";
import NoAnswer from "./NoAnswer";
import MyEditor from "../InputBox/MyEditor";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Router from "next/router";

function QuestionPage({ slug, questionData, answersData }) {
  // console.log(answersData);
  questionData = JSON.parse(questionData);
  answersData = JSON.parse(answersData);

  const [answer, setAnswer] = useState("");

  console.log(questionData);

  return (
    <div className="mx-96 pr-64 font-display">
      <div className="mt-10">
        <Question data={JSON.stringify(questionData)} />
      </div>
      <div className="mb-6 mt-12">
        {answersData.length ? (
          answersData.map((answer) => (
            <Answer
              data={JSON.stringify(answer)}
              key={answer.answerId}
            />
          ))
        ) : (
          <NoAnswer />
        )}
      </div>
      <section id="answer-section">
        <div className="mt-6 px-2">
          <h1 className="text-xl mb-4 px-1 font-medium ">
            Your Answer
          </h1>
          <MyEditor minHeight="12rem" setData={setAnswer} />
          <div className="flex justify-end">
            <button
              onClick={(e) =>
                submitAnswer(
                  questionData.questionId,
                  answer
                )
              }
              className="border hover:bg-blue-500 bg-blue-600 font-medium text-white hover:shadow-lg py-2 px-4 rounded-sm my-4"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

async function submitAnswer(questionId, answerBody) {
  // const username = Cookies.get("username");

  await axios
    .post(
      process.env.serverUrl + "answers",
      {
        answerBody: answerBody,
        questionId: questionId,
      },
      { withCredentials: true }
    )
    .then((res) => {
      Router.reload();
    })
    .catch((err) => {
      alert("Error Occurred");
    });
}

export default QuestionPage;
