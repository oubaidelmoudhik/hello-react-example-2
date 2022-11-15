import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let counter = 0;

function show() {
  counter++;
  const el = <h1>The counter is now: {counter}</h1>;
  ReactDOM.render(el, document.getElementById('root'));
}

do {
  setInterval(show, 1000);
} while (counter < 11);
