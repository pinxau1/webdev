import { useState, useEffect } from "react";

function App() {
  return <Counter initialCount={0} />;
}

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [sideEffectCount, setSideEffectCount] = useState(0);

  useEffect(() => {
    setSideEffectCount((prev) => prev + 1);
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <h3>Side Effect Count: {sideEffectCount}</h3>
    </div>
  );
}

export default App;
