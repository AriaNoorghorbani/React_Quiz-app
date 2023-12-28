import { useEffect, useState } from "react";

export default function ProgressBar({ timeout, onTimeout }) {
  const [remainTime, setRemainTime] = useState(timeout);

  useEffect(() => {
    console.log("TimeOut");
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("Interval");
    setInterval(() => {
      setRemainTime((prevTime) => prevTime - 50);
    }, 50);
  }, []);

  return <progress max={timeout} value={remainTime}></progress>;
}
