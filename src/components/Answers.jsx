import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswers,
  answerState,
  onSelect,
}) {
  const answerShuffled = useRef();

  if (!answerShuffled.current) {
    answerShuffled.current = [...answers];
    answerShuffled.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {answerShuffled.current.map((answer) => {
        const isSelected = selectedAnswers === answer;
        let setClass = "";

        if (answerState === "answered" && isSelected) {
          setClass = "selected";
        }

        if (
          (answerState === "wrong" || answerState === "correct") &&
          isSelected
        ) {
          setClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={setClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
