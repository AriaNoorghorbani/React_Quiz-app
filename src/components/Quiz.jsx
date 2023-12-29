import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import completeImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const questionIsComplete = activeQuestionIndex === QUESTIONS.length;

  //

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("selected");

      setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);

      setTimeout(() => {
        console.log(selectedAnswer);
        console.log(QUESTIONS[activeQuestionIndex].answers[0]);
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        console.log(answerState);
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  //

  if (questionIsComplete) {
    return (
      <div id="summary">
        <img src={completeImg} alt="Complete Image" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const answerShuffled = QUESTIONS[activeQuestionIndex].answers;
  answerShuffled.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div className="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout="10000"
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {answerShuffled.map((answer) => {
            const answered = userAnswers[userAnswers.length - 1] === answer;
            let setClass = "";

            if (answerState === "selected" && answered) {
              setClass = "selected";
            }

            if (answerState === "correct" && answered) {
              setClass = "correct";
            }
            if (answerState === "wrong" && answered) {
              setClass = "wrong";
            }

            console.log(answerState);
            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={setClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
