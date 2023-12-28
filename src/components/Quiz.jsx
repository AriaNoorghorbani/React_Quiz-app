import { useState } from "react";
import QUESTIONS from "../questions";
import completeImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const questionIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
  }

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
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {answerShuffled.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
