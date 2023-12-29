import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  text,
  answers,
  userAnswer,
  answerState,
  onSelect,
  onSkip,
}) {
  return (
    <div className="question">
      <QuestionTimer timeout="10000" onTimeout={onSkip} />
      <h2>{text}</h2>
      <Answers
        answers={answers}
        selectedAnswers={userAnswer}
        answerState={answerState}
        onSelect={onSelect}
      />
    </div>
  );
}
