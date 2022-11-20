import React, { useState, useEffect } from 'react';

function Hooks() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log('num of clicks: ' + counter);
  // });
  const [val, setVal] = useState('ON');

  function increment() {
    setVal(val == 'ON' ? 'OFF' : 'ON');
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>{val}</button>
    </div>
  );
}

export default Hooks;
