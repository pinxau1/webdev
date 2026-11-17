import { useState, useEffect } from "react";

export default function CurrentTask({ details, func }) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((ct) => ct + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <h3>{details.task.title}</h3>
      <p>Elapsed time: {seconds} seconds</p>
      <button onClick={() => func(seconds, details.setter)}>
        Mark complete
      </button>
    </>
  );
}
