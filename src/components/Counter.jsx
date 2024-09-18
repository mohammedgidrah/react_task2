import React, { useState, useEffect } from "react";
import { SiCounterstrike } from "react-icons/si";

const CounterDisplay = ({ count, setCount }) => {
  return (
    <div>
      <h6>Counter</h6>
      <p>
        <SiCounterstrike />: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment the count</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement the count</button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>Reset the count</button>
    </div>
  );
};

const Counter = () => {
  const [showCounter, setShowCounter] = useState();  
  const [count, setCount] = useState(0);  

   useEffect(() => {
    if (showCounter) {
      document.title = `You clicked ${count} times`;
    } else {
      document.title = "Counter Hidden";
    }
  }, [showCounter, count]);

  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <CounterDisplay count={count} setCount={setCount} />}
      <h1>Counter</h1>
    </div>
  );
};

export default Counter;
