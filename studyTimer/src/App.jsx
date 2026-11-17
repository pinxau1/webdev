import { useState, useEffect } from "react";
import Button from "./Button";
import CurrentTask from "./CurrentTask";

function App() {
  function finished(seconds, setter) {
    if (taskNum < 3) {
      setTaskNum((prev) => prev + 1);
      setter((prev) => ({ ...prev, status: "completed", finalCount: seconds }));
      setActive((smt) => null);
    }
  }
  const [task1, setTask1] = useState({
    title: "Review React notes",
    status: "pending",
    finalCount: -1,
  });
  const [task2, setTask2] = useState({
    title: "Practice passing props",
    status: "pending",
    finalCount: -1,
  });
  const [task3, setTask3] = useState({
    title: "Build a count component",
    status: "pending",
    finalCount: -1,
  });
  const [taskNum, setTaskNum] = useState(0);
  const [active, setActive] = useState(null);
  console.log(active);
  return (
    <>
      <h1>Study Timer</h1>
      <h2>Study tasks</h2>
      <p>{taskNum} of 3 tasks complete</p>
      <progress value={taskNum} max="3"></progress>

      <ul>
        <li>
          <Button
            task={task1}
            setter={setTask1}
            globalActive={active}
            globalSetActive={setActive}
          />
        </li>
        <li>
          <Button
            task={task2}
            setter={setTask2}
            globalActive={active}
            globalSetActive={setActive}
          />
        </li>
        <li>
          <Button
            task={task3}
            setter={setTask3}
            globalActive={active}
            globalSetActive={setActive}
          />
        </li>
      </ul>
      <h2>Current Tasks</h2>
      {active !== null && <CurrentTask details={active} func={finished} />}
    </>
  );
}

export default App;
