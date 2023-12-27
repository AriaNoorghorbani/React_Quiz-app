import { useState } from "react";

export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  return <p>The current question </p>;
}
