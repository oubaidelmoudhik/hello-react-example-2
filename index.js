import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// let counter = 0;
/*function show() {
  counter++;
  const el = <h1>The counter is now: {counter}</h1>;
  ReactDOM.render(el, document.getElementById('root'));
}
setInterval(show, 1000);*/
//-------------------------------------------------------------------------

//---------Creating a functional component:
/*function Hello(props) {
  return <h1>Hello {props.name}!</h1>;
}
function App() {
  return (
    <div>
      <Hello name="Oubaid" />
      <Hello name="el" />
      <Hello name="moudhik" />
    </div>
  );
}*/

//---------Creating a class component:
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello {this.props.name}!</h1>;
//   }
// }

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <p>
          <b>Name: </b> {this.props.name}
        </p>
        <p>
          <b>Price: </b>
          {this.props.price}
        </p>
      </div>
    );
  }
}
class ShoppingList extends React.Component {
  render() {
    return (
      <div class="list">
        <Item name="Baytat" price="45Dh" />
        <Item name="Atay" price="22Dh" />
        <Item name="Djaj" price="50Dh" />
      </div>
    );
  }
}

const el = <ShoppingList />;
const myRoot = document.getElementById('root');

ReactDOM.render(el, myRoot);
