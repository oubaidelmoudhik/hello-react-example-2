import React, { useState } from 'react';

function Hooks() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Hooks;
