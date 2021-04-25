import Question from "./Question";
import Answer from "./Answer";
import NoAnswer from "./NoAnswer";
import MyEditor from "../InputBox/MyEditor";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";

function QuestionPage({ slug, questionData, answersData }) {
  // console.log(answersData);
  questionData = JSON.parse(questionData);
  answersData = JSON.parse(answersData);

  const [answer, setAnswer] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(Cookies.get("username"));
  }, []);

  return (
    <div className="mx-96 pr-64 font-display">
      <div className="mt-10 mb-14">
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
      <section id="answer-section" className="relative">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 z-10"
          hidden={isLogin ? true : false}
        >
          <h1 className="text-2xl font-semibold dark:text-dark-text">
            You need to login in order to Answer
          </h1>
          <div className="flex justify-center">
            <Link href="/login">
              <button className="text-2xl transform hover:scale-110 bg-gradient-to-br from-primary via-secondary to-danger rounded-sm text-white px-8 py-2 my-4">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div
          className={
            "mt-6 px-2 " +
            (isLogin
              ? ""
              : " filter blur-md pointer-events-none ")
          }
        >
          <h1 className="text-xl mb-4 px-1 font-medium dark:text-dark-text">
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
              className=" bg-gradient-to-br from-primary via-secondary to-danger font-medium text-white hover:shadow-2xl py-2 px-4 rounded-sm my-4 transform hover:scale-110"
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
