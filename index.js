import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

// ReactDOM.render(<ShoppingList />, document.getElementById('root'));
const el = <App />;
const myRoot = document.getElementById('root');

ReactDOM.render(el, myRoot);
