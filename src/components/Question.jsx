import { useState } from "react";

import QUESTIONS from "../questions";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({ onSkipAnswer, index, onSelectAnswer }) {
  const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });
  let answerState = "";

  function handleSelectAnswer(answer) {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  if (answer.selectedAnswer && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div className="question">
      <QuestionTimer timeout="10000" onTimeout={onSkipAnswer} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        index={index}
        answers={QUESTIONS[index].answers}
        selectedAnswers={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
